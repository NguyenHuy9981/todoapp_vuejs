<template>
  <div class="col-md-6 mx-3">
    <div v-if="isVerified">
      <label>Nhập mật khẩu mới</label>
      <b-form-input
        v-model="form.password"
        type="password"
      />
      <b-button
        class="mt-4"
        variant="success"
        :disabled="!form.password "
        @click="resetPass()"
      >
        Submit
      </b-button>
    </div>

    <div
      v-if="!isVerified"
      class="text-danger"
    >
      Mã xác minh không hợp lệ
    </div>
  </div>
</template>

<script>
import apiAuth from '../../api/auth';

export default {
  name: 'ForgotPass',
  data() {
    return {
      data: {
        token: this.$route.query.token,
      },
      isVerified: false,
      form: {
        password: '',
        token: '',
      },
    };
  },
  methods: {
    async checkToken() {
      const result = await apiAuth.checkTokenRequest(this.data);
      if (result.success) {
        this.isVerified = true;
      }
    },

    async resetPass() {
      this.form.token = this.data.token;
      console.log(this.form);
      const result = await apiAuth.forgotPassVerify(this.form);
      console.log(result.success);
      if (result.success) {
        this.RouterTo('login');
      }
    },
  },
  computed: {

  },
  created() {
    try {
      this.checkToken();
    } catch (error) {
      console.log('Loi');
    }
  },
};
</script>
