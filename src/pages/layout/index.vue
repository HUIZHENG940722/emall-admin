<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <Navbar></Navbar>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import AppMain from "@/components/AppMain";
// import ResizeMixin from '@/pages/layout/ResizeHandler';

export default {
  name: "Layout",
  components: {Navbar, Sidebar, AppMain},
  // mixins: [ResizeMixin],
  computed: {
    /*sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }*/
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>