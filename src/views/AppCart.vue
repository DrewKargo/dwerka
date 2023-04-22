<template>
	<img src="../assets/img/icons/arrow-back.png" alt="back">
	<h1 class="result-text"
	v-if="this.$store.state.cartProductsQuanity === 0"
	>Корзина пуста</h1>
	<!-- <p>Воспользуйтесь поиском и добавьте товар</p> -->
	<ul class="cart__items">
		<app-cart-item/>
	</ul>
	<div class="cart__result"
		
	>
		<div class="cart__info">
			<p>Количество товаров в корзине {{ showQuantity }}</p>
			<p>Скидка составила {{ showDiscount }} р</p>
		</div>
		<div class="cart__price">
			<p>Сумма заказа</p>
			<p class="new-price">{{ showTotalSum }} р</p>
			<button class="btn__addToCart">Заказать</button>
		</div>
	</div>
</template>

<script>

import AppCartItem from '@/components/AppCartItem.vue';
import { mapGetters } from 'vuex';
	export default {
		components:{
			AppCartItem
		},
		name: 'AppCart',
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		computed:{
			...mapGetters([ 
				'QUANTITY',
				'CART'
			]),

			showTotalSum(){
				let total = 0
				this.CART.forEach(item =>{
					total += item.quantity * item.price
				})
				return total
			},
			showQuantity(){
				let sum = 0
				this.CART.forEach(item =>{
					sum += item.quantity 
				})
				return sum
			},
			showDiscount(){
				let discount = 0
				this.CART.forEach(item =>{
					if( item.quantity > 1){
						discount += item.quantity * (item.oldPriice - item.price)
						return discount
					}
					discount += item.oldPriice - item.price
				})
				return discount
			}

		}

	}
</script>

<style lang="scss" scoped>
	
</style>