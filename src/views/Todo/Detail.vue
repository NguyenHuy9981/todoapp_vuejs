<template>
    <div>
      Todo Detail
    </div>
</template>

<script>
export default {
  name: 'TodoDetail',
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {

  },
};
</script>
