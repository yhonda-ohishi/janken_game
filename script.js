// ゲーム定数
const CRITICAL_CHANCE = 0.15; // 15%のクリティカル率

// ダメージ設定（固定値）
const DAMAGE = {
    rock: 10,      // グー: 低ダメージ
    scissors: 20,  // チョキ: 中ダメージ
    paper: 30      // パー: 高ダメージ
};

// 敵キャラクター設定（順番に戦う）
const ENEMIES = [
    {
        name: 'スライム',
        maxHp: 100,
        image: '🟢',
        tendency: { rock: 0.33, scissors: 0.33, paper: 0.34 }, // バランス型
        description: '全ての手を均等に出す'
    },
    {
        name: 'ゴブリン',
        maxHp: 150,
        image: '👹',
        tendency: { rock: 0.5, scissors: 0.25, paper: 0.25 },  // グー好き
        description: 'グーを出しやすい（50%）'
    },
    {
        name: 'ドラゴン',
        maxHp: 200,
        image: '🐉',
        tendency: { rock: 0.2, scissors: 0.2, paper: 0.6 },    // パー好き
        description: 'パーを出しやすい（60%）'
    }
];

// ゲーム状態
let gameState = {
    playerHp: 100,
    playerMaxHp: 100,
    enemyHp: 100,
    currentEnemyIndex: 0,
    isGameOver: false,
    isBattling: false,
    lastPlayerChoice: null,
    lastEnemyChoice: null,
    noRepeatMode: false,
    healItems: 3
};

// DOM要素
const playerHpElement = document.getElementById('playerHp');
const enemyHpElement = document.getElementById('enemyHp');
const playerHpFill = document.getElementById('playerHpFill');
const enemyHpFill = document.getElementById('enemyHpFill');
const enemyNameElement = document.getElementById('enemyName');
const enemyTendencyElement = document.getElementById('enemyTendency');
const enemyImageContainer = document.getElementById('enemyImageContainer');
const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
const enemyChoiceDisplay = document.getElementById('enemyChoiceDisplay');
const enemyDisplayName = document.getElementById('enemyDisplayName');
const battleChoices = document.querySelector('.battle-choices');
const battleLog = document.getElementById('battleLog');
const gameOverDiv = document.getElementById('gameOver');
const gameOverText = document.getElementById('gameOverText');
const restartBtn = document.getElementById('restartBtn');
const noRepeatOption = document.getElementById('noRepeatOption');
const healBtn = document.getElementById('healBtn');
const itemCount = document.getElementById('itemCount');

// 手選択ボタンのイベントリスナー
document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (!gameState.isGameOver && gameState.isBattling) {
            const choice = btn.dataset.choice;

            // 前回と同じ手のチェック
            if (gameState.noRepeatMode && choice === gameState.lastPlayerChoice) {
                addLog('前回と同じ手は使えません！', 'log-lose');
                return;
            }

            playRound(choice);
        }
    });
});

// オプションチェックボックスのイベントリスナー
noRepeatOption.addEventListener('change', () => {
    gameState.noRepeatMode = noRepeatOption.checked;
    updateButtonStates();

    if (gameState.noRepeatMode) {
        addLog('モード変更: 前回と同じ手を禁止', 'log-draw');
    } else {
        addLog('モード変更: 制限なし', 'log-draw');
    }
});

// 回復アイテムボタン
healBtn.addEventListener('click', () => {
    if (!gameState.isGameOver && gameState.isBattling && gameState.healItems > 0) {
        useHealItem();
    }
});

// リスタートボタン
restartBtn.addEventListener('click', resetGame);

// 次の敵とのバトル開始
function startNextBattle() {
    if (gameState.currentEnemyIndex >= ENEMIES.length) {
        // 全ての敵を倒した
        gameWin();
        return;
    }

    const enemy = ENEMIES[gameState.currentEnemyIndex];
    gameState.enemyHp = enemy.maxHp;
    gameState.isGameOver = false;
    gameState.isBattling = true;

    enemyNameElement.textContent = enemy.name;
    enemyTendencyElement.textContent = enemy.description;
    enemyImageContainer.textContent = enemy.image;
    enemyDisplayName.textContent = enemy.name;

    // 選択表示をリセット
    playerChoiceDisplay.textContent = '?';
    enemyChoiceDisplay.textContent = '?';

    // 背景色をリセット
    battleChoices.classList.remove('win', 'lose', 'draw');

    // 前回の手をリセット
    gameState.lastPlayerChoice = null;
    gameState.lastEnemyChoice = null;

    updateHpDisplay();
    updateButtonStates();

    addLog(`${enemy.name} が現れた！（HP: ${enemy.maxHp}）`, 'log-draw');
}

// ラウンド実行
function playRound(playerChoice) {
    const enemy = ENEMIES[gameState.currentEnemyIndex];
    const enemyChoice = getEnemyChoice();
    const result = determineWinner(playerChoice, enemyChoice);

    const choiceIcons = {
        rock: '✊',
        scissors: '✌️',
        paper: '✋'
    };

    const choiceNames = {
        rock: 'グー',
        scissors: 'チョキ',
        paper: 'パー'
    };

    // 選択した手を表示
    playerChoiceDisplay.textContent = choiceIcons[playerChoice];
    enemyChoiceDisplay.textContent = choiceIcons[enemyChoice];

    // アニメーション追加
    playerChoiceDisplay.classList.add('choice-animate');
    enemyChoiceDisplay.classList.add('choice-animate');
    setTimeout(() => {
        playerChoiceDisplay.classList.remove('choice-animate');
        enemyChoiceDisplay.classList.remove('choice-animate');
    }, 500);

    // 背景色を変更
    battleChoices.classList.remove('win', 'lose', 'draw');
    setTimeout(() => {
        battleChoices.classList.add(result);
    }, 100);

    addLog(`あなた: ${choiceNames[playerChoice]}${choiceIcons[playerChoice]} vs ${enemy.name}: ${choiceNames[enemyChoice]}${choiceIcons[enemyChoice]}`);

    // 前回の手を記録
    gameState.lastPlayerChoice = playerChoice;
    gameState.lastEnemyChoice = enemyChoice;

    if (result === 'win') {
        const isCritical = Math.random() < CRITICAL_CHANCE;
        const baseDamage = DAMAGE[playerChoice];
        const damage = isCritical ? Math.floor(baseDamage * 1.5) : baseDamage;

        gameState.enemyHp = Math.max(0, gameState.enemyHp - damage);

        if (isCritical) {
            addLog(`クリティカルヒット！ ${damage}ダメージ！`, 'log-critical');
        } else {
            addLog(`${damage}ダメージを与えた！`, 'log-win');
        }
    } else if (result === 'lose') {
        const isCritical = Math.random() < CRITICAL_CHANCE;
        const baseDamage = DAMAGE[enemyChoice];
        const damage = isCritical ? Math.floor(baseDamage * 1.5) : baseDamage;

        gameState.playerHp = Math.max(0, gameState.playerHp - damage);

        if (isCritical) {
            addLog(`敵のクリティカルヒット！ ${damage}ダメージを受けた！`, 'log-critical');
        } else {
            addLog(`${damage}ダメージを受けた！`, 'log-lose');
        }
    } else {
        addLog('引き分け！', 'log-draw');
    }

    updateHpDisplay();
    updateButtonStates();
    checkGameOver();
}

// 敵の手を決定（傾向に基づく）
function getEnemyChoice() {
    const enemy = ENEMIES[gameState.currentEnemyIndex];
    const tendency = enemy.tendency;

    let choices = ['rock', 'scissors', 'paper'];
    let weights = [tendency.rock, tendency.scissors, tendency.paper];

    // 前回と同じ手を禁止モードの場合
    if (gameState.noRepeatMode && gameState.lastEnemyChoice) {
        const lastIndex = choices.indexOf(gameState.lastEnemyChoice);

        // デバッグ: 禁止前の状態
        console.log(`[禁止前] 選択肢: ${choices.join(', ')}`);
        console.log(`[禁止前] 確率: ${weights.map(w => (w * 100).toFixed(1) + '%').join(', ')}`);
        console.log(`[禁止] ${gameState.lastEnemyChoice} を除外`);

        choices.splice(lastIndex, 1);
        weights.splice(lastIndex, 1);

        // 残りの確率を正規化
        const totalWeight = weights.reduce((a, b) => a + b, 0);
        weights = weights.map(w => w / totalWeight);

        // デバッグ: 正規化後の状態
        console.log(`[正規化後] 選択肢: ${choices.join(', ')}`);
        console.log(`[正規化後] 確率: ${weights.map(w => (w * 100).toFixed(1) + '%').join(', ')}`);
        console.log(`[正規化後] 合計: ${weights.reduce((a, b) => a + b, 0).toFixed(3)}`);
    }

    const rand = Math.random();
    let cumulative = 0;

    for (let i = 0; i < choices.length; i++) {
        cumulative += weights[i];
        if (rand < cumulative) {
            console.log(`[選択] ${choices[i]} (乱数: ${rand.toFixed(3)}, 累積: ${cumulative.toFixed(3)})`);
            return choices[i];
        }
    }

    return choices[choices.length - 1];
}

// 勝敗判定
function determineWinner(player, enemy) {
    if (player === enemy) return 'draw';

    const winConditions = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };

    return winConditions[player] === enemy ? 'win' : 'lose';
}

// HP表示更新
function updateHpDisplay() {
    const enemy = ENEMIES[gameState.currentEnemyIndex];

    playerHpElement.textContent = gameState.playerHp;
    enemyHpElement.textContent = gameState.enemyHp;

    playerHpFill.style.width = `${(gameState.playerHp / gameState.playerMaxHp) * 100}%`;
    enemyHpFill.style.width = `${(gameState.enemyHp / enemy.maxHp) * 100}%`;
}

// ログ追加
function addLog(message, className = '') {
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${className}`;
    logEntry.textContent = message;
    battleLog.appendChild(logEntry);
    battleLog.scrollTop = battleLog.scrollHeight;
}

// ゲームオーバーチェック
function checkGameOver() {
    if (gameState.enemyHp <= 0) {
        gameState.isBattling = false;
        const enemy = ENEMIES[gameState.currentEnemyIndex];
        addLog(`${enemy.name} を倒した！`, 'log-win');

        // 回復処理
        const healAmount = 30;
        const oldHp = gameState.playerHp;
        gameState.playerHp = Math.min(gameState.playerMaxHp, gameState.playerHp + healAmount);
        const actualHeal = gameState.playerHp - oldHp;

        if (actualHeal > 0) {
            addLog(`HPが ${actualHeal} 回復した！（${oldHp} → ${gameState.playerHp}）`, 'log-win');
            updateHpDisplay();
        }

        gameState.currentEnemyIndex++;

        // 次の敵へ
        setTimeout(() => {
            if (gameState.currentEnemyIndex < ENEMIES.length) {
                addLog('-------------------', 'log-draw');
                startNextBattle();
            } else {
                gameWin();
            }
        }, 2000);
    } else if (gameState.playerHp <= 0) {
        gameState.isGameOver = true;
        gameState.isBattling = false;
        gameOverText.textContent = '💀 敗北... 💀';
        gameOverText.style.color = '#f44336';
        disableButtons();
        setTimeout(() => {
            gameOverDiv.style.display = 'block';
        }, 1000);
    }
}

// 全ての敵を倒した
function gameWin() {
    gameState.isGameOver = true;
    gameState.isBattling = false;
    gameOverText.textContent = '🎉 全ての敵を倒した！ 🎉';
    gameOverText.style.color = '#4CAF50';
    disableButtons();
    setTimeout(() => {
        gameOverDiv.style.display = 'block';
    }, 1000);
}

// ボタンを無効化
function disableButtons() {
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.disabled = true;
    });
}

// ボタンを有効化
function enableButtons() {
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.disabled = false;
    });
    updateButtonStates();
}

// ボタンの状態を更新（前回と同じ手を禁止モード用）
function updateButtonStates() {
    if (!gameState.noRepeatMode || !gameState.lastPlayerChoice) {
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.style.opacity = '1';
        });
        return;
    }

    document.querySelectorAll('.choice-btn').forEach(btn => {
        if (btn.dataset.choice === gameState.lastPlayerChoice) {
            btn.style.opacity = '0.3';
        } else {
            btn.style.opacity = '1';
        }
    });
}

// 回復アイテム使用
function useHealItem() {
    if (gameState.healItems <= 0) return;

    gameState.healItems--;
    itemCount.textContent = `×${gameState.healItems}`;

    // 回復処理
    const healAmount = 50;
    const oldHp = gameState.playerHp;
    gameState.playerHp = Math.min(gameState.playerMaxHp, gameState.playerHp + healAmount);
    const actualHeal = gameState.playerHp - oldHp;

    addLog(`回復アイテムを使用！ HPが ${actualHeal} 回復した！（${oldHp} → ${gameState.playerHp}）`, 'log-win');
    updateHpDisplay();

    // アイテム数が0になったらボタンを無効化
    if (gameState.healItems <= 0) {
        healBtn.disabled = true;
    }

    // 敵のターン（必ず攻撃が成功する）
    setTimeout(() => {
        const enemy = ENEMIES[gameState.currentEnemyIndex];
        const enemyChoice = getEnemyChoice();

        const choiceIcons = {
            rock: '✊',
            scissors: '✌️',
            paper: '✋'
        };

        const choiceNames = {
            rock: 'グー',
            scissors: 'チョキ',
            paper: 'パー'
        };

        // 敵の選択を表示
        playerChoiceDisplay.textContent = '💊';
        enemyChoiceDisplay.textContent = choiceIcons[enemyChoice];

        // アニメーション
        playerChoiceDisplay.classList.add('choice-animate');
        enemyChoiceDisplay.classList.add('choice-animate');
        setTimeout(() => {
            playerChoiceDisplay.classList.remove('choice-animate');
            enemyChoiceDisplay.classList.remove('choice-animate');
        }, 500);

        // 背景色を負けに変更
        battleChoices.classList.remove('win', 'lose', 'draw');
        setTimeout(() => {
            battleChoices.classList.add('lose');
        }, 100);

        addLog(`${enemy.name}: ${choiceNames[enemyChoice]}${choiceIcons[enemyChoice]}`);

        // 必ずダメージを受ける
        const isCritical = Math.random() < CRITICAL_CHANCE;
        const baseDamage = DAMAGE[enemyChoice];
        const damage = isCritical ? Math.floor(baseDamage * 1.5) : baseDamage;

        gameState.playerHp = Math.max(0, gameState.playerHp - damage);

        if (isCritical) {
            addLog(`敵のクリティカルヒット！ ${damage}ダメージを受けた！`, 'log-critical');
        } else {
            addLog(`${damage}ダメージを受けた！`, 'log-lose');
        }

        // 前回の手を記録
        gameState.lastEnemyChoice = enemyChoice;

        updateHpDisplay();
        updateButtonStates();
        checkGameOver();
    }, 1000);
}

// ゲームリセット
function resetGame() {
    gameState = {
        playerHp: 100,
        playerMaxHp: 100,
        enemyHp: 100,
        currentEnemyIndex: 0,
        isGameOver: false,
        isBattling: false,
        lastPlayerChoice: null,
        lastEnemyChoice: null,
        noRepeatMode: noRepeatOption.checked,
        healItems: 3
    };

    gameOverDiv.style.display = 'none';
    battleLog.innerHTML = '';
    enemyImageContainer.textContent = '';
    playerChoiceDisplay.textContent = '?';
    enemyChoiceDisplay.textContent = '?';

    // 背景色をリセット
    battleChoices.classList.remove('win', 'lose', 'draw');

    // 回復アイテムをリセット
    healBtn.disabled = false;
    itemCount.textContent = '×3';

    enableButtons();
    updateHpDisplay();

    // 最初の敵とのバトル開始
    startNextBattle();
}

// 初期化
updateHpDisplay();
startNextBattle();
