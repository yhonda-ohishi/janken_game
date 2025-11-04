# Step 01C: 配列で手を管理

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01B 乱数を学ぶ](../step01b_random_numbers/README.md)
- [➡️ 次のステップ: Step 02A if文での勝敗判定](../step02a_judge_winner/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01c_arrays_choices/answer/index.html) | [📁 コードを見る](./answer/)

---

## 🎯 学習目標
- 配列の基本を理解する
- 配列から要素を取り出す方法を学ぶ
- 乱数と配列を組み合わせてじゃんけんを完成させる

## 📝 課題

### やること
1. Step 01A と Step 01B を組み合わせる
2. 配列に「グー」「チョキ」「パー」を格納
3. プレイヤーがボタンを押したら、コンピューターもランダムに手を出す
4. 両方の手を画面に表示

### 完成イメージ
```
[グー] [チョキ] [パー]

あなた: グー ✊
コンピューター: チョキ ✌️
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
- Step 01A-3と同じHTML構造

### JavaScript部分（重要な部分）
```javascript
// 手の選択肢を配列で管理
const choices = ['rock', 'scissors', 'paper'];

// 手の表示用オブジェクト
const handDisplay = {
    rock: 'グー ✊',
    scissors: 'チョキ ✌️',
    paper: 'パー ✋'
};

// ボタンをクリックしたとき
rockButton.addEventListener('click', function() {
    const playerChoice = 'rock';

    // コンピューターの手をランダムに選ぶ
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    // 結果を表示
    resultDiv.textContent =
        `あなた: ${handDisplay[playerChoice]}\n` +
        `コンピューター: ${handDisplay[computerChoice]}`;
});
```

### 配列とは？
```javascript
// 配列は複数の値を1つの変数にまとめたもの
const choices = ['rock', 'scissors', 'paper'];

// インデックス（番号）で取り出せる
choices[0]  // 'rock'
choices[1]  // 'scissors'
choices[2]  // 'paper'
```

### 配列のインデックスは0から始まる！
```
インデックス:  0      1          2
配列:        ['rock', 'scissors', 'paper']
```

### 乱数と配列を組み合わせる
```javascript
const choices = ['rock', 'scissors', 'paper'];

// 0, 1, 2 のランダムな数字を作る
const randomIndex = Math.floor(Math.random() * 3);

// その数字を使って配列から取り出す
const computerChoice = choices[randomIndex];
```

### 手の表示を作る
```javascript
const handDisplay = {
    rock: 'グー ✊',
    scissors: 'チョキ ✌️',
    paper: 'パー ✋'
};

// 使い方
handDisplay['rock']  // 'グー ✊'
```

## 📚 必要な知識
- 配列の宣言 `const arr = []`
- 配列の要素へのアクセス `arr[0]`
- オブジェクトでデータを管理
- 前のステップで学んだ乱数

## ⏱️ 目安時間
15〜20分

## 🎓 学ぶポイント
**配列**はプログラミングで最も重要なデータ構造の1つです！
- 複数のデータをまとめて管理できる
- インデックスで好きな要素にアクセスできる
- ループで全部の要素を処理できる

このステップで配列の基本をマスターしましょう！

## 🧪 試してみよう
完成したら、以下を試してみましょう：
1. 配列に新しい手（例: 'bomb'）を追加したらどうなる？
2. 配列の順番を変えたらゲームは動く？
3. `choices.length` を使ってみよう（配列の長さが分かる）

## 🎯 チャレンジ課題
1. 何回プレイしたか数えて表示してみよう
2. CSSで見た目をもっとかっこよくしてみよう
3. あいこの場合も表示してみよう

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01B 乱数を学ぶ](../step01b_random_numbers/README.md)
- [➡️ 次のステップ: Step 02A if文での勝敗判定](../step02a_judge_winner/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01c_arrays_choices/answer/index.html) | [📁 コードを見る](./answer/)
