<template>
  <el-card class="form-container" shadow="never">
    <el-steps :active="active" finish-status="success" align-center>
      <el-step title="填写商品信息"></el-step>
      <el-step title="填写商品促销"></el-step>
      <el-step title="填写商品属性"></el-step>
      <el-step title="选择商品关联"></el-step>
    </el-steps>
    <ProductInfoDetail v-show="showStatus[0]" :is-edit="isEdit" v-model="productParam" @nextStep="nextStep">
    </ProductInfoDetail>
    <ProductSaleDetail v-show="showStatus[1]" v-model="productParam" :is-edit="isEdit"
                       @nextStep="nextStep" @prevStep="prevStep">
    </ProductSaleDetail>
    <ProductAttrDetail v-show="showStatus[2]"
                       v-model="productParam"
                       :is-edit="isEdit"
                       @nextStep="nextStep"
                       @prevStep="prevStep">
    </ProductAttrDetail>
    <ProductRelationDetail v-show="showStatus[3]" v-model="productParam" :is-edit="isEdit" @prevStep="prevStep">
    </ProductRelationDetail>
  </el-card>
</template>

<script>

import ProductInfoDetail from "@/components/ProductDetail/Info";
import ProductSaleDetail from "@/components/ProductDetail/Sale";
import ProductAttrDetail from "@/components/ProductDetail/Attr";
import ProductRelationDetail from "@/components/ProductDetail/Relation";

const defaultProductParam = {
  albumPics: '',
  brandId: null,
  brandName: '',
  deleteStatus: 0,
  description: '',
  detailDesc: '',
  detailHtml: '',
  detailMobileHtml: '',
  detailTitle: '',
  freightTemplateId: 0,
  flashPromotionCount: 0,
  flashPromotionId: 0,
  flashPromotionPrice: 0,
  flashPromotionSort: 0,
  giftPoint: 0,
  giftGrowth: 0,
  keywords: '',
  lowStock: 0,
  name: '',
  newStatus: 0,
  note: '',
  originalPrice: 0,
  pic: '',
  //会员价格{memberLevelId: 0,memberPrice: 0,memberLevelName: null}
  memberPriceList: [],
  //商品满减
  productFullReductionList: [{fullPrice: 0, reducePrice: 0}],
  //商品阶梯价格
  productLadderList: [{count: 0,discount: 0,price: 0}],
  previewStatus: 0,
  price: 0,
  productAttributeCategoryId: null,
  //商品属性相关{productAttributeId: 0, value: ''}
  productAttributeValueList: [],
  //商品sku库存信息{lowStock: 0, pic: '', price: 0, sale: 0, skuCode: '', spData: '', stock: 0}
  skuStockList: [],
  //商品相关专题{subjectId: 0}
  subjectProductRelationList: [],
  //商品相关优选{preferenceAreaId: 0}
  preferenceAreaProductRelationList: [],
  productCategoryId: null,
  productCategoryName: '',
  productSn: '',
  promotionEndTime: '',
  promotionPerLimit: 0,
  promotionPrice: null,
  promotionStartTime: '',
  promotionType: 0,
  publishStatus: 0,
  recommendStatus: 0,
  sale: 0,
  serviceIds: '',
  sort: 0,
  stock: 0,
  subTitle: '',
  unit: '',
  usePointLimit: 0,
  verifyStatus: 0,
  weight: 0
};
export default {
  name: "ProductDetail",
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  components: {ProductRelationDetail, ProductAttrDetail, ProductSaleDetail, ProductInfoDetail},
  data() {
    return {
      active: 0,
      showStatus: [true, false, false, false],
      productParam: Object.assign({}, defaultProductParam),
    }
  },
  methods: {
    hideAll() {
      for (let i = 0; i < this.showStatus.length; i++) {
        this.showStatus[i] = false;
      }
    },
    nextStep() {
      if (this.active < this.showStatus.length -1) {
        this.active++;
        this.hideAll();
        this.showStatus[this.active] = true;
      }
    },
    prevStep() {
      if (this.active > 0 && this.active < this.showStatus.length) {
        this.active--;
        this.hideAll();
        this.showStatus[this.active] = true;
      }
    },
  }
}
</script>

<style scoped>

</style>