<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import image from '../assets/img/avatar.png';

const { locale } = useI18n()
const title = computed(() => locale.value === 'ru' ? 'Павел Торбеев' : 'Pavel Torbeev')
const description = computed(() =>
  locale.value === 'en' ? 'Torbeev Pavel. Official representation on the Internet' : 'Торбеев Павел. Официальное представительство в сети интернет'
)

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: 'https://paveltorbeev.ru/' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ],
  link: [
    { rel: 'alternate', hreflang: 'ru', href: 'https://paveltorbeev.ru/' },
    { rel: 'alternate', hreflang: 'en', href: 'https://paveltorbeev.ru/#/en' },
    { rel: 'canonical', href: 'https://paveltorbeev.ru/' },
    { rel: 'preload', as: 'font', type: 'font/woff2', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic' }
  ]
})
</script>
