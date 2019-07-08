<template>
  <div class="homeworld">
    <header class="header">购物车</header>
    <nav class="nav">
      <input type="text" ref="inp"/>
      <button @click="addList">添加商品</button>
    </nav>
    <main class="main">
      <li>{{addItem}}</li>
      <ul>
        <li v-for="item in list" :key="item.id">
          <input type="checkbox" checked={item.ischeck} @change="(e)=>revise(e,item.id)"/>
          {{item.title}}
        </li>
      </ul>
    </main>
    <footer class="footer">
      <button @click="()=>submitShopList">提交订单</button>
      <button @click="()=>cleanShopList">清空购物车</button>
    </footer>
  </div>
</template>

<script>
import { mapState ,mapMutations} from "vuex";
import { constants } from 'crypto';
export default {
  computed: {
    ...mapState(["list"]),
    ...mapMutations(["addShopList","cleanShopList","reviseShopList","submitShopList"])
  },
  data() {
    return {
      addItem: ""
    };
  },
  methods: {
    addList(){
      let value=this.$refs.inp.value;
      this.$store.commit("addShopList",value);
      this.$refs.inp.value="";
    },
    revise(e,id){
      let ischeck=e.target.checked;
      this.$store.commit("reviseShopList",{id,ischeck})
    }
  },
  mounted() {
  },
  components: {}
};
</script>

<style>
</style>
