<template>
  <div>
    <!--Filter By Status-->
    <div>
      <b-form-select
        v-model="form.status"
        :options="getTodoStatus"
      >
        <b-form-select-option value="">
          Tat ca
        </b-form-select-option>
      </b-form-select>
      <b-button
        variant="primary"
        @click="onFliter"
      >
        Lọc
      </b-button>
    </div>

    <!--Filter By Name-->
    <div>
      <b-form-input
        id="input-2"
        v-model="form.search"
        placeholder="Tìm kiếm"
        required
      />
      <b-button
        variant="primary mt-3"
        @click="onSearch"
      >
        Tìm kiếm
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TodoFilter',
  data() {
    return {
      form: {
        status: '',
      },
    };
  },
  methods: {
    ...mapActions(['TodoFilter', 'TodoSearch']),
    onFliter() {
      this.TodoFilter(this.form);
    },
    onSearch() {
      this.TodoSearch(this.form);
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
