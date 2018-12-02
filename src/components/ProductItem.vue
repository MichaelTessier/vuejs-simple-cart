<template>
  <article class="co-product-item">
    <img 
      :src="thumbnailUrl" 
      :alt="title"
    >
    <h1>{{ productLabel }} {{ productId }}</h1>
    <p>{{ title }}</p>

    <Button
      :label="LabelButton"
      @click="addToCart"
    />
  </article>
</template>

<script>

import Button from "@/components/Button"
import { method } from 'bluebird';

export default {
  name: "ProductItem",

  components: {
    Button
  },
  
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
      buttonLabel: 'Add to cart',
      productTitle: 'Product'
    }
  },

  methods: {
    addToCart() {
      console.log('Add To Cart')
    }
  }

};
</script>
