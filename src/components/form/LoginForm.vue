<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { useUserStore } from '@/stores/user';
import Input from '@/components/UI/Input/Input.vue';
import Button from '@/components/UI/Button/Button.vue';

const userStore = useUserStore();

const login = ref('');
const password = ref('');

const enter = () => {
  userStore.setLogin(login.value);
  router.push({ name: 'main' });
};
</script>

<template>
  <div class="login">
    <p class="login-title">Войти в панель</p>
    <div class="login__form">
      <Input placeholder="Введите логин" v-model="login" />
      <Input placeholder="Введите пароль" type="password" v-model="password" />
    </div>
    <Button @click="enter">Войти</Button>
  </div>
</template>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  gap: 32px;

  &-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
}
</style>
