//
// スクリプト名: onePageScroll設定/実行スクリプト
//

jQuery(document).ready(function ($) {
  //PC環境の場合
  if ($(window).width() >= 600) {
    //切り替える画面サイズ
    // window.addEventListener('load', () => {
    $('.twitterSectionScroll').onepage_scroll({
      sectionContainer: 'section', // セクション要素（変更可）
      easing: 'ease', // イージングの種類"ease", "linear", "ease-in", "ease-out", "ease-in-out", "cubic-bezier(0.165, 0.8, 0.410, 1.200)"
      animationTime: 1000, // アニメーション時間
      pagination: true, // ページネーションの有無
      loop: true, //最下にいった際にトップにループさせるかの指定
      updateURL: false, // スクロールした際にページURLを変更するかの有無
    });
    // });
  }
});
