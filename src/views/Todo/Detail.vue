<template>
  <div style="padding-bottom: 100px;">
      <div>
        <label for="">Tiêu đề</label>
        <div class="row">
          <div class="col-md-6 mt-3">
            <label for="">Tiêu đề</label>
            <b-form-input id="input-2" v-model="getTodoDetail.name" >
            </b-form-input>
          </div>
          <div class="col-md-6 mt-3">
            <label for="">Mô tả</label>
            <b-form-textarea id="input-2" v-model="getTodoDetail.description" >
            </b-form-textarea>
          </div>
          <div class="col-md-6 mt-3">
            <label for="example-datepicker">Ngay len lich</label>
            <b-form-datepicker
              v-model="getTodoDetail.processingDay"
              class="mb-2">
            </b-form-datepicker>
          </div>
        </div>
      </div>

      <div>
        <comment-box :todoId="id"/>
      </div>
      <div>
        <File :todoId="id"/>
      </div>

  </div>
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
      },
    };
  },
  computed: {
    ...mapGetters(['getTodoDetail']),
  },
  methods: {
    ...mapActions(['TodoGetId']),
    async getDetail() {
      try {
        const result = await this.TodoGetId(this.id);
        if (!result.data) {
          throw new Error('TODO_EMPTY');
        }
      } catch (error) {
        this.RouterTo('notFound');
      }
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
