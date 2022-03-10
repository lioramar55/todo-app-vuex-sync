export default {
  template: `
    <section class="todo-add">
      <form @submit.prevent="addTodo">
        <h2>Add New Todo</h2>
        <label>
          Todo text:
          <input type="text" placeholder="What todo???"
            v-model="todo.txt">
        </label>
        <button>Add todo</button>
      </form>
    </section>
  `,
  data() {
    return { todo: { txt: '' } }
  },
  methods: {
    addTodo() {
      this.$emit('add-todo', { ...this.todo })
    },
  },
}
