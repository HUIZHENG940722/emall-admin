<template>
  <div class="app-container">
    <el-card shadow="never" class="operate-container">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button size="mini" class="btn-add" @click="handleAdd()">添加</el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="resourceCategoryTable"
                :data="list"
                style="width: 100%;"
                v-loading="listLoading" border>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="名称" align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column label="创建时间" align="center">
          <template slot-scope="scope">{{scope.row.createdTime | formatDateTime}}</template>
        </el-table-column>
        <el-table-column label="排序" align="center">
          <template slot-scope="scope">{{scope.row.sort}}</template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="text"
                       @click="handleUpdate(scope.$index, scope.row)">编辑
            </el-button>
            <el-button size="mini"
                       type="text"
                       @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
        title="添加分类"
        :visible.sync="dialogVisible"
        width="40%">
      <el-form :model="resourceCategory"
               ref="resourceCategoryForm"
               label-width="150px" size="small">
        <el-form-item label="名称：">
          <el-input v-model="resourceCategory.name" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="排序：">
          <el-input v-model="resourceCategory.sort" style="width: 250px"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="handleDialogConfirm()" size="small">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {formatDate} from "@/utils/dateUtils";

const defaultResourceCategory={
  name:null,
  sort:0
};
export default {
  name: "ResourceCategoryList",
  data() {
    return {
      list: null,
      listLoading: false,
      dialogVisible:false,
      isEdit:false,
      resourceCategory:Object.assign({},defaultResourceCategory)
    }
  },
  methods: {
    handleAdd() {

    },
    handleUpdate(index,row){
      console.log(index, row)
    },
    handleDelete(index,row){
      console.log(index, row);
    },
    handleDialogConfirm() {

    },
  },
  filters: {
    formatDateTime(time) {
      if (time == null || time === '') {
        return 'N/A';
      }
      let date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>

</style>