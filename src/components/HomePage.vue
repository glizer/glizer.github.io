<script setup>
  import SkillsPage from './SkillsPage.vue'
  import TimeLine from './TimeLine.vue'
  import AboutPage from './AboutPage.vue'
  import IndexPage from './IndexPage.vue'
  import Astronaut from './astronaut.vue'
</script>

<template>
  <main class="content">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <astronaut/>
    <div class="section-parent">
      <index-page/>
      <about-page/>
      <skills-page/>
      <time-line/>
    </div>
  </main>
</template>