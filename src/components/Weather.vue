<template>
    <div class="container p-0">
        <div class="d-flex">
            <div class="card main-div w-100" v-bind:style="{ 'background-image': 'url(' + backgroundImage + ')' }">
                <div class="p-3">
                    <h2 class="mb-1 dia text-light" v-if="weatherData">{{ dayOfWeek }}</h2>
                    <p class="text-light date mb-0"> {{ weatherData.daily.time[0] }}</p>
                    <small class="text-light">{{ currentTime }}</small>
                    <h2 class="place text-light">{{ cidade }}</h2>
                    <div class="temp d-flex">
                        <!-- média da temp -->
                        <h5 class="weather-temp text-light">{{ ((weatherData.daily.temperature_2m_max[0] + weatherData.daily.temperature_2m_min[0] )/2).toFixed(1) }}&deg;C</h5>
                        <div class="weather-temp"> <i :class="weatherCodeToIcon(weatherData.daily.weather_code[0])"></i></div>
                    </div>
                </div>
            </div>
            <div class="card card-2 w-100" >
            <div v-if="authStore.user.uid">
                <div class="container d-flex justify-content-center">
                    <table class="m-4">
                        <tbody>
                            <tr>
                                <th>Max Temperature</th>
                                <td>{{ weatherData.daily.temperature_2m_max[0] }} ºC</td>
                            </tr>
                            <tr>
                                <th>Min Temperature</th>
                                <td>{{ weatherData.daily.temperature_2m_min[0] }} ºC</td>    
                            </tr>
                            <tr>
                                <th>Precipitation Probability</th>
                                <td>{{ weatherData.daily.precipitation_probability_max[0] }}%</td>
                            </tr>
                        </tbody>
                    </table> 
                </div> 
                <DaysWeather></DaysWeather>
                <div class="m-3"></div>
            </div>
            <div v-if="!authStore.user.uid">
                <p>
                    <div class="display-1 has-text-danger">For more Information</div>
                </p>
                <p>
                    <div class="display-5 has-text-danger">Please log-in or register</div>
                </p>
                <p>
                    <RouterLink class="display-5 has-text-danger is-underlined is-italic" to="/auth" >
                        Here
                    </RouterLink>
                </p>
            </div>
        </div>
            
        </div>
        
    </div>    
</template>
  
<script setup>
    import DaysWeather from "./DaysWeather"
    import { inject, computed, ref, onMounted, provide, watch } from 'vue';
    import '@fortawesome/fontawesome-free/css/all.css';
    import { useAuthStore } from '@/store/authStore';

    const authStore = useAuthStore()

    const weatherData = inject("weatherData");
    const cidade = inject("cidade")

    //calculo do dia da semana
    const dayOfWeek = computed(() => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dateString = weatherData.value.daily.time[0];
        const date = new Date(dateString);
        const dayIndex = date.getDay();
        return days[dayIndex];
    });

    //relógio dentro da app
    const currentTime = ref('');

    const updateTime = () => {
        const now = new Date();
        currentTime.value = now.toLocaleTimeString();
    };

    //ativa o update quando o componente é montado
    onMounted(updateTime);

    //ativa periodicamente o update
    setInterval(updateTime, 1000);


    //recebe o weather code e retorna um icon do font awesome
    const weatherCodeToIcon = (weatherCode) => {
        switch (weatherCode) {
        case 0:
            return "fas fa-sun"; 
        case 1:
        case 2:
        case 3:
            return "fas fa-cloud-sun"; 
        case 45:
        case 48:
            return "fas fa-smog";
        case 51:
        case 53:
        case 55:
            return "fas fa-cloud-rain"; 
        case 56:
        case 57:
            return "fas fa-icicles";
        case 61:
        case 63:
        case 65:
            return "fas fa-cloud-showers-heavy";
        case 66:
        case 67:
            return "fas fa-icicles"; 
        case 71:
        case 73:
        case 75:
            return "fas fa-snowflake"; 
        case 77:
            return "fas fa-snowflakes"; 
        case 80:
        case 81:
        case 82:
            return "fas fa-cloud-showers-heavy";
        case 85:
        case 86:
            return "fas fa-snowflake";
        case 95:
            return "fas fa-bolt"; 
        case 96:
        case 99:
            return "fas fa-bolt"; 
        default:
            return "fas fa-question"; 
        }
    }  
    provide("weatherCodeToIcon", weatherCodeToIcon);

    //mudança da imagem de acordo com a cidade
    watch(cidade, (novaCidade, antigaCidade) => {
        updateBackgroundImage(novaCidade);
    });

    
    const backgroundImage = ref("");

    const updateBackgroundImage = (city) => {
        switch (city) {
            case "Madeira":
                backgroundImage.value = 'https://img.goodfon.com/wallpaper/big/c/22/machico-madeira-portugal-machico-bay-atlantic-ocean-mashiku.jpg';
                break;
            case "Porto Santo":
                backgroundImage.value = 'https://media.istockphoto.com/id/898894286/photo/street-view-of-vila-baleira-center-porto-santo.jpg?s=612x612&w=0&k=20&c=DGW3AuurM6eQ67ZfgJ1mAVYSCcpynYkC6hXM0pz5XM0=';
                break;
            case "Lisboa":
                backgroundImage.value = 'https://wallpapers.com/images/featured/lisbon-1odpujjjj3cw1esb.jpg';
                break;
            case "Porto":
                backgroundImage.value = 'https://images6.alphacoders.com/473/thumb-1920-473253.jpg';
                break;
            case "Braga":
                backgroundImage.value = 'https://c0.wallpaperflare.com/preview/302/548/887/portugal-braga-bom-jesus-do-monte.jpg';
                break;
            case "Faro":
                backgroundImage.value = 'https://w0.peakpx.com/wallpaper/290/382/HD-wallpaper-faro-portugal-old-portugal-houses-street.jpg';
                break;
            case "Aveiro":
                backgroundImage.value = 'https://c4.wallpaperflare.com/wallpaper/879/167/600/portugal-portugal-the-ria-de-aveiro-wallpaper-preview.jpg';
                break;
            case "Coimbra":
                backgroundImage.value = 'https://t4.ftcdn.net/jpg/01/64/10/43/360_F_164104316_UKYPYgr5LSLetSgZcovgvJ2tMnleWrbq.jpg';
                break;
            default:
                backgroundImage.value = 'https://img.freepik.com/fotos-gratis/fundo-de-praia-natural_23-2147819082.jpg?t=st=1715172114~exp=1715175714~hmac=2017a0e2639492481ceff19885afef761baae1ab1bb75feaaf7852cff1c8f419&w=900'
        }
    
    };
    watch(cidade, (novaCidade, antigaCidade) => {
        updateBackgroundImage(novaCidade);
    });

    updateBackgroundImage(cidade.value);

</script>

<style>
    body{
        background-color: #6A006A;
    }
    .weather-temp{
        margin: 0;
        font-weight: 700;
        font-size: 3em;
        margin-left: 10px;
    }
    h2.mb-1.dia{
        font-size: 3rem;
        font-weight: 400;
    }
    .main-div{
        border-radius: 25px;
        color: white;
        background-image: var(--background-image);
        background-size: cover;
        background-position: center;
        background-blend-mode: overlay;
        background-color: rgba(0, 0, 0, 0.5) !important;
        background-repeat: no-repeat;
        margin-bottom: 0 !important;
    }


    .temp{
        position: absolute;
        bottom: 0;
    }
    .main-div:hover{
        transform: scale(1.03);
        transition: transform 0.5s ease;
        z-index: 1;
    }
    .card-2{
        background-color: var(--tertiary-color) !important;
        border-radius: 25px;
    }
    .card-details{
        margin-left: 20px;
    }
    .h1_Left{
        position: absolute;
        bottom: 25px;
        left: 16px;
        font-size: 3vw;
        line-height: 1.2;
    }
    .h3_Left small{
        font-size: 1rem;
    }
    table{
        position: relative;
        left: 15px;
        border-collapse: separate;
        border-spacing: 15px;
        width: 85%;
        text-align: left;
        max-width: 600px;
        margin: 0 auto;
    }
    th, td{
        font-size: 18px;
        color: var(--text-color2) !important;
    }
    td{
        text-align: right;
    }
    table, tr:hover{
        color: red;
    }
    .change-btn {
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(228,201,74,1) 0%, rgba(224,42,67,1) 100%);
    }

    .change-btn:hover {
        transform: scale(0.9);
        transition: transform 0.1s ease;
    }
</style>