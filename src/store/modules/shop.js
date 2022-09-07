import { productList } from '@/dummy'

export default {
  namespaced:true,
  state: () => ({
    productList,
    cart:[],
  }),

  mutations: {
    addToCart: (state, productId) => {
      if (!state.cart.includes(productId)){
        state.cart.push(productId)
      }
    },

    removeFromCart: (state, productId) => {

      if(!state.cart.includes(productId)) {
        state.cart.splice(productId, 1)
      }
      // state.cart = state.cart.filter((id)=> id  !==  productId)
    }
  },

  actions: {
    addToCart: (context, productId) => {
      context.commit("addToCart", productId);
    },

    removeFromCart: (context, productId) => {
      context.commit("removeFromCart", productId)
    }
  }
 }
