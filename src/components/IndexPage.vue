<template>
  <section id="home" class="align-items-center space-bg">
    <div class="container">

      <div class="intro">
        <img src="../assets/img/avatar.png" :alt="name" class="avatar-pic">

        <h1>{{ name }}</h1>
        <span>{{ description }}</span>

        <social-buttons/>
      </div>
    </div>

  </section>
</template>

<script>
  import SocialButtons from './SocialButtons.vue'
  import avatar from '../assets/img/avatar.png'

  export default {
    name: 'IndexPage',
    components: { SocialButtons },
    data: function () {
      return {
        avatar: avatar,
        name: 'Pavel Torbeev',
        description: 'I\'m a frontend developer',
      }
    }
  }
</script>
