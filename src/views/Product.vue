<template>
  <section class="vi-product">
    <div v-if="products">
      <h1>This is an product page</h1>

      <div class="product-items">
        <div
          v-for="product in products"
          :key="product.id"
        >
          <ProductItem 
            :product-id="product.id"
            :title="product.title"
            :thumbnail-url="product.thumbnailUrl"
          />
        
          <Button
            :label="buttonLabel"
            @click="addToCart(product)"
          />
        </div>
      </div>
    </div>
    
    <div v-if="!products">
      Loading product
    </div>
  </section>
</template>

<script>
import axios from "axios"
import ProductItem from "@/components/ProductItem"
import Button from "@/components/Button"
import { mapActions } from "vuex"

export default {
  name: "Product",

  components: {
    Button,
    ProductItem
  },

  data() {
    return {
      title: 'Product',
      buttonLabel: 'Add to cart',
      products: null
    };
  },

  mounted() {

    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        this.products = response.data.filter(product => product.albumId === 1);
      });
  },

  methods: {

    ...mapActions({
      addToCart: 'cart/addProductToCart'
    })

  }
};
</script>
