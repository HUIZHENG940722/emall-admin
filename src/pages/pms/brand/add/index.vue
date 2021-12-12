<template>
  <AddOrUpdateBrand :is-edit='false'></AddOrUpdateBrand>
</template>

<script>
import AddOrUpdateBrand from "@/components/Brand/AddOrUpdate";
export default {
  name: "AddBrand",
  components: {AddOrUpdateBrand}
}
</script>

<style scoped>

</style>