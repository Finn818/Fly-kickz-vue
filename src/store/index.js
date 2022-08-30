import { createStore } from 'vuex'
const nodeEOMP = "https://fly-kickz.herokuapp.com/";
export default createStore({
  state: {
    allproduct: null,
    singleproduct: null
  },
  getters: {
    
  },
  mutations: {
    allproduct(state, products) {
      state.allproduct = products

    },
    singleproduct(state, products) {
      state.singleproduct = products
      
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
      const response = await fetch("https://fly-kickz.herokuapp.com/products");
      const data = await response.json();
      context.commit('products', data.results)
    },
    SingleProducts(context, id){
      fetch(`https://fly-kickz.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => context.commit('singleproducts', data.results[0]))
    }
  },
  modules: {
  }
})
