# Step 02B: 結果表示の色分け

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 02A if文での勝敗判定](../step02a_judge_winner/README.md)
- [➡️ 次のステップ: Step 03 HPシステム](../step03_hp_system/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step02b_result_display/answer/index.html) | [📁 コードを見る](./answer/)

---

## 🎯 学習目標
- CSSクラスを使った見た目の変更
- `classList.add()` / `classList.remove()` の使い方
- ブラウザのコンソールでCSSを試す方法

## 📝 課題

### やること
1. Step 02Aのコードをベースにする
2. 勝ち・負け・引き分けで背景色を変える
3. コンソールでCSSクラスの動作を確認してから実装

### 完成イメージ
```
[グー] [チョキ] [パー]

┌─────────────────────────────┐
│ あなた: グー ✊              │
│ コンピューター: チョキ ✌️   │
│ 結果: あなたの勝ち！         │  ← 緑色の背景
└─────────────────────────────┘
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
- Step 02Aと同じHTML

### CSS部分
```css
.result {
    padding: 20px;
    margin: 20px 0;
    border-radius: 8px;
    font-size: 18px;
    line-height: 1.6;
    transition: all 0.3s ease;
}

.result.win {
    background-color: #d4edda;
    border: 2px solid #28a745;
    color: #155724;
}

.result.lose {
    background-color: #f8d7da;
    border: 2px solid #dc3545;
    color: #721c24;
}

.result.draw {
    background-color: #fff3cd;
    border: 2px solid #ffc107;
    color: #856404;
}
```

### まずはコンソールでCSSクラスを試そう！

**ステップ1: HTMLを開いて要素を確認**
1. `index.html` をブラウザで開く
2. F12キーでコンソールを開く

**ステップ2: コンソールで要素を取得**
```javascript
// すでに変数が宣言されている場合は、そのまま使う
// もし "Identifier 'resultDiv' has already been declared" というエラーが出たら、
// constを省略して使ってOK

// 新しくページを開いた場合
const resultDiv = document.querySelector('#result');

// または、既に宣言されている場合はこちら
resultDiv = document.querySelector('#result');

// 何か表示してみる
resultDiv.textContent = 'テスト表示';
```

**ステップ3: クラスを追加して色を変えてみる**
```javascript
// 勝ちの色（緑）を試す
resultDiv.classList.add('win');

// しばらく見たら、別の色に変えてみる
resultDiv.classList.remove('win');
resultDiv.classList.add('lose');  // 負けの色（赤）

// さらに変えてみる
resultDiv.classList.remove('lose');
resultDiv.classList.add('draw');  // 引き分けの色（黄）
```

**ステップ4: 全部のクラスを一度に削除**
```javascript
// 全てのクラスを削除
resultDiv.classList.remove('win', 'lose', 'draw');
```

**ステップ5: 実際の流れを試す**
```javascript
// 1. 古いクラスを全て削除
resultDiv.classList.remove('win', 'lose', 'draw');

// 2. 新しいクラスを追加
resultDiv.classList.add('win');

// 3. テキストを設定
resultDiv.textContent = 'あなた: グー ✊\nコンピューター: チョキ ✌️\n結果: あなたの勝ち！';
```

### JavaScript部分（色分けを追加）

コンソールで動作を確認したら、実際のコードに追加しましょう：

```javascript
// Step 02Aで作った勝敗判定関数はそのまま使う
const winConditions = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
};

function judgeWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (winConditions[player] === computer) {
        return 'win';
    } else {
        return 'lose';
    }
}

// ボタンクリック時の処理に色分けを追加
rockButton.addEventListener('click', function() {
    const playerChoice = 'rock';
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    // 勝敗判定
    const result = judgeWinner(playerChoice, computerChoice);

    // 古いクラスを全て削除
    resultDiv.classList.remove('win', 'lose', 'draw');

    // 結果に応じてクラスを追加
    resultDiv.classList.add(result);

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

### classList の便利なメソッド
```javascript
// クラスを追加
element.classList.add('win');

// クラスを削除
element.classList.remove('win');

// 複数のクラスを一度に削除
element.classList.remove('win', 'lose', 'draw');

// クラスがあるか確認
element.classList.contains('win');  // true or false

// クラスを切り替え（あれば削除、なければ追加）
element.classList.toggle('active');
```

## 📚 必要な知識
- CSSクラスの基本
- `querySelector()` で要素を取得
- `classList.add()` / `classList.remove()`
- ブラウザのコンソールでJavaScriptを実行

## ⏱️ 目安時間
10〜15分

## 🎓 学ぶポイント
**CSSクラス**を使えば、見た目を簡単に変えられます！

JavaScriptで要素にクラスを追加・削除するだけで：
- 背景色を変える
- 文字色を変える
- アニメーションを追加
- レイアウトを変更

すべてCSSで定義しておけば、JavaScriptはクラス名を変えるだけでOKです。

## 🧪 試してみよう
完成したら、以下を試してみましょう：
1. コンソールで色を手動で変えてみる
2. CSSの色を好きな色に変えてみる
3. `transition` を長くして色の変化をゆっくりにしてみる

## 🔍 開発者ツールで確認
F12キーで開発者ツールを開いて：
1. **Elements タブ**: 結果divの要素を見て、クラスが変わることを確認
2. **Console タブ**: `resultDiv.classList` を実行して現在のクラスを確認
3. **Styles タブ**: どのCSSルールが適用されているか確認

## ✨ Progateスタイルのポイント
1. **コンソールで試す**: まずコンソールで色の変化を確認
2. **Elements タブも見る**: クラスが実際に追加されているか確認
3. **理解する**: なぜクラスで管理すると便利なのか考える

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 02A if文での勝敗判定](../step02a_judge_winner/README.md)
- [➡️ 次のステップ: Step 03 HPシステム](../step03_hp_system/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step02b_result_display/answer/index.html) | [📁 コードを見る](./answer/)
