<template>
  <div>
    <table class="table table-bordered mt-4">
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
      <tbody>
        <tr
          v-for="(job, index) in getTodoList"
          :key="job._id"
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
                @change="changeStatus( job._id,job.status)"
              />
            </div>
          </td>
          {{ job.createdAt }}
          <td>
            {{ job.doneDay }}
          </td>
          <td>
            <a
              class="text-center"
              @click="TodoDelete(job._id)"
            >
              <span class="fa fa-trash" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  mapActions,
} from 'vuex';

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
  },
  async created() {
    try {
      await this.TodoGetList();
    } catch (error) {
      console.log('Loi');
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
a:hover {
    color: red;
    cursor: pointer;
}
</style>
