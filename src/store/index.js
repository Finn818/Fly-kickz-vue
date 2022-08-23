import { createStore } from 'vuex'
export default createStore({
  state: {
    products : null,
    product : null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getProducts : async (context) => {
      fetch("https://agsheinapi.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        context.state.products = data.products
        console.log(context.state.products)
      })
    },
    getProduct : async (context, id) => {
      fetch(`https://agsheinapi.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        let {results} = data;
        context.state.product = results[0];
      })
    }
  },
  modules: {
  }
})