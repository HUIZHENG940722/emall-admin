<template>
  <div style="margin-top: 50px">
    <el-form :model="value"
             label-width="120px"
             style="width: 680px"
             size="small">
      <el-form-item label="关联专题：">
        <el-transfer
            style="display: inline-block"
            filterable
            filter-placeholder="请输入专题名称"
            v-model="selectSubject"
            :titles="subjectTitles"
            :data="subjectList">
        </el-transfer>
      </el-form-item>
      <el-form-item label="关联优选：">
        <el-transfer
            style="display: inline-block"
            filterable
            filter-placeholder="请输入优选名称"
            v-model="selectPreferenceArea"
            :titles="preferenceAreaTitles"
            :data="preferenceAreaList">
        </el-transfer>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button size="medium" @click="handlePrev">上一步，填写商品属性</el-button>
        <el-button type="primary" size="medium">完成，提交商品</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ProductRelationDetail",
  props: {
    value: Object,
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      //专题左右标题
      subjectTitles: ['待选择', '已选择'],
      //所有专题列表
      subjectList: [],
      //专题左右标题
      preferenceAreaTitles: ['待选择', '已选择'],
      //所有专题列表
      preferenceAreaList: [],
    }
  },
  computed: {
    //选中的专题
    selectSubject:{
      get:function () {
        let subjects =[];
        if(this.value.subjectProductRelationList==null||this.value.subjectProductRelationList.length<=0){
          return subjects;
        }
        for(let i=0;i<this.value.subjectProductRelationList.length;i++){
          subjects.push(this.value.subjectProductRelationList[i].subjectId);
        }
        return subjects;
      },
      set:function (newValue) {
        this.value.subjectProductRelationList=[];
        for(let i=0;i<newValue.length;i++){
          this.value.subjectProductRelationList.push({subjectId:newValue[i]});
        }
      }
    },
    //选中的优选
    selectPreferenceArea:{
      get:function () {
        let preferenceAreas =[];
        if(this.value.prefrenceAreaProductRelationList==null||this.value.prefrenceAreaProductRelationList.length<=0){
          return preferenceAreas;
        }
        for(let i=0;i<this.value.prefrenceAreaProductRelationList.length;i++){
          preferenceAreas.push(this.value.prefrenceAreaProductRelationList[i].preferenceAreaId);
        }
        return preferenceAreas;
      },
      set:function (newValue) {
        this.value.prefrenceAreaProductRelationList=[];
        for(let i=0;i<newValue.length;i++){
          this.value.prefrenceAreaProductRelationList.push({preferenceAreaId:newValue[i]});
        }
      }
    }
  },
  methods: {
    handlePrev(){
      this.$emit('prevStep')
    },
  }
}
</script>

<style scoped>

</style>