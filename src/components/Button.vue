<template>
  <div
    class="co-button"
    @click="$emit('click', $event)"
  >
    {{ label }}
  </div>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}

</script>
