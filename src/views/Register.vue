<template>
  <div class="register">
    <div class="materialContainer">
      <b-alert
              :show="dismissCountDown"
              dismissible
              fade
              variant="warning"
              @dismiss-count-down="countDownChanged"
            >
              This alert will dismiss after {{ dismissCountDown }} seconds...
            </b-alert>
      <form @submit.prevent="register()" class="box">
        <div class="title">ĐĂNG KÍ</div>

        <div class="input">
          <input
            type="text"
            name="name"
            v-model="user.name"
            id="name"
            placeholder="Tên"
          />
        </div>

        <div class="input">
          <input
            type="email"
            name="email"
            v-model="user.email"
            id="email"
            placeholder="Email"
          />
        </div>

        <div class="input">
          <input
            type="password"
            name="password"
            v-model="user.password"
            id="pass"
            placeholder="Password"
          />
          <span class="spin"></span>
        </div>

        <div class="button login">
          <b-button type="submit" >
            <span>GO</span> <i class="fa fa-check"></i>
          </b-button>
          <b-modal ref="my-modal" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
              <h3>Tạo tài khoản thành công</h3>
            </div>
            <div class="alert"><b-button class="mt-2 " variant="success"
            block @click="toggleModal">Đăng nhập</b-button></div>

          </b-modal>
        </div>

        <a href="" class="pass-forgot">Forgot your password?</a>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RegisterIndex',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
    };
  },

  methods: {
    showModal() {
      this.$refs['my-modal'].show();
    },
    toggleModal() {
      this.$router.push({ name: 'Login' });
    },

    ...mapActions(['UserRegister']),
    async register() {
      try {
        await this.UserRegister(this.user);
        this.showModal();
      } catch (error) {
        console.log('Loi');
      }
    },
  },
};
</script>

<style>
  @import '@/styles/login.scss';
</style>
