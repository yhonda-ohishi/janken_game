# Step 03: HPシステム

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 02B 結果表示の色分け](../step02b_result_display/README.md)
- [➡️ 次のステップ: Step 04 ダメージ計算](../step04_damage_calculation/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step03_hp_system/answer/index.html) | [📁 コードを見る](./answer/)

---

## 学習目標
- 変数を使ってゲームの状態（HP）を管理する方法を学ぶ
- HPバーの作成とCSSでの見た目の調整方法を理解する
- 条件分岐を使ってゲーム終了判定を実装する

## 今回追加する機能
1. プレイヤーとコンピューターのHPを100に設定
2. じゃんけんで負けたら20ダメージを受ける
3. HPバーを画面に表示する
4. どちらかのHPが0になったらゲーム終了

## 💡 ヒント

### まずはコンソールでHPの仕組みを試そう！

**ステップ1: 変数でHPを管理してみる**
```javascript
// F12キーでコンソールを開いて、以下を試してみよう

// HPを管理する変数を作る
let playerHP = 100;
let computerHP = 100;
const maxHP = 100;

// 確認してみる
console.log('プレイヤーHP:', playerHP);
console.log('コンピューターHP:', computerHP);

// ダメージを与えてみる
playerHP -= 20;
console.log('ダメージ後のプレイヤーHP:', playerHP);

// HPの割合を計算してみる
const playerHPPercent = (playerHP / maxHP) * 100;
console.log('プレイヤーHPの割合:', playerHPPercent + '%');
```

**ステップ2: HPバーの幅を変更してみる**

まずHTMLにHPバーを追加してから、コンソールで以下を試してみましょう：

```javascript
// HPバーの要素を取得
const playerHPBar = document.querySelector('#player-hp-fill');

// 幅を変更してみる（80%に）
playerHPBar.style.width = '80%';

// 50%に変更
playerHPBar.style.width = '50%';

// 0%に変更（HPゼロの状態）
playerHPBar.style.width = '0%';

// 100%に戻す
playerHPBar.style.width = '100%';
```

**ステップ3: HP割合から幅を計算してみる**
```javascript
// HPが80のとき
let hp = 80;
const percent = (hp / 100) * 100;
console.log(percent + '%');  // '80%'
playerHPBar.style.width = percent + '%';

// HPが30のとき
hp = 30;
const percent2 = (hp / 100) * 100;
playerHPBar.style.width = percent2 + '%';
```

**ステップ4: テキストも更新してみる**
```javascript
const playerHPText = document.querySelector('#player-hp-text');
playerHPText.textContent = '80 / 100';

// HPが30のとき
playerHPText.textContent = '30 / 100';
```

**動作を確認したら、関数にまとめよう！**

### HTML部分
```html
<div class="game-container">
    <div class="player-area">
        <h2>あなた</h2>
        <div class="hp-display">
            <div class="hp-bar">
                <div id="player-hp-fill" class="hp-fill"></div>
            </div>
            <span id="player-hp-text">100 / 100</span>
        </div>
    </div>

    <div class="computer-area">
        <h2>コンピューター</h2>
        <div class="hp-display">
            <div class="hp-bar">
                <div id="computer-hp-fill" class="hp-fill"></div>
            </div>
            <span id="computer-hp-text">100 / 100</span>
        </div>
    </div>

    <div class="button-area">
        <button id="btn-rock">グー</button>
        <button id="btn-scissors">チョキ</button>
        <button id="btn-paper">パー</button>
    </div>

    <div id="result" class="result"></div>
</div>
```

### JavaScript部分（HP管理の追加）

コンソールで動作を確認したら、以下のコードを実装します：

```javascript
// HPの初期値
let playerHP = 100;
let computerHP = 100;
const maxHP = 100;

// HPバーを更新する関数
function updateHPBar() {
    // プレイヤーのHPバーを更新
    const playerHPPercent = (playerHP / maxHP) * 100;
    document.getElementById('player-hp-fill').style.width = playerHPPercent + '%';
    document.getElementById('player-hp-text').textContent = `${playerHP} / ${maxHP}`;

    // コンピューターのHPバーを更新
    const computerHPPercent = (computerHP / maxHP) * 100;
    document.getElementById('computer-hp-fill').style.width = computerHPPercent + '%';
    document.getElementById('computer-hp-text').textContent = `${computerHP} / ${maxHP}`;

    // デバッグ用（動作確認のため）
    console.log('HP更新 - プレイヤー:', playerHP, 'コンピューター:', computerHP);
}

// ダメージを適用する関数
function applyDamage(result) {
    if (result === 'win') {
        computerHP -= 20;
        console.log('コンピューターに20ダメージ！');
    } else if (result === 'lose') {
        playerHP -= 20;
        console.log('プレイヤーに20ダメージ！');
    }

    // HPが0未満にならないようにする
    playerHP = Math.max(0, playerHP);
    computerHP = Math.max(0, computerHP);

    // HPバーを更新
    updateHPBar();

    // ゲーム終了判定
    if (playerHP <= 0 || computerHP <= 0) {
        console.log('ゲーム終了！');
        gameOver();
    }
}
```

**💡 console.logを使ってHPの変化を確認しよう！**
- ボタンを押すたびに、コンソールでHPの値が変わることを確認できます
- デバッグに役立つので、動作確認中は残しておきましょう

## 重要な概念

### 1. 変数でHPを管理
```javascript
let playerHP = 100;
let computerHP = 100;
const maxHP = 100;
```
- HPは変化するので`let`を使います
- 最大HPも別の変数で管理すると便利です

### 2. HPバーの作成
```html
<div class="hp-bar">
  <div class="hp-fill"></div>
</div>
```
- 外側のバー（枠）と内側の塗りつぶし部分の2つの要素で作ります
- CSSの`width`プロパティでHP残量を表現します

### 3. ゲーム終了判定
```javascript
if (playerHP <= 0 || computerHP <= 0) {
  // ゲーム終了処理
}
```
- `||`は「または」を意味します
- どちらか一方でもHPが0以下になったら終了

## 実装のヒント

### HPバーの更新方法
```javascript
function updateHPBar() {
  const playerHPPercent = (playerHP / maxHP) * 100;
  playerHPBarElement.style.width = playerHPPercent + '%';
}
```
- HPの割合（パーセント）を計算します
- CSSのwidthプロパティに反映させます

### ダメージ処理
```javascript
function applyDamage(winner) {
  if (winner === 'player') {
    computerHP -= 20;
  } else if (winner === 'computer') {
    playerHP -= 20;
  }
  // HPが0未満にならないようにする
  playerHP = Math.max(0, playerHP);
  computerHP = Math.max(0, computerHP);
}
```
- `Math.max(0, hp)`でHPが負の値にならないようにします

### ゲーム終了判定
```javascript
function checkGameOver() {
  if (playerHP <= 0 || computerHP <= 0) {
    disableButtons(); // ボタンを無効化
    if (playerHP <= 0) {
      resultText.textContent = 'ゲームオーバー！あなたの負けです';
    } else {
      resultText.textContent = 'おめでとう！あなたの勝ちです';
    }
  }
}
```

## チャレンジ課題
1. HPバーの色を変更してみよう（赤、緑、青など）
2. HPが少なくなったら色を変える機能を追加してみよう（30%以下で赤など）
3. ダメージを受けたときにアニメーションを追加してみよう

## よくある質問

**Q: HPバーが更新されません**
A: `updateHPBar()`関数を呼び出すタイミングを確認してください。ダメージを与えた後に必ず呼び出す必要があります。

**Q: HPが負の値になってしまいます**
A: `Math.max(0, hp)`を使って、HPが0未満にならないようにしましょう。

**Q: ゲームが終了しません**
A: `checkGameOver()`関数をじゃんけんの結果判定後に呼び出しているか確認してください。

## 次のステップ
Step 04では、手の種類によってダメージ量を変える仕組みを実装します。

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 02B 結果表示の色分け](../step02b_result_display/README.md)
- [➡️ 次のステップ: Step 04 ダメージ計算](../step04_damage_calculation/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step03_hp_system/answer/index.html) | [📁 コードを見る](./answer/)
