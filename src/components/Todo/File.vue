<template>
  <div>
    <h3 class="mb-3">
      File:
    </h3>
    <el-row>
      <el-col
        :span="12"
        :offset="6"
      >
        <el-upload
          action="/"
          drag
          :file-list="listFileShow"
          list-type="picture"
          :auto-upload="false"
          :on-remove="onRemoveFile"
          :on-change="onUploadFile"
          :thumbnail-mode="true"
          style="width:100%"
          multiple
        >
          <i class="el-icon-upload" />
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <div

            class="el-upload__tip"
          >
            jpg/png files with a size less than 500kb
          </div>
        </el-upload>
      </el-col>
    </el-row>
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
    ...mapActions(['TodoUploadFile', 'TodoRemoveFile', 'TodoGetId', 'TodoAddFile']),
    async getJob() {
      const result = await this.TodoGetId(this.todoId);
      this.listFile = result.data.fileRef;
    },
    async onUploadFile(file) {
      const formData = new FormData();

      formData.append('file', file.raw);
      const result = await this.TodoUploadFile(formData);
      if (result.success) {
        await this.TodoAddFile({
          id: this.todoId,
          fileRef: result.data._id,
        });
        this.listFile.push(result.data);
      }
    },
    async onUploadFileV1() {
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
    onRemoveFile(file) {
      this.TodoRemoveFile({
        id: this.todoId,
        fileRef: file._id,
      });
      this.listFile = this.listFile.filter((item) => item._id !== file._id);
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
