<template>
  <div id="app">
    <div>
      <nav-bar />
    </div>
    <div>
      <div class="row">
        <div class="col-lg-6" style="margin:auto">
          <div class=" mt-4">
            <div class="card " style="min-height: 500px;margin-bottom: 50px;">
              <router-view />
            </div>
          </div>
        </div>
      </div>
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
