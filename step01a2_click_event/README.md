# Step 01A-2: クリックイベント

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01A-1 要素の取得](../step01a1_get_elements/README.md)
- [➡️ 次のステップ: Step 01A-3 画面への表示](../step01a3_display_result/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01a2_click_event/answer/index.html) | [📁 コードを見る](./answer/)

---

## 🎯 学習目標
- `addEventListener()` でクリックイベントを設定する
- ボタンがクリックされたときに処理を実行する
- イベントリスナーの仕組みを理解する

## 📝 課題

### やること
1. 前のステップで作ったグーのボタンを使う
2. クリックされたらconsole.logでメッセージを表示

### 完成イメージ
```
[グー]

# ボタンをクリックすると、コンソールに表示される
> グー がクリックされました！
```

## 💡 ヒント

### JavaScript部分
```javascript
const button = document.querySelector('#btn-rock');

button.addEventListener('click', function() {
    console.log('グー がクリックされました！');
});
```

### addEventListener() とは？
- **イベントリスナー**を登録する命令
- 「何かが起きたら、この処理を実行して」と指示できる
- `'click'` はクリックされたときのイベント
- `function() { ... }` の中に実行したい処理を書く

### イベントの種類
```javascript
addEventListener('click', ...)    // クリック
addEventListener('mouseover', ...) // マウスが乗った
addEventListener('keydown', ...)   // キーが押された
```

## 📚 必要な知識
- 前のステップで学んだ `querySelector()`
- `addEventListener()`
- 関数 `function()`
- `console.log()`

## ⏱️ 目安時間
5〜10分

## 🎓 学ぶポイント
**イベントリスナー**は、ユーザーの操作に反応するための仕組みです！

- ボタンをクリック
- マウスを動かす
- キーボードを押す

これらすべてが「イベント」です。イベントリスナーを使えば、ユーザーの操作に合わせて好きな処理を実行できます。

## 🔍 開発者ツールの開き方
- **Windows/Linux**: `F12` キーまたは `Ctrl + Shift + I`
- **Mac**: `Command + Option + I`
- コンソールタブをクリック → ボタンを押してメッセージを確認

## ✨ Progateスタイルのポイント
1. **まずは動かす**: 1回クリックして動作確認
2. **何度も試す**: 何度もクリックしてみる
3. **理解する**: なぜ`function() { }`が必要なのか考える

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01A-1 要素の取得](../step01a1_get_elements/README.md)
- [➡️ 次のステップ: Step 01A-3 画面への表示](../step01a3_display_result/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01a2_click_event/answer/index.html) | [📁 コードを見る](./answer/)
