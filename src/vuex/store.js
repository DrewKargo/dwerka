import { createStore } from 'vuex'
import Axios from 'axios'

const store = createStore({
	store: {
		products: [],
		lastSeen: [],
		cart: [],
		cartProductsQuanity: 0,
		searchValue: 'Декоративные накладки'
	},
	mutations: {
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products;
		},
		SET_CART_TO_STATE: (state, cart) => {
			state.cart = cart;
		},
		SET_LASTSEEN_TO_STATE: (state, lastSeen) => {
			state.lastSeen = lastSeen;
		},
		SET_CART: (state, item) => {
			state.cart.push(item);
		},
		SET_LASTSEEN: (state, item) => {
			state.lastSeen.unshift(item);
		}
	},
	actions: {
		GET_PRODUCTS_FROM_API({ commit }) {
			return Axios('http://localhost:3000/products',{
				method: "get"
			})
				.then((products) => {
					commit('SET_PRODUCTS_TO_STATE', products.data);
					return products;
				})
				.catch((error) => {
					console.log(error.toJSON());
					return error;
				})
		},
		GET_CART_FROM_API({ commit }) {
			return Axios('http://localhost:3000/cart',{
				method: "get"
			})
				.then((cart) => {
					commit('SET_CART_TO_STATE', cart.data);
					return cart;
				})
				.catch((error) => {
					console.log(error.toJSON());
					return error;
				})
		},
		GET_LASTSEEN_FROM_API({ commit }) {
			return Axios('http://localhost:3000/last-seen',{
				method: "get"
			})
				.then((lastSeen) => {
					commit('SET_LASTSEEN_TO_STATE', lastSeen.data);
					return lastSeen;
				})
				.catch((error) => {
					console.log(error.toJSON());
					return error;
				})
		},
		ADD_TO_CART({commit}, item){
			commit('SET_CART', item)
		},
		ADD_TO_LASTSEEN({commit}, item){
			commit('SET_LASTSEEN', item)
		},
	},
	getters: {
		PRODUCTS(state) {
			return state.products;
		},
		CART(state) {
			return state.cart;
		},
		LASTSEEN(state) {
			return state.lastSeen;
		},
		QUANTITY(state){
			return state.cartProductsQuanity;
		}
	}
})

export default store;