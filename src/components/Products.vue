<template>
    <div class="products">
        <h1>可选商品列表</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.name}} - {{'¥'+product.price}}
                <br>
                <button :disabled="!product.inventory" @click="addProductToCart(product)">添加到购物车</button>
            </li>
        </ul>
    </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";

  export default {
    name: "Products",
    computed: {
      ...mapState({
        products: state => state.products.all
      })
    },
    methods: {
      ...mapActions('cart', [
        'addProductToCart'
      ])
    },
    created () {
      this.$store.dispatch('products/getAllProducts')
    }
  }
</script>

<style scoped>

</style>