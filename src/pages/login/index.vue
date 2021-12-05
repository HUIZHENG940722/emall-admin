<template>
  <div>
    <el-card class="login-form-layout">
      <el-form label-position="left">
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"/>
        </div>
        <h2 class="login-title color-main">mall-admin-web</h2>
        <el-form-item prop="username">
          <el-input name="username" v-model="loginForm.username" type="text" placeholder="请输入用户名">
            <span slot="prefix">
              <svg-icon icon-class="user" class-name="color-main"/>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" v-model="loginForm.password" type="password" placeholder="请输入密码">
            <span slot="prefix">
              <svg-icon icon-class="password" class="color-main"></svg-icon>
            </span>
            <span slot="suffix">
              <svg-icon icon-class="eye" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px;text-align: center">
          <el-button style="width: 45%" @click="login">
            登录
          </el-button>
          <el-button style="width: 45%">
            获取体验账号
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <img :src="login_center_bg" class="login-center-layout">
  </div>
</template>

<script>
import login_center_bg from '@/assets/login_center_bg.png';
// import router, {firstRouterMap} from "@/router";

export default {
  name: "Login",
  data() {
    return {
      login_center_bg,
      loginForm: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      this.$router.push({path: '/'});
    },
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
.login-title {
  text-align: center;
}
</style>