<template>
	<img src="../assets/img/icons/arrow-back.png" alt="back">
	<div v-if="searchValue !== 'Декоративные накладки'">
		<h1 class="result-text">По запросу "{{ searchValue }}" ничего не найдено</h1>
		<div class="">Попробуйте ввести
			<a href="/search"
				@click.prevent="$store.state.searchValue = 'Декоративные накладки'"
			>"Декоративные накладки"</a>
		</div>
	</div>
	<app-products
		v-if="searchValue == 'Декоративные накладки'"
	/>
	
</template>

<script>

import AppProducts from '../components/AppProducts.vue'


export default {
	components: { 
		AppProducts
	},

	
	data(){
		return{
		
		}
	},
	methods:{
		// chooseRightVariant(){
		// 	this.$store.state.searchValue = "Декоративные накладки";
		// 	this.$router.push('/search');
		// }
	},
	computed:{
		items(){
			return this.$store.state.products
		},
		searchValue(){
			return this.$store.state.searchValue
		}
	}

}
</script>

<style lang="scss" scoped>
.cards{
	display: grid;
	grid-auto-rows: auto;
	grid-template-columns: repeat(auto-fit, 225px);
	gap: 30px;
	margin-bottom: 60px;
}
.btn__show-more{
		display: block;
		width: 243px;
		height: 60px;
		background-color: #613CC5;
		font-weight: 400;
		font-size: 18px;
		color: #fff;
		border-radius: 10px;
		margin: 0 auto;
		margin-bottom: 50px;
	}
</style>
