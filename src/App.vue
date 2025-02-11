<script setup>
  import SocialButtons from './components/SocialButtons.vue'
</script>

<template>
  <main class="content">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <section id="home" class="align-items-center space-bg">

      <div class="container">

        <div class="intro">
          <img src="./assets/img/avatar.png" alt="Pavel Torbeev" class="avatar-pic">

          <h1>Pavel Torbeev</h1>
          <span>I'm a frontend developer</span>

          <social-buttons />
        </div>
      </div>

    </section>
    <section id="about" class="align-items-center">
      <div class="container">
        <h2 class="page-title">About Me</h2>
        <div class="about">
          <div class="avatar-pic big"><img src="./assets/img/picture.png"/></div>
          <div class="description">
            <div>
              <h4>Hi, my name is Pavel and I am a frontend developer</h4>
              <p>I love cool interfaces, mark-up, and pies</p>
              <p>I love using my talents to bring more business to a worthy product.</p>
              <p>I love productive work and hate bureaucracy</p>
              <p>Please don't call me, I'm an introvert.</p>
            </div>
            <div class="tags"><span>HTML</span> <span>css</span><span>javascript</span><span>Vue.js</span><span>Playwright</span><span>git</span><span>Jest</span><span>webpack</span><span>sass</span><span>less</span><span>bootstrap</span><span>svg</span><span>d3</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>
