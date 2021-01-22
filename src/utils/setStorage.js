/* eslint-disable */
const storage = {
  set(key, value) {
    let val = {
      ...value,
      time: new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    }
    localStorage.setItem(key, JSON.stringify(val))
  },
  get(key) {
    // 存进去的时间
    let huoqiTime = JSON.parse(localStorage.getItem(key)).time
    let currentTime = new Date().getTime()
    if (huoqiTime > currentTime) {
      return JSON.parse(localStorage.getItem(key))
    } else {
      localStorage.removeItem(key)
      return false
    }
  }
}

export default storage;