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
      moveTo: function (id) {
        const parent = document.querySelector('.section-parent')
        const target = document.getElementById(id)

        if (parent && target) {
          parent.scrollTo({
            top: target.offsetTop - parent.offsetTop,
            behavior: 'smooth',
          })
        }
      },
      onClick: function () {
        const sections = [...document.querySelectorAll('.section-parent > section')].map((selector) => selector.id),
              newStep = sections.findIndex((name) => name == this.activeSection)

        this.moveTo(sections[newStep + 1] ? sections[newStep + 1] : sections[0])
      },
      initIntersectionObserver: function () {
        const self = this,
              sections = document.querySelectorAll('.section-parent > section')

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              self.activeSection = entry.target.id
            }
          })
        }, { threshold: 0.4 })

        sections.forEach((section) => observer.observe(section))
        self.activeSection = [...sections].map(section => section.getAttribute('id'))[0]
      }
    }
  }
</script>
