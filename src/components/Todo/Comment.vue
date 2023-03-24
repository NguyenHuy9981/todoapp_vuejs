<template>
  <div>
    <h3 class="mb-3">
      Comment:
    </h3>
    <el-row>
      <el-form
        :model="form"
      >
        <el-row>
          <el-col>
            <el-form-item>
              <el-input v-model="form.comment" />
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                :loading="btnLoading"
                :disabled="btnLoading"
                @click="postComment"
              >
                Thêm
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div
        v-for="(comment) in getCommentList"
        :key="comment._id"
      >
        <el-row
          :gutter="20"
          class="mt-4"
        >
          <el-col
            :span="24"
            class="p-2 grid-content bg-purple-light"
          >
            <span> {{ comment.content }}</span>
            <span class="float-right">
              <small>{{ comment.createdAt | formatDate }}</small>
              <el-button
                class="ml-2"
                size="mini"
                type="danger"
                plain
                @click="deleteComment(comment._id)"
              >
                Xóa
              </el-button>
            </span>
          </el-col>
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TodoComment',
  props: {
    todoId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      list: [],
      form: {
        comment: '',
      },
      btnLoading: false,
    };
  },
  computed: {
    ...mapGetters(['getCommentList']),
  },
  methods: {
    ...mapActions(['TodoListComment', 'TodoCreateComment', 'TodoDeleteComment']),
    getComment() {
      this.TodoListComment(this.todoId);
    },
    async postComment() {
      this.btnLoading = true;
      const newData = {
        'jobId': this.todoId,
        'data': {
          content: this.form.comment,
        },
      };
      await this.TodoCreateComment(newData);
      this.btnLoading = false;
      this.form.comment = '';
    },
    deleteComment(commentId) {
      this.TodoDeleteComment(commentId);
    },
  },
  created() {
    try {
      this.getComment();
    } catch (error) {
      console.log('Lỗi');
    }
  },
};
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;

  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }

  h3 {
  font-weight: bold;
  font-size: medium;
  }
</style>
