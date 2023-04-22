<template>
	<li class="lastSeen__card"
		@click="emitItem"
	>
		<div class="lastSeen__img">
			<img :src="product.images" alt="Картинка товара">
		</div>
		<div class="card__price">
			<p class="new-price">{{ product.price }} р</p>
		</div>
		<div class="card__description">
			<p>{{ product.title }} / {{ product.category }}</p>
		</div>
	</li>
</template>

<script>
export default {
	name: 'AppLastSeenCard',
	props:{
		product: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods:{
		emitItem(){
			return this.$emit("emitItem",
				this.product.id,
				this.product.title,
				this.product.category,
				this.product.discountPercentage,
				this.product.images,
				this.product.oldPriice,
				this.product.price,
				this.product.rate,
				this.product.stock
				);
		}
	}
}
</script>

<style lang="scss" scoped>

</style>