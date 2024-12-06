<script lang="ts" setup>
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';

const userStore = useUserStore();

const userName = computed(() => userStore.login);
</script>

<template>
  <header class="header">
    <p class="header-name">
      Привет,
      <span class="header-name-user"> {{ userName }} </span>
    </p>
    <a class="header-logout" href="login"> Выйти </a>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 24px;

  &-name {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;

    &-user {
      font-weight: 700;
    }
  }

  &-logout {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    color: $black;
    text-decoration: none;
  }
}
</style>
