// ゲームの状態を管理する変数
let playerHP = 100;
let computerHP = 100;
const maxHP = 100;

// 各手のダメージ値
const damageValues = {
    rock: 10,      // グー: 10ダメージ
    scissors: 20,  // チョキ: 20ダメージ
    paper: 30      // パー: 30ダメージ
};

// HTML要素の取得
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
const resultDiv = document.getElementById('result');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const playerHPText = document.getElementById('player-hp-text');
const computerHPText = document.getElementById('computer-hp-text');
const playerHPBar = document.getElementById('player-hp-bar');
const computerHPBar = document.getElementById('computer-hp-bar');

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

// メインのゲーム関数
function playGame(playerChoice) {
    // コンピューターの手をランダムに選択
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // 選択した手を表示
    playerChoiceDisplay.textContent = choiceNames[playerChoice];
    computerChoiceDisplay.textContent = choiceNames[computerChoice];

    // 勝敗判定
    const result = determineWinner(playerChoice, computerChoice);

    // ダメージ処理（ダメージ量を返す）
    const damage = applyDamage(result, playerChoice, computerChoice);

    // HPバーの更新
    updateHPBars();

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

    // プレイヤーが勝つパターン
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'player';
    }

    return 'computer';
}

// ダメージ処理関数（与えたダメージ量を返す）
function applyDamage(result, playerChoice, computerChoice) {
    let damage = 0;

    if (result === 'player') {
        // プレイヤーが勝った場合、プレイヤーの手に応じたダメージを与える
        damage = damageValues[playerChoice];
        computerHP -= damage;
        computerHP = Math.max(0, computerHP);
    } else if (result === 'computer') {
        // コンピューターが勝った場合、コンピューターの手に応じたダメージを受ける
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
    const playerHPPercent = (playerHP / maxHP) * 100;
    playerHPBar.style.width = playerHPPercent + '%';

    // コンピューターのHP更新
    computerHPText.textContent = computerHP;
    const computerHPPercent = (computerHP / maxHP) * 100;
    computerHPBar.style.width = computerHPPercent + '%';
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
        // ボタンを無効化
        disableButtons();

        // 最終結果を表示
        if (playerHP <= 0) {
            resultDiv.textContent = 'ゲームオーバー！あなたの負けです';
            resultDiv.style.color = '#f44336';
            resultDiv.style.backgroundColor = '#ffebee';
        } else {
            resultDiv.textContent = 'おめでとう！あなたの勝ちです！';
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
