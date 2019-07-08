import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let data=[
  {
    id:0,
    title:"手机",
    ischeck:true
  },
  {
    id:1,
    title:"电脑",
    ischeck:true
  },
  {
    id:2,
    title:"电视",
    ischeck:true
  },
]

export default new Vuex.Store({
  state: {
    list:data
  },
  mutations: {
    //添加商品
    addShopList(state,payload){
      state.list.push({id:state.list.length,title:payload});
    },
    //清空购物车
    cleanShopList(state,payload){
      state.list=[]
    },
    //修改
    reviseShopList(state,payload){
      let {id,ischeck}=payload
      let item=state.list.find(item=>item.id===id);
      item.ischeck=ischeck;
    },
    submitShopList(state){
        state.list=state.list.filter(item=>item.ischeck===false)
    }
  },
  actions: {

  }
})
