<template>
  <article class="co-product-item">
    <img 
      class="co-product-item_img"
      :src="product.thumbnailUrl"
      :alt="product.title"
    >

    <div class="co-product-item_body">
      <h1 class="co-product-item_title">
        {{ productTitle }} {{ product.id }}
      </h1>

      <p class="co-product-item_text">
        {{ product.title }}
      </p>

      <Button
        :label="buttonLabel"
        @click="addToCart(product)"
      />
    </div>
  </article>
</template>

<script>
import Button from '@/components/Button'
import { mapActions } from 'vuex'

export default {
  name: 'ProductItem',

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
