<script setup lang="ts">
import type { InputProps } from './types.d.ts';

withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  type: 'email',
});

const modelValue = defineModel();
</script>

<template>
  <div class="input">
    <div>
      <input
        class="input-field"
        :placeholder="placeholder"
        :type="type"
        v-model="modelValue"
      />
    </div>
  </div>
</template>

<style lang="scss">
.input {
  width: 100%;
  gap: 10px;

  &-field {
    width: 100%;
    height: 100%;
    padding: 7px 15px;
    border: 1px solid $gray;
    border-radius: 8px;
    outline: none;

    &::placeholder {
      color: $gray;
    }
  }
}
</style>
