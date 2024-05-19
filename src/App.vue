<template>
  
  <nav>
    <Header ></Header>
  </nav>
  <div class="route">
    <router-view/>
  </div>
  <Footer></Footer>

</template>

<script setup>
  import { onMounted } from 'vue';
  import { auth } from './firebase/init';
  import { useAuthStore } from './store/authStore';
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue"

  const authStore = useAuthStore();

  const onLogout = () => {
    authStore.logoutUser();
  }

  onMounted(() => {
    authStore.init()
  })

</script>

<style>
  .f1{
  flex: 2;
}
  body{
  background-color: #1f222d !important;
}
.header{
  background-color: #363b50;
  border-radius: 25px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  margin-top: 5vh; 
  /* ^por enquanto. depois vou adicionar os logins e isso */
}
.btn-search{
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(228,201,74,1) 0%, rgba(224,42,67,1) 100%);
}
.btn-search:hover{
  transform: scale(0.9);
  transition: transform 0.1s ease;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
