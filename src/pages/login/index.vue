<template>
  <div>
    <img :src="login_center_bg" class="login-center-layout">
    <el-card class="login-form-layout">
      <el-form label-position="left">

      </el-form>
    </el-card>
  </div>
</template>

<script>
import login_center_bg from '@/assets/login_center_bg.png';

export default {
  name: "Login",
  data() {
    return {
      login_center_bg,
    }
  }
}
</script>

<style scoped>
.login-center-layout {
  background: #409EEF;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409EFF;
}
</style>