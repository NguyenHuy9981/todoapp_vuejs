<template>
  <div>
    <vue-excel-xlsx
      v-if="pagging.total"
      class="mt-3 right"

      :data="listJobShow"
      :columns="columns"
      :file-name="fileName"
      file-type="xlsx"
      sheet-name="Todo"
    >
      Xuất File Excel
    </vue-excel-xlsx>
    <slot name="top" />

    <table
      class="table table-bordered mt-4"
    >
      <thead>
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Jobs
          </th>
          <th scope="col">
            Status
          </th>
          <th scope="col">
            Ngay tao
          </th>
          <th scope="col">
            Ngay hoan thanh
          </th>
          <th scope="col">
            Hanh Dong
          </th>
        </tr>
      </thead>
      <slot name="mid" />
      <tbody>
        <tr
          v-for="(job, index) in listJobShow"
          :key="job._id"
          :class="job.rowStyle"
        >
          <td>
            {{ index +1 }}
          </td>
          <td>
            <router-link :to="getRouterId('todo',job._id)">
              {{ job.name }}
            </router-link>
          </td>
          <td>
            <div>
              <b-form-select
                v-model="job.status"
                :options="getTodoStatus"
                :disabled="job.isDone"
                @change="changeStatus( job._id,job.status)"
              />
            </div>
          </td>
          <td>
            {{ job.createdAt | formatDate }}
          </td>
          <td>
            {{ job.doneDay | formatDate }}
          </td>
          <td>
            <a
              v-if="!job.isDone"
              class="text-center"
              @click="TodoDelete(job._id)"
            >
              <span class="fa fa-trash" />
            </a>
          </td>
          <slot
            name="job"
            :job="job"
          />
        </tr>
      </tbody>
    </table>
    <slot />
    <div>
      <div class="row">
        <div class="col-lg-2">
          <b-form-select
            v-model="pagging.limit"
            :options="getTodoLimit"
            @change="loadTodo"
          />
        </div>
        <div class="col-lg-10">
          <b-pagination
            v-if="pagging.total"
            v-model="pagging.page"
            :total-rows="pagging.total"
            :per-page="pagging.limit"
            @input="loadTodo"
          />
        </div>
        <slot name="bot" />
      </div>
    </div>
  </div>
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
      pagging: {
        page: 1,
        limit: 5,
        total: 0,
      },
      fileName: `todo-${moment().format('DD-MM-YYYY-hh-mm')}`,
    };
  },
  methods: {
    ...mapActions(['TodoGetList', 'TodoUpdate', 'TodoDelete']),
    async loadTodo() {
      const result = await this.TodoGetList(this.pagging);
      this.pagging.total = result.total;
    },
    async changeStatus(id, status) {
      await this.TodoUpdate({
        id,
        update: {
          status,
        },
      });
    },
  },

  async created() {
    this.loadTodo();
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
