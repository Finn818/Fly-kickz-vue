import { createStore } from 'vuex'
const nodeEOMP = "https://fly-kickz.herokuapp.com/";
export default createStore({
  state: {
    allproducts: null,
    singleproduct: null,
    fullproductDetail: null,
    users: null,
    user: null,
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.allproducts,
    getProduct: state => state.singleproduct,
    getFullProductDetail: state => state.fullproductDetail
  },
  mutations: {
    setProducts(state, products) {
    state.allproducts = products

    },
    setProduct(state, product) {
    state.singleproduct = product
    },
    setUsers(state, users) {
      state.users = users
  
      },
      setUser(state, user) {
      state.user = user
      },
    setFullProductDetail(state, FullProductDetails) {
      state.fullproductDetail = FullProductDetails
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
      fetch(nodeEOMP+"users/login", {
        method: "POST",
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
    register: async (context, payload) =>  {
      try{
        const {userName, userEmail, userPassword} = payload;
        const data = {
        userName,
        userEmail,
        userPassword
        };
      fetch(nodeEOMP+"users/register", {
        method: "POST",
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
    },

    FullProductDetail : async(context) => {
      await fetch(`https://fly-kickz.herokuapp.com/products`)
      .then ((res) => res)
      .then( data => data.json())
      .then((results) => {
        console.log(results.FullProductDetails);
        context.commit('setFullProductDetails', results.FullProductDetails[0])
      })
    }
  },
  modules: {
  }
})
// ${nodeEOMP}
