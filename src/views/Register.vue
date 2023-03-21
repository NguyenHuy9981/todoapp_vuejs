<template>
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
            v-model="user.name"
            type="text"
            name="name"
            placeholder="Tên"
          >
        </div>

        <div class="input">
          <input
            id="email"
            v-model="user.email"
            type="email"
            name="email"
            placeholder="Email"
          >
        </div>

        <div class="input">
          <input
            id="pass"
            v-model="user.password"
            type="password"
            name="password"
            placeholder="Password"
          >
          <span class="spin" />
        </div>

        <div class="button login">
          <b-button type="submit">
            <span>GO</span> <i class="fa fa-check" />
          </b-button>
          <b-modal
            ref="my-modal"
            hide-footer
            title="Using Component Methods"
          >
            <div class="d-block text-center">
              <h3>{{ $t("ACCOUNT_SUCCESSFULLY_CREATED") }}</h3>
            </div>
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
      this.RouterTo('login');
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

<style lang="scss" scoped>
  @import '@/styles/login.scss';
</style>
