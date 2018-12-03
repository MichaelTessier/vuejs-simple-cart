<template>
  <div class="co-cart-group">
    <div v-if="getTotalProducts > 0">
      <CartItem 
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-if="getTotalProducts === 0">
      {{ noProductsText }}
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem"
import { mapGetters } from "vuex"

export default {
  name: "ProductList",

  components: {
    CartItem
  },

  props: {
    products: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      noProductsText: 'There are not products in your cart'
    }
  },

  computed: {
    ...mapGetters({
      getTotalProducts: 'cart/getTotalProducts'
    })
  }
};
</script>
