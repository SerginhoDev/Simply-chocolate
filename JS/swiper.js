const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 18,
	grabCursor: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
