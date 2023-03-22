<template>
  <div class="header">
    <el-menu
      :default-active="activeMenu"
      mode="horizontal"
      @select="onChangeMenu"
    >
      <el-menu-item
        v-for="item in listMenu"
        v-if="item.show"
        :key="item.key"
        :index="item.key"
      >
        <span>{{ item.label }}</span>
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
    onChangeMenu(key) {
      const menu = this.listMenu.find((item) => item.key === key);
      if (menu.to) {
        this.RouterTo(menu.to);
      }
    },
  },
  computed: {
    listMenu() {
      return [{
        label: 'TodoApp',
        key: 'todo',
        show: true,
        to: 'todo',
      }, {
        label: 'Tai khoan',
        key: 'user',
        show: this.getUserAuthed,
        to: '',
      }, {
        label: 'Dang nhap',
        key: 'login',
        show: !this.getUserAuthed,
        to: 'login',
      }, {
        label: 'Dang ki',
        key: 'register',
        show: !this.getUserAuthed,
        to: 'register',
      }];
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
