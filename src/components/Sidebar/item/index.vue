<template>

  <div class="menu-wrapper">
    <template v-for="route in routes.filter(item=> {return item.children&&!item.hidden})">
      <router-link v-if="hasOneShowingChildren(route.children)&&!route.children[0].children"
                   :to="route.path + '/' + route.children[0].path" :key="route.children[0].name">
        <el-menu-item :index="route.path + '/' + route.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <svg-icon v-if="route.children[0].meta&&route.children[0].meta.icon" :icon-class="route.children[0].meta.icon"></svg-icon>
          <span v-if="route.children[0].meta&&route.children[0].meta.title" slot="title">{{route.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>
      <el-submenu v-else :index="route.name||route.path" :key="route.name">
        <template slot="title" >
          <svg-icon v-if="route.meta&&route.meta.icon" :icon-class="route.meta.icon"></svg-icon>
          <span v-if="route.meta&&route.meta.title" slot="title">{{route.meta.title}}</span>
        </template>
        <template v-for="child in route.children.filter(item => {return !item.hidden})">
          <SidebarItem :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path">
          </SidebarItem>
          <router-link v-else :to="route.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="route.path+'/'+child.path">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
<!--  <div class="menu-wrapper">
    <template v-for="item in routes.filter(data => !data.hidden && data.children)">

      <router-link v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" :to="item.path+'/'+item.children[0].path"
                   :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children.filter(data => !data.hidden)">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>

          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>-->
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasOneShowingChildren(children) {
      const showingChildren = children.filter(item => {
        return !item.hidden;
      });
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    }
  }
}
</script>

<style scoped>

</style>
