<template>
  <el-table
    :data="listJobShow"
    border
    stripe
    fit
    style="width: 100%"
  >
    <el-table-column type="index" />
    <el-table-column
      prop="name"
      label="Jobs"
      width="180"
    >
      <template #default="scope">
        <a @click="getRouterId('todo', scope.row._id)">{{ scope.row.name }}</a>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="Jobs"
      width="180"
    />
    <el-table-column
      prop="status"
      label="Status"
      width="180"
    />
    <el-table-column
      prop="createdAt"
      label="Ngày tạo"
    >
      <template #default="scope">
        <i class="el-icon-time" />
        <span style="margin-left: 10px">{{ scope.row.createdAt | formatDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="doneDay"
      label="Ngày hoàn thành"
    >
      <template #default="scope">
        <i class="el-icon-time" />
        <span style="margin-left: 10px">{{ scope.row.doneDay | formatDate }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapActions } from 'vuex';
import moment from 'moment';

export default {
  name: 'TodoList',
  data() {
    return {
      todo: {
        name: '',
        status: '',
      },
      idJob: null,
      isEditing: false,
      upHere: false,
      selected: null,
      columns: [
        {
          label: 'Jobs',
          field: 'name',
        },
        {
          label: 'Status',
          field: 'status',
        },
        {
          label: 'Ngay tao',
          field: 'createdAt',
        },
        {
          label: 'Ngay hoan thanh',
          field: 'doneDay',
        },
      ],
      fileName: `todo-${moment().format('DD-MM-YYYY-hh-mm')}`,
    };
  },
  methods: {
    ...mapActions(['TodoGetList', 'TodoUpdate', 'TodoDelete']),
    async changeStatus(id, status) {
      await this.TodoUpdate({
        id,
        update: {
          status,
        },
      });
    },
    showDataEmit() {
      const jobEmit = this.getTodoList.map((job) => job.name);
      this.$emit('showJobEmit', jobEmit);
    },
  },
  computed: {
    listJobShow() {
      return this.getTodoList.map((job) => {
        return {
          ...job,
          rowStyle: (job.doneDay) ? 'text-success' : '',
          isDone: !!(job.doneDay),
        };
      });
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
a:hover {
    color: red;
    cursor: pointer;
}
.right{
  float:right;
  width:100px;
}
</style>
