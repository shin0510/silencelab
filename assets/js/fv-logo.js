"use strict";

$.when( //logoの表示
// $(window).on('load',function(){
$(".js-loading").delay(1500).fadeOut('slow'), //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
$(".js-loading-logo").delay(1200).fadeOut('slow') //ロゴを1.2秒（1200ms）待機してからフェードアウト
// })
).done(function () {
  $('.js-blur').on('inview', function (event, isInView) {
    if (isInView) {
      //表示領域に入った時
      $(this).delay(10000).addClass('blur');
    } else {
      //表示領域から出た時
      $(this).removeClass('blur');
    }
  });
});