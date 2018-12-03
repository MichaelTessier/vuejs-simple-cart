<template>
  <div class="co-product-group">
    <ProductItem 
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem'

export default {
  name: 'ProductList',

  components: {
    ProductItem
  },

  props: {
    products: {
      type: Array,
      required: true
    }
  }
};
</script>
