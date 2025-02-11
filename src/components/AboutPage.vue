<template>
  <section id="about" class="align-items-center">
    <div class="container">
      <h2 class="page-title">{{ title }}</h2>
      <div class="about">
        <div class="avatar-pic big"><img :src="picture"/></div>
        <div class="description">
          <div v-html="description" />
          <div class="tags">
            <span v-for="tag in tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import picture from '../assets/img/picture.png'
  export default {
    name: 'AboutPage',
    data: function () {
      return {
        picture: picture,
        tags: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Vue', 'Playwright', 'git', 'Jest', 'webpack', 'sass', 'less', 'bootstrap', 'svg', 'd3'],
        title: 'About Me',
        description: '<h4>Hi, my name is Pavel and I am a frontend developer</h4>\n' +
          '<p>I love cool interfaces, mark-up, and pies</p>\n' +
          '<p>I love using my talents to bring more business to a worthy product.</p>\n' +
          '<p>I love productive work and hate bureaucracy</p>\n' +
          '<p>Please don\'t call me, I\'m an introvert.</p>'
      }
    }
  }
</script>

<style scoped>

</style>