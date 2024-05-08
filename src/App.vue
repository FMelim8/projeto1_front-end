<template>
  
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/api">API</router-link> |
    <router-link to="/weather">weather</router-link>
  </nav> -->
  <router-view/>
  
</template>

<style>
body{
  background-color: #1f222d !important;
}
.header{
  background-color: #363b50;
  border-radius: 25px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  margin-top: 5rem; 
  /* ^por enquanto. depois vou adicionar os logins e isso */
}
.btn-search{
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(228,201,74,1) 0%, rgba(224,42,67,1) 100%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
