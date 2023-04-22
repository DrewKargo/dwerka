<template>
		<div class="wrapper">
			<app-header/>
		<main class="main">
			<div class="container">
				<router-view
				></router-view>
				<app-last-seen/>
			</div>
		</main>
		<app-footer/>
	</div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import AppFooter from './components/AppFooter.vue';
import AppLastSeen from './components/AppLastSeen.vue';
import AppHeader from './components/AppHeader.vue';

export default {
	name: 'app',
  components: 
	{
		AppHeader,
		AppLastSeen,
		AppFooter,
	},
	data(){
		return{
			
		}
	},
	methods: {
			...mapActions([
			'GET_PRODUCTS_FROM_API',
			'GET_CART_FROM_API',
			'GET_LASTSEEN_FROM_API'
		]),

	},
	computed: {
		...mapGetters([
			'PRODUCTS',
			'CART',
			'LASTSEEN'
		])
	},
	mounted(){
		this.GET_PRODUCTS_FROM_API(),
		this.GET_CART_FROM_API(),
		this.GET_LASTSEEN_FROM_API()
	}
}
</script>

<style lang="scss">

@import './assets/css/style.scss'


</style>
