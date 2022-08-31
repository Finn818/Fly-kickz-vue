import { createStore } from 'vuex'
const nodeEOMP = "https://fly-kickz.herokuapp.com/";
export default createStore({
  state: {
    products: null,
    product: null
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products
  },
  mutations: {
    setProducts(state, products) {
      state.products = products

    },
    setProduct(state, product) {
      state.product = product
    }
  },
  actions: {
    login: async (context, payload) =>  {
      try{
        const {userName, userEmail, userPassword} = payload;
        const data = {
          userName,
          userEmail,
          userPassword
        };
        fetch(nodeEOMP+"Users", {
          method: "patch",
          body : JSON.stringify(data), 
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then((res) => res.json())
        .then((data) => console.log(data))
      }catch(e){
        console.err()
      }
    },
    async AllProducts(context) {
      const response = await fetch(`https://fly-kickz.herokuapp.com/products`);
      const data = await response.json();
      console.log(data);
      context.commit('setProducts', data.products)
    },
    SingleProduct(context, id){
      fetch(`https://fly-kickz.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => context.commit('setProduct', data.products[0]))
    }
  },
  modules: {
  }
})
// ${nodeEOMP}
