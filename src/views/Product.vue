<template>
  <section class="vi-product">
    <div v-if="products">
      <h1>This is an product page</h1>

      <ProductItem 
        v-for="product in products"
        :key="product.id"
        :product-id="product.id"
        :title="product.title"
        :thumbnail-url="product.thumbnailUrl"
      />
    </div>
    
    <div v-if="!products">
      Loading product
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ProductItem from "@/components/ProductItem";


export default {
  name: "Product",

  components: {
    ProductItem
  },

  data() {
    return {
      title: 'Product',
      products: null
    };
  },

  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        this.products = response.data.filter(product => product.albumId === 1);
      });
  }
};
</script>
