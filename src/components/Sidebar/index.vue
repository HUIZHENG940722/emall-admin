<template>
  <scroll-bar>
    <el-menu
        mode="vertical"
        :show-timeout="200"
        :default-active="$route.path"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
    >
      <sidebar-item :routes="routeTree"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import ScrollBar from "@/components/ScrollBar";
import SidebarItem from "@/components/Sidebar/item";
import store from "@/store";

export default {
  name: "Sidebar",
  components: {SidebarItem, ScrollBar},
  computed: {
    routeTree() {
      return store.getters.routeMap;
    },
    /*isCollapse() {
      return !this.sidebar.opened
    }*/
  }
}
</script>

<style scoped>
</style>
