<template>  
    <div class="days-tab text-center">
        <ul class="p-0">
            <li class="li_active">
                <div class="py-3"><i :class="weatherCodeToIcon(weatherData.daily.weather_code[1])"></i></div>
                <div class="py-3">{{ weatherData.daily.time[1] }}</div>
                <div class="py-3">{{ ((weatherData.daily.temperature_2m_max[1] + weatherData.daily.temperature_2m_min[1] )/2).toFixed(1) }}&deg;C</div>
            </li>
            <li class="li_active">
                <div class="py-3"><i :class="weatherCodeToIcon(weatherData.daily.weather_code[2])"></i></div>
                <div class="py-3">{{ weatherData.daily.time[2] }}</div>
                <div class="py-3">{{ ((weatherData.daily.temperature_2m_max[2] + weatherData.daily.temperature_2m_min[2] )/2).toFixed(1) }}&deg;C</div>
            </li>
            <li class="li_active">
                <div class="py-3"><i :class="weatherCodeToIcon(weatherData.daily.weather_code[3])"></i></div>
                <div class="py-3">{{ weatherData.daily.time[3] }}</div>
                <div class="py-3">{{ ((weatherData.daily.temperature_2m_max[3] + weatherData.daily.temperature_2m_min[3] )/2).toFixed(1) }}&deg;C</div>
            </li>
            <li class="li_active">
                <div class="py-3"><i :class="weatherCodeToIcon(weatherData.daily.weather_code[4])"></i></div>
                <div class="py-3">{{ weatherData.daily.time[4] }}</div>
                <div class="py-3">{{ ((weatherData.daily.temperature_2m_max[4] + weatherData.daily.temperature_2m_min[4] )/2).toFixed(1) }}&deg;C</div>
            </li>
        </ul>
    </div>

  </template>
  
  <script setup>
  //inject dos dados no componente
    import { inject } from 'vue';
    const weatherCodeToIcon = inject("weatherCodeToIcon");
    const weatherData = inject('weatherData');
  </script>
  
  <style>
    .days-tab{
        width: 90%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        margin: auto;
    }
    .loading{
        color: white;
    }
    ul{
        margin: 0;
    }
    li{
        display: inline-block;
        list-style: none;
        height: 100%;
        width: 21%;
        max-width: 21%;
        font-size: 1vw;
        line-height: 1.2;
    }
    span{
        display: block;
        margin-bottom: 5px;
        font: 100% sans-serif;
        height: 35px;
    }
    .li_active{
        background: #253d5c;
        color: #222831;
        border-radius: 10px;
        margin: 0.5rem;
        color: white;
        font-weight: 600;
    }
    .li_active:hover{
        transform: scale(1.1);
        transition: transform 0.1s ease;
    }
    .li_active_temp{
        display: inline-block;
        background-color: #222831;
        color: white;
        transition: background-color 0.5s;
        border-radius: 10px;
    }
  </style>