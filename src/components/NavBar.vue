<template>
  <header id="nav">
    <RouterLink to="/">
      Product
    </RouterLink> |
    <RouterLink to="/cart">
      Cart ({{ getTotalProduct }})
    </RouterLink>
  </header>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'NavBar',
  
  props: {
    label: {
      type: String,
      required: true
    }
  },
  
  computed: {
    ...mapGetters({
      getTotalProduct: 'cart/getTotalProduct'
    })
  },
}

</script>
