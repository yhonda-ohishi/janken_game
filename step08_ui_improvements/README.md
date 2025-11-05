# Step 08: UI改善

---

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 07 敵の傾向](../step07_enemy_tendencies/README.md)
- [➡️ 次のステップ: Step 09 アイテムシステム](../step09_item_system/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step08_ui_improvements/answer/index.html) | [📁 コードを見る](./answer/)

---

## 学習目標
- CSSアニメーションの基礎を学ぶ
- JavaScriptでクラスを動的に追加・削除する方法を理解する
- ユーザー体験（UX）を向上させる方法を考える

## 今回追加する機能
1. 対戦表示エリアの追加（選択した手を大きく表示）
2. 勝敗で背景色を変更
3. アニメーション効果の追加
   - 手を選択した時のアニメーション
   - ダメージを受けた時のシェイク効果
   - HP減少時のフラッシュ効果

## 重要な概念

### 1. CSSアニメーション
```css
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}

.shake-animation {
    animation: shake 0.5s;
}
```

### 2. クラスの追加・削除
```javascript
// クラスを追加
element.classList.add('shake-animation');

// アニメーション後にクラスを削除
setTimeout(() => {
    element.classList.remove('shake-animation');
}, 500);
```

### 3. 動的なスタイル変更
```javascript
if (result === 'player') {
    battleArea.style.backgroundColor = '#e8f5e9'; // 緑系
} else if (result === 'computer') {
    battleArea.style.backgroundColor = '#ffebee'; // 赤系
}
```

## 実装のヒント

### 対戦エリアの作成
```html
<div class="battle-area">
    <div class="battle-choice">
        <p>あなた</p>
        <div class="battle-hand" id="battle-player-hand">❔</div>
    </div>
    <div class="battle-vs">VS</div>
    <div class="battle-choice">
        <p>相手</p>
        <div class="battle-hand" id="battle-enemy-hand">❔</div>
    </div>
</div>
```

### シェイクアニメーション
```css
@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
        transform: translateX(-5px);
    }
    20%, 40%, 60%, 80% {
        transform: translateX(5px);
    }
}

.shake {
    animation: shake 0.5s;
}
```

### ダメージアニメーション
```javascript
function showDamageAnimation(target) {
    const element = target === 'player' ?
        document.querySelector('.hp-container:first-of-type') :
        document.querySelector('.enemy-container');

    element.classList.add('shake', 'damage-flash');

    setTimeout(() => {
        element.classList.remove('shake', 'damage-flash');
    }, 500);
}
```

### フラッシュ効果
```css
@keyframes damage-flash {
    0%, 100% {
        background-color: initial;
    }
    50% {
        background-color: #ffcdd2;
    }
}

.damage-flash {
    animation: damage-flash 0.3s;
}
```

### 勝利エフェクト
```css
@keyframes victory-glow {
    0%, 100% {
        box-shadow: 0 0 0 rgba(76, 175, 80, 0);
    }
    50% {
        box-shadow: 0 0 30px rgba(76, 175, 80, 0.8);
    }
}

.victory {
    animation: victory-glow 1s infinite;
}
```

## チャレンジ課題
1. 手を出す時のカウントダウンアニメーションを追加してみよう（3, 2, 1, じゃんけんぽん！）
2. クリティカルヒット時に特別なエフェクトを追加してみよう
3. HPが少なくなったら警告アニメーションを追加してみよう（点滅など）
4. 敵撃破時の爆発エフェクトを作ってみよう
5. サウンドエフェクトを追加してみよう（Web Audio API）

## よくある質問

**Q: アニメーションが繰り返し実行されません**
A: アニメーション後にクラスを削除してから、再度追加する必要があります。`setTimeout()`を活用しましょう。

**Q: アニメーションが途中で止まります**
A: CSSの`animation-duration`と`setTimeout()`の時間が一致しているか確認してください。

**Q: 複数のアニメーションが同時に動きません**
A: 複数のクラスを同時に追加するか、複数のアニメーションをカンマ区切りで指定できます。

## CSSアニメーションのプロパティ
```css
.animated-element {
    animation-name: myAnimation;        /* アニメーション名 */
    animation-duration: 1s;            /* 実行時間 */
    animation-timing-function: ease;   /* イージング */
    animation-delay: 0s;               /* 遅延 */
    animation-iteration-count: 1;      /* 繰り返し回数 */
    animation-direction: normal;       /* 方向 */

    /* 短縮形 */
    animation: myAnimation 1s ease 0s 1 normal;
}
```

## UXを良くするポイント
1. **フィードバックを即座に**: ユーザーの操作に対して即座に反応する
2. **適度なアニメーション**: 派手すぎず、地味すぎず
3. **状態の明示**: 今何が起きているか分かりやすく
4. **待ち時間の工夫**: 長い処理中はアニメーションで退屈させない

## 次のステップ
Step 09では、回復アイテムを追加して、より戦略的なゲームにします。

---

## 🔗 ナビゲーション
- [🏠 TOPへ戻る](../README.md)
- [📚 学習パスに戻る](../LEARNING_PATH.md)
- [⬅️ 前のステップ: Step 07 敵の傾向](../step07_enemy_tendencies/README.md)
- [➡️ 次のステップ: Step 09 アイテムシステム](../step09_item_system/README.md)
- [🎮 解答を実行](https://yhonda-ohishi.github.io/janken_game/step08_ui_improvements/answer/index.html) | [📁 コードを見る](./answer/)
