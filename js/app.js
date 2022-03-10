import { router } from './router.js'
import { store } from './store/store.js'
import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'
const options = {
  template: `
    <section class="main-app">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </section>
  `,
  components: {
    appHeader,
    appFooter,
  },
  router,
  store,
}
const app = Vue.createApp(options)
app.use(router)
app.use(store)
app.mount('#app')
