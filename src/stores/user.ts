import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const login = ref(sessionStorage.getItem('userName'));

  function setLogin(newLogin: string) {
    sessionStorage.setItem('userName', newLogin);
    login.value = newLogin;
  }

  return { login, setLogin };
});
