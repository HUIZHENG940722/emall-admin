<template>
  <div style="margin-top: 50px">
    <el-form label-width="120px" style="width: 600px" size="small">
      <el-form-item label="赠送积分：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="赠送成长值：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="积分购买限制：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="预告商品：">
        <el-switch>
        </el-switch>
      </el-form-item>
      <el-form-item label="商品上架：">
        <el-switch>
        </el-switch>
      </el-form-item>
      <el-form-item label="商品推荐：">
        <span style="margin-right: 10px">新品</span>
        <el-switch>
        </el-switch>
        <span style="margin-left: 10px;margin-right: 10px">推荐</span>
        <el-switch>
        </el-switch>
      </el-form-item>
      <el-form-item label="服务保证：">
        <el-checkbox-group>
          <el-checkbox :label="1">无忧退货</el-checkbox>
          <el-checkbox :label="2">快速退款</el-checkbox>
          <el-checkbox :label="3">免费包邮</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="详细页标题：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="详细页描述：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="商品关键字：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="商品备注：">
        <el-input type="textarea" :autoSize="true"></el-input>
      </el-form-item>
      <el-form-item label="选择优惠方式：">
        <el-radio-group v-model="value.promotionType" size="small">
          <el-radio-button :label="0">无优惠</el-radio-button>
          <el-radio-button :label="1">特惠促销</el-radio-button>
          <el-radio-button :label="2">会员价格</el-radio-button>
          <el-radio-button :label="3">阶梯价格</el-radio-button>
          <el-radio-button :label="4">满减价格</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <div>
          开始时间：
          <el-date-picker
              type="datetime"
              placeholder="选择开始时间">
          </el-date-picker>
        </div>
        <div class="littleMargin">
          结束时间：
          <el-date-picker
              type="datetime"
              placeholder="选择结束时间">
          </el-date-picker>
        </div>
        <div class="littleMargin">
          促销价格：
          <el-input style="width: 220px" placeholder="输入促销价格"></el-input>
        </div>

      </el-form-item>
      <el-form-item>
        <div>
          会员等级：
          <el-input style="width: 200px"></el-input>
        </div>
      </el-form-item>
      <el-form-item>
        <el-table style="width: 80%" border>
          <el-table-column
              label="数量"
              align="center"
              width="120">
            <template slot-scope="">
              <el-input></el-input>
            </template>
          </el-table-column>
          <el-table-column
              label="折扣"
              align="center"
              width="120">
            <template slot-scope="">
              <el-input></el-input>
            </template>
          </el-table-column>
          <el-table-column
              align="center"
              label="操作">
            <template slot-scope="">
              <el-button type="text">删除</el-button>
              <el-button type="text">添加</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-table style="width: 80%" border>
          <el-table-column
              label="满"
              align="center"
              width="120">
            <template slot-scope="">
              <el-input></el-input>
            </template>
          </el-table-column>
          <el-table-column
              label="立减"
              align="center"
              width="120">
            <template slot-scope="">
              <el-input></el-input>
            </template>
          </el-table-column>
          <el-table-column
              align="center"
              label="操作">
            <template slot-scope="">
              <el-button type="text">删除</el-button>
              <el-button type="text">添加</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button size="medium">上一步，填写商品信息</el-button>
        <el-button type="primary" size="medium">下一步，填写商品属性</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ProductSaleDetail"
}
</script>

<style scoped>

</style>