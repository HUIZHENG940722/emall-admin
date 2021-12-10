<template>
  <div style="margin-top: 50px">
    <el-form :model="value" label-width="120px" style="width: 600px" size="small">
      <el-form-item label="商品分类：">
        <el-cascader v-model="selectProductCateValue" :options="productCateOptions">
        </el-cascader>
      </el-form-item>
      <el-form-item label="商品名称：">
        <el-input v-model="value.name"></el-input>
      </el-form-item>
      <el-form-item label="副标题：">
        <el-input v-model="value.subTitle"></el-input>
      </el-form-item>
      <el-form-item label="商品品牌：">
        <el-select v-model="value.brandId"
            placeholder="请选择品牌">
          <el-option v-for="item in brandOptions"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品介绍：">
        <el-input v-model="value.description"
            type="textarea"
            placeholder="请输入内容">
        </el-input>
      </el-form-item>
      <el-form-item label="商品货号：">
        <el-input v-model="value.productSn"></el-input>
      </el-form-item>
      <el-form-item label="商品售价：">
        <el-input v-model="value.price"></el-input>
      </el-form-item>
      <el-form-item label="市场价：">
        <el-input v-model="value.originalPrice"></el-input>
      </el-form-item>
      <el-form-item label="商品库存：">
        <el-input v-model="value.stock"></el-input>
      </el-form-item>
      <el-form-item label="计量单位：">
        <el-input v-model="value.unit"></el-input>
      </el-form-item>
      <el-form-item label="商品重量：">
        <el-input v-model="value.weight" style="width: 300px"></el-input>
        <span style="margin-left: 20px">克</span>
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="value.sort"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" size="medium">下一步，填写商品促销</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {productCategoryListWithChildren} from "@/api/productCate";
import {productBrandList} from "@/api/productBrand";

export default {
  name: "ProductInfoDetail",
  created() {
    this.getProductCateLevelList();
    this.getProductBrandList();
  },
  props: {
    value: Object,
  },
  data() {
    return {
      productCateOptions: [],
      brandOptions: [],
      selectProductCateValue: [],
    }
  },
  methods: {
    getProductCateLevelList() {
      productCategoryListWithChildren().then(response => {
        let list = response.data.data;
        this.productCateOptions = [];
        for (let i = 0; i < list.length; i++) {
          let children = [];
          if (list[i].children != null && list[i].children.length > 0) {
            for (let j = 0; j < list[i].children.length; j++) {
              children.push({label: list[i].children[j].name, value: list[i].children[j].id});
            }
          }
          this.productCateOptions.push({label: list[i].name, value: list[i].id, children: children});
        }
      });
    },
    getProductBrandList() {
      productBrandList({pageNum: 1, pageSize: 10}).then(response => {
        this.brandOptions = [];
        let brandList = response.data.data.list;
        for (let i = 0; i < brandList.length; i++) {
          this.brandOptions.push({label: brandList[i].name, value: brandList[i].id});
        }
      })
    },
  }
}
</script>

<style scoped>

</style>