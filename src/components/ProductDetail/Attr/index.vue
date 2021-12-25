<template>
  <div style="margin-top: 50px">
    <el-form :model="value" ref="productAttrForm" label-width="120px" style="width: 720px" size="small">
      <el-form-item label="属性类型：">
        <el-select v-model="value.productAttributeCategoryId" placeholder="请选择属性类型">
          <el-option v-for="item in productAttributeCategoryOptions"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品规格：">
        <el-card shadow="never" class="cardBg">
          <div v-for="(productAttr,idx) in selectProductAttr" :key="idx">
            {{productAttr.name}}：
            <el-checkbox-group v-if="productAttr.handAddStatus===0" v-model="selectProductAttr[idx].values">
              <el-checkbox v-for="item in getInputListArr(productAttr.inputList)" :label="item" :key="item"
                           class="littleMarginLeft"></el-checkbox>
            </el-checkbox-group>
            <div v-else>
              <el-checkbox-group v-model="selectProductAttr[idx].values">
                <div v-for="(item,index) in selectProductAttr[idx].options" style="display: inline-block"
                     class="littleMarginLeft" :key="index">
                  <el-checkbox :labe="item" :key="item"></el-checkbox>
                  <el-button type="text" class="littleMarginLeft">删除
                  </el-button>
                </div>
              </el-checkbox-group>
              <el-input v-model="addProductAttrValue" style="width: 160px;margin-left: 10px" clearable></el-input>
              <el-button class="littleMarginLeft">增加</el-button>
            </div>
          </div>
        </el-card>
        <el-table style="width: 100%;margin-top: 20px"
                  :data="value.skuStockList"
                  border>
          <el-table-column
              v-for="(item,index) in selectProductAttr"
              :label="item.name"
              :key="item.id"
              align="center">
            <template slot-scope="scope">
              {{getProductSkuSp(scope.row,index)}}
            </template>
          </el-table-column>
          <el-table-column
              label="销售价格"
              width="80"
              align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.price"></el-input>
            </template>
          </el-table-column>
          <el-table-column
              label="商品库存"
              width="80"
              align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.stock"></el-input>
            </template>
          </el-table-column>
          <el-table-column
              label="库存预警值"
              width="80"
              align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.lowStock"></el-input>
            </template>
          </el-table-column>
          <el-table-column
              label="SKU编号"
              align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.skuCode"></el-input>
            </template>
          </el-table-column>
          <el-table-column
              label="操作"
              width="80"
              align="center">
            <template slot-scope="">
              <el-button
                  type="text">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button
            type="primary"
            style="margin-top: 20px">刷新列表
        </el-button>
        <el-button
            type="primary"
            style="margin-top: 20px">同步价格
        </el-button>
        <el-button
            type="primary"
            style="margin-top: 20px">同步库存
        </el-button>
      </el-form-item>
      <el-form-item label="属性图片：" v-if="hasAttrPic">
        <el-card shadow="never" class="cardBg">
          <div v-for="(item,index) in selectProductAttrPics" :key="index">
            <span>{{item.name}}:</span>
            <single-upload style="width: 300px;display: inline-block;margin-left: 10px"></single-upload>
          </div>
        </el-card>
      </el-form-item>
      <el-form-item label="商品参数：">
        <el-card shadow="never" class="cardBg">
          <div v-for="(item,index) in selectProductParam" :class="{littleMarginTop:index!==0}" :key="index">
            <div class="paramInputLabel">{{item.name}}:</div>
            <el-select v-if="item.inputType===1" class="paramInput" v-model="selectProductParam[index].value">
              <el-option v-for="item in getParamInputList(item.inputList)"
                         :key="item"
                         :label="item"
                         :value="item">
              </el-option>
            </el-select>
            <el-input v-else class="paramInput" v-model="selectProductParam[index].value"></el-input>
          </div>
        </el-card>
      </el-form-item>
      <el-form-item label="商品相册：">
        <MultiUpload v-model="selectProductPics"></MultiUpload>
      </el-form-item>
      <el-form-item label="规格参数：">
        <el-tabs v-model="activeHtmlName" type="card">
          <el-tab-pane label="电脑端详情" name="pc">
            <tinymce :width="595" :height="300" v-model="value.detailHtml"></tinymce>
          </el-tab-pane>
          <el-tab-pane label="移动端详情" name="mobile">
            <tinymce :width="595" :height="300" v-model="value.detailMobileHtml"></tinymce>
          </el-tab-pane>
        </el-tabs>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button size="medium" @click="handlePrev">上一步，填写商品促销</el-button>
        <el-button type="primary" size="medium" @click="handleNext">下一步，选择商品关联</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import MultiUpload from "@/components/Upload/Multi";
import {getProductAttrCateList as productAttrCateList} from "@/api/productAttrCate";
export default {
  name: "ProductAttrDetail",
  components: {MultiUpload},
  props: {
    value: Object,
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.getProductAttrCateList();
  },
  data() {
    return {
      //商品属性分类下拉选项
      productAttributeCategoryOptions: [],
      //选中的商品属性
      selectProductAttr: [],
      //可手动添加的商品属性
      addProductAttrValue: '',
      //选中的商品属性图片
      selectProductAttrPics: [],
      //选中的商品参数
      selectProductParam: [],
      //商品富文本详情激活类型
      activeHtmlName: 'pc'
    }
  },
  computed: {
    //是否有商品属性图片
    hasAttrPic() {
      if (this.selectProductAttrPics.length < 1) {
        return false;
      }
      return true;
    },
    //商品的主图和画册图片
    selectProductPics:{
      get:function () {
        let pics=[];
        if(this.value.pic===undefined||this.value.pic==null||this.value.pic===''){
          return pics;
        }
        pics.push(this.value.pic);
        if(this.value.albumPics===undefined||this.value.albumPics==null||this.value.albumPics===''){
          return pics;
        }
        let albumPics = this.value.albumPics.split(',');
        for(let i=0;i<albumPics.length;i++){
          pics.push(albumPics[i]);
        }
        return pics;
      },
      set:function (newValue) {
        if (newValue == null || newValue.length === 0) {
          this.value.pic = null;
          this.value.albumPics = null;
        } else {
          this.value.pic = newValue[0];
          this.value.albumPics = '';
          if (newValue.length > 1) {
            for (let i = 1; i < newValue.length; i++) {
              this.value.albumPics += newValue[i];
              if (i !== newValue.length - 1) {
                this.value.albumPics += ',';
              }
            }
          }
        }
      }
    },
  },
  methods: {
    getInputListArr(inputList) {
      return inputList.split(',');
    },
    getParamInputList(inputList) {
      return inputList.split(',');
    },
    handlePrev() {
      this.$emit('prevStep')
    },
    getOptionStr(arr) {
      let str = '';
      for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i != arr.length - 1) {
          str += ',';
        }
      }
      return str;
    },
    //合并商品属性
    mergeProductAttrValue() {
      this.value.productAttributeValueList = [];
      for (let i = 0; i < this.selectProductAttr.length; i++) {
        let attr = this.selectProductAttr[i];
        if (attr.handAddStatus === 1 && attr.options != null && attr.options.length > 0) {
          this.value.productAttributeValueList.push({
            productAttributeId: attr.id,
            value: this.getOptionStr(attr.options)
          });
        }
      }
      for (let i = 0; i < this.selectProductParam.length; i++) {
        let param = this.selectProductParam[i];
        this.value.productAttributeValueList.push({
          productAttributeId: param.id,
          value: param.value
        });
      }
    },
    //合并商品属性图片
    mergeProductAttrPics() {
      for (let i = 0; i < this.selectProductAttrPics.length; i++) {
        for (let j = 0; j < this.value.skuStockList.length; j++) {
          let spData = JSON.parse(this.value.skuStockList[j].spData);
          if (spData[0].value === this.selectProductAttrPics[i].name) {
            this.value.skuStockList[j].pic = this.selectProductAttrPics[i].pic;
          }
        }
      }
    },
    handleNext() {
      this.mergeProductAttrValue();
      this.mergeProductAttrPics();
      this.$emit('nextStep');
    },
    getProductAttrCateList() {
      let param = {pageNum: 1, pageSize: 100};
      productAttrCateList(param).then(response => {
        this.productAttributeCategoryOptions = [];
        let list = response.data.data.list;
        for (let i = 0; i < list.length; i++) {
          this.productAttributeCategoryOptions.push({label: list[i].name, value: list[i].id});
        }
      });
    },
  },
}
</script>

<style scoped>

</style>