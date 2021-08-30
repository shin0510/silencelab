"use strict";



//=====アドレスバー含まない100vhの計算====//
$(window).height();
$('.fv').css('height', $(window).height());
$('.header__nav').css('height', $(window).height());
$('.loading').css('height', $(window).height());
$('.loading-bg').css('height', $(window).height()); //=====ローディング画面→画面遷移→各要素出現、スクロール禁止解除====//

$(window).on('load', function () {
  $(".js-loading-logo").delay(1200).fadeOut('slow'); //ロゴを1.2秒でフェードアウトする記述
  //ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

  $(".js-loading").delay(1500).fadeOut('slow', function () {
    //ローディングエリア（js-loading）を1.5秒でフェードアウトする記述
    $('.js-appear').addClass('appear'); //フェードアウト後js-appearにappearクラス付与
  }); //ここまでローディングエリア（js-loadingエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  //ここから背景が伸びた後に動かしたいJSをまとめたい場合は

  $('.js-loading-bg').on('animationend', function () {
    //この中に動かしたいJSを記載
    // fvロゴがぼんやり浮き上がるアニメーション
    $('.js-blur').on('inview', function (event, isInView) {
      if (isInView) {
        //表示領域に入った時
        $(this).delay(10000).addClass('blur');
      } else {
        //表示領域から出た時
        $(this).removeClass('blur');
      }
    }); // フェードアップアニメーション

    $('.js-fadeup').on('inview', function (event, isInView) {
      if (isInView) {
        //表示領域に入った時
        $(this).delay(10000).addClass('fadeUp');
      } else {
        //表示領域から出た時
        $(this).removeClass('fadeUp');
      }
    }); //ここから、スクロール禁止を解除する記述

    var movefun = function movefun(event) {
      event.preventDefault();
    }; // スクロール停止の処理


    window.addEventListener('touchmove', movefun, {
      passive: false
    }); //---ここまでios
    //  ブラウザスクロール許可

    $("body").css("overflow", "");
    $("html").css("overflow", ""); //  iosスクロール許可

    window.removeEventListener('touchmove', movefun, {
      passive: false
    });
  }); //=====ここまで背景が伸びた後に動かしたいJSをまとめる
}); //=====ハンバーガーボタン・ドロワーメニュー開閉====//

$(function () {
  $(".js-burger-btn-active").click(function () {
    //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し

    if ($(this).hasClass('active')) {
      $('.js-header-nav-active').fadeIn(1000);
      $('.js-header-nav-item1').fadeIn(2000);
      $('.js-header-nav-item2').fadeIn(2500);
      $('.js-header-nav-item3').fadeIn(3000);
      $('.js-header-nav-item4').fadeIn(3500);
      $('.js-header-nav-item5').fadeIn(4000); // $('.js-header-nav-active').addClass('active');
    } else {
      $('.js-header-nav-active').fadeOut(1000);
      $('.js-header-nav-item').fadeOut(1000); // $('.js-header-nav-active').removeClass('active');
    }

    $(".header__nav a").click(function () {
      //ナビゲーションのリンクがクリックされたら
      $('.js-header-nav-active').fadeOut(500);
      $(".js-burger-btn-active").removeClass('active'); //ボタンの activeクラスを除去し
    });
  });
  $(".onlinestore-btn").hover(
    function(){
      $(".btn-img").attr('src', 'assets/images/common/stores-2.svg')
    },
    function(){
      $(".btn-img").attr('src', 'assets/images/common/stores.svg')
    }
  )
});