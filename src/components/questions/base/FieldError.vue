<template>
  <div class="field-error">
    <div class="field-error__attention">!</div>
    <div class="field-error__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped></style>
