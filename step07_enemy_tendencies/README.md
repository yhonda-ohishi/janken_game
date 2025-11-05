# Step 07: 敵の傾向

---

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 06 敵キャラクター](../step06_enemy_characters/README.md)
- [➡️ 次のステップ: Step 08 UI改善](../step08_ui_improvements/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step07_enemy_tendencies/answer/index.html) | [📁 コードを見る](./answer/)

---

## 学習目標
- 確率を使ったランダム選択の実装方法を学ぶ
- 重み付けされた選択の仕組みを理解する
- より戦略的なゲームデザインを考える

## 今回追加する機能
1. 各敵が出しやすい手の確率を設定
2. 確率に基づいた手の選択実装
3. 敵の傾向を画面に表示

## 重要な概念

### 1. 確率の設定
```javascript
const enemies = [
    {
        name: 'スライム',
        maxHP: 100,
        tendencies: {
            rock: 50,      // グーを50%
            scissors: 30,  // チョキを30%
            paper: 20      // パーを20%
        }
    }
];
```

### 2. 重み付けランダム選択
```javascript
function weightedRandomChoice(weights) {
    const total = weights.rock + weights.scissors + weights.paper;
    let random = Math.random() * total;

    if (random < weights.rock) return 'rock';
    random -= weights.rock;

    if (random < weights.scissors) return 'scissors';
    return 'paper';
}
```

### 3. 戦略性の追加
- スライム: グーが多い → パーが有効
- ゴブリン: バランス型 → 読みにくい
- ドラゴン: パーが多い → チョキが有効

## 実装のヒント

### 敵データの更新
```javascript
const enemies = [
    {
        name: 'スライム',
        maxHP: 100,
        image: '🟢',
        tendencies: {
            rock: 50,
            scissors: 30,
            paper: 20
        },
        description: 'グーを出しやすい'
    },
    {
        name: 'ゴブリン',
        maxHP: 150,
        image: '👹',
        tendencies: {
            rock: 33,
            scissors: 34,
            paper: 33
        },
        description: 'バランス型'
    },
    {
        name: 'ドラゴン',
        maxHP: 200,
        image: '🐉',
        tendencies: {
            rock: 20,
            scissors: 20,
            paper: 60
        },
        description: 'パーを出しやすい'
    }
];
```

### 重み付け選択関数
```javascript
function getEnemyChoice() {
    const tendencies = currentEnemy.tendencies;
    const total = tendencies.rock + tendencies.scissors + tendencies.paper;
    let random = Math.random() * total;

    if (random < tendencies.rock) {
        return 'rock';
    }
    random -= tendencies.rock;

    if (random < tendencies.scissors) {
        return 'scissors';
    }

    return 'paper';
}
```

### 傾向の表示
```javascript
function displayEnemyTendencies() {
    const tendencies = currentEnemy.tendencies;
    const total = tendencies.rock + tendencies.scissors + tendencies.paper;

    const rockPercent = Math.round((tendencies.rock / total) * 100);
    const scissorsPercent = Math.round((tendencies.scissors / total) * 100);
    const paperPercent = Math.round((tendencies.paper / total) * 100);

    document.getElementById('tendency-text').textContent =
        `グー: ${rockPercent}% | チョキ: ${scissorsPercent}% | パー: ${paperPercent}%`;
}
```

## チャレンジ課題
1. 敵の傾向を変更して、より個性的な敵を作ってみよう
2. プレイヤーの手を分析する敵を作ってみよう（前回の手を見て対策する）
3. HPが減ると行動が変わる敵を実装してみよう
4. 完全ランダムな敵と比較して勝率を計測してみよう

## よくある質問

**Q: 確率が正しく動いているか分かりません**
A: `console.log()`を使って、どの手が選ばれているか記録してみましょう。100回試行すれば傾向が見えてきます。

**Q: 確率の合計が100にならなくても大丈夫ですか？**
A: はい、大丈夫です。割合（比率）として扱われるので、30:30:40でも3:3:4でも同じ結果になります。

**Q: 敵が強すぎる/弱すぎます**
A: 確率の値を調整してバランスを取りましょう。極端な確率（90:5:5など）は読まれやすくなります。

## 確率とランダムの理解
```javascript
// Math.random()は0以上1未満の数を返す
Math.random(); // 0.0 ~ 0.999...

// 0-99の整数を得る
Math.floor(Math.random() * 100); // 0, 1, 2, ..., 99

// 重み付けの例
// rock: 60, scissors: 30, paper: 10 の場合
// total = 100
// random = 0~100の値
// 0-60: rock (60%)
// 60-90: scissors (30%)
// 90-100: paper (10%)
```

## ゲームバランスのコツ
1. **完全ランダムより面白い**: 傾向があることで、プレイヤーが戦略を考えられる
2. **極端すぎない**: 90%など極端な確率は簡単すぎる
3. **敵ごとの個性**: 各敵に異なる傾向を持たせることで、飽きない
4. **ヒントを与える**: 敵の傾向を表示することで、プレイヤーが考えられる

## 次のステップ
Step 08では、UIを大幅に改善して、より見やすく楽しいゲームにします。

---

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 06 敵キャラクター](../step06_enemy_characters/README.md)
- [➡️ 次のステップ: Step 08 UI改善](../step08_ui_improvements/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step07_enemy_tendencies/answer/index.html) | [📁 コードを見る](./answer/)
