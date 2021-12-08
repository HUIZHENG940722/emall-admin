<template>
  <div style="margin-top: 50px">
    <el-form label-width="120px"
             style="width: 680px"
             size="small">
      <el-form-item label="关联专题：">
        <el-transfer
            style="display: inline-block"
            filterable
            filter-placeholder="请输入专题名称">
        </el-transfer>
      </el-form-item>
      <el-form-item label="关联优选：">
        <el-transfer
            style="display: inline-block"
            filterable
            filter-placeholder="请输入优选名称">
        </el-transfer>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button size="medium">上一步，填写商品属性</el-button>
        <el-button type="primary" size="medium">完成，提交商品</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ProductRelationDetail"
}
</script>

<style scoped>

</style>