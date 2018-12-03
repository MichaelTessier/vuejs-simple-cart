<template>
  <article class="co-product-item">
    <img 
      :src="product.thumbnailUrl"
      :alt="product.title"
    >
    <h1>{{ productTitle }} {{ product.id }}</h1>
    <p>{{ product.title }}</p>
    <Button
      :label="buttonLabel"
      @click="addToCart(product)"
    />
  </article>
</template>

<script>
import Button from "@/components/Button"
import { mapActions } from "vuex"

export default {
  name: "ProductItem",

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
