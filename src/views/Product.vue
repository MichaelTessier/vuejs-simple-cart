<template>
  <section class="vi-product">
    <h1>This is an product page</h1>

    <ProductGroup 
      v-if="products" 
      :products="products"
    />
    
    <div v-if="!products">
      Loading product
    </div>
  </section>
</template>

<script>
import axios from "axios"
import ProductGroup from "@/components/ProductGroup"

export default {
  name: "Product",

  components: {
    ProductGroup
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
