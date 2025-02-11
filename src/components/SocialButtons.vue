<template>
  <ul class="social-icons">
    <li v-for="button in buttons" :key="button.id">
      <a :href="button.link" target="_blank" :title="button.id"><img :src="button.icon"/></a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'SocialButtons',
    data: function () {
        return {
          buttons: [{
            id: 'instagram',
            icon: './src/assets/img/instagram.png',
            link: 'https://www.instagram.com/paveltorbeev/',
          }, {
            id: 'telegram',
            icon: './src/assets/img/telegram.png',
            link: 'https://t.me/ptorbeev',
          },{
            id: 'twitter',
            icon: './src/assets/img/twitter.png',
            link: 'https://twitter.com/glizer',
          },{
            id: 'google-plus',
            icon: './src/assets/img/google-plus.png',
            link: 'mailto:p.torbeev@gmail.com',
          },{
            id: 'vk',
            icon: './src/assets/img/vk.png',
            link: 'https://vk.com/glizer',
          },{
            id: 'github',
            icon: './src/assets/img/github.png',
            link: 'https://github.com/glizer',
          },{
            id: 'facebook',
            icon: './src/assets/img/facebook.png',
            link: 'https://www.facebook.com/torbeev/',
          },{
            id: 'linkedin',
            icon: './src/assets/img/linkedin.png',
            link: 'https://www.linkedin.com/in/glizer/',
          }]
        }
    }
  }
</script>