# Step 01A-1: 要素の取得

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [➡️ 次のステップ: Step 01A-2 クリックイベント](../step01a2_click_event/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01a1_get_elements/answer/index.html) | [📁 コードを見る](./answer/)
- [📥 ひな形をダウンロード](https://github.com/yhonda-ohishi/janken_game/raw/main/step01a1_get_elements/step01a1_template.zip)

**💡 このひな形を使って、Step 01A-2、01A-3も進められます！**

---

## 🎯 学習目標
- `document.querySelector()` でHTML要素を取得する
- `console.log()` で取得した要素を確認する
- IDセレクタの使い方を理解する

## 📝 課題

### やること
1. HTMLに1つのボタンを作成（ID付き）
2. JavaScriptでそのボタンを取得
3. console.logで取得したボタンを表示して確認

### 完成イメージ
```
[テストボタン]

# ブラウザのコンソールに表示される
> <button id="test-btn">テストボタン</button>
```

## 💡 ヒント

### HTML部分
```html
<button id="test-btn">テストボタン</button>
```
- `id="test-btn"` でボタンに名前をつける

### JavaScript部分
```javascript
const button = document.querySelector('#test-btn');
console.log(button);
```

### document.querySelector() とは？
- HTMLの要素を**JavaScriptで取得**するための命令
- `#` をつけるとIDで検索できる
- 取得した要素は変数に保存できる

### IDセレクタ
```javascript
document.querySelector('#test-btn')  // IDで検索
document.querySelector('.my-class')  // クラスで検索
document.querySelector('button')     // タグ名で検索
```

## 📚 必要な知識
- HTML の `id` 属性
- JavaScript の `const` 変数宣言
- `document.querySelector()`
- `console.log()`

## ⏱️ 目安時間
5〜10分

## 🎓 学ぶポイント
**要素の取得**はJavaScriptの基本中の基本です！

HTMLで作った要素を、JavaScriptで操作するには、まず「取得」が必要です。
`document.querySelector()` を使えば、IDやクラスで要素を探せます。

## 🔍 開発者ツールの開き方
- **Windows/Linux**: `F12` キーまたは `Ctrl + Shift + I`
- **Mac**: `Command + Option + I`
- コンソールタブをクリック → console.log()の出力が見える

## ✨ Progateスタイルのポイント
1. **まずは1つ**: 1つのボタンから始める
2. **確認する**: console.logで本当に取得できたか確認
3. **理解する**: なぜ `#` が必要なのか考える

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [➡️ 次のステップ: Step 01A-2 クリックイベント](../step01a2_click_event/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01a1_get_elements/answer/index.html) | [📁 コードを見る](./answer/)
- [📥 ひな形をダウンロード](https://github.com/yhonda-ohishi/janken_game/raw/main/step01a1_get_elements/step01a1_template.zip)
