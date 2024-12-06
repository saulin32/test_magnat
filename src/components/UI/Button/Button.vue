<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click'): void;
}>();

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <button class="btn" @click="handleClick">
    <slot />
  </button>
</template>

<style lang="scss">
.btn {
  width: fit-content;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  border: none;
  border-radius: 8px;
  background-color: $black;
  color: $gray;
  cursor: pointer;
}
</style>
