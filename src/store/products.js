/* eslint-disable */
import shop from '../api/shop'

const state = {
  all: []
}

const getters = {}

const mutations = {
  setAll (state, allProducts) {
    state.all = allProducts
  },
  decreaseProductInventory (state, {id}) {
    let item = state.all.find(item => item.id === id)
    item.inventory--
  }
}

const actions = {
  getAllProducts ({state, getters, commit, dispatch}) {
    shop.getAllProducts().then((res) => {
      commit('setAll', res)
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