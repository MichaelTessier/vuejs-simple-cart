<template>
  <section class="vi-cart">
    <h1>This is an cart page</h1>

    <CartGroup 
      v-if="products" 
      :products="products"
    />
    
    <div v-if="!products">
      No products in cart
    </div>
  </section>
</template>

<script>
import CartGroup from "@/components/CartGroup"

export default {
  name: "Cart",

  components: {
    CartGroup
  },

  data() {
    return {
      title: 'Cart',
      products: null
    };
  },

  mounted() {
    this.products = this.$store.state.cart.products;
  }
};
</script>
