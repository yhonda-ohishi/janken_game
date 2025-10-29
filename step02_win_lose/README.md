# Step 02: 勝敗判定

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01 基本のじゃんけん](../step01_basic_janken/README.md)
- [➡️ 次のステップ: Step 03 HPシステム](../step03_hp_system/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step02_win_lose/answer/index.html) | [📁 コードを見る](./answer/)

---

## 🎯 学習目標
- if文を使った条件分岐
- じゃんけんの勝敗ロジックを実装
- 結果に応じた表示の変更

## 📝 課題

### やること
1. Step 01のコードをベースにする
2. 勝敗を判定する関数を作成
3. 「あなたの勝ち！」「あなたの負け」「引き分け」を表示
4. 結果に応じて背景色を変更（勝ち=緑、負け=赤、引き分け=黄色）

### 完成イメージ
```
[グー] [チョキ] [パー]

あなた: グー ✊
コンピューター: チョキ ✌️

結果: あなたの勝ち！
```

## 💡 ヒント

### 勝敗判定のロジック
```javascript
// グーはチョキに勝つ
// チョキはパーに勝つ
// パーはグーに勝つ
```

### 判定方法
1. 同じ手なら引き分け
2. 勝利条件をオブジェクトで管理
```javascript
const winConditions = {
    rock: 'scissors',    // グーはチョキに勝つ
    scissors: 'paper',   // チョキはパーに勝つ
    paper: 'rock'        // パーはグーに勝つ
};
```

### CSS クラス
- `.win` - 緑背景
- `.lose` - 赤背景
- `.draw` - 黄色背景

## 📚 必要な知識
- if / else if / else 文
- オブジェクトの使い方
- `classList.add()` / `classList.remove()` でクラス操作

## ⏱️ 目安時間
30分〜1時間

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01 基本のじゃんけん](../step01_basic_janken/README.md)
- [➡️ 次のステップ: Step 03 HPシステム](../step03_hp_system/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step02_win_lose/answer/index.html) | [📁 コードを見る](./answer/)
