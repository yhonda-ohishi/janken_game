# Step 01A: ボタンとクリック

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [➡️ 次のステップ: Step 01B 乱数を学ぶ](../step01b_random_numbers/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01a_buttons_click/answer/index.html) | [📁 コードを見る](./answer/)

---

## 🎯 学習目標
- HTMLでボタンを作成する
- JavaScriptでボタンのクリックイベントを処理する
- クリックされた内容を画面に表示する

## 📝 課題

### やること
1. グー、チョキ、パーの3つのボタンを作成
2. ボタンをクリックしたら、どのボタンを押したか表示
3. 絵文字も一緒に表示する

### 完成イメージ
```
[グー] [チョキ] [パー]

あなたが選んだ手: グー ✊
```

## 💡 ヒント

### HTML部分
```html
<button>グー</button>
<button>チョキ</button>
<button>パー</button>

<div id="result"></div>
```

### JavaScript部分
- `document.querySelector()` で要素を取得
- `addEventListener('click', function() { ... })` でクリックイベント
- `textContent` でテキストを表示

### 絵文字
- グー: ✊
- チョキ: ✌️
- パー: ✋

## 📚 必要な知識
- HTML の `<button>` タグ
- JavaScript の `addEventListener()`
- `document.querySelector()` でHTML要素を取得
- `textContent` でテキストを変更

## ⏱️ 目安時間
10〜15分

## 🎓 学ぶポイント
このステップでは、**ボタンを押したら何かが起こる**という基本を学びます。
プログラミングの第一歩は「ユーザーの操作に反応すること」です！

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [➡️ 次のステップ: Step 01B 乱数を学ぶ](../step01b_random_numbers/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01a_buttons_click/answer/index.html) | [📁 コードを見る](./answer/)
