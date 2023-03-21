<template>
  <div class="login">
    <div class="materialContainer">
      <form
        class="box"
        @submit.prevent="changePass()"
      >
        <div class="title">
          {{ $t("CHANGE_PASSWORD") }}
        </div>

        <div class="input">
          <input
            v-model="form.oldPass"
            type="password"
            name="oldPass"
            placeholder="Nhập mật khẩu cũ"
          >
        </div>

        <div class="input">
          <input
            v-model="form.newPass"
            type="password"
            name="newPass"
            placeholder="Mật khẩu mới"
          >
        </div>

        <div class="button login">
          <button
            type="submit"
            :disabled="!form.newPass || !form.oldPass"
          >
            <span>GO</span> <i class="fa fa-check" />
          </button>
        </div>
        <div class="text-danger">
          {{ errorMsg }}
        </div>
        <a
          href=""
          class="pass-forgot"
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
      errorMsg: '',
      form: {
        oldPass: '',
        newPass: '',
      },
    };
  },
  methods: {
    ...mapActions(['UserchangePass']),

    async changePass() {
      try {
        const result = await this.UserchangePass(this.form);
        if (!result.success) {
          this.errorMsg = result.message;
        } else {
          this.UserLogout();
          this.RouterTo('me');
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/styles/login.scss';
</style>
