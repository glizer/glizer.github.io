<template>
  <head>
    <title>{{ pageTitle }}</title>
    <meta name="description" :content="pageDescription"/>
    <link rel="alternate" href="https://paveltorbeev.ru/" hreflang="ru"/>
    <link rel="alternate" href="https://paveltorbeev.ru/en" hreflang="en"/>
  </head>
</template>

<script>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRoute } from 'vue-router'

  export default {
    setup () {
      const { locale } = useI18n()
      const route = useRoute()

      const pageTitle = computed(() =>
        locale.value === 'en' ? 'Pavel Torbeev website' : 'Павел Торбеев'
      )
      const pageDescription = computed(() =>
        locale.value === 'en' ? 'Torbeev Pavel. Official representation on the Internet' : 'Торбеев Павел. Официальное представительство в сети интернет'
      )

      return { pageTitle, pageDescription }
    }
  }
</script>
