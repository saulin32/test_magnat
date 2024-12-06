<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const showHeader = computed(() => route.name !== 'login');
</script>

<template>
  <Header v-if="showHeader" />
  <RouterView />
</template>

<style></style>
