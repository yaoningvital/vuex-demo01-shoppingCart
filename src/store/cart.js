/*eslint-disable*/
import shop from '../api/shop'

const state = {
  items: [
    // {id:1,name:'',price:'',quantity:1}
  ],
  checkoutStatus: null
}

const getters = {
  totalPrice (state, getters, rootState, rootGetters) {
    let totalPrice = 0
    for (let item of state.items) {
      totalPrice += item.price * item.quantity
    }
    return totalPrice
  }
}

const mutations = {
  setCheckoutStatus (state, payload) {
    state.checkoutStatus = payload
  },
  // 添加商品到购物车，购物车内该商品数量加1
  increaseProductQuantity (state, id) {
    for (let item of state.items) {
      if (item.id === id) {
        item.quantity++
      }
    }
  },
  // 新添商品到购物车
  addProductToCart (state, product) {
    state.items.push(product)
  },
  // 设置购物车内容
  setCart (state, cartItems) {
    state.items = cartItems
  }
}

const actions = {
  // 添加商品到购物车
  addProductToCart ({state, getters, commit, dispatch}, selectedProduct) {
    if (selectedProduct.inventory <= 0) return
    
    // 1、设置购物车结算状态
    commit('setCheckoutStatus', null)
    
    // 2、在购物车中添加一条该商品
    let cartItem = state.items.find(item => item.id === selectedProduct.id)
    if (cartItem) { // 购物车中已经有这种商品，数量加1
      commit('increaseProductQuantity', selectedProduct.id)
    } else { // 购物车中没有这种商品
      let item = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: 1
      }
      commit('addProductToCart', item)
    }
    
    // 3、products中该商品数量减1
    commit('products/decreaseProductInventory', {id: selectedProduct.id}, {root: true})
    
  },
  
  // 去结算
  goToCheckout ({state, getters, commit, dispatch}) {
    shop.checkout().then(res => {
      commit('setCheckoutStatus', res)
      if (res === 'successful') {
        commit('setCart', [])
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}