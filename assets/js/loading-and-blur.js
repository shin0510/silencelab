// $(window).on('load',function(){
//   $(".js-loading-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
//   //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
//   $(".js-loading").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
//       $('.js-appear').addClass('appear');//フェードアウト後bodyにappearクラス付与
//   });
//   //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
//  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
//   $('.js-loading-bg').on('animationend', function() {    
//       //この中に動かしたいJSを記載
//       $('.js-blur').on('inview', function(event, isInView) {
//         if (isInView) {
//         //表示領域に入った時
//           $(this).delay(10000).addClass('blur');
//         } else {
//         //表示領域から出た時
//           $(this).removeClass('blur');
//         }
//       });
//   });
//   //=====ここまで背景が伸びた後に動かしたいJSをまとめる
// });
"use strict";