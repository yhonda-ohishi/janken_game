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

## 💡 ヒント

### まずはコンソールでオブジェクトの配列を試そう！

**ステップ1: 敵データの配列を作る**
```javascript
// F12キーでコンソールを開いて、以下を試してみよう

// 敵データの配列
const enemies = [
    {
        name: 'スライム',
        maxHP: 100,
        image: '🟢'
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

// 確認してみる
console.log('敵の数:', enemies.length);
console.log('1体目:', enemies[0]);
console.log('2体目:', enemies[1]);
console.log('3体目:', enemies[2]);
```

**ステップ2: インデックスで敵を切り替える**
```javascript
// 現在の敵のインデックス
let currentEnemyIndex = 0;

// 現在の敵を取得
let currentEnemy = enemies[currentEnemyIndex];
console.log('現在の敵:', currentEnemy.name);
console.log('HP:', currentEnemy.maxHP);

// 次の敵に進む
currentEnemyIndex++;
currentEnemy = enemies[currentEnemyIndex];
console.log('次の敵:', currentEnemy.name);
console.log('HP:', currentEnemy.maxHP);

// さらに次へ
currentEnemyIndex++;
currentEnemy = enemies[currentEnemyIndex];
console.log('次の敵:', currentEnemy.name);

// もう敵がいない場合
currentEnemyIndex++;
if (currentEnemyIndex < enemies.length) {
    console.log('まだ敵がいる');
} else {
    console.log('全ての敵を倒した！');
}
```

**ステップ3: 敵のHPを管理する**
```javascript
// 最初の敵に戻す
currentEnemyIndex = 0;
currentEnemy = enemies[currentEnemyIndex];

// 敵の現在のHPを管理
let enemyHP = currentEnemy.maxHP;
console.log(`${currentEnemy.name}のHP: ${enemyHP} / ${currentEnemy.maxHP}`);

// ダメージを与える
enemyHP -= 30;
console.log(`ダメージ後: ${enemyHP} / ${currentEnemy.maxHP}`);

// 倒したかチェック
if (enemyHP <= 0) {
    console.log(`${currentEnemy.name}を倒した！`);

    // 次の敵へ
    currentEnemyIndex++;
    if (currentEnemyIndex < enemies.length) {
        currentEnemy = enemies[currentEnemyIndex];
        enemyHP = currentEnemy.maxHP;
        console.log(`次の敵: ${currentEnemy.name} (HP: ${enemyHP})`);
    } else {
        console.log('全ての敵を倒した！');
    }
}
```

**ステップ4: 画面に敵情報を表示してみる**

まずHTMLに敵情報表示エリアを追加してから、コンソールで以下を試してみましょう：

```javascript
// 敵情報を表示する要素を取得
const enemyNameDisplay = document.querySelector('#enemy-name');
const enemyImageDisplay = document.querySelector('#enemy-image');
const enemyHPDisplay = document.querySelector('#enemy-hp-text');

// 現在の敵の情報を表示
enemyNameDisplay.textContent = currentEnemy.name;
enemyImageDisplay.textContent = currentEnemy.image;
enemyHPDisplay.textContent = `${enemyHP} / ${currentEnemy.maxHP}`;

console.log('画面に表示しました');
```

**ステップ5: ボタンを無効化してみる**
```javascript
// ゲームクリア時の処理を試す

// ボタンを取得
const btnRock = document.querySelector('#btn-rock');
const btnScissors = document.querySelector('#btn-scissors');
const btnPaper = document.querySelector('#btn-paper');

// ボタンを無効化
btnRock.disabled = true;
btnScissors.disabled = true;
btnPaper.disabled = true;

console.log('ボタンを無効化しました');

// 無効化されたか確認
console.log('グーボタンの状態:', btnRock.disabled);  // true

// 有効に戻す
btnRock.disabled = false;
btnScissors.disabled = false;
btnPaper.disabled = false;

console.log('ボタンを有効に戻しました');
```

**動作を確認したら、関数にまとめよう！**

### HTML部分
```html
<!-- Step 05のHTMLに以下を追加・変更 -->
<div class="enemy-area">
    <h2>敵</h2>
    <div class="enemy-info">
        <div id="enemy-image" class="enemy-image">🟢</div>
        <div id="enemy-name" class="enemy-name">スライム</div>
    </div>
    <div class="hp-display">
        <div class="hp-bar">
            <div id="enemy-hp-fill" class="hp-fill"></div>
        </div>
        <span id="enemy-hp-text">100 / 100</span>
    </div>
</div>
```

### JavaScript部分（敵キャラクターの追加）

コンソールで動作を確認したら、以下のコードを実装します：

```javascript
// 敵データの定義
const enemies = [
    {
        name: 'スライム',
        maxHP: 100,
        image: '🟢'
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

// 敵の状態管理
let currentEnemyIndex = 0;
let currentEnemy = enemies[currentEnemyIndex];
let enemyHP = currentEnemy.maxHP;

// 要素の取得
const enemyNameDisplay = document.querySelector('#enemy-name');
const enemyImageDisplay = document.querySelector('#enemy-image');
const enemyHPText = document.querySelector('#enemy-hp-text');
const enemyHPFill = document.querySelector('#enemy-hp-fill');

// 敵を初期化する関数
function initializeEnemy() {
    currentEnemy = enemies[currentEnemyIndex];
    enemyHP = currentEnemy.maxHP;

    // 画面に表示
    enemyNameDisplay.textContent = currentEnemy.name;
    enemyImageDisplay.textContent = currentEnemy.image;
    updateEnemyHPBar();

    console.log(`新しい敵: ${currentEnemy.name} (HP: ${enemyHP})`);
}

// 敵のHPバーを更新
function updateEnemyHPBar() {
    enemyHPText.textContent = `${enemyHP} / ${currentEnemy.maxHP}`;
    const enemyHPPercent = (enemyHP / currentEnemy.maxHP) * 100;
    enemyHPFill.style.width = enemyHPPercent + '%';
}

// 敵撃破判定
function checkEnemyDefeated() {
    if (enemyHP <= 0) {
        console.log(`${currentEnemy.name}を倒した！`);

        currentEnemyIndex++;

        if (currentEnemyIndex < enemies.length) {
            // 次の敵がいる
            resultDiv.textContent = `${currentEnemy.name}を倒した！次の敵が現れた！`;

            setTimeout(() => {
                initializeEnemy();
                console.log('次の敵に切り替えました');
            }, 2000); // 2秒後に次の敵
        } else {
            // 全ての敵を倒した
            console.log('全ての敵を倒した！ゲームクリア！');
            resultDiv.textContent = '全ての敵を倒した！あなたの勝利です！';
            resultDiv.className = 'result win';

            // ボタンを無効化
            document.getElementById('btn-rock').disabled = true;
            document.getElementById('btn-scissors').disabled = true;
            document.getElementById('btn-paper').disabled = true;
        }
    }
}

// 初期化
initializeEnemy();
```

**💡 console.logで敵の切り替えを確認しよう！**
- 敵のインデックスの変化を確認できます
- 次の敵への切り替えタイミングを確認できます

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
