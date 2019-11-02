/*eslint-disable*/
const _products = [
  {id: 1, name: '面膜', price: 10, inventory: 8},
  {id: 2, name: '口红', price: 430, inventory: 5},
  {id: 3, name: '素颜霜', price: 80, inventory: 10},
]

export default {
  getAllProducts () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(_products)
      }, 100)
    })
  },
  checkout () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let random = Math.random()
        console.log('random:', random)
        if (random > 0.5) {
          resolve('successful')
        } else {
          reject('fail')
        }
      }, 1000)
    })
  }
}