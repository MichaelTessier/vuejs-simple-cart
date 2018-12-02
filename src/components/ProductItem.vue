<template>
  <article class="co-product-item">
    <img 
      :src="thumbnailUrl"
      :alt="title"
    >
    <h1>{{ productTitle }} {{ productId }}</h1>
    <p>{{ title }}</p>
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

  props: {
    productId: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    thumbnailUrl: {
      type: String,
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
