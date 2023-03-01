<template>
    <div>
        <b-button variant="primary" class="mx-2" style="float:right" @click="show =true">
            Tao moi
        </b-button>
        <b-modal v-model="show" title="BootstrapVue" @ok="onSubmit">
            <div  @submit="onSubmit">
                <b-form-group id="input-group-2">
                    <b-form-input
                        v-model="form.name"
                        placeholder="Enter name"
                        required>
                    </b-form-input>
                    <b-form-textarea
                        v-model="form.description"
                        placeholder="Enter Description"
                        required>
                    </b-form-textarea>
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
};
</script>
