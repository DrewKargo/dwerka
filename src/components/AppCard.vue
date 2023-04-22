<template>
	<li class="card"
		@click="emitItem"
	>
		<div class="card__img">
			<img :src="product_data.images" alt="Картинка товара">
		</div>
		<div class="card__price">
			<p class="new-price">{{ product_data.price }} р</p><p class="old-price">{{product_data.oldPriice}} р</p>
		</div>
		<div class="card__description">
			<p>{{ product_data.title }} / {{ product_data.category }}</p>
		</div>
	</li>
</template>

<script>
export default {
	name: 'AppCard',
	props:{
		product_data: {
			type: Object,
			default() {
				return {}
			}
		}
	},

	data() {
		return{

		}
	},
	methods:{
		emitItem(){
			return this.$emit("emitItem",
				this.product_data.id,
				this.product_data.title,
				this.product_data.category,
				this.product_data.discountPercentage,
				this.product_data.images,
				this.product_data.oldPriice,
				this.product_data.price,
				this.product_data.rate,
				this.product_data.stock
				);
		}
	}
		
}
</script>

<style lang="scss" scoped>

</style>