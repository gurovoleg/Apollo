$(document).ready(function(){

	var nav = $("#navigation"); //Список с навигацией
    var mNav= $('#mobile-menu'); //Мобильного меню с иконкой

    // Открываем/Закрываем мобильное меню, анимируем иконку, доюавляем класс модификатор
    $(mNav).click(function(e){
   	    e.preventDefault();
	    nav.slideToggle();
	    $(this).toggleClass('is-opened mobile-menu--active');
    });

    // Проверяем открыто ли мобильное меню и сварачиваем его
    function checkCloseMobileMenu() {
    	if ( $(mNav).hasClass("is-opened") ) {
			mNav.removeClass('is-opened mobile-menu--active');
			nav.slideToggle();
		}
    }
    
    // При изменении размера окна, в большую сторону, если меню было скрыто, показываем его.
    // И удаляем классы is-opened mobile-menu--active
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 1200)  {
		    nav.removeAttr('style');
		    mNav.removeClass('is-opened mobile-menu--active');
		}
	});

	// Плавный переход к нужному блоку
	$("#navigation").on("click","a", function (e) {
		//отменяем стандартную обработку нажатия по ссылке
		e.preventDefault();
		 // Сворачиваем мобильное меню при переходе по ссылке
		checkCloseMobileMenu();
		//забираем идентификатор блока с атрибута href
		// var id  = $(this).attr('href'),
		// //узнаем высоту от начала страницы до блока на который ссылается якорь
		// top = $(id).offset().top;
		// //анимируем переход на расстояние - top за 1500 мс
		// $('body,html').animate({scrollTop: top}, 1500);
	});

	// Альтернативный вариант плавной прокрутки
	// slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top']").mPageScroll2id({
	    // highlightSelector:"nav a",
	    offset:50 //Задаем отступ сверху например для мобильного меню
	});

	// Инициализация карусели 
	$("#owl-carousel").owlCarousel({
		// Параметры карусели
	    singleItem : true,
	    slideSpeed : 800,
	    paginationSpeed : 800,
	    rewindSpeed : 1000,
	    navigation : true,
	    navigationText : ["",""],
	    theme : "header-slider-theme",
	});

});