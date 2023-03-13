<template>
  <div class="col-md-6 mx-3">
    <label>Nhập Email</label>
    <div
      v-if="data.token"
      class="text-success"
    >
      Mã token: {{ data.token }}
    </div>
    <b-form-input
      v-model="form.email"
    />
    <b-button
      class="mt-4"
      variant="success"
      @click="forgotPass()"
    >
      Submit
    </b-button>
    <b-form-input
      v-model="data.token"
      class="mt-4"
    />
    <b-button
      class="mt-3"
      variant="success"
      @click="checkToken()"
    >
      Submit
    </b-button>
    <div class="text-danger">
      {{ errorMsg }}
    </div>
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
      data: {
        token: '',
      },
      errorMsg: '',

    };
  },
  methods: {
    async forgotPass() {
      const result = await apiAuth.forgotPassRequest(this.form);
      this.data.token = result.data.token;
    },

    async checkToken() {
      const isToken = await apiAuth.checkTokenRequest(this.data);
      if (!isToken.success) {
        this.errorMsg = isToken.message;
      } else {
        this.RouterTo('login');
      }
    },
  },
};
</script>
