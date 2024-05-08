<template>
  <div class="home">
    <div class="header container h-100 p-5">
      <h1 class="mb-5">Weather App</h1>
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar w-50 mx-2">
          <input type="text" class="input form-control" v-model="cidade" placeholder="Introduza uma cidade">
        </div>
        <button class="btn btn-search btn-primary">Procurar</button>
      </div>
    </div>
    <br>
    <Weather></Weather>
  </div>
</template>

<script>

import Weather from "../components/Weather.vue"

export default {
  name: 'HomeView',
  components: {
    Weather
  },
  data(){
    return{
      cidade: "",
      showWeather: false
    }
  },
  methods:{
    async searchWeathere () {
      this.showWeather = false;
      await this.$nextTick();
      this.showWeather = true;

    }
  }
}
</script>

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