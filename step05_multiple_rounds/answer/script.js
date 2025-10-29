// ゲームの状態を管理する変数
let playerHP = 100;
let computerHP = 100;
const maxHP = 100;

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
const computerHPText = document.getElementById('computer-hp-text');
const playerHPBar = document.getElementById('player-hp-bar');
const computerHPBar = document.getElementById('computer-hp-bar');
const roundCountDisplay = document.getElementById('round-count');
const battleLogContainer = document.getElementById('battle-log');

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

// メインのゲーム関数
function playGame(playerChoice) {
    // ラウンド数を増やす
    roundCount++;
    roundCountDisplay.textContent = roundCount;

    // コンピューターの手をランダムに選択
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

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

    // ゲーム終了判定
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
        computerHP -= damage;
        computerHP = Math.max(0, computerHP);
    } else if (result === 'computer') {
        damage = damageValues[computerChoice];
        playerHP -= damage;
        playerHP = Math.max(0, playerHP);
    }

    return damage;
}

// HPバーの更新関数
function updateHPBars() {
    playerHPText.textContent = playerHP;
    const playerHPPercent = (playerHP / maxHP) * 100;
    playerHPBar.style.width = playerHPPercent + '%';

    computerHPText.textContent = computerHP;
    const computerHPPercent = (computerHP / maxHP) * 100;
    computerHPBar.style.width = computerHPPercent + '%';
}

// バトルログに記録する関数
function recordBattle(playerChoice, computerChoice, result, damage) {
    battleLog.push({
        round: roundCount,
        playerChoice: choiceNames[playerChoice],
        computerChoice: choiceNames[computerChoice],
        result: result,
        damage: damage
    });
}

// ログを表示する関数
function displayLog() {
    battleLogContainer.innerHTML = '';

    // 最新のログを上に表示するため、逆順でループ
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
            `Round ${log.round}: ${log.playerChoice} vs ${log.computerChoice} - ${resultText}`;

        battleLogContainer.appendChild(logEntry);
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

// ゲーム終了判定関数
function checkGameOver() {
    if (playerHP <= 0 || computerHP <= 0) {
        disableButtons();

        if (playerHP <= 0) {
            resultDiv.textContent = `ゲームオーバー！${roundCount}ラウンドで敗北`;
            resultDiv.style.color = '#f44336';
            resultDiv.style.backgroundColor = '#ffebee';
        } else {
            resultDiv.textContent = `おめでとう！${roundCount}ラウンドで勝利！`;
            resultDiv.style.color = '#4CAF50';
            resultDiv.style.backgroundColor = '#e8f5e9';
        }
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
    playerHP = maxHP;
    computerHP = maxHP;
    battleLog = [];
    roundCount = 0;

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
