import { utilService } from '../services/util-service.js'

export default {
  template: `
    <section class="user-details">
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
          <label>
            Done color:
            <input type="color" 
              v-model="prefs.doneColor"/>
          </label>
          <label>
            Undone color:
            <input type="color" 
              v-model="prefs.undoneColor"/>
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
        ? { ...this.$store.state.user.prefs }
        : {
            color: '#000000',
            bgColor: '#ffffff',
            doneColor: '#FA8072',
            undoneColor: '#87CEEB',
          },
    }
  },
  methods: {
    onSavePrefs() {
      const prefs = JSON.parse(JSON.stringify(this.prefs))
      this.$store.commit({ type: 'savePrefs', name: this.name, prefs })
    },
    formatTime(time) {
      return `${utilService.formatTimeActivity(time)}`
    },
  },
  computed: {
    username() {
      return this.$store.getters.username
    },
    userActivities() {
      return this.$store.getters.userActivities
    },
  },
}
