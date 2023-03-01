<template>
  <div>
    <h1 class="mt-2"><strong>Thông tin cá nhân</strong></h1>
      <div class="card-body">
        <h5 class="card-title">Tên: {{ getUserName }}</h5>
        <p class="card-text">Email: {{ getUserEmail }}</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'MeIndex',
  data() {
    return {
      user: {},
    };
  },
  created() {
    if (!this.getUserAuthed) {
      this.RouterTo('login');
    }
  },
};
</script>

<style lang="scss" scoped></style>
