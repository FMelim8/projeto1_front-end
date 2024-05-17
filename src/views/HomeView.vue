<template>
<section class="container">
      <div class="container__grid">

        <div class="container__content">
          <h1>PORTUGAL WEATHER</h1>
          <h2>Front-End Project made by the student Filipe Melim</h2>
          <p>
            This application is designed to provide you with a seamless,
            responsive, and user-friendly experience,
            all in a single-page application (SPA) model.
          </p>
          <div>Features:</div>
          <div class="p-3">
            <div class="feature">-Real-Time Weather Data via the Open-Meteo API</div>
            <div class="feature">-User Authentication</div>
            <div class="feature">-Interactive and Responsive Design</div>
          </div>
          <div>
            <p><a href="https://github.com/FMelim8/projeto1_front-end" >Here's my project repo. </a></p>
          </div>
        </div>
      </div>
    </section>

 


</template>

<script setup>


</script>

<style scoped>
.container {
  width: 100%;
  min-height: 60vh;
  margin: 0; 
  background-image: url(https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg) !important;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.6) !important;
  background-blend-mode: overlay;
  color: hsl(171, 100%, 41%);
}


.container__grid {
  position: relative;
  isolation: isolate;
  margin: auto;
  padding: 2rem 1rem;
  padding-top: 8rem;
  display: grid;
  gap: 2rem;
  max-width: 100% !important;
}

.container__content {
  text-align: center;
}

.container__content h1 {
  font-size: 4rem;
  font-weight: 600;
  line-height: 5rem;
}

.container__content h2 {
  margin-inline: auto;
  margin-bottom: 1rem;
  max-width: 450px;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 3rem;
}

.container__content p {
  margin-inline: auto;
  margin-bottom: 4rem;
  max-width: 400px;
}

@media (width > 768px) {
  .container{
    max-width: 100% !important;
  }
  .container__grid {
    padding-top: 2rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }


  .container__content {
    text-align: left;
  }

  .container__content :is(h2, p) {
    margin-inline: unset;
  }
}
</style>