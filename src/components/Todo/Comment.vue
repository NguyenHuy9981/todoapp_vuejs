<template>
    <div>
        {{ todoId }}
    </div>
</template>

<script>
export default {
  name: 'TodoComment',
  props: {
    todoId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      list: [],
    };
  },
  created: {

  },
};
</script>
