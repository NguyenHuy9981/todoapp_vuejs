<template>
  <div class="login">
    <div class="materialContainer">
      <form
        class="box"
        @submit.prevent="login()"
      >
        <div class="title">
          ĐĂNG NHẬP
        </div>

        <div class="input">
          <input
            id="email"
            v-model="form.email"
            type="text"
            name="email"
            placeholder="Email"
          >
        </div>

        <div class="input">
          <input
            id="pass"
            v-model="form.password"
            type="password"
            name="pass"
            placeholder="Password"
          >
        </div>

        <div class="button login">
          <button type="submit">
            <span>GO</span> <i class="fa fa-check" />
          </button>
        </div>

        <a
          href=""
          class="pass-forgot"
          @click="RouterTo('forgotPass')"
        >Forgot your password?</a>
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
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(['UserLogin']),
    async login() {
      try {
        await this.UserLogin(this.form);
        this.RouterTo('me');
      } catch (error) {
        console.error(error);
        console.log('Lỗi');
      }
    },

  },
};
</script>

<style lang="scss" scoped>
  @import '@/styles/login.scss';
</style>
