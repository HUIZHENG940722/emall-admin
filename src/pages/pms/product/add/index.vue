<template>
  <ProductDetail :is-edit="false"></ProductDetail>
</template>

<script>
import ProductDetail from "@/components/ProductDetail";
export default {
  name: "AddProduct",
  components: {ProductDetail},
}
</script>

<style scoped>

</style>