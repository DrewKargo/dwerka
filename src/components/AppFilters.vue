<template>
	<aside class="sorting">
			<div class="sorting__by-price sorting__type">
				<p class="sorting__title">Цена</p>
				<div class="sorting__limits">
					<div class="sorting__limits-from">
						<p>От</p>
						<input type="text" class="sorting__limits-area"/>
					</div>
					<div class="sorting__limits-to">
						<p>До</p>
						<input type="text" class="sorting__limits-area"/>
					</div>
				</div>
			</div>
			<div class="sorting__by-color sorting__type">
				<p class="sorting__title">Цвет</p>
				<ul class="sorting__colors-cont">
					<li class="sorting__color-box"></li>
					<li class="sorting__color-box"></li>
					<li class="sorting__color-box"></li>
					<li class="sorting__color-box"></li>
					<li class="sorting__color-box"></li>
				</ul>
				<div class="sorting__showMore-btn">Показать все</div>
			</div>
			<div class="sorting__by-material sorting__type">
				<p class="sorting__title">Материал</p>
				<ul class="sorting__items">
					<li class="sorting__item"><input type="checkbox" name="material" id="shpon" class="checkbox">Эко шпон</li>
					<li class="sorting__item"><input type="checkbox" name="material" id="pvc" class="checkbox">ПВХ</li>
					<li class="sorting__item"><input type="checkbox" name="material" id="shpon" class="checkbox">Эко шпон</li>
					<li class="sorting__item"><input type="checkbox" name="material" id="pvc" class="checkbox">ПВХ</li>
				</ul>
				<div class="sorting__showMore-btn">Показать все</div>
			</div>
			<div class="sorting__by-size sorting__type">
				<p class="sorting__title">Размер</p>
				<ul class="sorting__items">
					<li class="sorting__item"><input type="checkbox" name="size" id="size-60" class="checkbox">60</li>
					<li class="sorting__item"><input type="checkbox" name="size" id="size-70" class="checkbox">70</li>
					<li class="sorting__item"><input type="checkbox" name="size" id="size-80" class="checkbox">80</li>
					<li class="sorting__item"><input type="checkbox" name="size" id="size-60" class="checkbox">90</li>
				</ul>
				<div class="sorting__showMore-btn">Показать все</div>
			</div>
	</aside>
</template>

<script>
export default {
		
}
</script>

<style scoped>

</style>