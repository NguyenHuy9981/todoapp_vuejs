<template>
  <div class="me mt-4">
    <div class="card ml-5" style="width: 80rem">
      <h1 class="mt-2"><strong>Thông tin cá nhân</strong></h1>
      <div class="card-body">
        <h5 class="card-title">Tên: {{ user.name }}</h5>
        <p class="card-text">Email: {{ user.email }}</p>
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api/user';
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
  async created() {
    try {
      const result = await api.getMe();
      this.user = result.data;
    } catch (error) {
      console.log('Loi');
    }
  },
};
</script>

<style lang="scss" scoped></style>
