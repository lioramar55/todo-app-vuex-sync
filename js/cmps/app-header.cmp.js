export default {
  template: `
    <header>
      <div class="main-header">
        <div class="logo"><h1>Todo App</h1></div>
        <nav>
          <router-link to="/">Home</router-link> | 
          <router-link to="/todo">Todo app</router-link> | 
          <router-link to="/user">User</router-link> |
        </nav>
      </div>
      <span> Welcome {{username}} - %{{percentageDone}}</span>
    </header>
  `,
  computed: {
    username() {
      return this.$store.getters.username
    },
    percentageDone() {
      if (isNaN(this.$store.getters.percentageDone)) return 'You have no todos, plan your day :)'
      return this.$store.getters.percentageDone + ' of your todos are completed'
    },
  },
}
