<template>
  <h1 class="co-title">
    {{ title }}
  </h1>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}

</script>
