'use strict';
//
// モジュール名: ツイート関連経路モジュール
// 説明: ツイート関連経路へのアクセスをコントローラに渡します。
//

// エクスプレスのルータオブジェクトを読み込みます。
const router = require('express').Router();
// モデル対応のツイッターコントローラを読み込みます。
const twittersController = require('../controllers/twittersController');

// twitterアプリのルートパスへのアクセスにより、ツイート情報を取得し表示します。
router.get('/', twittersController.getDbTweets, twittersController.index);
// 検索ワードがpostされたら検索結果を表示します。
router.post(
  '/search',
  twittersController.searchDbTweets,
  twittersController.searchIndex,
  twittersController.redirectView
);
// エラー画面を表示します。
router.get('/error', twittersController.errorIndex);

// 経路統括モジュールで使うためrouterオブジェクトをエクスポートします。
module.exports = router;
