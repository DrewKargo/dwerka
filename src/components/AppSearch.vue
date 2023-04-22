<template>
	<div class="search">
		<input 
			@click="showSearchHistory"
			@keypress.enter="addToSearchHistory"
			@keydown.esc="closeSearchModal"
			v-model="inputValue"
			type="text" 
			placeholder="Я ищу..." 
			class="search__input"/>
		<div 
			v-if="searchHistory.state == true && searchHistory.results.length"
		class="search__modal">
			<button 
				class="search__clean"
				@click="clearHistory"
				v-if="searchHistory.results.length"
				>Очистить историю</button>
			<ul class="search__results">
				<li 
					v-for="item in filteredResults" 
					:key="item"
					@click="chooseSearchVariant(item), reorderListByClick(item)"
					class="search__result">
					<img src="../assets/img/icons/search.svg" alt="Поиск">
					{{ item }}
				</li>
			
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AppSearch',
		data(){
			return{
				inputValue: "",
				searchHistory: {
					state: false,
					results:
						[
							"Декоративные накладки",
							"Скрытые двери",
							"Раздвижные двери",
							"Меджик",
							"Глазки",
							"Задвижки",
							"Ключницы",
							"Навесы",
							"Входные двери",
							"Межкомнатные двери"
						],
					default:
						[
							"Декоративные накладки",
							"Скрытые двери",
							"Раздвижные двери",
							"Меджик",
							"Глазки",
							"Задвижки",
							"Ключницы",
							"Навесы",
							"Входные двери",
							"Межкомнатные двери"
						]
				}
			}
		},
		methods:{
			showSearchHistory(){
				if (this.searchHistory.state == false){
					this.searchHistory.state = true;
				} else{
					this.searchHistory.state = false
				}
			},
			clearHistory(){
				this.searchHistory.results = [];
				this.searchHistory.state = false
			},
			addToSearchHistory(){
				if(this.inputValue !== ''){
					this.searchHistory.results.splice(0, 0, this.inputValue);
					this.$store.state.searchValue = this.inputValue;
					this.inputValue = '';
					this.searchHistory.state = false;
					this.$router.push('/search')
				}
			},
			closeSearchModal(){
				this.searchHistory.state = false
			},
			chooseSearchVariant(item){
				this.$store.state.searchValue = item;
				this.$router.push('/search');
				this.searchHistory.state = false;
			},
			reorderListByClick(item) {
				let movedItem = this.searchHistory.results.findIndex(el => el === item)
				this.searchHistory.results.splice(movedItem, 1);
				this.searchHistory.results.unshift(item);
				this.inputValue = '';
			}
		
		},
		computed: {
			filteredResults() {
				return this.inputValue
					? this.searchHistory.default.filter((item) => 
						item.toLowerCase().includes(this.inputValue.toLowerCase())
					)	
					: this.searchHistory.results;
			}
		}
	}
</script>

<style scoped>

</style>