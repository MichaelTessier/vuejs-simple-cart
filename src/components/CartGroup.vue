<template>
  <div class="co-cart-group">
    <div v-if="getTotalProducts > 0">
      <CartItem 
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <Alert
      v-if="getTotalProducts === 0"
      :text="emptyCartText"
    />
  </div>
</template>

<script>
import Alert from '@/components/Alert'
import CartItem from '@/components/CartItem'
import { mapGetters } from 'vuex'

export default {
  name: 'ProductList',

  components: {
    Alert,
    CartItem
  },

  props: {
    products: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      emptyCartText: 'Your cart is empty'
    }
  },

  computed: {
    ...mapGetters({
      getTotalProducts: 'cart/getTotalProducts'
    })
  }
};
</script>
