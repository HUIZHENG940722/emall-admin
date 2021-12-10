<template>
  <el-card class="form-container" shadow="never">
    <el-form :model="productCate"
             ref="productCateFrom"
             :rules="rules"
             label-width="150px">
      <el-form-item label="分类名称：" prop="name">
        <el-input v-model="productCate.name"></el-input>
      </el-form-item>
      <el-form-item label="上级分类：">
        <el-select v-model="productCate.parentId"
                   placeholder="请选择分类">
          <el-option
              v-for="item in selectProductCateList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数量单位：">
        <el-input v-model="productCate.productUnit"></el-input>
      </el-form-item>
      <el-form-item label="排序：">
        <el-input v-model="productCate.sort"></el-input>
      </el-form-item>
      <el-form-item label="是否显示：">
        <el-radio-group v-model="productCate.showStatus">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否显示在导航栏：">
        <el-radio-group v-model="productCate.navStatus">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="分类图标：">
        <SingleUpload v-model="productCate.icon"></SingleUpload>
      </el-form-item>
      <el-form-item v-for="(filterProductAttr, index) in filterProductAttrList"
                    :label="index.toString()"
                    :key="filterProductAttr.key"
      >
        <el-cascader
            clearable
            v-model="filterProductAttr.value"
            :options="filterAttrs">
        </el-cascader>
        <el-button style="margin-left: 20px">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary">新增</el-button>
      </el-form-item>
      <el-form-item label="关键词：">
        <el-input v-model="productCate.keywords"></el-input>
      </el-form-item>
      <el-form-item label="分类描述：">
        <el-input type="textarea" :autosize="true" v-model="productCate.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('productCateFrom')">提交</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import SingleUpload from '@/components/Upload/Single';
const defaultProductCate = {
  description: '',
  icon: '',
  keywords: '',
  name: '',
  navStatus: 0,
  parentId: 0,
  productUnit: '',
  showStatus: 0,
  sort: 0,
  productAttributeIdList: []
};
export default {
  name: "ProductCateDetail",
  components: {SingleUpload},
  data() {
    return {
      productCate: Object.assign({}, defaultProductCate),
      selectProductCateList: [],
      filterProductAttrList: [{
        value: []
      }],
      filterAttrs: [],
      rules: {
        name: [
          {required: true, message: '请输入品牌名称', trigger: 'blur'},
          {min: 2, max: 140, message: '长度在 2 到 140 个字符', trigger: 'blur'}
        ]
      },
    }
  },
  methods: {
    onSubmit(formName) {
      console.log('关联数据', this.$refs[formName]);
      /*this.$refs[formName].validate((valid) => {
        if (valid) {

        }
      });*/
    }
  }
}
</script>

<style scoped>

</style>