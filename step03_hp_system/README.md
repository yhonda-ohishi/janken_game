# Step 03: HPシステム

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 02 勝敗判定](../step02_win_lose/README.md)
- [➡️ 次のステップ: Step 04 ダメージ計算](../step04_damage_calculation/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step03_hp_system/answer/index.html) | [📁 コードを見る](./answer/)

---

## 学習目標
- 変数を使ってゲームの状態（HP）を管理する方法を学ぶ
- HPバーの作成とCSSでの見た目の調整方法を理解する
- 条件分岐を使ってゲーム終了判定を実装する

## 今回追加する機能
1. プレイヤーとコンピューターのHPを100に設定
2. じゃんけんで負けたら20ダメージを受ける
3. HPバーを画面に表示する
4. どちらかのHPが0になったらゲーム終了

## 重要な概念

### 1. 変数でHPを管理
```javascript
let playerHP = 100;
let computerHP = 100;
const maxHP = 100;
```
- HPは変化するので`let`を使います
- 最大HPも別の変数で管理すると便利です

### 2. HPバーの作成
```html
<div class="hp-bar">
  <div class="hp-fill"></div>
</div>
```
- 外側のバー（枠）と内側の塗りつぶし部分の2つの要素で作ります
- CSSの`width`プロパティでHP残量を表現します

### 3. ゲーム終了判定
```javascript
if (playerHP <= 0 || computerHP <= 0) {
  // ゲーム終了処理
}
```
- `||`は「または」を意味します
- どちらか一方でもHPが0以下になったら終了

## 実装のヒント

### HPバーの更新方法
```javascript
function updateHPBar() {
  const playerHPPercent = (playerHP / maxHP) * 100;
  playerHPBarElement.style.width = playerHPPercent + '%';
}
```
- HPの割合（パーセント）を計算します
- CSSのwidthプロパティに反映させます

### ダメージ処理
```javascript
function applyDamage(winner) {
  if (winner === 'player') {
    computerHP -= 20;
  } else if (winner === 'computer') {
    playerHP -= 20;
  }
  // HPが0未満にならないようにする
  playerHP = Math.max(0, playerHP);
  computerHP = Math.max(0, computerHP);
}
```
- `Math.max(0, hp)`でHPが負の値にならないようにします

### ゲーム終了判定
```javascript
function checkGameOver() {
  if (playerHP <= 0 || computerHP <= 0) {
    disableButtons(); // ボタンを無効化
    if (playerHP <= 0) {
      resultText.textContent = 'ゲームオーバー！あなたの負けです';
    } else {
      resultText.textContent = 'おめでとう！あなたの勝ちです';
    }
  }
}
```

## チャレンジ課題
1. HPバーの色を変更してみよう（赤、緑、青など）
2. HPが少なくなったら色を変える機能を追加してみよう（30%以下で赤など）
3. ダメージを受けたときにアニメーションを追加してみよう

## よくある質問

**Q: HPバーが更新されません**
A: `updateHPBar()`関数を呼び出すタイミングを確認してください。ダメージを与えた後に必ず呼び出す必要があります。

**Q: HPが負の値になってしまいます**
A: `Math.max(0, hp)`を使って、HPが0未満にならないようにしましょう。

**Q: ゲームが終了しません**
A: `checkGameOver()`関数をじゃんけんの結果判定後に呼び出しているか確認してください。

## 次のステップ
Step 04では、手の種類によってダメージ量を変える仕組みを実装します。

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 02 勝敗判定](../step02_win_lose/README.md)
- [➡️ 次のステップ: Step 04 ダメージ計算](../step04_damage_calculation/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step03_hp_system/answer/index.html) | [📁 コードを見る](./answer/)
