<template>
		<footer class="footer">
			<div class="container footer__container">
				<div class="footer__section">Покупателям
					<ul class="footer__items">
					<li class="footer__item">Как сделать заказ</li>
					<li class="footer__item">Способы оплаты</li>
					<li class="footer__item">Доставка</li>
					<li class="footer__item">Возврат товара</li>
					<li class="footer__item">Правила пользования торговой площадкой</li>
					<li class="footer__item">Новости</li>
					<li class="footer__item">Вопросы и ответы</li>
				</ul>
				</div>
				<div class="footer__section">Партнерам
					<ul class="footer__items">
					<div class="footer__item">Продавайте на Dwerka.ru</div>
					<div class="footer__item">Перевозчикам</div>
				</ul>					
				</div>
				<div class="footer__section">Компания
					<ul class="footer__items">
					<li class="footer__item">О нас</li>
					<li class="footer__item">Контакты</li>
					<li class="footer__item">Публичная оферта</li>
					<li class="footer__item">Политика конфиденциальности</li>
				</ul>					
				</div>
				<div class="footer__section">Мы в соцсетях
					<ul class="footer__items">
						<li class="footer__item">info@dwerka.ru</li>
						<li class="footer__item"><a href="mailto:Dwerka2020@mail.ru">Dwerka2020@mail.ru</a></li>
					</ul>	
				</div>
				<div class="footer__section">
					
				</div>
				<div class="footer__items footer__items_payment">
					<img src="" alt="MasterCard" class="footer__item_payment">
					<img src="" alt="Visa" class="footer__item_payment">
					<img src="" alt="Mir" class="footer__item_payment">
				</div>
			</div>
		</footer>
</template>

<script>
	export default {
		name: 'AppProducts',
		
	}
</script>

<style lang="scss" scoped>
	.footer {
		&__container {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
		}

		&__section {
			font-weight: 600;
			font-size: 22px;
			color: #FFFFFF;
		}

		&__items {
			font-weight: 400;
			font-size: 18px;
			color: #ffffff99;
			// &_payment {
			// }
		}

		// &__item {

		// 	&_payment {
		// 	}
		// }
	}


</style>