<template>
		<header class="header">
			<div class="container">
				<div class="header__top">
					<div class="header__units">
						<div class="header__unit header__unit_location">Россия</div>
						<div class="header__unit header__unit_delivery">Бесплатная доставка</div>
						<button class="header__unit header__unit_callboard">Продавайте на Dwerka.ru</button>
					</div>
					<button class="header__problems">Сообщить о проблеме</button>
				</div>
				<div class="header__major">
					<div class="burger"><span class="burger__burger-btn"></span></div>
					<div class="logo"><a href="#"><img src="../assets/img/logo.png" alt="Логотип Dwerka.ru"></a><span>Интернет -
							магазин</span>
					</div>
					<app-search/>
					<div class="header__buttons">
						<a href="" class="header__button">
							<div class="header__button_adress"></div>
							<p>Адреса</p>
						</a>
						<a href="" class="header__button">
							<div class="header__button_profile"></div>
							<p>Профиль</p>
						</a>
						<router-link to="/cart" class="header__button">
							<button class="header__button_cart"></button>
							<span class="header__button_cart-quantity"
								v-if="this.$store.state.cart"
							>{{ showQuantity }}</span>
							<p>Корзина</p>
						</router-link>
					</div>
				</div>
			</div>
		</header>
</template>

<script>
import { mapGetters } from 'vuex';
import AppSearch from './AppSearch.vue';


export default {
	name: 'AppHeader',
	components:{
		AppSearch
	},
	data(){
		return{
	
		}
	},
	methods:{
		
	},
	computed:{
		...mapGetters([
			'CART'
		]),
		showQuantity(){
				let sum = 0
				this.CART.forEach(item =>{
					sum += item.quantity 
				})
				return sum
			}
	}
}
</script>

<style lang="scss" scoped>

</style>