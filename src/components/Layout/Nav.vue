<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span
        v-if="getUserAuthed"
        class="ml-5"
      >
        <router-link :to="getRouterPath('todo')">Todo App</router-link>
      </span>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav ml-auto right">
          <li
            v-if="!getUserAuthed"
            class="nav-item ml-3 mr-3 distance"
          >
            <router-link :to="getRouterPath('login')">
              Đăng nhập
            </router-link>
          </li>
          <li
            v-if="!getUserAuthed"
            class="nav-item ml-3 mr-3 distance"
          >
            <router-link :to="getRouterPath('register')">
              Đăng kí
            </router-link>
          </li>
          <li
            v-show="getUserAuthed"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              href=""
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ getUserName }}
            </a>
            <div
              class="dropdown-menu mr-3"
              aria-labelledby="navbarDropdown"
            >
              <a
                class="dropdown-item"
                href="#"
                @click="changePass()"
              >Đổi mật khẩu</a>
              <div class="dropdown-divider" />
              <a
                class="dropdown-item"
                href="#"
                @click="logout()"
              >Đăng xuất</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'HeaderAuth',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    logout() {
      this.UserLogout();
      this.RouterTo('login');
    },
    changePass() {
      this.RouterTo('changePass');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.right {
  margin-left: 1190px;
};
.distance  {
  margin-right: 14px;
}
</style>
