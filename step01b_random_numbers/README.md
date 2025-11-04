# Step 01B: 乱数を学ぶ

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01A ボタンとクリック](../step01a_buttons_click/README.md)
- [➡️ 次のステップ: Step 01C 配列で手を管理](../step01c_arrays_choices/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01b_random_numbers/answer/index.html) | [📁 コードを見る](./answer/)

---

## 🎯 学習目標
- `Math.random()` で乱数を生成する
- 小数を整数に変換する方法を学ぶ
- ランダムに 0, 1, 2 の数字を作る

## 📝 課題

### やること
1. ボタンを1つ作成（「ランダムな数字を出す」ボタン）
2. ボタンを押したら、0, 1, 2 のどれかをランダムに表示
3. 何度押してもランダムに変わることを確認

### 完成イメージ
```
[ランダムな数字を出す]

コンピューターが選んだ数字: 2
```

## 💡 ヒント

### HTML部分
```html
<div class="button-area">
    <button id="btn-random">ランダムな数字を出す</button>
</div>

<div id="result" class="result"></div>
```
- ボタン1つと、結果を表示する`div`を用意

### JavaScript部分（完成形）
```javascript
const resultDiv = document.querySelector('#result');
const randomButton = document.querySelector('#btn-random');

randomButton.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log('ランダムな数字:', randomNumber);
    resultDiv.textContent = 'コンピューターが選んだ数字: ' + randomNumber;
});
```

### Math.random() について
```javascript
Math.random()  // 0以上1未満のランダムな小数を返す
// 例: 0.123456, 0.789012, 0.456789 など
```

### 0, 1, 2 を作る方法
```javascript
// ステップ1: 0以上3未満の小数を作る
Math.random() * 3  // 0〜2.9999... の小数

// ステップ2: 小数点以下を切り捨てて整数にする
Math.floor(Math.random() * 3)  // 0, 1, 2 のいずれか
```

### なぜ「* 3」なのか？
- `Math.random()` は 0〜0.9999... を返す
- それに3をかけると 0〜2.9999... になる
- `Math.floor()` で切り捨てると 0, 1, 2 になる

## 📚 必要な知識
- `Math.random()` - 乱数生成
- `Math.floor()` - 小数点以下切り捨て
- 掛け算を使った範囲の調整

## ⏱️ 目安時間
15〜20分

## 🎓 学ぶポイント
**乱数**はゲーム作りの基本です！
- サイコロを振る
- 敵の行動をランダムにする
- アイテムの出現率を決める

すべて乱数を使います。このステップでしっかり理解しましょう！

## 🧪 試してみよう
完成したら、以下を試してみましょう：
1. 何度もボタンを押して、本当にランダムか確認
2. `Math.random() * 3` の「3」を「5」に変えたらどうなる？
3. `Math.floor()` を `Math.ceil()` に変えたらどうなる？

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01A ボタンとクリック](../step01a_buttons_click/README.md)
- [➡️ 次のステップ: Step 01C 配列で手を管理](../step01c_arrays_choices/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01b_random_numbers/answer/index.html) | [📁 コードを見る](./answer/)
