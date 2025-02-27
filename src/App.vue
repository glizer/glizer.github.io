<template>
  <Seo/>
  <router-view/>
  <div class="bottom-container">
    <language-trigger/>
    <scroll-indicator/>
  </div>
</template>

<script>
  import ScrollIndicator from './components/ScrollIndicator.vue'
  import LanguageTrigger from './components/LanguageTrigger.vue'
  import { RouterView } from 'vue-router'
  import Seo from './components/Seo.vue'

  import { watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { i18n } from './i18n'

  export default {
    components: { ScrollIndicator, LanguageTrigger, Seo, RouterView },
    setup () {
      const route = useRoute()

      watch(() => route.params.locale, (newLocale) => {
        if (i18n.global.locale.value !== newLocale) {
          i18n.global.locale.value = newLocale
        }
      })

      return {}
    }
  }
</script>