<template>
    <div class="cart">
        <h1>购物车</h1>
        <ul>
            <li v-for="cartProduct in cartProducts" :key="cartProduct.id">
                {{cartProduct.name}} ¥{{cartProduct.price}} X {{cartProduct.quantity}}
            </li>
        </ul>
        <p>总价格：¥{{total}}</p>
        <button :disable="cartProducts.length" @click="goToCheckout">去结算</button>
        <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from "vuex";

  export default {
    name: "Cart",
    computed: {
      ...mapState({
        cartProducts: state => state.cart.items,
        checkoutStatus: state => state.cart.checkoutStatus
      }),
      ...mapGetters('cart', {
        total: 'totalPrice'
      })
    },
    methods: {
      ...mapActions('cart', [
        'goToCheckout'
      ])
    }
  }
</script>

<style scoped>

</style>