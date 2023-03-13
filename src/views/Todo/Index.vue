<template>
  <div>
    <div>
      <h1>To Do List ({{ getTodoCount }})</h1>
    </div>
    <create />
    <filter-bar />
    <list />
  </div>
</template>

<script>

import Create from '../../components/Todo/Create.vue';
import List from '../../components/Todo/List.vue';
import Filter from '../../components/Todo/Filter.vue';

export default {
  name: 'TodoIndex',
  components: {
    'create': Create,
    'list': List,
    'filter-bar': Filter,
  },

};
</script>
