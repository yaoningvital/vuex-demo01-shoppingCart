<template>
  <div id="app">
    <Products/>
    <Cart/>
  </div>
</template>

<script>
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'app',
  components: {
    Products,
    Cart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
