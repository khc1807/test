$(function(){
	$(document).on('click', '[data-action="lnb-toogle"]', function () {
		$('.lnb').toggleClass('lnb--off');
	  })
	  $(document).on('click', '[data-action="lnb-1depth"]', function () {
		$(this).parent('.lnb__menu-box').toggleClass('lnb__menu-box--current');
	  })
	
	  $(document).on('click', '[data-action="bookmark-toggle"]', function () {
		$(this).toggleClass('content__title__core__bookmark-toggle-btn--checked');
	  })
	

	  // 개발시 미적용 되어야함
	  $(document).on('click', '[data-action="header-bookmark"]', function () {
		$(this).toggleClass('header-wrap__menu-wrap__main-info-box__bookmark-wrap__toggle-btn--checked');
	
		// 개발시 적용 필요
		$('.header-wrap__menu-wrap__main-info-box__bookmark-wrap__list-box').toggleClass('header-wrap__menu-wrap__main-info-box__bookmark-wrap__list-box--open');
		// 개발시 적용 필요
	  });
	  // 개발시 미적용 되어야함
	
	  $(document).on('click', '[data-action="layer-close"]', function () {
		$(this).parents('.layer').removeClass('layer--open');
	  });
	
	  $('[data-action="drag"]').draggable({
		handle: '.layer__title'
	  });
	
	
	  $(document).on('click', '[data-aim]', function () {
		const $aim = $(this).attr('data-aim');
		console.log('[data-target="' + $aim + '"]');
		$('[data-target="' + $aim + '"]').addClass('layer--open');
	  });
	
	  $(document).on('click', '[data-action="menu"]', function () {
		$(this).addClass('menu-icon-btn--check').siblings().removeClass('menu-icon-btn--check');
	  });
	
	  $(document).ready(function(){
		var fileTarget = $('.filebox .upload-hidden');
	
		fileTarget.on('change', function(){
		  var filename = $(this)[0].files[0].name;
		  $(this).siblings('.upload-name').val(filename);
		});
	  });

	$(document).on('click','.layer--close-btn',function () {
		$(this).parents('.layer').removeClass('is-active');
	});

	$(document).on('click','.tab-btn',function () {
		$(this).siblings().removeClass('is-active');
		$(this).addClass('is-active');
	});

	$(document).on('click','[data-aim]',function () {
		const $aim = $(this).attr('data-aim');
		console.log('[data-target="'+$aim+'"]');
		$('[data-target="'+$aim+'"]').addClass('is-active');
	});

});

// 나이스셀렉트
// $(document).ready(function () {
// 	$('select').niceSelect();
// });


// const selectBoxElements = document.querySelectorAll(".select");

// function toggleSelectBox(selectBox) {
// 	selectBox.classList.toggle("active");
// }

// function selectOption(optionElement) {
// 	const selectBox = optionElement.closest(".select");
// 	const selectedElement = selectBox.querySelector(".selected-value");
// 	selectedElement.textContent = optionElement.textContent;
// }

// selectBoxElements.forEach(selectBoxElement => {
// 	selectBoxElement.addEventListener("click", function (e) {
// 		const targetElement = e.target;
// 		const isOptionElement = targetElement.classList.contains("option");

// 		if (isOptionElement) {
// 			selectOption(targetElement);
// 		}

// 		toggleSelectBox(selectBoxElement);
// 	});
// });

// document.addEventListener("click", function (e) {
// 	const targetElement = e.target;
// 	const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");

// 	if (isSelect) {
// 		return;
// 	}

// 	const allSelectBoxElements = document.querySelectorAll(".select");

// 	allSelectBoxElements.forEach(boxElement => {
// 		boxElement.classList.remove("active");
// 	});
// });




