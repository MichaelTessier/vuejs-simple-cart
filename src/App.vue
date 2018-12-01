<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Product</router-link> |
      <router-link to="/cart">Cart</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
