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
        <el-form :inline="true" size="small" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input style="width: 203px" placeholder="商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品货号：">
            <el-input style="width: 203px" placeholder="商品货号"></el-input>
          </el-form-item>
          <el-form-item label="商品分类：">
            <el-cascader
                clearable>
            </el-cascader>
          </el-form-item>
          <el-form-item label="商品品牌：">
            <el-select placeholder="请选择品牌" clearable>
              <el-option>
                品牌列表
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上架状态：">
            <el-select placeholder="全部" clearable>
              <el-option>
                品牌列表
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态：">
            <el-select placeholder="全部" clearable>
              <el-option>
                审核状态
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
          placeholder="批量操作">
        <el-option>
          批量操作
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
export default {
  name: "ProductList",
}
</script>

<style scoped>

</style>