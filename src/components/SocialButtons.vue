<template>
  <div>
  <ul class="social-icons">
    <li v-for="button in buttons" :key="button.id">
      <a v-if="typeof button.link == 'string'" :href="button.link" target="_blank" :title="button.id"><font-awesome-icon :icon="button.icon"/></a>
      <button v-else :title="button.id" @click="button.link()"><font-awesome-icon :icon="button.icon"/></button>
    </li>
  </ul>
    <transition name="fade">
    <modal-window v-if="showModal" @close="toggleModal" />
    </transition>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import ModalWindow from './ModalWindow.vue'

  import { faTwitter, faInstagram, faLinkedin, faGithub, faTelegram, faVk, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


  export default {
    name: 'SocialButtons',
    components: { FontAwesomeIcon, ModalWindow },
    data () {
      return {
        showModal: false,
        buttons: [{
          id: 'instagram',
          icon: faInstagram,
          link: 'https://www.instagram.com/paveltorbeev/',
        }, {
          id: 'telegram',
          icon: faTelegram,
          link: 'https://t.me/ptorbeev',
        // }, {
        //   id: 'twitter',
        //   icon: faTwitter,
        //   link: 'https://twitter.com/glizer',
        }, {
          id: 'google-plus',
          icon: faGoogle,
          link: 'mailto:p.torbeev@gmail.com',
        }, {
          id: 'vk',
          icon: faVk,
          link: 'https://vk.com/glizer',
        }, {
          id: 'github',
          icon: faGithub,
          link: 'https://github.com/glizer',
        }, {
          id: 'facebook',
          icon: faFacebook,
          link: 'https://www.facebook.com/torbeev/',
        }, {
          id: 'linkedin',
          icon: faLinkedin,
          link: 'https://www.linkedin.com/in/glizer/',
        }, {
          id: 'modal',
          icon: faEnvelope,
          link: () => this.toggleModal(),
        }]
      }
    },
    methods: {
        toggleModal: function () {
            this.showModal = !this.showModal;
        }
    }
  }
</script>