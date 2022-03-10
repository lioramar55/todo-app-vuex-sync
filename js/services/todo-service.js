import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

export const todoService = {
  query,
  save,
  removeTodo,
  getTodoById,
}

const TODO_KEY = 'TODO_DB'

const todosDemoData = [
  {
    _id: 'u123',
    txt: 'To build an awesome app',
    doneAt: null,
    createdAt: Date.now() - 1000 * 60 * 60 * 50,
  },
  {
    _id: 'u124',
    txt: 'Be awesome',
    doneAt: null,
    createdAt: Date.now() - 1000 * 60 * 2,
  },
  {
    _id: 'u125',
    txt: 'Have a great time while build stuff',
    doneAt: null,
    createdAt: Date.now() - 1000 * 60 * 60 * 2,
  },
  {
    _id: 'u126',
    txt: 'Learn about blockchain technology',
    doneAt: null,
    createdAt: Date.now() - 1000 * 60 * 60 * 16,
  },
  {
    _id: 'u127',
    txt: 'Learn trading again',
    doneAt: null,
    createdAt: Date.now() - 1000 * 60 * 60 * 28,
  },
]
const isDemoDataExist = storageService.load(TODO_KEY)
isDemoDataExist && isDemoDataExist.length > 0 ? '' : storageService.store(TODO_KEY, todosDemoData)

function query(filterBy) {
  if (!filterBy) return storageService.load(TODO_KEY)
  var todos = storageService.load(TODO_KEY)
  if (filterBy.txt) {
    const regex = new RegExp(filterBy.txt, 'i')
    todos = todos.filter((todo) => regex.test(todo.txt))
  }
  if (filterBy.status !== 'all') {
    if (filterBy.status === 'done') todos = todos.filter((todo) => todo.doneAt)
    else todos = todos.filter((todo) => !todo.doneAt)
  }
  return todos
}

function save(todoToSave) {
  var todos = storageService.load(TODO_KEY)

  if (todoToSave._id) {
    let idx = todos.findIndex((todo) => todo._id === todoToSave._id)
    todos[idx] = todoToSave
  } else {
    todoToSave._id = utilService.makeId()
    todoToSave.createdAt = Date.now()
    todos.unshift(todoToSave)
  }
  storageService.store(TODO_KEY, todos)
  return todoToSave
}

function removeTodo(id) {
  var todos = query()
  const idx = todos.findIndex((todo) => todo._id === id)
  todos.splice(idx, 1)
  storageService.store(TODO_KEY, todos)
}

function getTodoById(id) {
  var todos = query()
  return todos.find((todo) => todo._id === id)
}
