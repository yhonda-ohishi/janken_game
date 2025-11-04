# じゃんけんバトルゲーム

HTML/CSS/JavaScriptで作成したブラウザベースのじゃんけんバトルゲームです。

## 🎮 デモ

**完成版を今すぐプレイ:** [https://yhonda-ohishi.github.io/janken_game/step10_final/answer/index.html](https://yhonda-ohishi.github.io/janken_game/step10_final/answer/index.html)

## 📚 学習パス

このリポジトリには、初心者向けの**13ステップの段階的な学習教材**が含まれています。

### 🎯 学習を始める

1. [📖 学習パスの全体像を見る](LEARNING_PATH.md)
2. [🚀 Step 01Aから始める](step01a_buttons_click/README.md)

### ステップ一覧

| ステップ | タイトル | 学習内容 | デモ |
|---------|---------|---------|------|
| Step 01A | [ボタンとクリック](step01a_buttons_click/README.md) | HTMLボタン、クリックイベント、表示 | [▶️](https://yhonda-ohishi.github.io/janken_game/step01a_buttons_click/answer/index.html) |
| Step 01B | [乱数を学ぶ](step01b_random_numbers/README.md) | Math.random()、小数→整数、0-2生成 | [▶️](https://yhonda-ohishi.github.io/janken_game/step01b_random_numbers/answer/index.html) |
| Step 01C | [配列で手を管理](step01c_arrays_choices/README.md) | 配列の基本、要素取得、乱数と配列 | [▶️](https://yhonda-ohishi.github.io/janken_game/step01c_arrays_choices/answer/index.html) |
| Step 02 | [勝敗判定](step02_win_lose/README.md) | if文、勝敗ロジック、CSS変更 | [▶️](https://yhonda-ohishi.github.io/janken_game/step02_win_lose/answer/index.html) |
| Step 03 | [HPシステム](step03_hp_system/README.md) | 変数管理、HPバー、ゲーム終了判定 | [▶️](https://yhonda-ohishi.github.io/janken_game/step03_hp_system/answer/index.html) |
| Step 04 | [ダメージ計算](step04_damage_calculation/README.md) | オブジェクト、異なるダメージ値 | [▶️](https://yhonda-ohishi.github.io/janken_game/step04_damage_calculation/answer/index.html) |
| Step 05 | [複数ラウンド](step05_multiple_rounds/README.md) | 配列、ログ表示、リスタート機能 | [▶️](https://yhonda-ohishi.github.io/janken_game/step05_multiple_rounds/answer/index.html) |
| Step 06 | [敵キャラクター](step06_enemy_characters/README.md) | 複数の敵、データ構造、順番に戦闘 | [▶️](https://yhonda-ohishi.github.io/janken_game/step06_enemy_characters/answer/index.html) |
| Step 07 | [敵の傾向](step07_enemy_tendencies/README.md) | 確率、重み付けランダム | [▶️](https://yhonda-ohishi.github.io/janken_game/step07_enemy_tendencies/answer/index.html) |
| Step 08 | [UI改善](step08_ui_improvements/README.md) | CSSアニメーション、視覚的フィードバック | [▶️](https://yhonda-ohishi.github.io/janken_game/step08_ui_improvements/answer/index.html) |
| Step 09 | [アイテムシステム](step09_item_system/README.md) | 回復アイテム、リソース管理 | [▶️](https://yhonda-ohishi.github.io/janken_game/step09_item_system/answer/index.html) |
| Step 10 | [最終版](step10_final/README.md) | オプション機能、完成形 | [▶️](https://yhonda-ohishi.github.io/janken_game/step10_final/answer/index.html) |

## ✨ ゲームの特徴

- **3体の敵と順番に戦闘**: スライム → ゴブリン → ドラゴン
- **HP制バトル**: プレイヤー100 HP、敵は段階的に増加（100/150/200）
- **ダメージシステム**: グー(10)、チョキ(20)、パー(30)の固定ダメージ
- **クリティカルヒット**: 15%の確率で1.5倍ダメージ
- **敵の行動傾向**: 各敵が出しやすい手が異なる
- **回復アイテム**: 3回使用可能（+50 HP）、使用すると必ず敵の攻撃を受ける
- **前回と同じ手を禁止モード**: オプションで戦略性を向上

## 🎲 ゲームルール

### 基本ダメージ
- **グー**: 10ダメージ
- **チョキ**: 20ダメージ
- **パー**: 30ダメージ

### クリティカルヒット
- 発動確率: 15%
- クリティカル時: 基本ダメージ × 1.5

### 敵キャラクター

#### 1. スライム（HP: 100）
- 🟢 バランス型
- グー 33% / チョキ 33% / パー 34%

#### 2. ゴブリン（HP: 150）
- 👹 グー好き
- グー 50% / チョキ 25% / パー 25%

#### 3. ドラゴン（HP: 200）
- 🐉 パー好き
- グー 20% / チョキ 20% / パー 60%

### 回復システム
- **回復アイテム**: 3回使用可能、+50 HP
- **ペナルティ**: 使用すると必ず敵の攻撃を受ける
- **敵撃破ボーナス**: 敵を倒すと+30 HP回復

## 📁 ファイル構成

```
janken_game/
├── index.html              # 完成版のHTML
├── style.css               # 完成版のCSS
├── script.js               # 完成版のJavaScript
├── README.md               # このファイル
├── LEARNING_PATH.md        # 学習パスの詳細
├── step01_basic_janken/    # Step 01: 基本のじゃんけん
│   ├── README.md           # 課題説明
│   └── answer/             # 解答コード
├── step02_win_lose/        # Step 02: 勝敗判定
├── step03_hp_system/       # Step 03: HPシステム
├── step04_damage_calculation/ # Step 04: ダメージ計算
├── step05_multiple_rounds/ # Step 05: 複数ラウンド
├── step06_enemy_characters/ # Step 06: 敵キャラクター
├── step07_enemy_tendencies/ # Step 07: 敵の傾向
├── step08_ui_improvements/ # Step 08: UI改善
├── step09_item_system/     # Step 09: アイテムシステム
└── step10_final/           # Step 10: 最終版（完成形）
    └── answer/             # 完成版コード
```

## 🎓 学習について

### 対象者
- プログラミング初心者
- HTML/CSS/JavaScriptの基礎を学びたい方
- ゲーム開発に興味がある方

### 学習時間
- **合計**: 約12.5〜16.5時間
- **1ステップ**: 10分〜2.5時間（ステップにより異なる）

### 前提知識
- HTMLの基本（タグ、属性）
- CSSの基本（セレクタ、プロパティ）
- JavaScriptの基本（変数、関数、if文）

## 🚀 使い方

### 完成版をプレイ
```bash
# リポジトリをクローン
git clone https://github.com/yhonda-ohishi/janken_game.git

# ディレクトリに移動
cd janken_game

# index.html をブラウザで開く
```

または、[GitHub Pages](https://yhonda-ohishi.github.io/janken_game/step10_final/answer/index.html)で直接プレイ

### 学習を始める
1. [LEARNING_PATH.md](LEARNING_PATH.md) を読む
2. [step01a_buttons_click/README.md](step01a_buttons_click/README.md) から順番に進める
3. 自力で課題に取り組む
4. 詰まったら `answer/` フォルダの解答を参照
5. 次のステップに進む

## 🔧 技術スタック

- **HTML5** - マークアップ
- **CSS3** - スタイリング、アニメーション
- **JavaScript (ES6+)** - ゲームロジック

### 主な技術要素
- DOM操作
- イベント処理
- 配列・オブジェクト
- 条件分岐・ループ
- 確率計算
- CSSアニメーション
- レスポンシブデザイン

## 🎨 主要な関数の詳細

各関数の詳細なロジックについては、[関数詳細ドキュメント](FUNCTION_DETAILS.md)を参照してください。

主要な関数：
- `startNextBattle()` - 次の敵とのバトル開始
- `playRound()` - じゃんけんの1ラウンド実行
- `getEnemyChoice()` - 敵の手を確率的に決定
- `determineWinner()` - 勝敗判定
- `updateHpDisplay()` - HPバー更新
- `checkGameOver()` - ゲーム終了判定
- `useHealItem()` - 回復アイテム使用

## 🐛 デバッグ機能

開発者コンソール（F12）で以下を確認できます：
- 敵の手の選択確率
- 正規化後の確率分布
- 実際に選択された手と乱数値

## 🤝 コントリビューション

プルリクエストや Issue の報告を歓迎します！

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📝 ライセンス

MIT License - 自由に学習・改変・配布できます

## 👤 作成者

**yhonda-ohishi**
- Email: honda@ohishiunyusouko.com
- GitHub: [@yhonda-ohishi](https://github.com/yhonda-ohishi)

## 🔗 リンク

- **リポジトリ**: [https://github.com/yhonda-ohishi/janken_game](https://github.com/yhonda-ohishi/janken_game)
- **完成版デモ**: [https://yhonda-ohishi.github.io/janken_game/step10_final/answer/index.html](https://yhonda-ohishi.github.io/janken_game/step10_final/answer/index.html)
- **学習パス**: [LEARNING_PATH.md](LEARNING_PATH.md)
- **関数詳細**: [FUNCTION_DETAILS.md](FUNCTION_DETAILS.md)

---

**さあ、じゃんけんバトルゲームの開発を始めましょう！ 🚀**

[📖 学習パスを見る](LEARNING_PATH.md) | [🚀 Step 01Aから始める](step01a_buttons_click/README.md)
