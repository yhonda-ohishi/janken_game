# Step 01A-3: 画面への表示

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01A-2 クリックイベント](../step01a2_click_event/README.md)
- [➡️ 次のステップ: Step 01B 乱数を学ぶ](../step01b_random_numbers/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01a3_display_result/answer/index.html) | [📁 コードを見る](./answer/)

---

## 🎯 学習目標
- `textContent` で画面にテキストを表示する
- これまで学んだことを組み合わせる
- じゃんけんの基本形を完成させる

## 📝 課題

### やること
1. グー、チョキ、パーの3つのボタンを作成
2. ボタンをクリックしたら、選んだ手を画面に表示
3. console.logでも確認

### 完成イメージ
```
[グー] [チョキ] [パー]

あなたが選んだ手: グー ✊

# コンソールにも表示
> グー が選ばれました
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
- 3つのボタンにそれぞれIDをつける（`btn-rock`, `btn-scissors`, `btn-paper`）
- 結果を表示するための空の`div`を用意（`id="result"`）

### JavaScript部分
```javascript
const resultDiv = document.querySelector('#result');
const rockButton = document.querySelector('#btn-rock');

rockButton.addEventListener('click', function() {
    console.log('グー が選ばれました');
    resultDiv.textContent = 'あなたが選んだ手: グー ✊';
});
```

### textContent とは？
- HTML要素の**テキスト内容**を変更する
- `=` で新しいテキストを代入できる
- 画面に表示される内容が変わる

### 組み合わせ
これまで学んだことを組み合わせています：
1. `querySelector()` で要素を取得
2. `addEventListener()` でクリックを検知
3. `textContent` で画面に表示
4. `console.log()` でデバッグ

## 📚 必要な知識
- `document.querySelector()`
- `addEventListener()`
- `textContent`
- `console.log()`

## ⏱️ 目安時間
10〜15分

## 🎓 学ぶポイント
これで**じゃんけんの基本形**が完成です！

- ボタンを作る（HTML）
- ボタンを取得する（querySelector）
- クリックを検知する（addEventListener）
- 画面に表示する（textContent）

この4つが理解できれば、どんなインタラクティブなWebページも作れます！

## 🔍 開発者ツールの開き方
- **Windows/Linux**: `F12` キーまたは `Ctrl + Shift + I`
- **Mac**: `Command + Option + I`
- コンソールタブをクリック → console.log()の出力が見える

## ✨ Progateスタイルのポイント
1. **小さく始める**: まずは1つのボタンから完成させる
2. **確認する**: console.logと画面表示の両方を確認
3. **繰り返す**: 他のボタンにも同じ処理を追加
4. **理解する**: なぜこの順番でコードを書くのか考える

---

## 🔗 ナビゲーション
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 01A-2 クリックイベント](../step01a2_click_event/README.md)
- [➡️ 次のステップ: Step 01B 乱数を学ぶ](../step01b_random_numbers/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step01a3_display_result/answer/index.html) | [📁 コードを見る](./answer/)
