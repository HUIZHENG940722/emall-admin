<template>
  <div>
    <el-upload :action="useOss?ossUploadUrl:minioUploadUrl"
               :data="useOss?dataObj:null"
               list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10MB</div>
    </el-upload>
    <el-dialog>
      <img width="100%" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "SingleUpload",
  data() {
    return {
      useOss:true, //使用oss->true;使用MinIO->false
      ossUploadUrl:'https://macro-oss.oss-cn-shenzhen.aliyuncs.com',
      minioUploadUrl:'http://localhost:8080/minio/upload',
      dataObj: {
        policy: '',
        signature: '',
        key: '',
        ossaccessKeyId: '',
        dir: '',
        host: '',
        // callback:'',
      },
    }
  }
}
</script>

<style scoped>

</style>