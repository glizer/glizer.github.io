<template>
  <div class="language-switcher">
    <button
      v-for="locale in locales"
      :key="locale"
      :class="{ active: locale === selectedLocale }"
      :aria-label="$t('changeLanguage') + ' ' + locale"
      :style="{backgroundImage: 'url(' + getStyle(locale) + ')'}"
      @click="changeLanguage(locale)"
    >
    </button>
  </div>
</template>

<script>
  import '../styles/language.scss'
  import { ref, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  export default {
    setup () {
      const locales = ['en', 'ru']
      const route = useRoute()
      const router = useRouter()
      const selectedLocale = ref(route.params.locale || 'ru')

      const changeLanguage = (locale) => {
        if (locale !== selectedLocale.value) {
          const newPath = `/${locale}${route.path.replace(/^\/[a-z]{2}/, '')}`
          router.push(newPath)
        }
      }

      const getStyle = (locale) => {
        return locale === 'en'
          ? 'https://flagcdn.com/gb.svg'
          : 'https://flagcdn.com/ru.svg'
      }

      watch(() => route.params.locale, (newLocale) => {
        selectedLocale.value = newLocale
      })

      return { locales, selectedLocale, changeLanguage, getStyle }
    }
  }
</script>
