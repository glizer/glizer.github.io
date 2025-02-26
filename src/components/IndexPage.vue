<template>
  <block-section id="home">
    <div class="intro">
      <img :src="avatar" :alt="$t('name')" loading="lazy" class="avatar-pic">

      <h1>{{ $t('name') }}</h1>
      <span>{{ $t('welcome') }}</span>

      <social-buttons/>
    </div>
  </block-section>
</template>

<script>
  import BlockSection from './block-section.vue'
  import SocialButtons from './SocialButtons.vue'
  import avatar from '../assets/img/avatar.png?format=webp&quality=80'

  export default {
    name: 'IndexPage',
    components: { BlockSection, SocialButtons },
    data: function () {
      return {
        avatar: avatar,
      }
    }
  }
</script>
