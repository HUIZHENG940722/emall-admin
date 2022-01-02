<template>
  <el-card class="form-container" shadow="never">
    <div v-for="(cate,index) in allResourceCate" :class="index===0?'top-line':null" :key="'cate'+cate.id">
      <el-row class="table-layout" style="background: #F2F6FC;">
        <el-checkbox v-model="cate.checked"
                     :indeterminate="isIndeterminate(cate.id)"
                     @change="handleCheckAllChange(cate)">
          {{cate.name}}
        </el-checkbox>
      </el-row>
      <el-row class="table-layout">
        <el-col :span="8" v-for="resource in getResourceByCate(cate.id)" :key="resource.id" style="padding: 4px 0">
          <el-checkbox v-model="resource.checked" @change="handleCheckChange(resource)">
            {{resource.name}}
          </el-checkbox>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 20px" align="center">
      <el-button type="primary" @click="handleSave()">保存</el-button>
      <el-button @click="handleClear()">清空</el-button>
    </div>

  </el-card>
</template>

<script>
import {getAllCateList} from "@/api/resourceCategory";
import {getAllResourceList} from "@/api/resource";
import {allocResource, getResourceListByRole} from "@/api/role";

export default {
  name: "AllocResource",
  data() {
    return {
      allResourceCate: null,
      roleId: null,
      allResource: null,
    }
  },
  created() {
    this.roleId = this.$route.query.roleId;
    this.allResourceCateList();
  },
  methods: {
    getResourceChecked(resourceId,allocResource){
      if(allocResource==null||allocResource.length===0) return false;
      for(let i=0;i<allocResource.length;i++){
        if(allocResource[i].id===resourceId){
          return true;
        }
      }
      return false;
    },
    isAllChecked(categoryId) {
      let cateResources = this.getResourceByCate(categoryId);
      if (cateResources == null || cateResources.length === 0) return false;
      let checkedCount = 0;
      for (let i = 0; i < cateResources.length; i++) {
        if (cateResources[i].checked === true) {
          checkedCount++;
        }
      }
      if(checkedCount===0){
        return false;
      }
      return checkedCount === cateResources.length;
    },
    getResourceByRole(roleId) {
      getResourceListByRole(roleId).then(response => {
        let allocResource = response.data;
        this.allResource.forEach(item => {
          item.checked = this.getResourceChecked(item.id,allocResource);
        });
        this.allResourceCate.forEach(item => {
          item.checked = this.isAllChecked(item.id);
        });
        this.$forceUpdate();
      });
    },
    allResourceList() {
      getAllResourceList().then(response => {
        this.allResource = response.data;
        for (let i = 0; i < this.allResource.length; i++) {
          this.allResource[i].checked = false;
        }
        this.getResourceByRole(this.roleId);
      });
    },
    allResourceCateList() {
      getAllCateList().then(response => {
        this.allResourceCate = response.data;
        for (let i = 0; i < this.allResourceCate.length; i++) {
          this.allResourceCate[i].checked = false;
        }
        this.allResourceList();
      });
    },
    isIndeterminate(categoryId) {
      let cateResources = this.getResourceByCate(categoryId);
      if (cateResources == null) return false;
      let checkedCount = 0;
      for (let i = 0; i < cateResources.length; i++) {
        if (cateResources[i].checked === true) {
          checkedCount++;
        }
      }
      return !(checkedCount === 0 || checkedCount === cateResources.length);
    },
    handleCheckAllChange(cate) {
      let cateResources = this.getResourceByCate(cate.id);
      for (let i = 0; i < cateResources.length; i++) {
        cateResources[i].checked = cate.checked;
      }
      this.$forceUpdate();
    },
    getResourceByCate(categoryId) {
      let cateResource = [];
      if (this.allResource == null) return null;
      for (let i = 0; i < this.allResource.length; i++) {
        let resource = this.allResource[i];
        if (resource.categoryId === categoryId) {
          cateResource.push(resource);
        }
      }
      return cateResource;
    },
    handleCheckChange(resource) {
      this.allResourceCate.forEach(item => {
        if (item.id === resource.categoryId) {
          item.checked = this.isAllChecked(resource.categoryId);
        }
      });
      this.$forceUpdate();
    },
    handleSave() {
      this.$confirm('是否分配资源?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let checkedResourceIds = new Set();
        if (this.allResource != null && this.allResource.length > 0) {
          this.allResource.forEach(item => {
            if (item.checked) {
              checkedResourceIds.add(item.id);
            }
          });
        }
        let params = new URLSearchParams();
        params.append('roleId', this.roleId);
        params.append('resourceIds', Array.from(checkedResourceIds));
        allocResource(params).then(() => {
          this.$message({
            message: '分配成功',
            type: 'success',
            duration: 1000
          });
          this.$router.back();
        });
      })
    },
    handleClear() {

    },
  }
}
</script>

<style scoped>
.table-layout {
  padding: 20px;
  border-left: 1px solid #DCDFE6;
  border-right: 1px solid #DCDFE6;
  border-bottom: 1px solid #DCDFE6;
}

.top-line {
  border-top: 1px solid #DCDFE6;
}
</style>