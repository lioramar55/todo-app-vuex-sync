function makeId(length = 5) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function formatTimeActivity(time) {
  var date = new Date(time)
  var diff = Date.now() - date.getTime()
  const MIN = 60 * 1000
  if (diff > MIN * 60 * 24 && diff < MIN * 60 * 48) return `Yesterday`
  else if (diff > MIN * 60 * 12 && diff < MIN * 60 * 24)
    return `${(diff / (1000 * 60 * 60)).toFixed(0)} hours ago`
  else if (diff < MIN * 60 * 12 && diff > 59.9 * MIN) return 'Couple of hours ago'
  else if (diff < 59.9 * MIN && diff > MIN) return `${(diff / (1000 * 60)).toFixed(0)} minutes ago`
  else if (diff < MIN) {
    return `${(diff / 1000).toFixed(0)} seconds ago`
  } else {
    return `${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()}`
  }
}

export const utilService = {
  makeId,
  getRandomInt,
  formatTimeActivity,
}
