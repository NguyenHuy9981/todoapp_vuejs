<template>
    <div>
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
import { mapActions } from 'vuex';

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
}
</style>
