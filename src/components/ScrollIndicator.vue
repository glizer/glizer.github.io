<template>
  <div class="scroll-mouse" :class="{'_hidden': isBottom}"></div>
</template>

<script>
  export default {
    name: 'ScrollIndicator',
    data: function () {
      return {
        isBottom: false,
      }
    },
    mounted: function () {
      this.checkScroll();
      window.addEventListener('scroll', this.checkScroll)
    },
    beforeUnmount () {
      window.removeEventListener('scroll', this.checkScroll)
    },
    methods: {
      checkScroll: function () {
        this.isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      }
    }
  }
</script>
