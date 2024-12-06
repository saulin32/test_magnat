<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import LoginForm from '../components/form/LoginForm.vue';
import { onMounted } from 'vue';

const userStore = useUserStore();

onMounted(() => {
  userStore.setLogin('');
});
</script>

<template>
  <main class="login-form">
    <LoginForm />
  </main>
</template>

<style lang="scss" scoped>
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
}
</style>
