<template>
  <section class="vi-product">
    <div class="app_container">
      <Title :title="title" />

      <ProductGroup 
        v-if="products" 
        :products="products"
      />
    
      <div v-if="!products">
        Loading product
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import ProductGroup from '@/components/ProductGroup'
import Title from '@/components/Title'

export default {
  name: 'Product',

  components: {
    ProductGroup,
    Title
  },

  data() {
    return {
      title: 'Product Page',
      products: null
    };
  },

  mounted() {

    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.products = response.data.filter(product => product.albumId === 1);
      });
  }
};
</script>
