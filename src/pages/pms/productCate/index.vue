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
          <template slot-scope="scope">{{scope.row.level|levelFilter}}</template>
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
          <template slot-scope="scope">
            <el-button size="mini"
                       :disabled="scope.row.level|disableNextLevel"
                       @click="handleShowNextLevel(scope.$index, scope.row)">查看下级
            </el-button>
            <el-button size="mini">转移商品
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
import {deleteProductCate, getFirstLevelProductCateList} from "@/api/productCate";

export default {
  name: "ProductCateList",
  created() {
    this.resetParentId();
    this.getProductCateListForP();
  },
  watch: {
    $route() {
      this.resetParentId();
      this.getProductCateListForP();
    }
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
    resetParentId(){
      this.listQuery.pageNum = 1;
      if (this.$route.query.parentId != null) {
        this.parentId = this.$route.query.parentId;
      } else {
        this.parentId = 0;
      }
    },
    getProductCateListForP() {
      getFirstLevelProductCateList(this.parentId, this.listQuery).then(response => {
        this.list = response.data.data.list;
        this.total = response.data.data.total;
      });
    },
    handleAddProductCate() {
      this.$router.push('/pms/addProductCate');
    },
    handleShowNextLevel(index, row) {
      this.$router.push({
        path: '/pms/productCate',
        query: {
          parentId: row.id
        }
      });
    },
    handleUpdate(index, row) {
      this.$router.push({
        path: '/pms/updateProductCate',
        query: {
          id: row.id
        }
      });
    },
    handleDelete(index, row) {
      this.$confirm('是否要删除该品牌', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteProductCate(row.id).then(() => {
          this.$message({
            message: '删除成功',
            type: 'success',
            duration: 1000
          });
          this.getProductCateListForP();
        })
      })
    },
    handleSizeChange(val) {
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      this.getProductCateListForP();
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val;
      this.getProductCateListForP();
    }
  },
  filters: {
    levelFilter(value) {
      if (value === 0) {
        return '一级';
      } else if (value === 1) {
        return '二级';
      }
    },
    disableNextLevel(val) {
      if (val === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
</script>

<style scoped>

</style>