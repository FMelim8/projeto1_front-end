<template>
    <div class="container p-0">
        <div class="d-flex">
            <div class="card main-div w-100">
                <div class="p-3">
                    <h2 class="mb-1 dia text-light">Segunda</h2>
                    <p class="text-light date mb-0">data</p>
                    <small class="text-light">Hora</small>
                    <h2 class="place text-light">Lisboa <small>country</small> </h2>
                    <div class="temp">
                        <h1 class="weather-temp text-light">21&deg;</h1>
                        <h2 class="text-light">descrição</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="card card-2 w-100">
            <table class="m-4">
                <tbody>
                    <tr>
                        <th>Sea Level</th>
                        <td>100</td>
                    </tr>
                    <tr>
                        <th>Sea Level</th>
                        <td>100</td>
                    </tr>
                    <tr>
                        <th>Sea Level</th>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
            <DaysWeather></DaysWeather>
            <div id="div_Form" class="d-flex m-3 justify-content-center">
                <form action="">
                    <input type="button" value="Change Location" class="btn change-btn btn-primary">
                </form>
            </div>
        </div>
    </div>    
</template>
  
<script>
import DaysWeather from "./DaysWeather"

export default {
    name: "myWeather",
    components: {
        DaysWeather
    }
}

</script>

<style>
    body{
        background-color: #6A006A;
    }
    .weather-temp{
        margin: 0;
        font-weight: 700;
        font-size: 4em;
    }
    h2.mb-1.dia{
        font-size: 3rem;
        font-weight: 400;
    }
    .main-div{
        border-radius: 25px;
        color: white;
        background-image: url(https://img.freepik.com/fotos-gratis/fundo-de-praia-natural_23-2147819082.jpg?t=st=1715172114~exp=1715175714~hmac=2017a0e2639492481ceff19885afef761baae1ab1bb75feaaf7852cff1c8f419&w=900);
        background-size: cover;
        background-position: center;
        background-blend-mode: overlay;
        background-color: rgba(0, 0, 0, 0.5) !important;
        background-repeat: no-repeat;
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
        background-color: #363b50 !important;
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
        color: white;
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