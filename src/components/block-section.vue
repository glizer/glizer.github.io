<template>
  <section :id="id" class="align-items-center" :class="{'is-loaded': isLoaded}">
    <div v-if="title" class="container">
      <h2 class="page-title">{{ title }}</h2>
      <slot name="default" />
    </div>
     <slot v-else name="default" />
  </section>
</template>

<script>
  export default {
    name: 'block-section',
    props: {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        default: '',
      }
    },
    data: function () {
      return {
        isLoaded: false,
      }
    },
    created: function () {
      document.addEventListener('DOMContentLoaded', () => {
        const progress = document.querySelector('#skills')
        const self = this
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              self.isLoaded = true
              self.$emit('loaded');
            }
          },
          { threshold: 0.5 }
        )

        observer.observe(progress)
      })
    }
  }
</script>

<style scoped>

</style>