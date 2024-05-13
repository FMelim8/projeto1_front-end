<template>
  <router-link></router-link>
  <div class="home">
    <div class="header container h-100 p-5">
      <h1 class="mb-5">Weather App</h1>
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar w-50 mx-2 d-flex search1">
          <!-- <input type="text" class="input form-control" v-model="cidade" placeholder="Introduza uma cidade"> -->
          <div class="field has-addons">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="country">
                  <option value="Argentina">Argentina</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Chile">Chile</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Venezuela">Venezuela</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-primary">Choose</button>
            </div>
          </div>
          <!-- <button class="btn btn-search btn-primary">Procurar</button> -->
        </div>
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
  margin-top: 5rem; 
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