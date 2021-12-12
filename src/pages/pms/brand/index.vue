<template>
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
            style="float: right"
            @click="searchBrandList()"
            type="primary"
            size="small">
          查询结果
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input style="width: 203px" v-model="listQuery.keyword" placeholder="品牌名称/关键字"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button
          class="btn-add"
          @click="addBrand()"
          size="mini">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="brandTable"
                :data="list"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="品牌名称" align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column label="品牌首字母" width="100" align="center">
          <template slot-scope="scope">{{scope.row.firstLetter}}</template>
        </el-table-column>
        <el-table-column label="排序" width="100" align="center">
          <template slot-scope="scope">{{scope.row.sort}}</template>
        </el-table-column>
        <el-table-column label="品牌制造商" width="100" align="center">
          <template slot-scope="scope">
            <el-switch
                @change="handleFactoryStatusChange(scope.$index, scope.row)"
                :active-value="1"
                :inactive-value="0"
                v-model="scope.row.factoryStatus">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="是否显示" width="100" align="center">
          <template slot-scope="scope">
            <el-switch
                @change="handleShowStatusChange(scope.$index, scope.row)"
                :active-value="1"
                :inactive-value="0"
                v-model="scope.row.showStatus">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="相关" width="220" align="center">
          <template slot-scope="scope">
            <span>商品：</span>
            <el-button
                size="mini"
                type="text"
                @click="getProductList(scope.$index, scope.row)">100
            </el-button>
            <span>评价：</span>
            <el-button
                size="mini"
                type="text"
                @click="getProductCommentList(scope.$index, scope.row)">1000
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleUpdate(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="batch-operate-container">
      <el-select
          size="small"
          v-model="operateType" placeholder="批量操作">
        <el-option
            v-for="item in operates"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <el-button
          style="margin-left: 20px"
          class="search-button"
          @click="handleBatchOperate()"
          type="primary"
          size="small">
        确定
      </el-button>
    </div>
    <div class="pagination-container">
      <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
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
export default {
  name: "BrandList",
  data() {
    return {
      listQuery: {
        keyword: null,
        pageNum: 1,
        pageSize: 10
      },
      list: null,
      operateType: null,
      operates: [
        {
          label: "显示品牌",
          value: "showBrand"
        },
        {
          label: "隐藏品牌",
          value: "hideBrand"
        }
      ],
      total: 0,
    }
  },
  methods: {
    searchBrandList() {

    },
    addBrand() {
      this.$router.push({path: '/pms/addBrand'});
    },
    handleSelectionChange() {
    },
    handleFactoryStatusChange(index, row) {
      console.log(row);
    },
    getProductList(index, row) {
      console.log(row);
    },
    handleShowStatusChange(index, row) {
      console.log(row);
    },
    getProductCommentList(index, row) {
      console.log(row);
    },
    handleUpdate(index, row) {
      console.log(row);
    },
    handleDelete(index, row) {
      console.log(row);
    },
    handleBatchOperate() {

    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    }
  }
}
</script>

<style scoped>

</style>