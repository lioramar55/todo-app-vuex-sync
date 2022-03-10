import { utilService } from '../services/util-service.js'

export default {
  props: ['todo'],
  template: `
    <div class="todo-preview" :style="previewStyle">
      <h2>{{todo.txt}}</h2>
      <p>Created: {{timeCreated()}}</p>
      <button @click="$emit('toggle-todo', todo)">{{isDoneBtn}}</button>
      <button @click="$emit('delete-todo', todo._id)">X</button>
      <button @click="$router.push('/todo/'+todo._id+'/edit')">Edit</button>
      <button @click="$router.push('/todo/'+todo._id)">Details</button>
    </div>
  `,
  methods: {
    timeCreated() {
      return utilService.formatTimeActivity(this.todo.createdAt)
    },
  },
  computed: {
    previewStyle() {
      return { 'background-color': this.todo.doneAt ? 'skyblue' : 'salmon' }
    },
    isDoneBtn() {
      return this.todo.doneAt ? 'Undone' : 'Done'
    },
  },
}
