import { createStore } from 'vuex'
const nodeEOMP = "https://fly-kickz.herokuapp.com/";
export default createStore({
  state: {
    allproducts: null,
    singleproduct: null,
    // productDetail: null
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.allproducts,
    getProduct: state => state.singleproduct,
    // getProductDetail: state => state.productDetail
  },
  mutations: {
    setProducts(state, products) {
    state.allproducts = products

    },
    setProduct(state, product) {
    state.singleproduct = product
    },
    
    // setproductDetails(state, productDetails) {
    //   state.productDetail = productDetails
    // }
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

    AllProducts : async(context) => {
      await fetch(`https://fly-kickz.herokuapp.com/products`)
      .then((res) => res)
      .then( data => data.json())
      .then((results) => {
      console.log(results.products);
      context.commit('setProducts',results.products)})
    },

    SingleProduct(context, id){
      fetch(`https://fly-kickz.herokuapp.com/products/${id}`)
      .then((res) => res)
      .then( data => data.json())
      .then(results => context.commit('setProduct', results.products[0]))
    }

    // ProductDetail : async(context) => {
    //   await fetch(`https://fly-kickz.herokuapp.com/productDetails`)
    //   .then ((res) => res)
    //   .then( data => data.json())
    //   .then((results) => {
    //     console.log(results.productDetails);
    //     context.commit('setproductDetails', results.productDetails)
    //   })
    // }
  },
  modules: {
  }
})
// ${nodeEOMP}
