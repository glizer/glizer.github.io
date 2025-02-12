<template>
  <section id="home" class="align-items-center space-bg">
    <div class="container">

      <div class="intro">
        <img src="../assets/img/avatar.png" :alt="$t('name')" class="avatar-pic">

        <h1>{{ $t('name') }}</h1>
        <span>{{ $t('welcome') }}</span>

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
      }
    }
  }
</script>
