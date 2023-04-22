<template>
	<li class="cart__item"
		v-for="product in CART"
		:key="product.id"
		:product ="product"
	>
		<button class="btn__closeModal cart__close-btn"
			@click="deleteItemFromCart(product.id)"
		>X</button>
		<div class="card__img">
			<img :src="product.images" alt="Картинка товара">
		</div>
		<div class="cart__description">
			<div class="card__description">
				<h3>{{ product.category }}</h3>
				<p>{{ product.title }}</p>
			</div>
			<div class="cart__actions">
					<div class="modal__quantity">
						<button class="btn__quantity"
							@click="reductionQuantity(product.id)"
						>-</button>
						<input type="number" class="quantity__form"
						
							:value="product.quantity" min="1"
						>
						<button class="btn__quantity"
							@click="increaseQuantity(product.id)"
						>+</button>
					</div>
					<div class="card__price">
						<p class="new-price">{{ product.price }} р</p>
					</div>
			</div>
		</div>
	</li>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'AppCartItem',
	data(){
		return{
			
		}
	},
	methods:{
		deleteItemFromCart(id){
			const item = this.CART.findIndex(n => n.id === id)
			this.CART.splice(item, 1)
		},
		increaseQuantity(id){
			const item = this.CART.findIndex(n => n.id === id)
			this.CART[item].quantity++
		},
		reductionQuantity(id){
			const item = this.CART.findIndex(n => n.id === id)
			if (this.CART[item].quantity > 1)
			this.CART[item].quantity--
		}
	},
	computed: {
			...mapGetters([
				'CART'
			])
		}

	}
</script>

<style lang="scss" scoped>

</style>