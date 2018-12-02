import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  products: []
}

const mutations = {

  INIT: (state, payload) => {
    state.products = {};
    state.products = payload;
  },

  ADD_PRODUCT: (state, product) => {
    state.products.push({
      ...product,
      quantity: 1
    })
  },

  REMOVE_PRODUCT: (state, product) => {
    state.products = state.products.filter(item => item.id !== product.id)
  },

  INCREMENT_PRODUCT: (state, product) => {
    const item = state.products.find(item => item.id === product.id)
    item.quantity++
  },

  DECREMENT_PRODUCT: (state, product) => {
    const item = state.products.find(item => item.id === product.id)
    item.quantity--
  }
}

const actions = {
  addProductToCart: ({state, commit}, product) => {
    if (!state.products.find(item => item.id === product.id)) {
      commit('ADD_PRODUCT', product)
    } else {
      commit('INCREMENT_PRODUCT', product)
    }
    localStorage.setItem('simple-cart/store', JSON.stringify(state));
  },

  removeProductToCart: ({state, commit}, product) => {
    if (state.products.find(item => item.quantity <= 1)) {
      commit('REMOVE_PRODUCT', product)
    } else {
      commit('DECREMENT_PRODUCT', product)
    }
    localStorage.setItem('simple-cart/store', JSON.stringify(state));
  }
}

const getters = {
  getTotalProduct: (state) => {
    return state.products.reduce((total, product) => total + product.quantity, 0)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
