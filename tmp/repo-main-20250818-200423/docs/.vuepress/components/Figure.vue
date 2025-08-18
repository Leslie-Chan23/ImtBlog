<template>
  <div class="figure-container">
    <img :src="src" :alt="caption" :class="className">
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    caption: { type: String, default: '' },
    className: { type: String, default: '' }
  }
}
</script>

<style scoped>
.figure-container {
  margin: 1.5rem 0;
  text-align: center;
}

figcaption {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}
</style>