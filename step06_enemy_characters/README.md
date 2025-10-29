# Step 06: 敵キャラクター

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 05 複数ラウンド](../step05_multiple_rounds/README.md)
- [➡️ 次のステップ: Step 07 敵の傾向](../step07_enemy_tendencies/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step06_enemy_characters/answer/index.html) | [📁 コードを見る](./answer/)

---

## 学習目標
- オブジェクトの配列を使って複数のデータを管理する
- 現在の状態を追跡する（どの敵と戦っているか）
- 条件分岐を使って次の敵に進む処理を実装する

## 今回追加する機能
1. 3体の敵キャラクター（スライム、ゴブリン、ドラゴン）
2. 各敵に異なるHP（スライム100、ゴブリン150、ドラゴン200）
3. 敵を倒したら次の敵に進む
4. 敵の名前と画像を表示

## 重要な概念

### 1. 敵データの管理
```javascript
const enemies = [
    {
        name: 'スライム',
        maxHP: 100,
        image: '🟢' // 絵文字で代用
    },
    {
        name: 'ゴブリン',
        maxHP: 150,
        image: '👹'
    },
    {
        name: 'ドラゴン',
        maxHP: 200,
        image: '🐉'
    }
];
```

### 2. 現在の敵を追跡
```javascript
let currentEnemyIndex = 0;
let currentEnemy = enemies[currentEnemyIndex];
let enemyHP = currentEnemy.maxHP;
```

### 3. 敵の切り替え
```javascript
function nextEnemy() {
    currentEnemyIndex++;
    if (currentEnemyIndex < enemies.length) {
        currentEnemy = enemies[currentEnemyIndex];
        enemyHP = currentEnemy.maxHP;
        // 画面を更新
    } else {
        // 全ての敵を倒した！
    }
}
```

## 実装のヒント

### 敵データの定義
```javascript
const enemies = [
    {
        name: 'スライム',
        maxHP: 100,
        image: '🟢',
        description: '初心者向けの弱い敵'
    },
    {
        name: 'ゴブリン',
        maxHP: 150,
        image: '👹',
        description: '中級の敵'
    },
    {
        name: 'ドラゴン',
        maxHP: 200,
        image: '🐉',
        description: '最強の敵'
    }
];
```

### 敵の初期化
```javascript
let currentEnemyIndex = 0;
let currentEnemy = enemies[currentEnemyIndex];
let enemyHP = currentEnemy.maxHP;

function initializeEnemy() {
    currentEnemy = enemies[currentEnemyIndex];
    enemyHP = currentEnemy.maxHP;

    // 画面に敵情報を表示
    document.getElementById('enemy-name').textContent = currentEnemy.name;
    document.getElementById('enemy-image').textContent = currentEnemy.image;
    document.getElementById('enemy-hp-text').textContent = enemyHP;
    document.getElementById('enemy-max-hp').textContent = currentEnemy.maxHP;
}
```

### 敵撃破判定
```javascript
function checkEnemyDefeated() {
    if (enemyHP <= 0) {
        currentEnemyIndex++;

        if (currentEnemyIndex < enemies.length) {
            // 次の敵がいる
            resultDiv.textContent = `${currentEnemy.name}を倒した！次の敵が現れた！`;
            setTimeout(() => {
                initializeEnemy();
                updateDisplay();
            }, 2000); // 2秒後に次の敵を表示
        } else {
            // 全ての敵を倒した
            resultDiv.textContent = '全ての敵を倒した！あなたの勝利です！';
            disableButtons();
        }
    }
}
```

### HPバーの更新（敵用）
```javascript
function updateEnemyHPBar() {
    enemyHPText.textContent = enemyHP;
    const enemyHPPercent = (enemyHP / currentEnemy.maxHP) * 100;
    enemyHPBar.style.width = enemyHPPercent + '%';
}
```

## チャレンジ課題
1. 敵の数を増やしてみよう（4体、5体など）
2. 各敵に異なる色のHPバーを設定してみよう
3. 敵を倒した時のアニメーションを追加してみよう
4. 倒した敵の数をカウントして表示してみよう
5. 実際の画像ファイルを使ってみよう（絵文字の代わりに）

## よくある質問

**Q: 次の敵に進みません**
A: `checkEnemyDefeated()`関数を適切なタイミング（ダメージ処理後）で呼び出しているか確認してください。

**Q: 敵のHPが正しく表示されません**
A: `currentEnemy.maxHP`を使っているか確認してください。固定値（100）を使っていませんか？

**Q: 全ての敵を倒した後もゲームが続きます**
A: `currentEnemyIndex >= enemies.length`の条件で全勝利判定をしているか確認してください。

## 配列とインデックスの理解
```javascript
const arr = ['A', 'B', 'C'];
// インデックス: 0    1    2

arr[0] // 'A'
arr[1] // 'B'
arr[2] // 'C'
arr.length // 3

// 最後の要素: arr[arr.length - 1]
```

## 次のステップ
Step 07では、各敵が出しやすい手の確率を設定して、より戦略的なゲームにします。

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 05 複数ラウンド](../step05_multiple_rounds/README.md)
- [➡️ 次のステップ: Step 07 敵の傾向](../step07_enemy_tendencies/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step06_enemy_characters/answer/index.html) | [📁 コードを見る](./answer/)
