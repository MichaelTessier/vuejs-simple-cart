<template>
  <div class="co-product-item">

    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    msg: String
  }
};
</script>
