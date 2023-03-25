<!-- <template>
  <div>
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
</template> -->

<template>
  <div v-if="false">
    <el-select
      v-model="form.status"
      placeholder="Chọn trạng thái"
      class="mb-4"
      size="medium"
      @change="onFliter"
    >
      <el-option
        v-for="item in getTodoStatus"
        :key="item.value"
        :value="item.value"
      />
    </el-select>
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
