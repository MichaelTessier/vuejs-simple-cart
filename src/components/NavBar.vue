<template>
  <header class="co-nav-bar">
    <div class="app_container">
      <h1 class="co-nav-bar_title">
        {{ title }}
      </h1>

      <div class="co-nav-bar_items">
        <RouterLink to="/">
          Product
        </RouterLink> |
        <RouterLink to="/cart">
          Cart <Badge :text="getTotalProducts" />
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Badge from '@/components/Badge'
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',

  components: {
    Badge
  },

  data() {
    return {
      title: 'Shop'
    }
  },
  
  computed: {
    ...mapGetters({
      getTotalProducts: 'cart/getTotalProducts'
    })
  }
}

</script>
