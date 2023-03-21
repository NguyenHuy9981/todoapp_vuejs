<template>
  <div>
    <h1 class="mt-2">
      <strong>{{ $t("USER_INFO") }}</strong>
    </h1>
    <div class="card-body">
      <h5 class="card-title">
        {{ $t("NAME") }}: {{ getUserName }}
      </h5>
      <p class="card-text">
        {{ $t("EMAIL") }}: {{ getUserEmail }}
      </p>
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
};
</script>
