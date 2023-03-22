<template>
  <el-form
    ref="form"
    :model="form"
  >
    <el-row>
      <el-col>
        <el-form-item
          label="Name"
        >
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item
          label="Email"
        >
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item
          label="Password"
        >
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="register()"
          >
            Đăng kí
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RegisterIndex',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(['UserRegister']),
    async register() {
      try {
        await this.UserRegister(this.form);
        this.$message({
          message: this.$t('REGISTER_SUCCESS'),
          type: 'success',
        });
        this.RouterTo('login');
      } catch (error) {

      }
    },
  },
};
</script>
