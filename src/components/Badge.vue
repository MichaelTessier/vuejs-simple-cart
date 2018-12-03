<template>
  <div class="co-badge">
    {{ text }}
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}

</script>
