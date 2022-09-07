<template>
  <div>
    <h1>Store</h1>
    <div class="cart">
      Items in Cart: {{cart.length}}
    </div>
  </div>

  <ul>
    <li class="products" v-for="product in productList" :key="product.id">
      <img :src="product.image" alt=""/>
      <div class="title">{{product.title}}</div>
      <TButton name="Remove" v-if="cart.includes(product.id)" @click="removeFromCart(productId)"></TButton>
      <TButton name="Add to Cart" v-else @click="addToCart(product.id)"></TButton>
    </li>
  </ul>
</template>

<script>

  import {mapActions, mapState} from 'vuex'

  export default {
    data: () => ({
      
    }),
    methods:{
      ...mapActions({ addToCart: 'shop/addToCart', removeFromCart: 'shop/removeFromCart' }),

    },

    computed:{
      ...mapState({
        productList: (state) => state.shop.productList, 
        cart: (state) => state.shop.cart
      })
     
    }
  }
</script>

<style  scoped>
  *{
    box-sizing: border-box;
  }

  h1{
    text-align: center;
  }

  ul{

    display: grid;
    grid: auto-flow/repeat(4, 1fr);
    gap: 1.5rem;
    list-style: none;
  }

  .products{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    padding: 1rem;
  }

  .products img{
    width: 100%;
    height: 180px;
    object-fit: contain;
  }

  .cart{
    font-size: 20px;
    text-align: center;
    margin-block: 1rem ;
  }

</style>