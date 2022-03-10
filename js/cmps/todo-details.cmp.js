import { todoService } from '../services/todo-service.js'

export default {
  template: `
    <section class="todo-details">
      <h1>Todo text: {{todo.txt}}</h1>
    </section>
  `,
  created() {
    const { id } = this.$route.params
    this.todo = todoService.getTodoById(id)
  },
}
