//
// スクリプト名: ツイートボックス削除スクリプト(JQQuery)
// 説明: 画面のツイート関連情報のボックスを非表示にします.
//      データベースから対象のアカウントを削除します。
//

jQuery(document).ready(function ($) {
  // $(document).on('click', '.delete-btn', function(){
  // 削除ボタンがクリックされたら
  $('.delete-btn').click(function () {
    // 削除確認画面を表示します。
    if (confirm('削除してもよろしいですか？\r\n(データベースからも削除されます)')) {
      // 削除ボタンに設定されているscreen_nameを取得します。
      var screen_name = $(this).data('screen_name');
      // Ajax通信でデータの削除処理を行います。
      $.post('/api/delete', { screen_name: screen_name }, (results) => {
        // データベースから対象アカウントの削除が成功した場合(resultsがtrueの場合)
        if (results) {
          // ツイート関連コンテナを非表示にします。
          $(this).parents('.twitter-container-one').fadeOut();
        } else {
          // データベースから対象アカウントの削除ができなかった場合、alert画面を表示します。。
          alert(`データの削除に失敗しました`);
          return;
        }
      });
    } else {
      // 削除確認画面でキャンセルが押された場合、削除クリックイベントを終了します。
      return false;
    }
  });
});
