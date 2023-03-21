<template>
  <div>
    <div>
      <h1>{{ $t("TODO_LIST") }} ({{ getTodoCount }})</h1>
    </div>
    <create />
    <filter-bar />
    <list
      ref="TodoList"
      @showJobEmit="getData($event)"
    >
      <!-- <template #top>
        Trên
      </template>
      <template #mid>
        Giữa
      </template>
      <template #job="{job}">
        {{ job._id }}
      </template>
      <template #bot>
        Dưới
      </template> -->
      <p>Emit: {{ emit }}</p>
    </list>
  </div>
</template>

<script>

import Create from '../../components/Todo/Create.vue';
import List from '../../components/Todo/List.vue';
import Filter from '../../components/Todo/Filter.vue';

export default {
  name: 'TodoIndex',
  data() {
    return {
      emit: '',
    };
  },
  components: {
    'create': Create,
    'list': List,
    'filter-bar': Filter,
  },
  mounted() {
    // this.$refs.TodoList.loadTodo() // Copoment Parent call methods in Child Component
  },
  methods: {
    getData(data) {
      this.emit = data;
    },
  },
};
</script>
