<template>
  <div>
    <b-form-file
      v-model="fileUpload"
      :state="Boolean(fileState)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    />
    <b-button
      class="mb-4"
      variant="success"
      @click="onUploadFile"
    >
      Thêm
    </b-button>
    <div
      v-for="(item) in listFileShow"
      :key="item._id"
      class="image"
    >
      <img
        v-if="isFileImage(item)"
        :src="item.url"
      >
      <div v-else>
        <a
          target="_blank"
          :href="item.url"
          :download="item.name"
        >
          {{ item.name }}
        </a>
      </div>
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
    ...mapActions(['TodoUploadFile', 'TodoGetId', 'TodoAddFile']),
    async getJob() {
      const result = await this.TodoGetId(this.todoId);
      this.listFile = result.data.fileRef;
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
    isFileImage(item) {
      return item.type === 'image/jpeg';
    },
  },
  computed: {
    listFileShow() {
      return this.listFile.map((attachment) => ({
        ...attachment,
        url: this.getPathUrl(attachment.fileName),
      }));
    },
  },
  created() {
    this.getJob();
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
