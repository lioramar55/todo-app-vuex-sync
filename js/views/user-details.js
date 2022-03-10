import { utilService } from '../services/util-service.js'

export default {
  template: `
    <section class="user-details"
      :style="userStyle">
      <h1>{{username}} Profile</h1>
      <div class="pref">
        <form @submit.prevent="onSavePrefs">
          <label >
            Name:
            <input type="text" placeholder="Your name"
              v-model="name"/>
          </label>
          <label>
            Color: 
            <input type="color" 
              v-model="prefs.color"/>
          </label>
          <label>
            BG Color:
            <input type="color" 
              v-model="prefs.bgColor"/>
          </label>
          <button>Save</button>
        </form>
      </div>
      <h3>Total activities: {{userActivities.length}}</h3>
      <div class="activities">
        <article class="activity" v-for="activity in userActivities">
          <h4>User: {{username}}</h4>
        <p>Activity: {{activity.txt}}</p>
        <p>Done at: {{formatTime(activity.at)}}</p>
      </article>
    </div>
    </section>
  `,
  data() {
    return {
      name: '',
      prefs: this.$store.state.user.prefs
        ? this.$store.state.user.prefs
        : {
            color: '',
            bgColor: '',
          },
    }
  },
  methods: {
    onSavePrefs() {
      this.$store.commit({ type: 'savePrefs', name: this.name, prefs: { ...this.prefs } })
    },
    formatTime(time) {
      return `${utilService.formatTimeActivity(time)}`
    },
  },
  computed: {
    userStyle() {
      const user = this.$store.state.user
      if (user.prefs) {
        return { 'background-color': this.prefs.bgColor, color: this.prefs.color }
      } else return ''
    },
    username() {
      return this.$store.getters.username
    },
    userActivities() {
      return this.$store.getters.userActivities
    },
  },
}
