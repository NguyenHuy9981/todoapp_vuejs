<template>
  <div>
    <div class="container justify-content-center mt-5 border-left border-right">
      <div class="d-flex justify-content-center pt-3 pb-2">
        <input type="text" placeholder="Comment" class="form-control"
           v-model="text"
          @keyup.enter="postComment" >
      </div>
      <div class="d-flex justify-content-center py-2"
        v-for="(comment) in getCommentList" :key="comment._id">
          <div class="second py-2 px-2">
            <span class="text1">
              {{ comment.content }}
            </span>
              <div class="d-flex justify-content-between py-1 pt-2" >
                  <div><img src="https://i.imgur.com/AgAC1Is.jpg" width="18"><span class="text2">Martha</span></div>
                  <div><span class="text3">Upvote?</span><span class="thumbup">
                    <i class="fa fa-thumbs-o-up"></i></span><span class="text4">3</span></div>
              </div>
          </div>
      </div>
    </div>
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
      text: '',
    };
  },
  computed: {
    ...mapGetters(['getCommentList']),
  },
  methods: {
    ...mapActions(['TodoListComment', 'TodoCreateComment']),
    getComment() {
      console.log(this.todoId);

      this.TodoListComment(this.todoId);
    },
    postComment() {
      const newData = {
        'jobId': this.todoId,
        'data':
        {
          content: this.text,
        },
      };
      this.TodoCreateComment(newData);
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
