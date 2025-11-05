# Step 05: 複数ラウンド

---

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 04 ダメージ計算](../step04_damage_calculation/README.md)
- [➡️ 次のステップ: Step 06 敵キャラクター](../step06_enemy_characters/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step05_multiple_rounds/answer/index.html) | [📁 コードを見る](./answer/)

---

## 学習目標
- 配列を使って履歴データを管理する方法を学ぶ
- DOMの動的な操作（要素の追加）を理解する
- ゲームの再開機能を実装する

## 今回追加する機能
1. バトルログの追加（各ラウンドの結果を記録）
2. ラウンド履歴の表示
3. リスタートボタンの実装
4. ラウンド数のカウント表示

## 💡 ヒント

### まずはコンソールで配列と履歴管理を試そう！

**ステップ1: 配列で履歴を管理**
```javascript
// F12キーでコンソールを開いて、以下を試してみよう

// 履歴用の配列を作る
let battleLog = [];

// 履歴を追加してみる
battleLog.push({
    round: 1,
    playerChoice: 'rock',
    computerChoice: 'scissors',
    result: 'win',
    damage: 10
});

console.log('現在の履歴:', battleLog);
console.log('履歴の数:', battleLog.length);

// もう1つ追加
battleLog.push({
    round: 2,
    playerChoice: 'scissors',
    computerChoice: 'rock',
    result: 'lose',
    damage: 10
});

console.log('履歴を2つ追加:', battleLog);
```

**ステップ2: 履歴を表示してみる**
```javascript
// 全ての履歴を表示
battleLog.forEach(log => {
    console.log(`Round ${log.round}: ${log.result} - ${log.damage}ダメージ`);
});

// 特定の履歴にアクセス
console.log('1回目の戦闘:', battleLog[0]);
console.log('2回目の戦闘:', battleLog[1]);
```

**ステップ3: DOM要素を動的に追加してみる**

まずHTMLにログ表示エリアを追加してから、コンソールで以下を試してみましょう：

```javascript
// ログコンテナを取得
const logContainer = document.querySelector('#battle-log');

// 新しい要素を作成
const logEntry = document.createElement('div');
logEntry.className = 'log-entry';
logEntry.textContent = 'Round 1: 勝利！10ダメージ';

// コンテナに追加
logContainer.appendChild(logEntry);

// もう1つ追加
const logEntry2 = document.createElement('div');
logEntry2.textContent = 'Round 2: 敗北...10ダメージ';
logContainer.appendChild(logEntry2);
```

**ステップ4: ログをクリアしてみる**
```javascript
// 全てのログを削除
logContainer.innerHTML = '';
console.log('ログをクリアしました');

// 再度追加してみる
const newLog = document.createElement('div');
newLog.textContent = '新しいログ';
logContainer.appendChild(newLog);
```

**動作を確認したら、関数にまとめよう！**

### HTML部分
```html
<!-- Step 04のHTMLに以下を追加 -->
<div class="battle-log-container">
    <h3>バトルログ</h3>
    <div id="battle-log"></div>
</div>

<div class="round-counter">
    <p>ラウンド: <span id="round-count">0</span></p>
</div>

<button id="restart-btn">リスタート</button>
```

### JavaScript部分（履歴管理の追加）

コンソールで動作を確認したら、以下のコードを実装します：

```javascript
// 履歴とラウンドカウント
let battleLog = [];
let roundCount = 0;

// 要素の取得
const battleLogContainer = document.querySelector('#battle-log');
const roundCountDisplay = document.querySelector('#round-count');
const restartBtn = document.querySelector('#restart-btn');

// バトルを記録する関数
function recordBattle(playerChoice, computerChoice, result, damage) {
    roundCount++;

    const logData = {
        round: roundCount,
        playerChoice: handDisplay[playerChoice],
        computerChoice: handDisplay[computerChoice],
        result: result,
        damage: damage
    };

    battleLog.push(logData);
    console.log('記録した:', logData);

    // ログを表示
    displayLog();

    // ラウンド数を更新
    roundCountDisplay.textContent = roundCount;
}

// ログを表示する関数
function displayLog() {
    // 既存のログをクリア
    battleLogContainer.innerHTML = '';

    // 全てのログを表示（新しい順）
    battleLog.slice().reverse().forEach(log => {
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';

        let resultText = '';
        if (log.result === 'win') {
            resultText = `勝利！${log.damage}ダメージ`;
            logEntry.classList.add('win');
        } else if (log.result === 'lose') {
            resultText = `敗北...${log.damage}ダメージ`;
            logEntry.classList.add('lose');
        } else {
            resultText = '引き分け';
            logEntry.classList.add('draw');
        }

        logEntry.textContent =
            `Round ${log.round}: ${log.playerChoice} vs ${log.computerChoice} - ${resultText}`;

        battleLogContainer.appendChild(logEntry);
    });

    console.log('ログを更新しました。総数:', battleLog.length);
}

// リスタート機能
restartBtn.addEventListener('click', function() {
    console.log('ゲームをリスタートします');

    // ゲーム状態を初期化
    playerHP = maxHP;
    computerHP = maxHP;
    battleLog = [];
    roundCount = 0;

    // 表示を更新
    updateHPBar();
    displayLog();
    roundCountDisplay.textContent = '0';
    resultDiv.textContent = '';

    console.log('リスタート完了');
});
```

**💡 console.logで履歴の変化を確認しよう！**
- 配列に要素が追加される様子を確認できます
- ログ表示のタイミングを確認できます

## 重要な概念

### 1. 配列で履歴を管理
```javascript
let battleLog = [];

// 履歴を追加
battleLog.push({
    round: 1,
    playerChoice: 'rock',
    computerChoice: 'scissors',
    result: 'player',
    damage: 10
});
```
- 配列にオブジェクトを追加して履歴を保存します
- 後から全ての履歴にアクセスできます

### 2. DOMの動的操作
```javascript
function addLogEntry(logData) {
    const logEntry = document.createElement('div');
    logEntry.textContent = `Round ${logData.round}: ...`;
    logContainer.appendChild(logEntry);
}
```
- `createElement()`で新しい要素を作成
- `appendChild()`でページに追加

### 3. ゲームのリセット
```javascript
function restartGame() {
    playerHP = maxHP;
    computerHP = maxHP;
    battleLog = [];
    roundCount = 0;
    // 画面の更新
    updateDisplay();
}
```

## 実装のヒント

### バトルログの記録
```javascript
let battleLog = [];
let roundCount = 0;

function recordBattle(playerChoice, computerChoice, result, damage) {
    roundCount++;
    battleLog.push({
        round: roundCount,
        playerChoice: choiceNames[playerChoice],
        computerChoice: choiceNames[computerChoice],
        result: result,
        damage: damage
    });
}
```

### ログの表示
```javascript
function displayLog() {
    const logContainer = document.getElementById('battle-log');
    logContainer.innerHTML = ''; // 既存のログをクリア

    battleLog.forEach(log => {
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';

        let resultText = '';
        if (log.result === 'player') {
            resultText = `勝利！${log.damage}ダメージ`;
        } else if (log.result === 'computer') {
            resultText = `敗北...${log.damage}ダメージ`;
        } else {
            resultText = '引き分け';
        }

        logEntry.textContent =
            `Round ${log.round}: ${log.playerChoice} vs ${log.computerChoice} - ${resultText}`;

        logContainer.appendChild(logEntry);
    });
}
```

### リスタート機能
```javascript
function restartGame() {
    // ゲーム状態の初期化
    playerHP = maxHP;
    computerHP = maxHP;
    battleLog = [];
    roundCount = 0;

    // 表示の更新
    updateHPBars();
    displayLog();
    resultDiv.textContent = '';
    playerChoiceDisplay.textContent = '-';
    computerChoiceDisplay.textContent = '-';

    // ボタンを有効化
    enableButtons();
}

function enableButtons() {
    rockBtn.disabled = false;
    scissorsBtn.disabled = false;
    paperBtn.disabled = false;
}
```

## チャレンジ課題
1. 最新のログを上に表示する機能を追加してみよう
2. ログにタイムスタンプ（時刻）を追加してみよう
3. 勝利・敗北・引き分けの回数を集計して表示してみよう
4. ログの色分け（勝利は緑、敗北は赤など）をしてみよう

## よくある質問

**Q: ログが重複して表示されます**
A: `displayLog()`の最初で`innerHTML = ''`を使って既存のログをクリアしましょう。

**Q: リスタートボタンが動きません**
A: ボタンに正しくイベントリスナーが設定されているか確認してください。

**Q: ラウンド数が正しくカウントされません**
A: `roundCount++`を適切なタイミング（各バトルの開始時）で呼び出しているか確認してください。

## 配列のよく使うメソッド
- `push()`: 配列の末尾に要素を追加
- `length`: 配列の長さを取得
- `forEach()`: 配列の各要素に対して処理を実行
- `reverse()`: 配列の順序を逆にする

## 次のステップ
Step 06では、複数の敵キャラクターと順番に戦う機能を実装します。

---

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 04 ダメージ計算](../step04_damage_calculation/README.md)
- [➡️ 次のステップ: Step 06 敵キャラクター](../step06_enemy_characters/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step05_multiple_rounds/answer/index.html) | [📁 コードを見る](./answer/)
