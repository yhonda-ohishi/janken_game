# Step 01A: ボタンとクリック

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [➡️ 次のステップ: Step 01B 乱数を学ぶ](../step01b_random_numbers/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01a_buttons_click/answer/index.html) | [📁 コードを見る](./answer/)
- [📥 ひな形をダウンロード](https://github.com/yhonda-ohishi/janken_game/raw/main/step01a_buttons_click/step01a_template.zip)

---

## 🎯 学習目標
- HTMLでボタンを作成する
- JavaScriptでボタンのクリックイベントを処理する
- クリックされた内容を画面に表示する
- **console.log()** でデバッグ方法を学ぶ

## 📝 課題

### やること
1. グー、チョキ、パーの3つのボタンを作成
2. ボタンをクリックしたら、どのボタンを押したか表示
3. 絵文字も一緒に表示する
4. **console.log()** でコンソールにも出力する

### 完成イメージ
```
[グー] [チョキ] [パー]

あなたが選んだ手: グー ✊

# ブラウザのコンソールにも表示される
> グー が選ばれました
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
- `console.log()` でコンソールに出力

### console.log() とは？
```javascript
console.log('こんにちは');  // コンソールに「こんにちは」と表示される
```
- **デバッグツール**として使用
- ブラウザの開発者ツール（F12キー）のコンソールタブで確認
- プログラムの動作確認に便利

### 絵文字
- グー: ✊
- チョキ: ✌️
- パー: ✋

## 📚 必要な知識
- HTML の `<button>` タグ
- JavaScript の `addEventListener()`
- `document.querySelector()` でHTML要素を取得
- `textContent` でテキストを変更
- **`console.log()`** でデバッグ出力

## ⏱️ 目安時間
10〜15分

## 🎓 学ぶポイント
このステップでは、**ボタンを押したら何かが起こる**という基本を学びます。
プログラミングの第一歩は「ユーザーの操作に反応すること」です！

また、**console.log()** は開発者にとって最も重要なツールの1つです。
画面に表示せずに値を確認できるので、デバッグ（バグ探し）に役立ちます。

## 🔍 開発者ツールの開き方
- **Windows/Linux**: `F12` キーまたは `Ctrl + Shift + I`
- **Mac**: `Command + Option + I`
- コンソールタブをクリック → console.log()の出力が見える

## ✨ Progateスタイルのポイント
1. **小さく始める**: まずは1つのボタンから
2. **確認する**: console.log()で動作確認
3. **繰り返す**: 他のボタンにも同じ処理を追加
4. **理解する**: なぜそのコードが必要なのか考える

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [➡️ 次のステップ: Step 01B 乱数を学ぶ](../step01b_random_numbers/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01a_buttons_click/answer/index.html) | [📁 コードを見る](./answer/)
- [📥 ひな形をダウンロード](https://github.com/yhonda-ohishi/janken_game/raw/main/step01a_buttons_click/step01a_template.zip)
