import { router } from './router.js'
import { store } from './store/store.js'
import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'
const options = {
  template: `
    <section  class="main-app">
      <app-header></app-header>
      <div :style="userStyle" class="app-container">
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </section>
  `,
  components: {
    appHeader,
    appFooter,
  },
  router,
  store,
  computed: {
    userStyle() {
      const { prefs } = this.$store.state.user
      if (prefs) {
        return { 'background-color': prefs.bgColor, color: prefs.color }
      } else return ''
    },
  },
}
const app = Vue.createApp(options)
app.use(router)
app.use(store)
app.mount('#app')
