<template>
  <div class="co-product-group">
    <ProductItem 
      v-for="product in products"
      :key="product.id"
      :product-id="product.id"
      :title="product.title"
      :thumbnail-url="product.thumbnailUrl"
    />
        
    <Button
      :label="buttonLabel"
      @click="addToCart(product)"
    />
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem"
import Button from "@/components/Button"
import { mapActions } from "vuex"

export default {
  name: "ProductList",

  components: {
    ProductItem
  },

  props: {
    products: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      buttonLabel: 'Add to cart',
    };
  },

  methods: {
    ...mapActions({
      addToCart: 'cart/addProductToCart'
    })
  }
};
</script>
