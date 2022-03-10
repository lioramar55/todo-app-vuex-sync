export default {
  template: `
    <section :style="userStyle" class="home-page">
      <h1>Welcome to the home page - (Add name)</h1>
      <h2>Go ahead and add todos</h2>
      <router-link to="/todo">Todos APP</router-link>
    </section>
  `,
  data() {
    return {
      prefs: this.$store.state.user.prefs
        ? this.$store.state.user.prefs
        : {
            color: '',
            bgColor: '',
          },
    }
  },
  computed: {
    userStyle() {
      const user = this.$store.state.user
      if (user.prefs) {
        return { 'background-color': this.prefs.bgColor, color: this.prefs.color }
      } else return ''
    },
  },
}
