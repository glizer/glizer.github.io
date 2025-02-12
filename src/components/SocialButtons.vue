<template>
  <ul class="social-icons">
    <li v-for="button in buttons" :key="button.id">
      <a :href="button.link" target="_blank" :title="button.id"><img loading="lazy" :src="button.icon"/></a>
    </li>
  </ul>
</template>

<script>
  import instagramIcon from '../assets//img/instagram.png'
  import telegramIcon from '../assets//img/telegram.png'
  import twitterIcon from '../assets//img/twitter.png'
  import googlePlusIcon from '../assets//img/google-plus.png'
  import vkIcon from '../assets//img/vk.png'
  import githubIcon from '../assets//img/github.png'
  import facebookIcon from '../assets//img/facebook.png'
  import linkedinIcon from '../assets//img/linkedin.png'

  export default {
    name: 'SocialButtons',
    data () {
      return {
        buttons: [{
          id: 'instagram',
          icon: instagramIcon,
          link: 'https://www.instagram.com/paveltorbeev/',
        }, {
          id: 'telegram',
          icon: telegramIcon,
          link: 'https://t.me/ptorbeev',
        }, {
          id: 'twitter',
          icon: twitterIcon,
          link: 'https://twitter.com/glizer',
        }, {
          id: 'google-plus',
          icon: googlePlusIcon,
          link: 'mailto:p.torbeev@gmail.com',
        }, {
          id: 'vk',
          icon: vkIcon,
          link: 'https://vk.com/glizer',
        }, {
          id: 'github',
          icon: githubIcon,
          link: 'https://github.com/glizer',
        }, {
          id: 'facebook',
          icon: facebookIcon,
          link: 'https://www.facebook.com/torbeev/',
        }, {
          id: 'linkedin',
          icon: linkedinIcon,
          link: 'https://www.linkedin.com/in/glizer/',
        }]
      }
    }
  }
</script>