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
import axios from "axios";
import authHeader from "../auth-header";
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    TodoList,
  },
  
  data() {
    return {
      user: [],
    };
  },

  created() {
    axios
      .get("http://localhost:3000/me", { headers: authHeader() })
      .then((response) => {
        console.warn(response.data.user);
        this.user = response.data.user;
        console.warn(this.user);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style lang="scss" scoped></style>
