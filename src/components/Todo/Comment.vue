<!-- <template>
  <div>
    <div class="container justify-content-center mt-5 border-left border-right">
      <div class="d-flex justify-content-center pt-3 pb-2">
        <input
          v-model="text"
          type="text"
          placeholder="Comment"
          class="form-control"
          @keyup.enter="postComment"
        >
      </div>
      <div
        v-for="(comment) in getCommentList"
        :key="comment._id"
        class="d-flex justify-content-center py-2"
      >
        <div class="second py-2 px-2">
          <span class="text1">
            {{ comment.content }}
          </span>
          <div class="d-flex justify-content-between py-1 pt-2">
            <div>
              <img
                src="https://i.imgur.com/AgAC1Is.jpg"
                width="18"
              ><span class="text2">Martha</span>
            </div>
            <div>
              <a
                class="text-center"
                @click="deleteComment(comment._id)"
              >
                <span class="fa fa-trash" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->
<template>
  <el-card class="box-card">
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
        <el-row>
          <el-col
            :span="16"
            class="mt-4 grid-content bg-purple-light"
          >
            <span> {{ comment.content }}</span>
          </el-col>
          <el-col :span="4">
            <el-button
              class="mt-4 ml-2"
              size="medium"
              type="danger"
              plain
              @click="deleteComment(comment._id)"
            >
              Xóa
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-row>
  </el-card>
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
