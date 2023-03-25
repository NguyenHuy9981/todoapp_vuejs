<template>
  <div class="text-right">
    <el-button
      type="success"
      @click="centerDialogVisible = true"
    >
      Tạo mới
    </el-button>
    <el-dialog
      title="Tạo Task mới"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <el-form
        ref="ruleForm"
        :model="form"
        :rules="rules"
      >
        <el-row>
          <el-col>
            <el-form-item
              label="Tiêu đề"
              prop="name"
            >
              <el-input
                v-model="form.name"
                required
              />
            </el-form-item>
            <el-form-item
              label="Mô tả"
              prop="description"
            >
              <el-input
                v-model="form.description"
                type="textarea"
                :rows="4"
                required
              />
            </el-form-item>
            <el-select
              v-if="false"
              v-model="form.status"
              placeholder="Chọn trạng thái"
              class="mb-4"
              size="medium"
            >
              <el-option
                v-for="item in getTodoStatus"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
            <el-form-item>
              <el-button
                type="primary"
                :loading="btnLoading"
                :disabled="btnLoading"
                @click="onSubmit() "
              >
                Tạo
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TodoCreate',
  data() {
    return {
      centerDialogVisible: false,
      form: {
        name: '',
        description: '',
        status: 'unfulfilled',
      },
      rules: {
        name: [
          {
            required: true,
          },
        ],
        description: [
          {
            required: true,
          },
        ],
      },
      btnLoading: false,
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            this.btnLoading = true;
            const result = await this.TodoCreate(this.form);

            if (result.success) {
              this.form.name = '';
              this.form.description = '';
              this.centerDialogVisible = false;
            }
          }
        });
      } catch (error) {
        console.log('Loi');
      }

      this.btnLoading = false;
    },
  },
};
</script>
