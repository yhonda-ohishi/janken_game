# Step 09: アイテムシステム

---

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 08 UI改善](../step08_ui_improvements/README.md)
- [➡️ 次のステップ: Step 10 最終版](../step10_final/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step09_item_system/answer/index.html) | [📁 コードを見る](./answer/)

---

## 学習目標
- ゲームにリソース管理の概念を追加する
- 戦略的な選択を促す仕組みを実装する
- リスクとリターンのバランスを理解する

## 今回追加する機能
1. 回復アイテム（ポーション）を3個持ってスタート
2. アイテムを使うと+50HP回復
3. アイテムを使うターンは必ず敵の攻撃を受ける（防御不可）
4. 敵を倒すと+30HP回復のボーナス

## 重要な概念

### 1. リソース管理
```javascript
let potionCount = 3;

function usePotionIfAvailable() {
    if (potionCount > 0) {
        potionCount--;
        playerHP += 50;
        // アイテム使用処理
    }
}
```

### 2. トレードオフの設計
- **メリット**: HPを回復できる
- **デメリット**: そのターンは必ず攻撃を受ける
- プレイヤーは「今使うべきか」を判断する必要がある

### 3. ボーナスシステム
```javascript
function giveVictoryBonus() {
    playerHP += 30;
    playerHP = Math.min(playerHP, playerMaxHP); // 最大HPを超えない
}
```

## 実装のヒント

### アイテム数の管理
```javascript
let potionCount = 3;
const maxPotions = 3;

function updatePotionDisplay() {
    potionCountDisplay.textContent = potionCount;
    potionBtn.disabled = potionCount <= 0;
}
```

### アイテム使用処理
```javascript
function usePotion() {
    if (potionCount <= 0) return;

    // アイテムを減らす
    potionCount--;

    // HPを回復
    playerHP += 50;
    playerHP = Math.min(playerHP, playerMaxHP); // 最大HPを超えない

    // 敵の攻撃を受ける
    const enemyChoice = getEnemyChoice();
    const damage = damageValues[enemyChoice];
    playerHP -= damage;
    playerHP = Math.max(0, playerHP);

    // 表示を更新
    updatePotionDisplay();
    updateHPBars();

    // ログに記録
    recordPotionUse(enemyChoice, damage);
}
```

### 敵撃破ボーナス
```javascript
function giveDefeatBonus() {
    const healAmount = 30;
    const oldHP = playerHP;

    playerHP += healAmount;
    playerHP = Math.min(playerHP, playerMaxHP);

    const actualHeal = playerHP - oldHP;

    resultDiv.textContent += ` +${actualHeal}HP回復！`;
}
```

### 最大HPの制限
```javascript
// HPが最大値を超えないようにする
playerHP = Math.min(playerHP, playerMaxHP);

// HPが0未満にならないようにする
playerHP = Math.max(0, playerHP);
```

## チャレンジ課題
1. 異なる種類のアイテムを追加してみよう（攻撃力アップ、防御力アップなど）
2. アイテムをランダムで入手できるようにしてみよう
3. 敵もアイテムを使うようにしてみよう
4. アイテムショップを実装してみよう（勝利で得たポイントで購入）
5. 一度に複数のアイテムを持てる在庫システムを作ってみよう

## よくある質問

**Q: HPが最大値を超えてしまいます**
A: `Math.min(hp, maxHP)`を使って上限を設定しましょう。

**Q: アイテムを使っても敵の攻撃を受けません**
A: `usePotion()`関数内で敵の攻撃処理を呼び出しているか確認してください。

**Q: アイテム数が負の値になります**
A: ボタンを無効化するか、使用前に`if (potionCount > 0)`でチェックしましょう。

## 戦略的な選択の例

### いつポーションを使うべきか？
1. **HPが低い時**: 敗北を避けるため
2. **強い敵との戦闘前**: 次の戦いに備える
3. **温存する**: 後半の強敵のために取っておく

### リスク管理
- ポーションを使う = 確実にダメージを受ける
- 使わずに戦う = 勝てば無傷、負ければダメージ
- 残りポーション数と敵の数を考慮する

## ゲームバランスの調整

### 数値の調整ポイント
```javascript
// 初期ポーション数（多すぎると簡単、少なすぎると難しい）
let potionCount = 3;

// 回復量（大きすぎると簡単）
const healAmount = 50;

// 敵撃破ボーナス（モチベーション維持に重要）
const defeatBonus = 30;
```

### テストプレイが重要
- 実際にプレイして難易度を確認
- クリア可能だが簡単すぎない調整
- プレイヤーが戦略を考える余地を残す

## 次のステップの提案
1. スコアシステムを追加する
2. 難易度選択を実装する
3. セーブ機能を追加する
4. マルチプレイヤー対戦を実装する
5. より多くの敵とステージを追加する

お疲れ様でした！ここまでで基本的なゲームは完成です。

---

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 08 UI改善](../step08_ui_improvements/README.md)
- [➡️ 次のステップ: Step 10 最終版](../step10_final/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step09_item_system/answer/index.html) | [📁 コードを見る](./answer/)
