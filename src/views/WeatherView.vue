<template>
    <div class="Weather">
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