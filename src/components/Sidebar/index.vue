<template>
  <ScrollBar>
    <el-menu mode="vertical"
             :show-timeout="200"
             :default-active="$route.path"
             background-color="#304156"
             text-color="#bfcbd9"
             active-text-color="#409EFF">
      <SidebarItem :routes="routes">

      </SidebarItem>
    </el-menu>
  </ScrollBar>
</template>

<script>
import ScrollBar from "@/components/ScrollBar";
import SidebarItem from "@/components/Sidebar/item";
import {firstRouterMap} from "@/router";
export default {
  name: "Sidebar",
  components: {SidebarItem, ScrollBar},
  computed: {
    routes() {
      return firstRouterMap;
    }
  }
}
</script>

<style scoped>
</style>