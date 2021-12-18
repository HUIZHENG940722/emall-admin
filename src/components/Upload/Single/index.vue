<template>
  <div>
    <el-upload :action="ossUploadUrl"
               :data="dataObj"
               list-type="picture"
               :multiple="false"
               :show-file-list="showFileList"
               :file-list="fileList"
               :before-upload="beforeUpload"
               :on-success="handleUploadSuccess"
               :on-remove="handleRemove"
               :on-preview="handlePreview">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10MB</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="fileList[0].url" alt="">
    </el-dialog>
  </div>
</template>

<script>

import {initPostData} from "@/api/oss";

export default {
  name: "SingleUpload",
  props: {
    value: String
  },
  data() {
    return {
      ossUploadUrl:'',
      dataObj: {
        OSSAccessKeyId: '',
        policy: '',
        Signature: '',
        key: '',
        callback: ''
      },
      dialogVisible: false,
    }
  },
  computed: {
    showFileList: {
      get() {
        return this.value !== null && this.value !== ''&& this.value!==undefined;
      },
      set() {
        this.showFileList = this.value !== null && this.value !== ''&& this.value!==undefined;
      }
    },
    fileList() {
      return [
        {
          url: this.value,
          name: this.value ? this.value.substr(this.value.lastIndexOf("/")+1): null
        }
      ]
    },
  },
  methods: {
    handlePreview() {
      this.dialogVisible = true;
      console.log('预览图片');
    },
    beforeUpload(file) {
      // 初始化dataObj数据
      let _self = this;
      return new Promise((resolve, reject) => {
        initPostData().then(response => {
          _self.dataObj.OSSAccessKeyId = response.data.data.ossaccessKeyId;
          _self.dataObj.policy = response.data.data.policy;
          _self.dataObj.Signature = response.data.data.signature;
          _self.dataObj.key = response.data.data.dir + "/" + file.name;
          _self.dataObj.callback = response.data.data.callback
          _self.ossUploadUrl = response.data.data.host;
          resolve(true);
        }).catch(() => {
          reject(false);
        });
      });
    },
    handleUploadSuccess(res, file) {
      // this.showFileList = true;
      this.fileList.pop();
      let url = res.data.filename;
      this.fileList.push({
        name: file.name,
        url: url
      })
      this.$emit('input', this.fileList[0].url);
    },
    handleRemove() {
      this.$emit('input', '');
    }
  }
}
</script>

<style scoped>

</style>