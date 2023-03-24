<template>
  <div class="header">
    <el-menu
      :default-active="activeMenu"
      mode="horizontal"
    >
      <el-menu-item index="todo">
        <router-link :to="getRouterPath('todo')">
          Todo App
        </router-link>
      </el-menu-item>
      <el-submenu
        v-if="getUserAuthed"
        index="user"
      >
        <template #title>
          Xin chào
        </template>
        <el-menu-item>
          Đổi mật khẩu
        </el-menu-item>
        <el-menu-item @click=" logout()">
          Đăng xuất
        </el-menu-item>
      </el-submenu>
      <el-menu-item
        v-if="!getUserAuthed"
        index="register"
      >
        <router-link :to="getRouterPath('register')">
          Đăng kí
        </router-link>
      </el-menu-item>
      <el-menu-item
        v-if="!getUserAuthed"
        index="login"
      >
        <router-link :to="getRouterPath('login')">
          Đăng nhập
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NavMenu',
  data() {
    return {
      activeMenu: 'todo',
    };
  },
  methods: {
    ...mapActions(['setLang']),
    async changeLang(value) {
      await this.setLang(value);
    },
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

<style scoped lang="scss">
.right {
  margin-left: 1190px;
};
.distance  {
  margin-right: 14px;
}
</style>
