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
        <el-button size="small" type="primary" @click="handleAddFilterAttr()">新增</el-button>
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
import {getProductAttrCateWithAttr} from "@/api/productAttrCate";
import {createProductCate, getFirstLevelProductCateList, updateProductCate} from "@/api/productCate";
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
  created() {
    if (this.isEdit) {
      console.log('编辑');
    } else {
      this.productCate = Object.assign({}, defaultProductCate);
    }
    this.getProductAttrCateList();
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
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
    getProductAttrCateList() {
      getProductAttrCateWithAttr().then(response => {
        let list = response.data.data;
        console.log('参数层级结构', list);
        for (let i = 0; i < list.length; i++) {
          let productAttrCate = list[i];
          let children = [];
          if (productAttrCate.productAttributeList != null && productAttrCate.productAttributeList.length > 0) {
            for (let j = 0; j < productAttrCate.productAttributeList.length; j++) {
              children.push({
                label: productAttrCate.productAttributeList[j].name,
                value: productAttrCate.productAttributeList[j].id
              })
            }
          }
          this.filterAttrs.push({
            label: productAttrCate.name,
            value: productAttrCate.id,
            children: children
          })
        }
      });
    },
    getSelectProductCateList() {
      getFirstLevelProductCateList(0, {pageSize: 100, pageNum: 1}).then(response => {
        this.selectProductCateList = response.data.list;
        this.selectProductCateList.unshift({id: 0, name: '无上级分类'});
      });
    },
    getProductAttributeIdList() {
      let productAttributeIdList = [];
      for (let i = 0; i < this.filterProductAttrList.length; i++) {
        let item = this.filterProductAttrList[i];
        if (item.value != null && item.value.length === 2) {
          productAttributeIdList.push(item.value[1]);
        }
      }
      return productAttributeIdList;
    },
    handleAddFilterAttr() {
      if (this.filterProductAttrList.length === 3) {
        this.$message({
          message: '最多添加三个',
          type: 'warning',
          duration: 1000
        });
        return;
      }
      this.filterProductAttrList.push({
        value: null,
        key: Date.now()
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.productCate = Object.assign({}, defaultProductCate);
      this.getSelectProductCateList();
      this.filterProductAttrList = [{
        value: []
      }];
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$confirm('是否提交数据', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            if (this.isEdit) {
              this.productCate.productAttributeIdList = this.getProductAttributeIdList();
              updateProductCate(this.$route.query.id, this.productCate).then(() => {
                this.$message({
                  message: '修改成功',
                  type: 'success',
                  duration: 1000
                });
                this.$router.back();
              });
            } else {
              createProductCate(this.productCate).then(() => {
                this.$refs[formName].resetFields();
                // 重置表单
                this.resetForm(formName);
                this.$message({
                  message: '提交成功',
                  type: 'success',
                  duration: 1000
                });
              });
            }
          })
        }
      });
    }
  }
}
</script>

<style scoped>

</style>