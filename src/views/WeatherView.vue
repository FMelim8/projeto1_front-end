<template>
  <router-link></router-link>
  <div class="home">
    <div class="header container h-50 p-5">
      <h1 class="mb-5">Select your city</h1>
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar w-50 mx-2 d-flex search1 flex-row-reverse w-70">
          <div class="field has-addons searchbar w-100">
            <div class="control is-expanded">
              <div class="select w-100">
                <select class="is-fullwidth w-100" v-model="country">
                  <option value="Madeira">Madeira</option>
                  <option value="Porto Santo">Porto Santo</option>
                  <option value="Lisboa">Lisboa</option>
                  <option value="Porto">Porto</option>
                  <option value="Braga">Braga</option>
                  <option value="Faro">Faro</option>
                  <option value="Aveiro">Aveiro</option>
                  <option value="Coimbra">Coimbra</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button type="submit" @click="chooseCountry"  class="button is-primary">Choose</button>
            </div>
          </div>
          <!-- <button class="btn btn-search btn-primary">Procurar</button> -->
        </div>
      </div>
    </div>
    <br>
    <Weather v-if="weatherData"></Weather>
    

  </div>
  
</template>

<script setup>
  import Weather from "../components/Weather.vue";
  import { ref, provide, onMounted } from 'vue';
  import axios from 'axios';

  const weatherData = ref();
  const country = ref("");
  const cidade = ref("");

  onMounted(()=> {
    //iniciar a página com a cidade da madeira já escolhida
    country.value = "Madeira";
    chooseCountry();
  })

  const fetchWeatherData = async () => {
    try {
      const countrySelected = country.value;
      let url;
      switch (countrySelected) {
        //mudar os outros urls
        case "Madeira":
          //{{this.latitude}}
          url = 'https://api.open-meteo.com/v1/forecast?latitude=32.6667&longitude=-16.75&current=temperature_2m,is_day,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max'
          break;
        case "Porto Santo":
          url = 'https://api.open-meteo.com/v1/forecast?latitude=33.0705&longitude=-16.3451&current=temperature_2m,is_day,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max'
          break;
        case "Lisboa":
          url = 'https://api.open-meteo.com/v1/forecast?latitude=38.7167&longitude=-9.1333&current=temperature_2m,is_day,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max'
          break;
        case "Porto":
          url = 'https://api.open-meteo.com/v1/forecast?latitude=41.1496&longitude=-8.611&current=temperature_2m,is_day,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max'
          break;
        case "Braga":
          url = 'https://api.open-meteo.com/v1/forecast?latitude=41.5503&longitude=-8.42&current=temperature_2m,is_day,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max'
          break;
        case "Faro":
          url = 'https://api.open-meteo.com/v1/forecast?latitude=37.0187&longitude=-7.9272&current=temperature_2m,is_day,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max'
          break;
        case "Aveiro":
          url = 'https://api.open-meteo.com/v1/forecast?latitude=40.6443&longitude=-8.6455&current=temperature_2m,is_day,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max'
          break;
        case "Coimbra":
          url = 'https://api.open-meteo.com/v1/forecast?latitude=40.2056&longitude=-8.4195&current=temperature_2m,is_day,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max'
          break;
      }
      const response = await axios.get(url);
      weatherData.value = response.data;
      console.log('Response:', response);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const chooseCountry = () => {
    console.log('Selected Country:', country.value);
    fetchWeatherData();
    updateCity();
  };

  // faz a cont weatherData poder ser usada nos componentes filho
  provide("weatherData", weatherData);
  provide("cidade", cidade)

  const updateCity = () => {
    cidade.value = country.value;
  }
</script>

<style>
.header{
  background-color: var(--secondary-color) !important;
}
.mb-5{
  color: var(--text-color2);
}
.home{
  background-color: var(--backg-color) !important;
}
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