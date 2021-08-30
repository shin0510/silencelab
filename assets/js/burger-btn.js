"use strict";

$(function () {
  $(".js-burger-btn-active").click(function () {
    //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し

    if ($(this).hasClass('active')) {
      $('.js-header-nav-active').fadeIn(300); // $('.js-header-nav-active').addClass('active');
    } else {
      $('.js-header-nav-active').fadeOut(700); // $('.js-header-nav-active').removeClass('active');
    }

    $(".header__nav a").click(function () {
      //ナビゲーションのリンクがクリックされたら
      $('.js-header-nav-active').fadeOut(300);
      $(".js-burger-btn-active").removeClass('active'); //ボタンの activeクラスを除去し
    });
  });
});