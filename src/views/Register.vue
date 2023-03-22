<template>
  <el-form
    ref="form"
    :model="form"
    label-width="120px"
  >
    <el-row>
      <el-col
        :span="12"
        :offset="5"
      >
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
