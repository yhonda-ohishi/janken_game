# Step 04: ダメージ計算

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 03 HPシステム](../step03_hp_system/README.md)
- [➡️ 次のステップ: Step 05 複数ラウンド](../step05_multiple_rounds/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step04_damage_calculation/answer/index.html) | [📁 コードを見る](./answer/)

---

## 学習目標
- オブジェクトを使ってデータを管理する方法を学ぶ
- 手の種類に応じて異なるダメージを与える仕組みを理解する
- ゲームバランスを考える重要性を学ぶ

## 今回追加する機能
1. グー: 10ダメージ
2. チョキ: 20ダメージ
3. パー: 30ダメージ
4. 勝った側が相手に自分の手に応じたダメージを与える

## 重要な概念

### 1. オブジェクトでデータ管理
```javascript
const damageValues = {
    rock: 10,      // グー: 10ダメージ
    scissors: 20,  // チョキ: 20ダメージ
    paper: 30      // パー: 30ダメージ
};
```
- オブジェクトを使うことで、関連するデータをまとめて管理できます
- `damageValues['rock']`や`damageValues.rock`でアクセスできます

### 2. ダメージ計算の流れ
```
1. じゃんけんの勝敗を判定
2. 勝った側の手を確認
3. その手に対応するダメージ値を取得
4. 負けた側のHPから減算
```

### 3. ゲームバランス
- グーは弱いけど出しやすい（低リスク・低リターン）
- パーは強いけど読まれやすい（高リスク・高リターン）
- チョキは中間的な選択肢

## 実装のヒント

### ダメージ値の定義
```javascript
const damageValues = {
    rock: 10,
    scissors: 20,
    paper: 30
};
```

### ダメージ処理の更新
```javascript
function applyDamage(result, playerChoice, computerChoice) {
    if (result === 'player') {
        // プレイヤーが勝った場合、プレイヤーの手のダメージを与える
        const damage = damageValues[playerChoice];
        computerHP -= damage;
        computerHP = Math.max(0, computerHP);
    } else if (result === 'computer') {
        // コンピューターが勝った場合、コンピューターの手のダメージを与える
        const damage = damageValues[computerChoice];
        playerHP -= damage;
        playerHP = Math.max(0, playerHP);
    }
}
```

### ダメージ表示
```javascript
function displayResult(result, damage) {
    if (result === 'player') {
        resultDiv.textContent = `あなたの勝ち！${damage}ダメージを与えた！`;
    } else if (result === 'computer') {
        resultDiv.textContent = `あなたの負け...${damage}ダメージを受けた！`;
    }
}
```

## チャレンジ課題
1. ダメージ値を自由に変更してゲームバランスを調整してみよう
2. 与えたダメージを画面に表示してみよう
3. クリティカルヒット（低確率で2倍ダメージ）を実装してみよう

## よくある質問

**Q: ダメージが反映されません**
A: `applyDamage()`関数に`playerChoice`と`computerChoice`を引数として渡しているか確認してください。

**Q: undefinedと表示されます**
A: オブジェクトのキー名（rock, scissors, paper）が正しいか確認してください。スペルミスに注意！

**Q: ゲームバランスが悪いです**
A: ダメージ値を調整してみましょう。例えば、グー15、チョキ20、パー25など。

## ゲームバランスの考え方
- 全ての手に意味を持たせる（どれか1つが圧倒的に強くならないように）
- リスクとリターンのバランス（強い攻撃ほど読まれやすいなど）
- プレイヤーの選択に戦略性を持たせる

## 次のステップ
Step 05では、複数ラウンドの戦闘とバトルログ機能を実装します。

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 03 HPシステム](../step03_hp_system/README.md)
- [➡️ 次のステップ: Step 05 複数ラウンド](../step05_multiple_rounds/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step04_damage_calculation/answer/index.html) | [📁 コードを見る](./answer/)
