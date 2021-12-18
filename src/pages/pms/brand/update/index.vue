<template>
  <AddOrUpdateBrand :is-edit="true"></AddOrUpdateBrand>
</template>

<script>
import AddOrUpdateBrand from "@/components/Brand/AddOrUpdate";
export default {
  name: "UpdateBrand",
  components: {AddOrUpdateBrand}
}
</script>

<style scoped>

</style>