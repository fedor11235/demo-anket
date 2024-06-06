<template>
  <input
    :type="type"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
    class="text-input"
  />
</template>

<script>
export default {
  props: ["placeholder", "type", "value"],
};
</script>

<style scoped></style>
