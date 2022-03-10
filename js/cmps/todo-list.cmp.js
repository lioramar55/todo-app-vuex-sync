import todoPreview from './todo-preview.cmp.js'

export default {
  template: `
    <section class="todo-list">
      <todo-preview 
        v-for="(todo,idx) in todos"
        :todo="todo"
        :key="idx"
        @delete-todo="deleteTodo"
        @toggle-todo="toggleTodo"
      ></todo-preview>
    </section>
  `,
  components: {
    todoPreview,
  },
  methods: {
    deleteTodo(id) {
      this.$emit('delete-todo', id)
    },
    toggleTodo(id) {
      this.$emit('toggle-todo', id)
    },
  },
  computed: {
    todos() {
      return this.$store.state.todos
    },
  },
}
