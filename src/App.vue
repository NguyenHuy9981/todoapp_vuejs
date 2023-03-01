<template>
  <div id="app">
    <header-auth />
    <div>
      <div class="row">
        <div class="col-lg-6" style="margin:auto">
          <div class="me mt-4">
            <div class="card ml-5" style="min-height: 500px;">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import HeaderAuth from './components/Auth/Header.vue';

export default {
  components: {
    'header-auth': HeaderAuth,
  },
};
</script>

<style lang="scss">
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
