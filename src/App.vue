<template>
  <div
    id="app"
    class="app"
  >
    <NavBar />
    <RouterView />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',

  components: {
    NavBar
  }

}

</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
