<template>
    <div class="container p-0">
        <div class="d-flex">
            <div class="card main-div w-100">
                <div class="p-3">
                    <h2 class="mb-1 dia">Segunda</h2>
                    <p class="text-light date mb-0">data</p>
                    <small>Hora</small>
                    <h2 class="place">Lisboa <small>country</small> </h2>
                    <div class="temp">
                        <h1 class="weather-temp">21&deg;</h1>
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
            <div id="div_Form" class="d-flex m-3 justify-content-center">
                <form action="">
                    <input type="button" value="Change Location" class="btn change-btn btn-primary">
                </form>
            </div>
        </div>
    </div>    
</template>
  
<script>

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
    
</style>