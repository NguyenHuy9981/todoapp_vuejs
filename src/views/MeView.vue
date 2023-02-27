<template>
  <div class="me mt-4">
    <div class="card ml-5" style="width: 80rem" v-if="getUserAuthed">
      <h1 class="mt-2"><strong>Thông tin cá nhân</strong></h1>
      <div class="card-body">
        <h5 class="card-title">Tên: {{ getUserName }}</h5>
        <p class="card-text">Email: {{ getUserEmail }}</p>
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';

export default {
  components: {
    TodoList,
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    if (!this.getUserAuthed) {
      this.$router.push({ name: 'Login' });
    }
  },
};
</script>

<style lang="scss" scoped></style>
