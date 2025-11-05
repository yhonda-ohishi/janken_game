# Step 01: 基本のじゃんけん

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [➡️ 次のステップ: Step 02 勝敗判定](../step02_win_lose/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01_basic_janken/answer/index.html) | [📁 コードを見る](./answer/)

---

## 🎯 学習目標
- HTMLでボタンを作成する
- JavaScriptでボタンのクリックイベントを処理する
- 画面に結果を表示する

## 📝 課題

### やること
1. グー、チョキ、パーの3つのボタンを作成
2. ボタンをクリックしたら、選択した手を画面に表示
3. コンピューターはランダムに手を出す
4. お互いの手を画面に表示する

### 完成イメージ
```
[グー] [チョキ] [パー]

あなた: グー ✊
コンピューター: チョキ ✌️
```

## 💡 ヒント

### HTML
- `<button>` タグを使用
- 結果を表示する `<div>` を用意

### JavaScript
- `Math.random()` で 0～1 の乱数を生成
- `Math.floor()` で小数点以下を切り捨て
- 配列から手を選択: `['rock', 'scissors', 'paper']`

### 手のアイコン
- グー: ✊
- チョキ: ✌️
- パー: ✋

## 📚 必要な知識
- HTML の基本タグ
- JavaScript の変数宣言 (`const`, `let`)
- `addEventListener()` でクリックイベント
- `Math.random()` でランダム値生成
- 配列の基本

## ⏱️ 目安時間
30分〜1時間

---

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [➡️ 次のステップ: Step 02 勝敗判定](../step02_win_lose/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01_basic_janken/answer/index.html) | [📁 コードを見る](./answer/)
