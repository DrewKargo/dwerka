<template>
	<h1 class="result-text">По запросу "декоративные накладки" найдено<span>{{}} товаров</span></h1>
	<div class="main__box">
		<app-filters/>
		<section class="result">
			<p class="sorting__by">Сортировать по</p>
			<ul class="sorting__filters">
				<li class="sorting__filter"
					@click="sortBypPopularity"
				>Популярности
				</li>
				<li class="sorting__filter"
					@click="sortByPrice"
				>Цене
				</li>
				<li class="sorting__filter"
					@click="sortByRate"
				>Рейтингу</li>
				<li class="sorting__filter"
					@click="sortByUpdate"
				>Обновлению
				</li>
				<li class="sorting__filter"
					@click="sortByDiscount"
				>Скидке
				</li>
			</ul>
			<app-modal-card 
				v-if="isModalActive"
				:item="product"
				@closeModal ="isModalActive = false"
			/>
			<ul class="cards">
				<app-card
					v-for="item in PRODUCTS"
					:key="item.id"
					:product_data="item"
					@emitItem="addItem"
					@click="isModalActive = true, addToLastSeen(this.product)"
				/>
			</ul>
			<button class="btn__show-more">Показать ещё</button>
			<nav>
				<ul>
					<!-- <li
						v-for="page in pages"
						:key="page"
					>{{page}}
					</li> -->
					<li>...</li>
					<li>Следующая страница</li>
				</ul>
			</nav>
		</section>
	</div>
</template>

<script>

import AppCard from './AppCard.vue'
import AppFilters from './AppFilters.vue'
import AppModalCard from './AppModalCard.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'AppProducts',
	components: { 
		AppCard,
		AppFilters,
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
			productsPerPage: 16,
			pageNumber: 1,
			sortPriceFrom: 'min',
			product: {},
			isModalActive: false
		}
	},
	methods:{

		sortByPrice(){
			if(this.sortPriceFrom == 'min'){
				this.PRODUCTS.sort((a,b) => a.price - b.price)
				this.sortPriceFrom = 'max'
			}else{
				this.PRODUCTS.sort((a,b) => b.price - a.price)
				this.sortPriceFrom = 'min'
			}
			
		},
		sortByDiscount(){
			this.PRODUCTS.sort((a,b) => b.discountPercentage - a.discountPercentage)
		},
		sortBypPopularity(){
			this.PRODUCTS.sort((a,b) => a.popularity - b.popularity)
		},
		sortByRate(){
			this.PRODUCTS.sort((a,b) => b.rate - a.rate)
		},
		sortByUpdate(){

		},
		...mapActions([
			'ADD_TO_LASTSEEN'
		]),
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
			
		},
		addToLastSeen(product){
			let repeatedItem = this.LASTSEEN.find((el) => el.id === product.id)
			if(repeatedItem){
				let indexOfRepeatedItem = this.LASTSEEN.findIndex(item => item === repeatedItem)
				this.LASTSEEN.splice(indexOfRepeatedItem, 1);
				this.ADD_TO_LASTSEEN(product);
			}else{
				console.log('NO!');
				this.ADD_TO_LASTSEEN(product);
			}
			
		}

	},
	computed:{
		// pages(){
		// 	return Math.ceil(this.items.length / 16);
		// },
		// paginatedProducts(){
		// 	let from = (this.pageNumber -1) * this.productsPerPage;
		// 	let to = from + this.productsPerPage;
		// 	return this.items.slice(from, to);
		// },
		...mapGetters([
			'PRODUCTS',
			'LASTSEEN'
		]),

	}

}
</script>

<style lang="scss" scoped>

</style>