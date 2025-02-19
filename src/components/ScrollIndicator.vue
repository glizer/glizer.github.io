<template>
  <button class="scroll-mouse" @click="onClick()"></button>
</template>

<script>
  export default {
    name: 'ScrollIndicator',
    data: function () {
      return {
        isBottom: false,
        activeSection: null,
        sections: null,
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        setTimeout(this.initIntersectionObserver, 2000)
      })
    },
    methods: {
      moveTo: function(id) {
        const parent = document.querySelector('.section-parent');
        const target = document.getElementById(id);

        if (parent && target) {
          parent.scrollTo({
            top: target.offsetTop - parent.offsetTop,
            behavior: 'smooth',
          });
        }
      },
      onClick: function () {
        this.moveTo(this.activeSection == 'home' ? 'about' : 'home')
      },
      initIntersectionObserver: function () {
        const self = this,
              sections = document.querySelectorAll('.section-parent > section')

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              self.activeSection = entry.target.id;
            }
          })
        }, { threshold: 0.4 })

        sections.forEach((section) => observer.observe(section))
        self.activeSection = [...sections].map(section => section.getAttribute('id'))[0];
      }
    }
  }
</script>
