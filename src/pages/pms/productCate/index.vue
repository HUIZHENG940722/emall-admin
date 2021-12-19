<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets" style="margin-top: 5px"></i>
      <span style="margin-top: 5px">数据列表</span>
      <el-button class="btn-add"
                 @click="handleAddProductCate()"
                 size="mini">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table :data="list" style="width: 100%" border>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="分类名称" align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column label="级别" width="100" align="center">
          <template slot-scope="scope">{{scope.row.level}}</template>
        </el-table-column>
        <el-table-column label="商品数量" width="100" align="center">
          <template slot-scope="scope">{{scope.row.productCount}}</template>
        </el-table-column>
        <el-table-column label="数量单位" width="100" align="center">
          <template slot-scope="scope">{{scope.row.productUnit}}</template>
        </el-table-column>
        <el-table-column label="导航栏" width="100" align="center">
          <template slot-scope="scope">
            <el-switch
                :active-value="1"
                :inactive-value="0"
                v-model="scope.row.navStatus">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="是否显示" width="100" align="center">
          <template slot-scope="scope">
            <el-switch
                :active-value="1"
                :inactive-value="0"
                v-model="scope.row.showStatus">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="排序" width="100" align="center">
          <template slot-scope="scope">{{scope.row.sort}}</template>
        </el-table-column>
        <el-table-column label="设置" width="200" align="center">
          <template slot-scope="">
            <el-button size="mini">查看下级
            </el-button>
            <el-button size="mini">转移商品
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="">
            <el-button
                size="mini">编辑
            </el-button>
            <el-button
                size="mini"
                type="danger">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination
          background
          layout="total, sizes,prev, pager, next,jumper"
          :page-size="listQuery.pageSize"
          :page-sizes="[5,10,15]"
          :current-page.sync="listQuery.pageNum"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {getFirstLevelProductCateList} from "@/api/productCate";

export default {
  name: "ProductCateList",
  created() {
    this.getFirstProductCateList();
  },
  data() {
    return {
      list: null,
      listQuery: {
        pageNum: 1,
        pageSize: 5
      },
      total: 0,
      parentId: 0
    }
  },
  methods: {
    getFirstProductCateList() {
      getFirstLevelProductCateList(this.parentId, this.listQuery).then(response => {
        this.list = response.data.data.list;
        this.total = response.data.data.total;
      });
    },
    handleAddProductCate() {
      this.$router.push('/pms/addProductCate');
    }
  }
}
</script>

<style scoped>

</style>