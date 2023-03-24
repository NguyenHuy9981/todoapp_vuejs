<template>
  <div id="app">
    <div>
      <nav-bar />
    </div>
    <div>
      <el-row>
        <el-col
          :span="layout.span"
          :offset="layout.offset"
        >
          <div class="mt-4">
            <el-card class="box-card">
              <router-view />
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

import NavBar from './components/Layout/Nav.vue';

export default {
  name: 'AppIndex',
  components: {
    'nav-bar': NavBar,
  },
  data() {
    return {
      layout: {
        span: 24,
        offset: 0,
      },
      listLayout: {
        auth: {
          span: 8,
          offset: 8,
        },
        app: {
          span: 12,
          offset: 6,
        },
      },
    };
  },
  watch: {
    '$route': {
      handler({ path }) {
        if (['/login', '/register'].includes(path)) {
          this.layout = this.listLayout.auth;
        } else {
          this.layout = this.listLayout.app;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss">

</style>
