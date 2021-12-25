<template>
  <div>
    <el-upload action="ossUploadUrl"
               :data="dataObj"
               list-type="picture-card"
               :file-list="fileList"
               :before-upload="beforeUpload"
               :on-remove="handleRemove"
               :on-success="handleUploadSuccess"
               :on-preview="handlePreview"
               :limit="maxCount"
               :on-exceed="handleExceed">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MultiUpload",
  props: {
    //图片属性数组
    value: Array,
    //最大上传图片数量
    maxCount:{
      type:Number,
      default:5
    }
  },
  data() {
    return {
      dataObj: {
        policy: '',
        key: '',
        dir: '',
        host: '',
        OSSAccessKeyId: '',
        Signature: '',
        callback: ''
      },
      dialogVisible: false,
      dialogImageUrl:null,
      ossUploadUrl:'',
    }
  },
  computed: {
    fileList() {
      let fileList=[];
      for(let i=0;i<this.value.length;i++){
        fileList.push({url:this.value[i]});
      }
      return fileList;
    }
  },
  methods: {
    beforeUpload() {

    },
    handleRemove() {

    },
    handleUploadSuccess() {

    },
    handlePreview() {

    },
    handleExceed() {

    }
  }
}
</script>

<style scoped>

</style>