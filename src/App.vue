<template>
  <div id="app">
    <div>
      <nav-bar />
    </div>
    <div>
      <el-row>
        <el-col
          :span="12"
          :offset="6"
        >
          <div class=" mt-4">
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
  components: {
    'nav-bar': NavBar,
  },
};
</script>

<style lang="scss">
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
