<!-- <template>
  <div>
    <div>
      <form
        class="box"
        @submit.prevent="register()"
      >
        <div class="title">
          {{ $t("REGISTER") }}
        </div>

        <div class="input">
          <input
            id="name"
            v-model="form.name"
            type="text"
            name="name"
            placeholder="Tên"
          >
        </div>

        <div class="input">
          <input
            id="email"
            v-model="form.email"
            type="email"
            name="email"
            placeholder="Email"
          >
        </div>

        <div class="input">
          <input
            v-model="form.password"
            type="password"
            name="password"
            placeholder="Password"
          >
          <span class="spin" />
        </div>

        <div class="button login">
          <b-button
            type="submit"
            @click="register()"
          >
            <span>GO</span> <i class="fa fa-check" />
          </b-button>
          <b-modal
            ref="my-modal"
            hide-footer
            title="Using Component Methods"
          >
            <div class="alert">
              <b-button
                class="mt-2 "
                variant="success"
                block
                @click="toggleModal"
              >
                {{ $t("LOGIN") }}
              </b-button>
            </div>
          </b-modal>
        </div>
      </form>
    </div>
  </div>
</template> -->

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

<style lang="scss" scoped>
  @import '@/styles/login.scss';
</style>
