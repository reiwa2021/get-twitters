//
// スクリプト名: コピーライト(©)作成スクリプト(javascript)
// 説明: 画面最下部にコピーライトを作成します。
//

// ページのロードが終わったら実行します。
document.addEventListener('DOMContentLoaded', () => {
  // コピーライトIDが存在したら、コピーライトを作成します。
  if (document.getElementById('copylight-area')) {
    // a要素の属性です。
    const URL_ADMIN = '/admin';
    // a要素のテキストノードです。
    const VIEW_ADMIN = '管理者画面';
    // a要素のテキストノードを作成します。
    const text = document.createTextNode(VIEW_ADMIN);
    // div要素を作成します。
    let div_a = document.createElement('div');
    // a要素を作成します。
    let a = document.createElement('a');
    // a要素の属性にURLを設定します。
    a.href = URL_ADMIN;
    // a要素にテキストノードを設定します。
    a.appendChild(text);
    // div要素の子要素にa要素を登録します。
    div_a.appendChild(a);

    // コピーライトの内容を設定します。
    const COPYLIGHT_CONTENT = '&copy;  Hozumi 2022';
    // コピーライトを作成する場所のIDを取得します。
    let copyLight = document.getElementById('copylight-area');
    // footer要素を作成します。
    let footer = document.createElement('footer');
    // div要素を作成します。
    let div_b = document.createElement('div');
    // p要素を作成します。
    let p = document.createElement('p');
    // small要素を作成します。
    let small = document.createElement('small');
    // 作成したノードを末端から順々に登録していきます。
    // small要素にコピーライトを登録します。
    small.innerHTML = COPYLIGHT_CONTENT;
    // p要素の子要素にsmall要素を登録します。
    p.appendChild(small);
    // div要素の子要素にp要素を登録します。
    div_b.appendChild(p);
    // fotter要素の子要素にa要素を登録します。
    footer.appendChild(a);
    // footer要素の子要素にp要素を登録します。
    footer.appendChild(p);
    // 画面のコピーライトIDにfooter要素(作成した配下の要素を含む)を登録します
    copyLight.appendChild(footer);
  }
});
