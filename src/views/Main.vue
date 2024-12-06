<script lang="ts" setup>
import Select from '@/components/UI/Select/Select.vue';
import { mockSelectData } from '@/mock/main';
import type { City } from '@/types/main';
import { ref } from 'vue';

const selectedCity = ref<City>();
</script>

<template>
  <main class="main">
    <Select
      v-model="selectedCity"
      class="main__select-city"
      :data="mockSelectData"
      placeholder="Введите город"
    ></Select>

    <div class="main__wrapper">
      <h3 v-if="selectedCity?.label" class="main__wrapper-title">
        {{ selectedCity?.label }}
      </h3>
      <p
        class="main__wrapper-description"
        :class="{
          'main__wrapper-description--empty': !selectedCity?.description,
        }"
      >
        {{ selectedCity?.description || 'Город не выбран' }}
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  margin-top: 57px;

  &__select-city {
    margin: 0 auto;
    width: 230px;
  }

  &__wrapper {
    position: fixed;
    top: 50%;
    bottom: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    transform: translateX(-50%);
    text-align: center;

    @include tablet {
      position: relative;
      margin-top: 30px;
      padding: 24px;
    }

    &-title {
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
    }

    &-description {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;

      &--empty {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
}
</style>
