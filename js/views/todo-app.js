import todoList from '../cmps/todo-list.cmp.js'
import todoAdd from '../cmps/todo-add.cmp.js'
import todoFilter from '../cmps/todo-filter.cmp.js'

export default {
  template: `
    <section :style="userStyle" class="todo-app">
      <todo-filter @set-filter="onSetFilter"></todo-filter>
      <todo-add @add-todo="onAddTodo"></todo-add>
      <todo-list 
        @delete-todo="onDeleteTodo"
        @toggle-todo="onToggleTodo"
      ></todo-list>
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
  components: {
    todoList,
    todoAdd,
    todoFilter,
  },
  methods: {
    onAddTodo(todo) {
      this.$store.commit({
        type: 'addTodo',
        todo,
      })
    },
    onDeleteTodo(id) {
      this.$store.commit({
        type: 'deleteTodo',
        id,
      })
    },
    onToggleTodo(todo) {
      this.$store.commit({
        type: 'toggleTodo',
        todo,
      })
    },
    onSetFilter(filterBy) {
      this.$store.commit({
        type: 'setFilter',
        filterBy,
      })
    },
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
