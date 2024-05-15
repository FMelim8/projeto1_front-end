<template>
  
  <nav>
    <Header ></Header>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/auth">Login</router-link> | -->

    

  </nav>
  <router-view/>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
        The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
        website content is licensed
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0</a
        >.
      </p>
    </div>
  </footer> 
  
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
