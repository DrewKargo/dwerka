<template>
	<section class="lastSeen">
		<div class="lastSeen__header" v-if="LASTSEEN">
			<h2 class="lastSeen__title">Вы смотрели</h2>
			<button class="lastSeen__btn"
				@click="seeMore.toggle =! seeMore.toggle"
			>{{ seeMore.see }}</button>
		</div>
		<app-modal-card
			v-if="isModalActive"
			:item="product"
			@closeModal ="isModalActive = false" 
		/>
		<ul class="lastSeen__cards"
			:class="{ 'full': seeMore.toggle}"
		>
			<app-last-seen-card
				v-for="item in LASTSEEN"
				:product = "item"
				:key="item.id"
				@emitItem="addItem"
				@click="isModalActive = true"
			/>	
		</ul>
	</section>
</template>

<script>
import {mapGetters } from 'vuex'
import AppLastSeenCard from './AppLastSeenCard.vue'
import AppModalCard from './AppModalCard.vue'
export default {
	name: 'AppLastSeen',
	components: {
		AppLastSeenCard,
		AppModalCard
	},
	emits:{
		emitItem: {
			type: Object,
			required: true
		}
	},
	data(){
		return{
			seeMore:{
				toggle: false,
				see: 'Смотреть все',
				hide: 'Свернуть'
			},
			product: {},
			isModalActive: false
		}
	},
	methods:{
		addItem (id,title,category,discountPercentage,images,oldPriice,price, rate, stock){
			const item = {
				id: id,
				title: title,
				category: category,
				discountPercentage: discountPercentage,
				images: images,
				oldPriice: oldPriice,
				price: price,
				rate: rate,
				stock: stock
			}
			
			return this.product = item;
			
		}
	},
	computed: {
		...mapGetters([
			'LASTSEEN'
		])
	}
}
</script>

<style lang="scss" scoped>

</style>