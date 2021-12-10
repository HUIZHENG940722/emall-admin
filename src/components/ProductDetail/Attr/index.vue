<template>
  <div style="margin-top: 50px">
    <el-form label-width="120px" style="width: 720px" size="small">
      <el-form-item label="属性类型：">
        <el-select placeholder="请选择属性类型">
          <el-option>
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品规格：">
        <el-card shadow="never" class="cardBg">
          <div>
            商品属性名称：
            <el-checkbox-group>
              <el-checkbox class="littleMarginLeft"></el-checkbox>
            </el-checkbox-group>
            <div>
              <el-checkbox-group>
                <div style="display: inline-block"
                     class="littleMarginLeft">
                  <el-checkbox></el-checkbox>
                  <el-button type="text" class="littleMarginLeft">删除
                  </el-button>
                </div>
              </el-checkbox-group>
              <el-input style="width: 160px;margin-left: 10px" clearable></el-input>
              <el-button class="littleMarginLeft">增加</el-button>
            </div>
          </div>
        </el-card>
        <el-table style="width: 100%;margin-top: 20px"
                  border>
          <el-table-column
              align="center">
            <template slot-scope="">

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
              width="80"
              align="center">
            <template slot-scope="">
              <el-input></el-input>
            </template>
          </el-table-column>
          <el-table-column
              label="SKU编号"
              align="center">
            <template slot-scope="">
              <el-input></el-input>
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
      <el-form-item label="属性图片：">
        <el-card shadow="never" class="cardBg">
          <div>
            <span>:</span>
            <single-upload style="width: 300px;display: inline-block;margin-left: 10px"></single-upload>
          </div>
        </el-card>
      </el-form-item>
      <el-form-item label="商品参数：">
        <el-card shadow="never" class="cardBg">
          <div>
            <div class="paramInputLabel">:</div>
            <el-select class="paramInput">
              <el-option>
              </el-option>
            </el-select>
            <el-input class="paramInput"></el-input>
          </div>
        </el-card>
      </el-form-item>
      <el-form-item label="商品相册：">
        <multi-upload></multi-upload>
      </el-form-item>
      <el-form-item label="规格参数：">
        <el-tabs type="card">
          <el-tab-pane label="电脑端详情" name="pc">
            <tinymce :width="595" :height="300"></tinymce>
          </el-tab-pane>
          <el-tab-pane label="移动端详情" name="mobile">
            <tinymce :width="595" :height="300"></tinymce>
          </el-tab-pane>
        </el-tabs>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button size="medium">上一步，填写商品促销</el-button>
        <el-button type="primary" size="medium">下一步，选择商品关联</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ProductAttrDetail"
}
</script>

<style scoped>

</style>