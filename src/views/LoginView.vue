<template>
  <div class="login">
    <div class="materialContainer">
      <form @submit.prevent="login()" class="box">
        <div class="title">ĐĂNG NHẬP</div>

        <div class="input">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            v-model="form.email"
          />
        </div>

        <div class="input">
          <input
            type="password"
            name="pass"
            id="pass"
            placeholder="Password"
            v-model="form.password"
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
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      try {
        await this.UserLogin(this.form);
        this.$router.push({ name: 'Me' });
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
