import homePage from './views/home-page.js'
import todoApp from './views/todo-app.js'
import userDetails from './views/user-details.js'
import todoEdit from './cmps/todo-edit.cmp.js'
const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/todo',
    component: todoApp,
  },
  {
    path: '/todo/:id',
    component: todoEdit,
  },
  {
    path: '/user',
    component: userDetails,
  },
]

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
})
