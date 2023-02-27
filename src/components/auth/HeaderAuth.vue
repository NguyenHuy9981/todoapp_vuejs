<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto right">
          <li v-show="!getUserAuthed" class="nav-item ml-3 mr-3 distance">
            <router-link :to="{ name: 'Login' }">Đăng nhập</router-link>
          </li>
          <li v-show="!getUserAuthed" >
            <router-link :to="{ name: 'Register' }">Đăng kí</router-link>
          </li>
        </ul>
        <li v-show="getUserAuthed" class="nav-item dropdown">
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
          <div class="dropdown-menu mr-3" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="logout()">Đăng xuất</a>
          </div>
        </li>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    logout() {
      this.UserLogout();
      this.$router.push({ name: 'Login' });
    },
  },
  created() {
    this.UserInfo();
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
