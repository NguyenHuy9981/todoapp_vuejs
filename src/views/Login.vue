<template>
  <el-form
    :model="form"
  >
    <el-row>
      <el-col>
        <el-form-item
          label="Email"
        >
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input
            v-model="form.password"
            type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="login()"
          >
            Đăng nhập
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
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
