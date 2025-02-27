<template>
  <main class="content">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>

    <div class="section-parent">
      <section id="about" class="align-items-center">
        <div class="container">
          <h1 class="page-title">404 Error</h1>
          <div>
            <astronaut class="fixed"/>
            <router-link to="/">Go to main page</router-link>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
  import Astronaut from './astronaut.vue'

  export default {
    name: 'NotFound',
    components: { Astronaut },
  }
</script>
