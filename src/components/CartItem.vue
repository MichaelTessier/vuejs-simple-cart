<template>
  <article 
    v-if="product.quantity > 0" 
    class="co-cart-item"
  >
    <img 
      class="co-cart-item_img"
      :src="product.thumbnailUrl"
      :alt="product.title"
    >

    <div class="co-cart-item_body">
      <h1 class="co-cart-item_title">
        {{ productTitle }} {{ product.id }}
        <Badge :text="'x ' + product.quantity" />
      </h1>
      <p class="co-cart-item_text">
        {{ product.title }}
      </p>
    </div>
    <Button
      :label="buttonLabel"
      @click="removeToCart(product)"
    />
  </article>
</template>

<script>
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import { mapActions } from 'vuex'

export default {
  name: 'CartItem',

  components: {
    Badge,
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
