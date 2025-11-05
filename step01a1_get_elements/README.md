# Step 01A-1: 要素の取得

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [➡️ 次のステップ: Step 01A-2 クリックイベント](../step01a2_click_event/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01a1_get_elements/answer/index.html) | [📁 コードを見る](./answer/)
- [📥 ひな形ファイル](./template/)

**💡 このひな形を使って、Step 01A-2、01A-3も進められます！**

---

## 🎯 学習目標
- `document.querySelector()` でHTML要素を取得する
- `console.log()` で取得した要素を確認する
- IDセレクタの使い方を理解する

## 📝 課題

### やること

**まずはブラウザのコンソールで実行してみよう！**

1. **ひな形ファイルを取得して開く**
   - [📥 ひな形ファイル](./template/)から、`index.html`、`style.css`、`script.js` の3つのファイルをダウンロード
   - 同じフォルダに保存して、`index.html` をブラウザで開く

2. **ブラウザのコンソールを開く**
   - `F12` キー（または `Ctrl + Shift + I`）を押す
   - 「Console」タブをクリック

3. **コンソールで以下のコードを実行**
   ```javascript
   const button = document.querySelector('#btn-rock');
   ```
   - コピーしてコンソールに貼り付けて `Enter` を押す

4. **取得したボタンを確認**
   ```javascript
   console.log(button);
   ```
   - コンソールに `<button id="btn-rock">グー</button>` が表示されればOK！

5. **動作を理解したら、script.js に書いてみよう**
   - コンソールで試したコードを `script.js` に書く
   - ファイルを保存してブラウザを更新
   - 自動的にコンソールに表示されることを確認

### 完成イメージ
```
[グー]

# ブラウザのコンソールに表示される
> 取得したボタン: <button id="btn-rock">グー</button>
```

## 💡 ヒント

### HTMLはすでに準備済み！
ひな形の `index.html` には、すでにボタンが入っています：
```html
<button id="btn-rock">グー</button>
```
- `id="btn-rock"` でボタンに名前がついている
- あなたがやることは、JavaScriptでこのボタンを取得すること

### JavaScript部分
```javascript
const button = document.querySelector('#btn-rock');
console.log(button);
```

### document.querySelector() とは？
- HTMLの要素を**JavaScriptで取得**するための命令
- `#` をつけるとIDで検索できる
- 取得した要素は変数に保存できる

### IDセレクタ
```javascript
document.querySelector('#btn-rock')  // IDで検索
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
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [➡️ 次のステップ: Step 01A-2 クリックイベント](../step01a2_click_event/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01a1_get_elements/answer/index.html) | [📁 コードを見る](./answer/)
- [📥 ひな形ファイル](./template/)
