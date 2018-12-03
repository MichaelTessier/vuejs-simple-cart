<template>
  <article 
    v-if="product.quantity > 0" 
    class="co-cart-item"
  >
    <img 
      :src="product.thumbnailUrl"
      :alt="product.title"
    >
    <h1>{{ productTitle }} {{ product.id }}</h1>
    <p>{{ product.title }}</p>
    <Button
      :label="buttonLabel"
      @click="removeToCart(product)"
    />
  </article>
</template>

<script>
import Button from "@/components/Button"
import { mapActions } from "vuex"

export default {
  name: "CartItem",

  components: {
    Button
  },

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      productTitle: 'Product',
      buttonLabel: 'Remove to cart',
    };
  },

  methods: {
    ...mapActions({
      removeToCart: 'cart/removeProductToCart'
    })
  },



};
</script>
