<!-- <template>
  <div style="padding-bottom: 100px;">
    <div>
      <label for="">Tiêu đề</label>
      <div class="row">
        <div class="col-md-6 mt-3">
          <label for="">Tiêu đề</label>
          <b-form-input
            id="input-2"
            v-model="getTodoDetail.name"
          />
        </div>
        <div class="col-md-6 mt-3">
          <label for="">Mô tả</label>
          <b-form-textarea
            id="input-2"
            v-model="getTodoDetail.description"
          />
        </div>
        <div class="col-md-6 mt-3">
          <label for="example-datepicker">Ngay len lich</label>
          <b-form-datepicker
            v-model="getTodoDetail.processingDay"
            class="mb-2"
          />
        </div>
      </div>
    </div>

    <div>
      <comment-box :todo-id="id" />
    </div>
    <div>
      <File :todo-id="id" />
    </div>
  </div>
</template> -->

<template>
  <el-form
    :model="form"
  >
    <el-row>
      <el-col
        :span="12"
      >
        <el-form-item
          label="Tiêu đề:"
        >
          <el-input v-model="form.name" />
        </el-form-item>
      </el-col>
      <el-col :span="16">
        <el-form-item
          label="Mô tả:"
        >
          <el-input
            v-model="form.description"
            type="textarea"
          />
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item
          prop="date1"
          label="Ngày thực hiện:"
        >
          <el-date-picker
            v-model="form.processingDay"
            type="date"
            placeholder="Pick a date"
            style="width: 100%;"
          />
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item label="Chọn trạng thái:">
          <el-radio-group v-model="form.radio">
            <el-radio
              label="unfulfilled"
            >
              Unfulfilled
            </el-radio>
            <el-radio
              label="processing"
            >
              Processing
            </el-radio>
            <el-radio
              label="done"
            >
              Done
            </el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col>
        <comment-box :todo-id="id" />
      </el-col>
      <el-col>
        <File :todo-id="id" />
      </el-col>
      <el-col>
        <el-form-item>
          <el-button
            class="mt-5"
            type="primary"
            @click="UpdateDetail "
          >
            Cập nhật
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Comment from '../../components/Todo/Comment.vue';
import File from '../../components/Todo/File.vue';

export default {
  name: 'TodoDetail',
  components: {
    'comment-box': Comment,
    File,
  },
  data() {
    return {
      id: this.$route.params.id,
      form: {
        name: '',
        description: '',
        processingDay: '',
        radio: 'done',

      },
    };
  },
  computed: {
    ...mapGetters(['getTodoDetail']),
  },
  methods: {
    ...mapActions(['TodoGetId', 'TodoUpdate']),
    async getDetail() {
      try {
        const result = await this.TodoGetId(this.id);

        this.form.name = result.data.name;
        this.form.description = result.data.description;
        this.form.processingDay = result.data.processingDay;
        this.form.radio = result.data.status;

        if (!result.data) {
          throw new Error('TODO_EMPTY');
        }
      } catch (error) {
        this.RouterTo('notFound');
      }
    },
    async UpdateDetail() {
      await this.TodoUpdate({
        id: this.id,
        update: this.form,
      });
      this.RouterTo('todo');
    },
  },
  created() {
    try {
      this.getDetail();
    } catch (error) {
      console.log('Loi');
    }
  },
};
</script>
<style scoped>

</style>
