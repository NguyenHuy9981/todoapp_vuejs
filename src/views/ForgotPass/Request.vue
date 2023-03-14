<template>
  <div class="col-md-6 mx-3">
    <label>Nhập Email để nhận mã xác thực</label>

    <b-form-input
      v-model="form.email"
    />
    <div
      class="text-danger"
    >
      {{ errorMsg }}
    </div>
    <b-button
      class="mt-4"
      variant="success"
      @click="forgotPass()"
    >
      Submit
    </b-button>

    <a
      v-if="urlVerify"
      :href="urlVerify"
    >
      {{ urlVerify }}
    </a>
  </div>
</template>

<script>
import apiAuth from '../../api/auth';

export default {
  name: 'ForgotPass',
  data() {
    return {
      form: {
        email: '',
      },
      errorMsg: '',
      token: '',
    };
  },
  methods: {
    async forgotPass() {
      const result = await apiAuth.forgotPassRequest(this.form);
      if (result.success) {
        this.token = result.data.token;
      } else {
        this.errorMsg = result.message;
      }
    },
  },
  computed: {
    urlVerify() {
      return (this.token) ? this.getQueryUrl('verifyPass', {
        token: this.token,
      }) : '';
    },
  },
};
</script>
