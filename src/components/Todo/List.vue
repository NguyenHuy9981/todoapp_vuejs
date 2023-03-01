<template>
    <div>
        <h1>To Do List ({{ getTodoCount }})</h1>
        <div v-if="isEditing" class="d-flex">
            <form-group id="input-group-2">
                <b-form-input id="input-2" v-model="todo.name" placeholder="Enter name" required>
                </b-form-input>
            </form-group>
            <b-button @click="updateJob(idJob)" variant="success" class="mx-2">Sửa</b-button>
        </div>
        <div v-else @submit="onSubmit" class="d-flex">
            <b-form-group id="input-group-2">
                <b-form-input id="input-2" v-model="todo.name" placeholder="Enter name" required>
                </b-form-input>
            </b-form-group>
            <b-button @click="onSubmit" variant="primary" class="mx-2">Thêm</b-button>
        </div>
        <table class="table table-bordered mt-4">
            <thead>
                <tr>
                    <th scope="col">Jobs</th>
                    <th scope="col">Status</th>
                    <th scope="col">#</th>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                <tr
                  v-for="(job) in getTodoList" :key="job._id"
                  @click="job.selected = !job.selected"
                  :class="{ selected: job.selected }">
                    <td>{{ job.name }}</td>
                    <td>
                      <div>
                         <b-form-select v-model="job.status" :options="options"
                         @change="changeStatus( job._id,job.status)"></b-form-select>
                      </div>
                    </td>
                    <td>
                        <a class="text-center" @click="editJob(job._id, job)">
                            <span class="fa fa-pen"></span>
                        </a>
                    </td>
                    <td>
                        <a class="text-center" @click="TodoDelete(job._id)">
                            <span class="fa fa-trash"></span>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
      options: [
        {
          value: 'unfulfilled',
          text: 'unfulfilled',
        },
        {
          value: 'processing',
          text: 'processing',
        },
        {
          value: 'done',
          text: 'done',
        },
      ],
    };
  },
  methods: {
    ...mapActions(['TodoGetList', 'TodoCreate', 'TodoUpdate', 'TodoDelete', 'TodoGetId']),
    async onSubmit() {
      try {
        const result = await this.TodoCreate(this.todo);
        console.log(result);
      } catch (error) {
        console.log('Loi');
      }
    },
    editJob(idJob, job) {
      this.isEditing = true;
      this.todo = job;
      this.idJob = idJob;
    },
    async changeStatus(id, status) {
      await this.TodoUpdate({
        id,
        update: {
          status,
        },
      });
    },
    async updateJob() {
      // TODO: Update Job
    },

  },
  computed: mapGetters(['getTodoList', 'getTodoCount']),
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
}
</style>
