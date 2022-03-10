import { todoService } from '../services/todo-service.js'
import { userService } from '../services/user-service.js'
export const store = new Vuex.Store({
  strict: true,
  state: {
    filterBy: null,
    todos: todoService.query(),
    user: userService.getUser(),
  },
  getters: {
    percentageDone({ todos }) {
      const totalDone = todos.reduce((acc, todo) => acc + (todo.doneAt ? 1 : 0), 0)
      return (totalDone / todos.length) * 100
    },
    username({ user }) {
      return user.fullname
    },
    userActivities({ user }) {
      return user.activities
    },
  },
  mutations: {
    savePrefs(state, { name, prefs }) {
      if (name) state.user.fullname = name
      state.user.prefs = prefs
      state.user.activities.unshift({
        txt: `Changed user settings: name- '${name}', color- '${prefs.color}', BG Color- '${prefs.bgColor}'`,
        at: Date.now(),
      })
      userService.save(JSON.parse(JSON.stringify(state.user)))
    },
    addTodo(state, { todo }) {
      var newTodo = todoService.save(todo)
      state.todos.unshift(newTodo)
      state.user.activities.unshift({ txt: `Added a Todo: '${todo.txt}'`, at: Date.now() })
      userService.save(JSON.parse(JSON.stringify(state.user)))
    },
    deleteTodo(state, { id }) {
      todoService.removeTodo(id)
      state.todos = todoService.query(state.filterBy)
      state.user.activities.unshift({ txt: 'Removed a Todo', at: Date.now() })
      userService.save(JSON.parse(JSON.stringify(state.user)))
    },
    updateTodo(state, { todo }) {
      todoService.save(todo)
      state.todos = todoService.query(state.filterBy)
      state.user.activities.unshift({ txt: `Updated a Todo: '${todo.txt}'`, at: Date.now() })
      userService.save(JSON.parse(JSON.stringify(state.user)))
    },
    toggleTodo(state, { todo }) {
      todo.doneAt = todo.doneAt ? null : Date.now()
      todoService.save({ ...todo })
      state.todos = todoService.query(state.filterBy)
      state.user.activities.unshift({
        txt: `Toggled a Todo to be '${todo.dontAt ? 'Done' : 'Undone'}'`,
        at: Date.now(),
      })
      userService.save(JSON.parse(JSON.stringify(state.user)))
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
      todoService.query(filterBy)
      state.todos = todoService.query(filterBy)
      state.user.activities.unshift({ txt: 'Set a filter', at: Date.now() })
      userService.save(JSON.parse(JSON.stringify(state.user)))
    },
  },
})
