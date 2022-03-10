export default {
  template: `
    <section class="todo-filter">
      <h2>Filter Todos</h2>
      <form @submit.prevent="onFilter">
        <label>
          By txt:
          <input type="text" placeholder="Enter search text"
            v-model="filterBy.txt">
        </label>
        <label>
          By status:
          <select v-model="filterBy.status">
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="undone">Undone</option>
          </select>
        </label>
        <button>Filter</button>
      </form>
    </section>
  `,
  data() {
    return {
      filterBy: {
        txt: '',
        status: 'all',
      },
    }
  },
  methods: {
    onFilter() {
      this.$emit('set-filter', { ...this.filterBy })
    },
  },
}
