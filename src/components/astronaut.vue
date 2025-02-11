<template>
  <div class="astronaut-component">
    <div class="astronaut-wrapper">
      <img :src="pic" class="astronaut-avatar" />
      <img :src="src" class="astronaut-suit" />
    </div>
  </div>
</template>

<script>
  import '../styles/astronaut.scss';
  import astronaut from '../assets//img/astronaut.svg';
  import picture from '../assets//img/photo.png';
  export default {
    name: 'astronaut',
    data: function () {
        return {
            src: astronaut,
            pic: picture,
        }
    }
  }
</script>
