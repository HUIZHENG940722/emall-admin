<template>
  <AddOrUpdateProductAttr :is-edit='true'></AddOrUpdateProductAttr>
</template>

<script>
import AddOrUpdateProductAttr from "@/components/ProductDetail/Attr/addOrUpdate";
export default {
  name: "UpdateProductAttr",
  components: {AddOrUpdateProductAttr},
}
</script>

<style scoped>

</style>