<template>
  <div class="mt-4">
    <el-pagination
      :current-page.sync="pagging.page"
      :page-size.sync="pagging.limit"
      :total="getTodoPagging.total"
      :page-sizes="size"
      background
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="onChangePage"
      @current-change="onChangePage"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TodoPagination',
  data() {
    return {
      pagging: {
        page: 1,
        limit: 10,
      },
      size: [5, 10, 50, 100],
    };
  },
  methods: {
    ...mapActions(['TodoGetList', 'TodoChangePage']),
    async onChangePage() {
      await this.TodoChangePage(this.pagging);
      this.TodoGetList();
    },
    onSearch() {
      this.TodoSearch(this.form);
    },
  },
  created() {
    this.onChangePage();
  },
  computed: {
    ...mapGetters(['getTodoPagging']),
  },
};
</script>
