<template>
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
            style="float: right"
            type="primary"
            size="small">
          查询结果
        </el-button>
        <el-button
            style="float: right;margin-right: 15px"
            size="small">
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input v-model="listQuery.keyword" style="width: 203px" placeholder="商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品货号：">
            <el-input v-model="listQuery.productSn" style="width: 203px" placeholder="商品货号"></el-input>
          </el-form-item>
          <el-form-item label="商品分类：">
            <el-cascader
                v-model="selectProductCateValue"
                :options="productCateOptions"
                clearable>
            </el-cascader>
          </el-form-item>
          <el-form-item label="商品品牌：">
            <el-select v-model="listQuery.brandId" placeholder="请选择品牌" clearable>
              <el-option v-for="item in brandOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上架状态：">
            <el-select v-model="listQuery.publishStatus" placeholder="全部" clearable>
              <el-option v-for="item in publishStatusOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态：">
            <el-select v-model="listQuery.verifyStatus" placeholder="全部" clearable>
              <el-option v-for="item in verifyStatusOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button
          @click="handleAddProduct()"
          class="btn-add"
          size="mini">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="productTable"
                style="width: 100%"
                border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="">商品编号</template>
        </el-table-column>
        <el-table-column label="商品图片" width="120" align="center">
          <template slot-scope=""><img style="height: 80px"></template>
        </el-table-column>
        <el-table-column label="商品名称" align="center">
          <template slot-scope="">
            <p>商品名称</p>
            <p>品牌</p>
          </template>
        </el-table-column>
        <el-table-column label="价格/货号" width="120" align="center">
          <template slot-scope="">
            <p>价格</p>
            <p>货号</p>
          </template>
        </el-table-column>
        <el-table-column label="标签" width="140" align="center">
          <template slot-scope="">
            <p>上架：
              <el-switch
                  :active-value="1"
                  :inactive-value="0">
              </el-switch>
            </p>
            <p>新品：
              <el-switch
                  :active-value="1"
                  :inactive-value="0">
              </el-switch>
            </p>
            <p>推荐：
              <el-switch
                  :active-value="1"
                  :inactive-value="0">
              </el-switch>
            </p>
          </template>
        </el-table-column>
        <el-table-column label="排序" width="100" align="center">
          <template slot-scope="">排序</template>
        </el-table-column>
        <el-table-column label="SKU库存" width="100" align="center">
          <template slot-scope="">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
          </template>
        </el-table-column>
        <el-table-column label="销量" width="100" align="center">
          <template slot-scope="">销量</template>
        </el-table-column>
        <el-table-column label="审核状态" width="100" align="center">
          <template slot-scope="">
            <p>审核状态</p>
            <p>
              <el-button type="text">审核详情
              </el-button>
            </p>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="">
            <p>
              <el-button
                  size="mini">查看
              </el-button>
              <el-button
                  size="mini">编辑
              </el-button>
            </p>
            <p>
              <el-button
                  size="mini">日志
              </el-button>
              <el-button
                  size="mini"
                  type="danger">删除
              </el-button>
            </p>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="batch-operate-container">
      <el-select
          size="small"
          v-model="operateType"
          placeholder="批量操作">
        <el-option v-for="item in operates"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <el-button
          style="margin-left: 20px"
          class="search-button"
          type="primary"
          size="small">
        确定
      </el-button>
    </div>
    <div class="pagination-container">
      <el-pagination
          background
          layout="total, sizes,prev, pager, next,jumper">
      </el-pagination>
    </div>
    <el-dialog
        title="编辑货品信息"
        width="40%">
      <span>商品货号：</span>
      <span>商品货号</span>
      <el-input placeholder="按sku编号搜索" size="small" style="width: 50%;margin-left: 20px">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-table style="width: 100%;margin-top: 20px"
                border>
        <el-table-column
            label="SKU编号"
            align="center">
          <template slot-scope="">
            <el-input></el-input>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="">
            sku
          </template>
        </el-table-column>
        <el-table-column
            label="销售价格"
            width="80"
            align="center">
          <template slot-scope="">
            <el-input></el-input>
          </template>
        </el-table-column>
        <el-table-column
            label="商品库存"
            width="80"
            align="center">
          <template slot-scope="">
            <el-input></el-input>
          </template>
        </el-table-column>
        <el-table-column
            label="库存预警值"
            width="100"
            align="center">
          <template slot-scope="">
            <el-input></el-input>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {productCategoryListWithChildren} from "@/api/productCate";
import {productBrandList} from "@/api/productBrand";

const defaultListQuery = {
  keyword: null,
  pageNum: 1,
  pageSize: 5,
  publishStatus: null,
  verifyStatus: null,
  productSn: null,
  productCategoryId: null,
  brandId: null
};

export default {
  name: "ProductList",
  created() {
    this.getProductCateLevelList();
    this.getProductBrandList();
  },
  data() {
    return {
      productCateOptions: [],
      brandOptions: [],
      publishStatusOptions: [
        {
          value: 1,
          label: '上架'
        },
        {
          value: 0,
          label: '下架'
        }
      ],
      verifyStatusOptions: [
        {
          value: 1,
          label: '审核通过'
        }, {
          value: 0,
          label: '未审核'
        }
      ],
      operates: [
        {
          label: "商品上架",
          value: "publishOn"
        },
        {
          label: "商品下架",
          value: "publishOff"
        },
        {
          label: "设为推荐",
          value: "recommendOn"
        },
        {
          label: "取消推荐",
          value: "recommendOff"
        },
        {
          label: "设为新品",
          value: "newOn"
        },
        {
          label: "取消新品",
          value: "newOff"
        },
        {
          label: "转移到分类",
          value: "transferCategory"
        },
        {
          label: "移入回收站",
          value: "recycle"
        }
      ],
      operateType: null,
      selectProductCateValue: null,
      listQuery: Object.assign({}, defaultListQuery),
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
    handleAddProduct() {
      this.$router.push({path: '/pms/addProduct'});
    },
  }
}
</script>

<style scoped>

</style>