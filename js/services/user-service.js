import { storageService } from './storage-service.js'

export const userService = {
  getUser,
  save,
}

const USER_KEY = 'userDB'

const userDemoData = {
  _id: 'u123',
  fullname: 'Puki Ben David',
  activities: [{ txt: 'Added a Todo', at: Date.now() - 10000 }],
  createdAt: Date.now() - 1000 * 60 * 60 * 50,
}

const isDemoDataExist = storageService.load(USER_KEY)
isDemoDataExist ? '' : storageService.store(USER_KEY, userDemoData)

function getUser() {
  return storageService.load(USER_KEY)
}
function save(user) {
  storageService.store(USER_KEY, user)
  return storageService.load(USER_KEY)
}
