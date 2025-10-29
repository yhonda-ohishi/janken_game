// 敵キャラクターのデータ（傾向を追加）
const enemies = [
    {
        name: 'スライム',
        maxHP: 100,
        image: '🟢',
        description: 'グーを出しやすい',
        tendencies: {
            rock: 50,      // グーを50%
            scissors: 30,  // チョキを30%
            paper: 20      // パーを20%
        }
    },
    {
        name: 'ゴブリン',
        maxHP: 150,
        image: '👹',
        description: 'バランス型',
        tendencies: {
            rock: 33,
            scissors: 34,
            paper: 33
        }
    },
    {
        name: 'ドラゴン',
        maxHP: 200,
        image: '🐉',
        description: 'パーを出しやすい',
        tendencies: {
            rock: 20,
            scissors: 20,
            paper: 60
        }
    }
];

// ゲームの状態を管理する変数
let playerHP = 100;
const playerMaxHP = 100;
let currentEnemyIndex = 0;
let currentEnemy = enemies[currentEnemyIndex];
let enemyHP = currentEnemy.maxHP;

// 各手のダメージ値
const damageValues = {
    rock: 10,
    scissors: 20,
    paper: 30
};

// バトルログとラウンド数
let battleLog = [];
let roundCount = 0;

// HTML要素の取得
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
const restartBtn = document.getElementById('restart-btn');
const resultDiv = document.getElementById('result');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const playerHPText = document.getElementById('player-hp-text');
const enemyHPText = document.getElementById('enemy-hp-text');
const enemyMaxHPText = document.getElementById('enemy-max-hp');
const playerHPBar = document.getElementById('player-hp-bar');
const enemyHPBar = document.getElementById('enemy-hp-bar');
const roundCountDisplay = document.getElementById('round-count');
const battleLogContainer = document.getElementById('battle-log');
const enemyNameDisplay = document.getElementById('enemy-name');
const enemyImageDisplay = document.getElementById('enemy-image');
const enemyDescriptionDisplay = document.getElementById('enemy-description');
const enemyProgressText = document.getElementById('enemy-progress-text');
const tendencyText = document.getElementById('tendency-text');

// 手の選択肢
const choices = ['rock', 'scissors', 'paper'];
const choiceNames = {
    rock: 'グー',
    scissors: 'チョキ',
    paper: 'パー'
};

// イベントリスナーの設定
rockBtn.addEventListener('click', () => playGame('rock'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
paperBtn.addEventListener('click', () => playGame('paper'));
restartBtn.addEventListener('click', restartGame);

// 敵情報の初期化
initializeEnemy();

// 敵の初期化関数
function initializeEnemy() {
    currentEnemy = enemies[currentEnemyIndex];
    enemyHP = currentEnemy.maxHP;

    // 敵情報を表示
    enemyNameDisplay.textContent = currentEnemy.name;
    enemyImageDisplay.textContent = currentEnemy.image;
    enemyDescriptionDisplay.textContent = currentEnemy.description;
    enemyMaxHPText.textContent = currentEnemy.maxHP;
    enemyProgressText.textContent = `${currentEnemyIndex + 1} / ${enemies.length}`;

    // 傾向を表示
    displayEnemyTendencies();

    // HPバーを更新
    updateHPBars();
}

// 敵の傾向を表示する関数
function displayEnemyTendencies() {
    const tendencies = currentEnemy.tendencies;
    const total = tendencies.rock + tendencies.scissors + tendencies.paper;

    const rockPercent = Math.round((tendencies.rock / total) * 100);
    const scissorsPercent = Math.round((tendencies.scissors / total) * 100);
    const paperPercent = Math.round((tendencies.paper / total) * 100);

    tendencyText.textContent =
        `グー: ${rockPercent}% | チョキ: ${scissorsPercent}% | パー: ${paperPercent}%`;
}

// 重み付けランダムで敵の手を選択する関数
function getEnemyChoice() {
    const tendencies = currentEnemy.tendencies;
    const total = tendencies.rock + tendencies.scissors + tendencies.paper;
    let random = Math.random() * total;

    // 累積確率で判定
    if (random < tendencies.rock) {
        return 'rock';
    }
    random -= tendencies.rock;

    if (random < tendencies.scissors) {
        return 'scissors';
    }

    return 'paper';
}

// メインのゲーム関数
function playGame(playerChoice) {
    // ラウンド数を増やす
    roundCount++;
    roundCountDisplay.textContent = roundCount;

    // コンピューターの手を傾向に基づいて選択
    const computerChoice = getEnemyChoice();

    // 選択した手を表示
    playerChoiceDisplay.textContent = choiceNames[playerChoice];
    computerChoiceDisplay.textContent = choiceNames[computerChoice];

    // 勝敗判定
    const result = determineWinner(playerChoice, computerChoice);

    // ダメージ処理
    const damage = applyDamage(result, playerChoice, computerChoice);

    // HPバーの更新
    updateHPBars();

    // バトルログに記録
    recordBattle(playerChoice, computerChoice, result, damage);

    // ログを表示
    displayLog();

    // 結果表示
    displayResult(result, damage);

    // 敵撃破判定
    checkEnemyDefeated();

    // ゲーム終了判定（プレイヤーの敗北）
    checkGameOver();
}

// 勝敗判定関数
function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'player';
    }

    return 'computer';
}

// ダメージ処理関数
function applyDamage(result, playerChoice, computerChoice) {
    let damage = 0;

    if (result === 'player') {
        damage = damageValues[playerChoice];
        enemyHP -= damage;
        enemyHP = Math.max(0, enemyHP);
    } else if (result === 'computer') {
        damage = damageValues[computerChoice];
        playerHP -= damage;
        playerHP = Math.max(0, playerHP);
    }

    return damage;
}

// HPバーの更新関数
function updateHPBars() {
    // プレイヤーのHP更新
    playerHPText.textContent = playerHP;
    const playerHPPercent = (playerHP / playerMaxHP) * 100;
    playerHPBar.style.width = playerHPPercent + '%';

    // 敵のHP更新
    enemyHPText.textContent = enemyHP;
    const enemyHPPercent = (enemyHP / currentEnemy.maxHP) * 100;
    enemyHPBar.style.width = enemyHPPercent + '%';
}

// バトルログに記録する関数
function recordBattle(playerChoice, computerChoice, result, damage) {
    battleLog.push({
        round: roundCount,
        enemy: currentEnemy.name,
        playerChoice: choiceNames[playerChoice],
        computerChoice: choiceNames[computerChoice],
        result: result,
        damage: damage
    });
}

// ログを表示する関数
function displayLog() {
    battleLogContainer.innerHTML = '';

    for (let i = battleLog.length - 1; i >= 0; i--) {
        const log = battleLog[i];
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';

        let resultText = '';
        if (log.result === 'player') {
            resultText = `勝利！${log.damage}ダメージ`;
            logEntry.classList.add('win');
        } else if (log.result === 'computer') {
            resultText = `敗北...${log.damage}ダメージ`;
            logEntry.classList.add('lose');
        } else {
            resultText = '引き分け';
            logEntry.classList.add('draw');
        }

        logEntry.textContent =
            `Round ${log.round} vs ${log.enemy}: ${log.playerChoice} vs ${log.computerChoice} - ${resultText}`;

        battleLogContainer.appendChild(logEntry);
    }
}

// 敵撃破判定関数
function checkEnemyDefeated() {
    if (enemyHP <= 0) {
        // バトルログに撃破記録を追加
        const defeatedLog = document.createElement('div');
        defeatedLog.className = 'log-entry enemy-defeated';
        defeatedLog.textContent = `${currentEnemy.name}を撃破！`;
        battleLogContainer.insertBefore(defeatedLog, battleLogContainer.firstChild);

        currentEnemyIndex++;

        if (currentEnemyIndex < enemies.length) {
            // 次の敵がいる
            disableButtons();
            resultDiv.textContent = `${enemies[currentEnemyIndex - 1].name}を倒した！次の敵が現れる...`;
            resultDiv.style.color = '#ffc107';
            resultDiv.style.backgroundColor = '#fff9c4';

            setTimeout(() => {
                initializeEnemy();
                resultDiv.textContent = `${currentEnemy.name}が現れた！`;
                enableButtons();
            }, 2000);
        } else {
            // 全ての敵を倒した
            disableButtons();
            resultDiv.textContent = `全ての敵を倒した！${roundCount}ラウンドで完全勝利！`;
            resultDiv.style.color = '#4CAF50';
            resultDiv.style.backgroundColor = '#e8f5e9';
        }
    }
}

// 結果表示関数
function displayResult(result, damage) {
    if (result === 'draw') {
        resultDiv.textContent = '引き分け！ダメージなし';
        resultDiv.style.color = '#666';
        resultDiv.style.backgroundColor = '#f0f0f0';
    } else if (result === 'player') {
        resultDiv.textContent = `あなたの勝ち！${damage}ダメージを与えた！`;
        resultDiv.style.color = '#4CAF50';
        resultDiv.style.backgroundColor = '#e8f5e9';
    } else {
        resultDiv.textContent = `あなたの負け...${damage}ダメージを受けた！`;
        resultDiv.style.color = '#f44336';
        resultDiv.style.backgroundColor = '#ffebee';
    }
}

// ゲーム終了判定関数（プレイヤーの敗北）
function checkGameOver() {
    if (playerHP <= 0) {
        disableButtons();
        resultDiv.textContent = `ゲームオーバー！${currentEnemy.name}に敗北...`;
        resultDiv.style.color = '#f44336';
        resultDiv.style.backgroundColor = '#ffebee';
    }
}

// ボタンを無効化する関数
function disableButtons() {
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
}

// ボタンを有効化する関数
function enableButtons() {
    rockBtn.disabled = false;
    scissorsBtn.disabled = false;
    paperBtn.disabled = false;
}

// ゲームをリスタートする関数
function restartGame() {
    // ゲーム状態の初期化
    playerHP = playerMaxHP;
    currentEnemyIndex = 0;
    battleLog = [];
    roundCount = 0;

    // 敵の初期化
    initializeEnemy();

    // 表示の更新
    updateHPBars();
    roundCountDisplay.textContent = roundCount;
    displayLog();
    resultDiv.textContent = '';
    resultDiv.style.backgroundColor = '';
    playerChoiceDisplay.textContent = '-';
    computerChoiceDisplay.textContent = '-';

    // ボタンを有効化
    enableButtons();
}
