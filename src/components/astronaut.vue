<template>
  <div class="astronaut-component">
    <button class="astronaut-wrapper" :class="{'_active': active}" @click="activateAstronaut()">
      <img :src="pic" class="astronaut-avatar" loading="lazy"/>
      <img :src="src" class="astronaut-suit" loading="lazy"/>
    </button>
  </div>
</template>

<script>
  import '../styles/astronaut.scss'
  import astronaut from '../assets//img/astronaut.svg'
  import picture from '../assets//img/photo.png?format=webp&quality=80'

  export default {
    name: 'astronaut',
    data: function () {
      return {
        src: astronaut,
        pic: picture,
        active: false,
      }
    },
    methods: {
      activateAstronaut: function () {
        const self = this,
          delay = 1000

        self.active = true
        setTimeout(function () {
          self.active = false
        }, delay)
      }
    }
  }
</script>
