<template>
  <div>
    <b-button
      variant="primary"
      class="mx-2"
      style="float:right"
      @click="show =true"
    >
      {{ $t("ADD") }}
    </b-button>
    <b-modal
      v-model="show"
      title="BootstrapVue"
      @ok="onSubmit"
    >
      <div @submit="onSubmit">
        <b-form-group id="input-group-2">
          <b-form-input
            v-model="form.name"
            placeholder="Enter name"
            required
          />
          <b-form-textarea
            v-model="form.description"
            placeholder="Enter Description"
            required
          />
          <b-form-select
            v-model="form.status"
            :options="getTodoStatus"
          >
            <b-form-select-option :value="''">
              {{ $t("SELECT_STATUS") }}
            </b-form-select-option>
          </b-form-select>
        </b-form-group>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'TodoCreate',
  data() {
    return {
      show: false,
      form: {
        name: '',
        description: '',
        status: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const result = await this.TodoCreate(this.form);
        this.form.name = '';
        this.form.description = '';
        console.log(result);
      } catch (error) {
        console.log('Loi');
      }
    },
  },
  watch: {
    'form.name': function (oldValue) {
      console.log(oldValue);
    },
  },

};
</script>
