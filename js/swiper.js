new Swiper(".swiper-container", {
	//стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		//буллеты
		clickable: true,
	},
	//перетаскивание на ПК
	simulateTouch: true,
	//чувствительность свайпа
	touchRatio: 1,
	//угол срабатывания свайпа
	touchAngel: 45,
	//курсор перетаскивания
	grabCursor: true,
});