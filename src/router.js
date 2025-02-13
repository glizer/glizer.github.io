import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import NotFound from './components/NotFound.vue'
import { i18n } from './i18n'
import { nextTick } from 'vue'

const supportedLocales = ['ru', 'en']

const routes = [
    { path: '/:locale?', component: HomePage },
    //{ path: '/:pathMatch(.*)*', redirect: `${supportedLocales[0]}` }
    { path: '/404', component: NotFound },
    { path: '/:pathMatch(.*)*', redirect: '/404' }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    const locale = to.params.locale

    if (to.path === '/') {
        return next(`/${supportedLocales[0]}`)
    }

    if (to.path === '/404') {
        return next()
    }

    if (!supportedLocales.includes(locale)) {
        return next(`/${supportedLocales[0]}/404`)
    }

    if (i18n.global.locale.value !== locale) {
        i18n.global.locale.value = locale
        await nextTick()
    }

    next()
})

export default router
