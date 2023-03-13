<template>
    <div>
      <b-form-file
      v-model="fileUpload"
      :state="Boolean(fileState)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      > </b-form-file>
      <b-button class="mb-4" variant="success" @click="onUploadFile">Thêm </b-button>
      <div class="image">
      <img  v-for="(item) in listFileShow" :key="item._id"
        :src="item.url" />
      </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TodoUpload',
  props: {
    todoId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fileUpload: null,
      fileState: null,
      listFile: [],
    };
  },
  methods: {
    ...mapActions(['TodoListFile', 'TodoUploadFile', 'TodoGetId', 'TodoAddFile']),
    async getJob() {
      const result = await this.TodoGetId(this.todoId);
      this.listFile = result.data.fileRef;
    },
    getFile() {
      this.TodoListFile(this.todoId);
    },
    async onUploadFile() {
      const formData = new FormData();

      formData.append('file', this.fileUpload);

      const result = await this.TodoUploadFile(formData);
      if (result.success) {
        await this.TodoAddFile({
          id: this.todoId,
          fileRef: result.data._id,
        });
        this.listFile.push(result.data);
      }
    },

  },
  created() {
    try {
      this.getJob();
      this.getFile();
    } catch (error) {
      console.log('Lỗi');
    }
  },
  computed: {
    listFileShow() {
      return this.listFile.map((attachment) => ({
        ...attachment,
        url: this.getPathUrl(attachment.path),
      }));
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  position:relative
}

img{
  width: 30%;
  height: 30%;
}

</style>
