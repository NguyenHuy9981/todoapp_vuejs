<template>
    <div>
        <h1>To Do List</h1>
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
                <tr v-for="(job, index) in jobs" :key="index" @click="job.selected = !job.selected"
                    :class="{ selected: job.selected }">
                    <td>{{ job.name }}</td>
                    <td>{{ job.status}}</td>
                    <td>
                        <a class="text-center" @click="editJob(job._id, job)">
                            <span class="fa fa-pen"></span>
                        </a>
                    </td>
                    <td>
                        <a class="text-center" @click="deleteJob(index, job._id, job)">
                            <span class="fa fa-trash"></span>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import api from '../api/todo';

export default {
  name: 'TodoList',
  data() {
    return {
      todo: {
        name: null,
        status: null,
      },
      jobs: [],
      idJob: null,
      isEditing: false,
      upHere: false,
    };
  },
  methods: {
    async onSubmit() {
      try {
        const result = await api.create(this.todo);
        console.log(result);

        this.jobs.push({
          name: this.todo.name,
          status: 'unfulfilled',
        });
      } catch (error) {
        console.log('Loi');
      }
    },
    editJob(idJob, job) {
      this.isEditing = true;
      this.todo = job;
      this.idJob = idJob;
    },
    async updateJob(idJob) {
      try {
        const resuilt = await api.update(
          idJob,
          {
            name: this.todo.name,
          },
        );
        console.log(resuilt);

        this.isEditing = false;
        this.todo = {
          name: null,
          status: null,
        };
        this.idJob = !idJob;
      } catch (error) {
        console.log('Loi');
      }
    },
    async deleteJob(index, idJob) {
      try {
        const resuilt = await api.delete(idJob);
        this.jobs.splice(index, 1);
        console.log(resuilt);
      } catch (error) {
        console.log('Loi');
      }
    },
  },
  created() {
    api.getList()
      .then((response) => {
        console.log(response);
        this.jobs = response.data;
      })
      .catch((e) => {
        console.error(e);
      });
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
