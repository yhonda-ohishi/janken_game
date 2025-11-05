# Step 02A: if文での勝敗判定

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
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

**まずはコンソールで関数の基本を学ぼう！**

関数を使うのは初めてなので、まずは簡単な関数から試してみましょう：

**ステップ1: 関数を作って呼び出してみる**
```javascript
// F12キーでコンソールを開いて、以下を試してみよう

// シンプルな関数を作る
function sayHello() {
    console.log('こんにちは！');
}

// 関数を呼び出す
sayHello();  // 'こんにちは！' が表示される

// もう一度呼び出せる
sayHello();  // 何度でも呼び出せる
```

**ステップ2: 引数を受け取る関数**
```javascript
// 名前を受け取って挨拶する関数
function greet(name) {
    console.log('こんにちは、' + name + 'さん！');
}

// 引数を渡して呼び出す
greet('太郎');  // 'こんにちは、太郎さん！'
greet('花子');  // 'こんにちは、花子さん！'
```

**ステップ3: 値を返す関数**
```javascript
// 2つの数を足す関数
function add(a, b) {
    return a + b;
}

// 戻り値を受け取る
let result = add(3, 5);
console.log('結果:', result);  // 8

// 直接使うこともできる
console.log('合計:', add(10, 20));  // 30
```

**ステップ4: if文で条件分岐を試してみる**

勝敗判定にはif文を使います。まずはif文の基本を試しましょう：

```javascript
// シンプルなif文
let score = 80;

if (score >= 60) {
    console.log('合格！');
}

// if-else文
let age = 15;

if (age >= 18) {
    console.log('大人です');
} else {
    console.log('子供です');
}

// if-else if-else文
let temperature = 25;

if (temperature >= 30) {
    console.log('暑い');
} else if (temperature >= 20) {
    console.log('快適');
} else {
    console.log('寒い');
}

// 複数の条件（&&は「かつ」、||は「または」）
let hour = 14;

if (hour >= 12 && hour < 18) {
    console.log('午後です');
}
```

**ステップ5: 勝敗判定を作ってみる**

if文と関数がわかったら、勝敗判定を作ってみましょう：

```javascript
// 💡 すでにscript.jsで変数が宣言されている場合は、
// 新しく宣言せず、その変数をそのまま使えます

// 勝利条件をオブジェクトで定義（ページ開いた直後なら）
const winConditions = {
    rock: 'scissors',    // グーはチョキに勝つ
    scissors: 'paper',   // チョキはパーに勝つ
    paper: 'rock'        // パーはグーに勝つ
};

// もし "Identifier 'winConditions' has already been declared" エラーが出たら、
// すでにscript.jsで宣言されているので、constを付けずに使う：
winConditions  // すでに宣言されている変数を確認

// 試しに確認してみる
console.log(winConditions['rock']);  // 'scissors' が表示される
console.log(winConditions.rock);     // 同じ結果

// 判定ロジックを試す（一時的な変数はletを使うと便利）
let player = 'rock';
let computer = 'scissors';

if (player === computer) {
    console.log('引き分け');
} else if (winConditions[player] === computer) {
    console.log('プレイヤーの勝ち');
} else {
    console.log('コンピューターの勝ち');
}

// 違う組み合わせも試してみる
player = 'scissors';
computer = 'rock';
// 上のif文をもう一度実行してみよう
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
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01C 配列で手を管理](../step01c_arrays_choices/README.md)
- [➡️ 次のステップ: Step 02B 結果表示の色分け](../step02b_result_display/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step02a_judge_winner/answer/index.html) | [📁 コードを見る](./answer/)
