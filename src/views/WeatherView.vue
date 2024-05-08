<template>
    <button @click="getWeather">Get Weather</button>
    <div v-for="(element, index) in weather" :key="index">
        <p>{{ element }}</p>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import axios from "axios";
    
    const weather = ref([]);
    
    const getWeather = async () => {
        try {
            const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=32.6667&longitude=-16.75&hourly=temperature_2m&forecast_days=1");
            weather.value = response.data;
            console.log("Weather data fetched:", response.data);
        } catch (error) {
            console.log("Error fetching weather data:", error);
        }
    };
</script>
