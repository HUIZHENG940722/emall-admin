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
// const Base64 = require('js-base64').Base64;
// import Crypto from 'crypto-js';

export default {
  name: "SingleUpload",
  data() {
    return {
      ossUploadUrl:'https://ethan-oos.oss-cn-shenzhen.aliyuncs.com/',
      dataObj: {
        // OSSAccessKeyId: '',
        // policy: '',
        // Signature: '',
        key: '',
        // file: null,
      },
      dialogVisible: false,
    }
  },
  computed: {
    showFileList: {
      get: function () {
        return this.value !== null && this.value !== ''&& this.value!==undefined;
      },
      set: function () {

      }
    },
    fileList() {
      return [
        {
          url: this.value,
          name: this.value ? this.value.substr(this.value.lastIndex('/')+1): null
        }
      ]
    },
  },
  methods: {
    handlePreview() {

    },
    beforeUpload(file) {
      console.log('文件信息', file);
      // 初始化dataObj数据
      let _self = this;
      // _self.dataObj.OSSAccessKeyId = 'LTAI5tPsVb7b1DktXAT9nUbP'; // Y8XatePpBknQ2D74lYuSuVqUe72XnX
      /*let policyText = {
        expiration: "2022-12-01T12:00:00.000Z",
        conditions: [
          {
            "bucket": "ethan-oos"
          },
          ["content-length-range", 1, 1048576000],
        ],
      };*/
      // _self.dataObj.policy = Base64.encode(JSON.stringify(policyText));
      // _self.dataObj.Signature = Crypto.HmacSHA1(Base64.encode(JSON.stringify(policyText)), 'Y8XatePpBknQ2D74lYuSuVqUe72XnX');
      // _self.dataObj.file = file;
      _self.dataObj.key = 'emall/' + file.name;
    },
    handleUploadSuccess(res, file) {
      console.log('返回结果', res, file.name, file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    }
  }
}
</script>

<style scoped>

</style>