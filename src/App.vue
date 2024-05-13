<template>
  
  <nav>
    <Header ></Header>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/auth">Login</router-link> | -->

    

  </nav>
  <router-view/>
  
</template>

<script setup>
import { onMounted } from 'vue';
import { auth } from './firebase/init';
import { useAuthStore } from './store/authStore';
import Header from "./components/Header.vue"

  const authStore = useAuthStore();

  const onLogout = () => {
    authStore.logoutUser();
  }

  onMounted(() => {
    authStore.init()
  })

</script>

<style>

</style>
