<template>
  <header id="nav">
    <RouterLink to="/">
      Product
    </RouterLink> |
    <RouterLink to="/cart">
      Cart ({{ getTotalProducts }})
    </RouterLink>
  </header>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'NavBar',
  
  computed: {
    ...mapGetters({
      getTotalProducts: 'cart/getTotalProducts'
    })
  }
}

</script>
