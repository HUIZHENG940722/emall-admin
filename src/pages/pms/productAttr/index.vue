<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets" style="margin-top: 5px"></i>
      <span style="margin-top: 5px">数据列表</span>
      <el-button
          class="btn-add"
          size="mini"
          @click="addProductAttrCate()">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="productAttrCateTable"
                style="width: 100%"
                :data="list"
                border>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="类型名称" align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column label="属性数量" width="200" align="center">
          <template slot-scope="scope">{{scope.row.attributeCount==null?0:scope.row.attributeCount}}</template>
        </el-table-column>
        <el-table-column label="参数数量" width="200" align="center">
          <template slot-scope="scope">{{scope.row.paramCount==null?0:scope.row.paramCount}}</template>
        </el-table-column>
        <el-table-column label="设置" width="200" align="center">
          <template slot-scope="">
            <el-button
                size="mini">属性列表
            </el-button>
            <el-button
                size="mini">参数列表
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
    <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogVisible"
        width="30%">
      <el-form ref="productAttrCatForm" :model="productAttrCate" :rules="rules" label-width="120px">
        <el-form-item label="类型名称" prop="name">
          <el-input v-model="productAttrCate.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm('productAttrCatForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {createProductAttrCate, getProductAttrCateList} from "@/api/productAttrCate";

export default {
  name: "ProductAttrCateList",
  data() {
    return {
      list: null,
      listQuery: {
        pageNum: 1,
        pageSize: 5
      },
      total: 0,
      dialogTitle: null,
      dialogVisible: false,
      productAttrCate:{
        name:'',
        id:null
      },
      rules: {
        name: [
          { required: true, message: '请输入类型名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    productAttrCateList() {
      getProductAttrCateList(this.listQuery).then(response => {
        this.list = response.data.list;
        this.total = response.data.total;
      });
    },
    addProductAttrCate() {
      this.dialogVisible = true;
      this.dialogTitle = "添加类型";
    },
    handleConfirm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = new URLSearchParams();
          data.append("name",this.productAttrCate.name);
          if (this.dialogTitle === '添加类型') {
            createProductAttrCate(data).then(() => {
              this.$message({
                message: '添加成功',
                type: 'success',
                duration:1000
              });
              this.dialogVisible = false;
              this.productAttrCateList();
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>

</style>