<template>
  <section class="vi-cart">
    <div class="app_container">
      <Title :title="title" />

      <CartGroup
        v-if="products"
        :products="products"
      />
    </div>
  </section>
</template>

<script>
import CartGroup from '@/components/CartGroup'
import Title from '@/components/Title'

export default {
  name: 'Cart',

  components: {
    CartGroup,
    Title
  },

  data() {
    return {
      title: 'Cart Page',
      products: null,
    };
  },

  mounted() {
    this.products = this.$store.state.cart.products;
  }
};
</script>
