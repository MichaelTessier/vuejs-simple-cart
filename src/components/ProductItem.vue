<template>
  <article class="co-product-item">
    <img 
      :src="thumbnailUrl"
      :alt="title"
    >
    <h1>{{ productTitle }} {{ productId }}</h1>
    <p>{{ title }}</p>
  </article>
</template>

<script>


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
      productTitle: 'Product'
    }
  }


};
</script>
