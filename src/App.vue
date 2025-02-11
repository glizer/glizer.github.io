<script setup>
  import AboutPage from './components/AboutPage.vue'
  import IndexPage from './components/IndexPage.vue'
  import Astronaut from './components/astronaut.vue'
</script>

<template>
  <main class="content">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <astronaut />
    <div class="section-parent">
      <index-page />
      <about-page />
    </div>
  </main>
</template>
