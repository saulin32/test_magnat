<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import type { Option, SelectProps } from './types';

withDefaults(defineProps<SelectProps>(), {
  placeholder: '',
});

const modelValue = defineModel<Option>();
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (option: Option) => {
  modelValue.value = option;
  isDropdownOpen.value = false;
};

const closeDropdown = (event: MouseEvent) => {
  if (!(event.target as HTMLElement).closest('.select')) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown);
});
</script>

<template>
  <div class="select">
    <div class="select-option" @click="toggleDropdown">
      <span>{{ modelValue?.label || placeholder }}</span>

      <span class="select-option__icon">
        <svg
          class="select-option__icon-item"
          :class="{ 'select-option__icon-item--active': isDropdownOpen }"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 8"
        >
          <path
            fill="currentColor"
            d="M1.41.59L6 5.17 10.59.59 12 2 6 8 0 2 1.41.59z"
          />
        </svg>
      </span>
    </div>

    <div v-if="isDropdownOpen" class="select__options">
      <div
        v-for="option in data"
        :key="option.id"
        class="select__options-item"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;
  width: 100%;
  border: 1px solid $black;
  border-radius: 8px;
  cursor: pointer;

  &-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;

    &__icon {
      padding: 0 6px;

      &-item {
        width: 12px;
        transition: transform 0.2s ease-in-out;

        &--active {
          transform: rotate(180deg);
        }
      }
    }
  }

  &__options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: $white;
    border: 1px solid $gray;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 4px;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }

    &-item {
      padding: 12px 16px;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        background-color: $light-gray;
      }
    }
  }
}
</style>
