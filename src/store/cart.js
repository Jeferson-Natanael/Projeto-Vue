import shop from '@/api/shop'

const state = {
  added: [],
  lastCheckout: null,
  dialog: {show: false, message: '', title: '', icon: '', type: '', color: ''}
}

const actions = {
  // The first argument is the vuex store, but we're using only the
  // dispatch function, which applies a mutation to the store,
  // and the current state of the store
  checkout ({commit, state}, products) {
    const savedCartItems = [...state.added]
    commit('checkout_request')
    shop.buyProducts(
      products,
      () => commit('checkout_successful'),
      () => commit('checkout_failure', savedCartItems)
    )
  }
}

const mutations = {
  add_to_cart (state, productId) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === productId)
    if (!record) {
      state.added.push({
        id: productId,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  checkout_request (state) {
    // clear cart
    state.added = []
    state.lastCheckout = null
    state.dialog = {show: false, message: '', title: '', icon: '', type: '', color: ''}
  },
  checkout_successful (state) {
    state.dialog = {show: true, message: 'Confirmação realizada com sucesso!', title: 'Alerta de finalização', icon: 'check_circle', type: 'success', color: 'green'}
    // state.dialog = true;
    // state.lastCheckout = 'bem sucedido'
  },
  checkout_failure (state, savedCartItems) {
    state.dialog = {show: true, message: 'Confirmação falhou!', title: 'Alerta de finalização', icon: 'error', type: 'error', color: 'red'}
    // state.dialog = true;
    // // rollback to the cart saved before sending the request
     state.added = savedCartItems
    // state.lastCheckout = 'falhou'
  },
  remove_to_cart (state, product){
    const item = state.added.find(p => p.id === product.id);
    var index  = state.added.indexOf(item);
    if (index > -1) {
      state.added.splice(index,1);
    }
  },
  refrech_to_cart (state, product){
    state.added.find(p => p.id === product.id).quantity = parseInt(product.quantity)
  }
}

const getters = {
  cartProducts (state, getters, rootState) {
    return state.added.map(({ id, quantity }) => {
      const product = rootState.products.all.find(p => p.id === id)
      return {
        title: product.title,
        price: product.price,
        id,
        quantity,
        inventory: product.inventory + quantity
      }
    })
  },
  cartCount (state) {
    var totalCount = 0
    state.added.forEach(({ quantity }) => {
      totalCount += quantity
    })
    return totalCount
  },
  dialog (state) {
    return state.dialog;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
