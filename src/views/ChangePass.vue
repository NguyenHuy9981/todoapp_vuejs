<template>
  <div class="login">
    <div class="materialContainer">
      <form @submit.prevent="changePass()" class="box">
        <div class="title">ĐỔI MẬT KHẨU</div>

          <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error,index) in errors" :key="index">{{ error }} </li>
        </ul>
      </p>
          <div class="input">
          <input
            type="password"
            name="oldPass"
            placeholder="Nhập mật khẩu cũ"
            v-model="form.oldPass"
          />
        </div>

        <div class="input">
          <input
            type="password"
            name="newPass"
            placeholder="Mật khẩu mới"
            v-model="form.newPass"
          />
        </div>

        <div class="button login">
          <button type="submit">
            <span>GO</span> <i class="fa fa-check"></i>
          </button>
        </div>

        <a href="" class="pass-forgot">Forgot your password?</a>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginIndex',
  data() {
    return {
      errors: [],
      form: {
        oldPass: '',
        newPass: '',
      },
    };
  },
  methods: {
    ...mapActions(['UserchangePass']),

    checkForm() {
      this.errors = [];

      if (!this.form.oldPass) {
        this.errors.push('Mật khẩu cũ không được để trống');
      }
      if (!this.form.newPass) {
        this.errors.push('Mật khẩu mới không được để trống');
      }
    },

    async changePass(e) {
      try {
        this.checkForm(e);
        console.log('haha');
        this.UserchangePass(this.form);

        this.RouterTo('me');
      } catch (error) {
        console.error(error);
        console.log('Lỗi');
      }
    },
  },
};
</script>

<style>
  @import '@/styles/login.scss';
</style>
