<template>
  <AddOrUpdateProductAttr :is-edit='false'></AddOrUpdateProductAttr>
</template>

<script>

import AddOrUpdateProductAttr from "@/components/ProductDetail/Attr/addOrUpdate";

export default {
  name: "AddProductAttr",
  components: {AddOrUpdateProductAttr},
}
</script>

<style scoped>

</style>