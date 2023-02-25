<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto right">
          <li v-show="user.length == 0" class="nav-item ml-3 mr-3 distance">
            <router-link :to="{ name: 'Login' }">Đăng nhập</router-link>
          </li>
          <li v-show="user.length == 0" >
            <router-link :to="{ name: 'Register' }">Đăng kí</router-link>
          </li>
        </ul>
        <li v-show="user.length !== 0" class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href=""
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ user.name }}
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
import axios from "axios";
import authHeader from "../../auth-header";

export default {
  data() {
    return {
      user: [],
    };
  },

  created() {
    axios
      .get("http://localhost:3000/me", { headers: authHeader() })
      .then((response) => {
        console.warn(response);
        this.user = response.data.user;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  methods: {
    logout() {
      localStorage.removeItem("token");

      this.$router.push({ name: "Login" });
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
