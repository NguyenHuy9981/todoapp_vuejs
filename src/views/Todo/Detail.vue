<template>
  <div>
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

        <!-- Tai len file  => Component => File => (Dang file & List file)
        Comment  => Component => Comment => (DaANG COMMENT & lIST COMMENT) -->

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TodoDetail',
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
    getDetail() {
      this.TodoGetId(this.id);
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
