<template>
  <block-section id="about" :title="$t('about')">
    <div class="about">
      <div class="avatar-pic big"><img :src="picture" loading="lazy"/></div>
      <div class="description">
        <div>
          <h4>{{ $t('aboutTitle') }}</h4>
          <p>{{ $t('aboutDescription') }}</p>
        </div>
        <div class="tags">
          <span v-for="tag in tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </block-section>
</template>

<script>
  import BlockSection from './block-section.vue'
  import picture from '../assets/img/picture.png?format=webp&quality=80'

  export default {
    name: 'AboutPage',
    components: { BlockSection },
    data: function () {
      return {
        picture: picture,
        tags: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Vue', 'Playwright', 'git', 'Jest', 'webpack', 'sass', 'less', 'bootstrap', 'svg', 'd3'],
        description: '<h4>Hi, my name is Pavel and I am a frontend developer</h4>\n' +
          '<p>I love cool interfaces, mark-up, and pies</p>\n' +
          '<p>I love using my talents to bring more business to a worthy product.</p>\n' +
          '<p>I love productive work and hate bureaucracy</p>\n' +
          '<p>Please don\'t call me, I\'m an introvert.</p>'
      }
    }
  }
</script>
