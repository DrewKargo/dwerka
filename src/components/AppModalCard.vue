<template>
	<div class="modal">
		<div class="modal__background"
			@click="closeModal"
		>
		</div>
		<div class="modal__window"
			@keydown.esc="closeModal"
		>
			<button class="btn__closeModal"
				@click="closeModal"
			>X</button>
			<h2>{{item.title}}</h2>
			<div class="modal__container">
				<div class="modal__image">
					<img :src="this.item.images" alt="Картинка товара">
					<ul class="rate">
						<li class="rate__star"></li>
						<li class="rate__star"></li>
						<li class="rate__star"></li>
						<li class="rate__star"></li>
						<li class="rate__star"></li>
					</ul>
				</div>
				<div class="modal__description">
					<h3>Категория</h3>
					<p>{{ item.category }}</p>
					<h3>Описание</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aliquam ratione minus asperiores? Porro inventore, amet quisquam aperiam iusto architecto.
					</p>
					<div class="modal__price">
						<h3>Старая цена: <span class="old-price"> {{ item.oldPriice }} руб.</span></h3>
						<div class="discount">-{{ item.discountPercentage }}%</div>
						<div class="new-price">{{ item.price }} руб.</div>
					</div>
				</div>
			</div>
			<div class="modal__actions">
				<div class="modal__quantity">
					<button class="btn__quantity"
						@click="quantityMinus"
					>-</button>
					<input type="number" class="quantity__form"
						v-model.number="quantityToBuy" min="1"
					>
					<button class="btn__quantity"
						@click="quantityPlus"
					>+</button>
				</div>
				<button class="btn__addToCart"
					@click="addToCart"
				>Добавить в корзину</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'AppModalCard',
	props:{
		item:{
			type: Object,
			required: true
		}
	},
	data(){
		return{
			product:{
			},
			quantityToBuy: 1
		}
	},
	methods:{
		closeModal(){
			return this.$emit('closeModal')
		},
		quantityMinus(){
			if(this.quantityToBuy > 1){
				this.quantityToBuy--
			}
		},
		quantityPlus(){
			this.quantityToBuy++
		},
		...mapActions([
			'ADD_TO_CART'
		]),
		addToCart(){
			let modifyItem = this.item
			modifyItem.quantity = this.quantityToBuy
			this.ADD_TO_CART(modifyItem);
			this.quantityToBuy = 1
			this.closeModal()
		}
	}
		
}
</script>

<style lang="scss" scoped>


</style>