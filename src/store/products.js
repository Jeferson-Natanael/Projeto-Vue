import shop from '@/api/shop'

const state = {
  all: [],
}

const actions = {
  addToCart ({commit}, product) {
    commit('add_to_cart', product.id)
  },
  getAllProducts ({commit}) {
    shop.getProducts(products => {
      commit('recieve_products', products)
    })
  },
  removeToCart ({commit}, product){
    commit('remove_to_cart', product)
  },
  refrechToCart ({commit}, product){
    commit('refrech_to_cart', product)
  }
}

const mutations = {
  recieve_products (state, products) {
    state.all = products
  },
  add_to_cart (state, productId) {
    state.all.find(p => p.id === productId).inventory--
  },
  remove_to_cart (state, product){
      state.all.find(p => p.id === product.id).inventory = product.inventory
  },
  refrech_to_cart (state, product){
    state.all.find(p => p.id === product.id).inventory = product.inventory - parseInt(product.quantity)
  }
}

const getters = {
  allProducts (state) {
    return state.all
  },
  // dialogConfirm (state) {
  //   return state.dialog;
  // }
}

export default {
  state,
  actions,
  mutations,
  getters
}
