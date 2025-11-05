# Step 04: ダメージ計算

---

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
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

## 💡 ヒント

### まずはコンソールでダメージ計算を試そう！

**ステップ1: オブジェクトでダメージ値を管理**
```javascript
// F12キーでコンソールを開いて、以下を試してみよう

// ダメージ値をオブジェクトで定義
const damageValues = {
    rock: 10,
    scissors: 20,
    paper: 30
};

// 値を取得してみる
console.log('グーのダメージ:', damageValues.rock);
console.log('チョキのダメージ:', damageValues['scissors']);
console.log('パーのダメージ:', damageValues.paper);
```

**ステップ2: 手に応じたダメージを計算**
```javascript
// プレイヤーが選んだ手
let playerChoice = 'rock';

// その手のダメージを取得
let damage = damageValues[playerChoice];
console.log(playerChoice + 'のダメージ:', damage);

// 別の手でも試してみる
playerChoice = 'paper';
damage = damageValues[playerChoice];
console.log(playerChoice + 'のダメージ:', damage);
```

**ステップ3: 実際にHPを減らしてみる**
```javascript
// 💡 すでにscript.jsでHPが宣言されている場合は、そのまま使えます

let computerHP = 100;
let playerChoice = 'scissors';  // チョキを選んだ

// ダメージを計算
let damage = damageValues[playerChoice];
console.log('与えるダメージ:', damage);

// HPからダメージを引く
computerHP -= damage;
console.log('ダメージ後のHP:', computerHP);

// もう一度攻撃
computerHP -= damageValues['paper'];
console.log('2回目のダメージ後:', computerHP);
```

**ステップ4: ボタンを無効化してみる**
```javascript
// ゲーム終了時の処理を試す

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
Step 03のHTMLをそのまま使用します（HPバーとボタンが必要です）。

### JavaScript部分（ダメージ計算の追加）

コンソールで動作を確認したら、以下のコードを実装します：

```javascript
// ダメージ値の定義
const damageValues = {
    rock: 10,      // グー: 10ダメージ
    scissors: 20,  // チョキ: 20ダメージ
    paper: 30      // パー: 30ダメージ
};

// ダメージを適用する関数（Step 03から更新）
function applyDamage(result, playerChoice, computerChoice) {
    let damage = 0;

    if (result === 'win') {
        // プレイヤーが勝った場合、プレイヤーの手のダメージを与える
        damage = damageValues[playerChoice];
        computerHP -= damage;
        console.log(`コンピューターに${damage}ダメージ！残りHP: ${computerHP}`);
    } else if (result === 'lose') {
        // コンピューターが勝った場合、コンピューターの手のダメージを受ける
        damage = damageValues[computerChoice];
        playerHP -= damage;
        console.log(`プレイヤーに${damage}ダメージ！残りHP: ${playerHP}`);
    } else {
        console.log('引き分け、ダメージなし');
    }

    // HPバーを更新
    updateHPBar();

    // ゲーム終了判定
    if (playerHP <= 0 || computerHP <= 0) {
        console.log('ゲーム終了！');
        // ボタンを無効化
        document.getElementById('btn-rock').disabled = true;
        document.getElementById('btn-scissors').disabled = true;
        document.getElementById('btn-paper').disabled = true;

        // 勝敗メッセージを表示
        const resultDiv = document.getElementById('result');
        if (playerHP <= 0) {
            resultDiv.textContent = 'ゲームオーバー！あなたの負けです';
            resultDiv.className = 'result lose';
        } else {
            resultDiv.textContent = 'おめでとう！あなたの勝ちです';
            resultDiv.className = 'result win';
        }
    }

    return damage;  // ダメージ量を返す
}
```

**💡 console.logでダメージ量を確認しよう！**
- 各手でどれくらいのダメージが出るか確認できます
- ゲームバランスの調整に役立ちます

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
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 03 HPシステム](../step03_hp_system/README.md)
- [➡️ 次のステップ: Step 05 複数ラウンド](../step05_multiple_rounds/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step04_damage_calculation/answer/index.html) | [📁 コードを見る](./answer/)
