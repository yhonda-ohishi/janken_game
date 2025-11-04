# Step 02A: if文での勝敗判定

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01C 配列で手を管理](../step01c_arrays_choices/README.md)
- [➡️ 次のステップ: Step 02B 結果表示の色分け](../step02b_result_display/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step02a_judge_winner/answer/index.html) | [📁 コードを見る](./answer/)

---

## 🎯 学習目標
- if文を使った条件分岐を学ぶ
- じゃんけんの勝敗ロジックを実装する
- 関数を作って処理をまとめる

## 📝 課題

### やること
1. Step 01Cのコードをベースにする
2. 勝敗を判定する関数を作成
3. 「勝ち」「負け」「引き分け」を判定してコンソールに表示

### 完成イメージ
```
[グー] [チョキ] [パー]

あなた: グー ✊
コンピューター: チョキ ✌️
結果: あなたの勝ち！

# コンソールにも表示
> 勝敗: win
```

## 💡 ヒント

### HTML部分
```html
<div class="button-area">
    <button id="btn-rock">グー</button>
    <button id="btn-scissors">チョキ</button>
    <button id="btn-paper">パー</button>
</div>

<div id="result" class="result"></div>
```
- Step 01Cと同じHTML構造

### JavaScript部分（勝敗判定を追加）

**まずはコンソールで試してみよう！**

勝敗判定の関数を作る前に、コンソールで動作を確認しましょう：

```javascript
// F12キーでコンソールを開いて、以下を試してみよう

// 💡 すでに変数が宣言されている場合は、constを省略してOK
// "Identifier 'xxx' has already been declared" エラーが出たら、
// constを取って、変数名だけで使いましょう

// 1. 勝利条件をオブジェクトで定義
const winConditions = {
    rock: 'scissors',    // グーはチョキに勝つ
    scissors: 'paper',   // チョキはパーに勝つ
    paper: 'rock'        // パーはグーに勝つ
};

// 2. 試しに確認してみる
console.log(winConditions['rock']);  // 'scissors' が表示される
console.log(winConditions.rock);     // 同じ結果

// 3. 判定ロジックを試す
const player = 'rock';
const computer = 'scissors';

if (player === computer) {
    console.log('引き分け');
} else if (winConditions[player] === computer) {
    console.log('プレイヤーの勝ち');
} else {
    console.log('コンピューターの勝ち');
}
```

**動作を確認したら、関数にまとめよう：**

```javascript
// 勝利条件をオブジェクトで管理
const winConditions = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
};

// 勝敗を判定する関数
function judgeWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (winConditions[player] === computer) {
        return 'win';
    } else {
        return 'lose';
    }
}

// ボタンクリック時に使う
rockButton.addEventListener('click', function() {
    const playerChoice = 'rock';
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    // 勝敗判定
    const result = judgeWinner(playerChoice, computerChoice);
    console.log('勝敗:', result);

    // 結果を日本語で表示
    let resultText = '';
    if (result === 'win') {
        resultText = '結果: あなたの勝ち！';
    } else if (result === 'lose') {
        resultText = '結果: あなたの負け';
    } else {
        resultText = '結果: 引き分け';
    }

    resultDiv.textContent =
        `あなた: ${handDisplay[playerChoice]}\n` +
        `コンピューター: ${handDisplay[computerChoice]}\n` +
        resultText;
});
```

### じゃんけんのルール
```
グー     → チョキに勝つ
チョキ   → パーに勝つ
パー     → グーに勝つ
```

### if文の基本
```javascript
if (条件1) {
    // 条件1が真のとき実行
} else if (条件2) {
    // 条件1が偽で、条件2が真のとき実行
} else {
    // どちらも偽のとき実行
}
```

### なぜオブジェクトを使う？
```javascript
// オブジェクトを使わない場合（大変）
if (player === 'rock' && computer === 'scissors') return 'win';
if (player === 'scissors' && computer === 'paper') return 'win';
if (player === 'paper' && computer === 'rock') return 'win';

// オブジェクトを使う場合（シンプル）
if (winConditions[player] === computer) return 'win';
```

## 📚 必要な知識
- if / else if / else 文
- オブジェクトの使い方（`obj[key]`）
- 関数の定義と戻り値（`return`）
- 比較演算子（`===`）

## ⏱️ 目安時間
15〜20分

## 🎓 学ぶポイント
**if文**は条件によって処理を変えるための基本です！

- ユーザーが勝ったら勝利メッセージ
- 負けたら敗北メッセージ
- 引き分けなら引き分けメッセージ

このように、状況に応じて違う処理をするのがif文の役割です。

## 🧪 試してみよう
完成したら、以下を試してみましょう：
1. わざと負ける手を出してみる（グーを出してパーで負ける）
2. 引き分けになるまでボタンを押してみる
3. コンソールで`judgeWinner('rock', 'scissors')`を実行してみる

## ✨ Progateスタイルのポイント
1. **まずはコンソール**: コンソールで勝敗判定を試してから関数にする
2. **小さく確認**: 1つの手だけ実装して動作確認
3. **理解する**: なぜこの順番で条件を書くのか考える

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01C 配列で手を管理](../step01c_arrays_choices/README.md)
- [➡️ 次のステップ: Step 02B 結果表示の色分け](../step02b_result_display/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step02a_judge_winner/answer/index.html) | [📁 コードを見る](./answer/)
