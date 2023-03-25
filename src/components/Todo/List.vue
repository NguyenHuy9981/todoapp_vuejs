<template>
  <div>
    <div class="text-right mt-2 mb-2 ">
      <vue-excel-xlsx
        class="button-excel p-2"
        :data="listJobShow"
        :columns="columns"
        :file-name="fileName"
        file-type="xlsx"
        sheet-name="Todo"
      >
        Xuất File Excel
      </vue-excel-xlsx>
    </div>
    <el-tabs
      v-model="activeTab"
      @tab-click="handlechangeTab"
    >
      <el-tab-pane
        v-for="(tab) in getListTab"
        :key="tab.value"
        :label="tab.text"
        :name="tab.value"
      >
        <span slot="label">{{ tab.text }} ({{ tab.count }})</span>
      </el-tab-pane>
    </el-tabs>

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
          <router-link :to="getRouterId('todo', scope.row._id)">
            {{ scope.row.name }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="description"
        label="Mô tả"
        width="180"
      />
      <el-table-column
        prop="status"
        label="Status"
        width="180"
      >
        <template #default="scope">
          <el-select
            v-model="scope.row.status"
            placeholder="Chọn trạng thái"
            class="mb-4"
            size="medium"
            @change="changeStatus(scope.row._id, scope.row.status)"
          >
            <el-option
              v-for="item in getTodoStatus"
              :key="item.value"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-table-column>
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
      activeTab: 'all',
    };
  },
  methods: {
    ...mapActions(['TodoGetList', 'TodoUpdate', 'TodoDelete', 'TodoTab', 'TodoFilter']),
    async changeStatus(id, status) {
      await this.TodoUpdate({
        id,
        update: {
          status,
        },
      });
      this.TodoTab();
    },
    showDataEmit() {
      const jobEmit = this.getTodoList.map((job) => job.name);
      this.$emit('showJobEmit', jobEmit);
    },
    handlechangeTab() {
      const filter = {};
      if (this.activeTab !== 'all') {
        filter.status = this.activeTab;
      }
      this.TodoFilter(filter);
    },

  },
  computed: {
    ...mapGetters(['getListTab']),
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
  created() {
    this.TodoTab();
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
.button-excel {
  background-color:slategray;
  font-size: medium;
  font-weight: 500;
  color: aliceblue;
  border-radius: 4px;
}

</style>
