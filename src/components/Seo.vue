<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const title = computed(() => locale.value === 'ru' ? 'Павел Торбеев' : 'Pavel Torbeev')
const description = computed(() =>
  locale.value === 'en' ? 'Torbeev Pavel. Official representation on the Internet' : 'Торбеев Павел. Официальное представительство в сети интернет'
)

useHead({
  title,
  meta: [
    { name: 'description', content: description }
  ],
  link: [
    { rel: 'alternate', hreflang: 'ru', href: 'https://paveltorbeev.ru/' },
    { rel: 'alternate', hreflang: 'en', href: 'https://paveltorbeev.ru/#/en' }
  ]
})
</script>
