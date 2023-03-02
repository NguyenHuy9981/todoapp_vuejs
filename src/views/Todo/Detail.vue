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

      <div>
        <comment-box :todoId="id" />
      </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Comment from '../../components/Todo/Comment.vue';

export default {
  name: 'TodoDetail',
  components: {
    'comment-box': Comment,
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
<style scoped>
body{
background-color: #fff;
}
.container{
background-color: #eef2f5;
width: 400px;
}
.addtxt{
padding-top: 10px;
padding-bottom: 10px;
text-align: center;
font-size: 13px;
width: 350px;
background-color: #e5e8ed;
font-weight: 500;
}
.form-control focus{
color: #000;
}
.second{
width: 350px;
background-color: white;
border-radius: 4px;
box-shadow: 10px 10px 5px #aaaaaa;
}
.text1{
font-size: 13px;
    font-weight: 500;
    color: #56575b;
}
.text2{
font-size: 13px;
    font-weight: 500;
    margin-left: 6px;
    color: #56575b;
}
.text3{
font-size: 13px;
    font-weight: 500;
    margin-right: 4px;
    color: #828386;
}
.text3o{
color: #00a5f4;

}
.text4{
font-size: 13px;
  font-weight: 500;
  color: #828386;
}
.text4i{
color: #00a5f4;
}
.text4o{
color: white;
}
.thumbup{
font-size: 13px;
    font-weight: 500;
    margin-right: 5px;
}
.thumbupo{
color: #17a2b8;
}
</style>
