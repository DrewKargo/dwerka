import {createRouter, createWebHistory} from 'vue-router'
import AppCart from './views/AppCart'
import AppSearchResult from './views/AppSearchResult'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/cart', component: AppCart},
		{path: '/search', component: AppSearchResult, props: true}
	]
})

export default router;