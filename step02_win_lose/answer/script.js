// 手の選択肢
const choices = ['rock', 'scissors', 'paper'];

// 手の名前とアイコン
const choiceNames = {
    rock: 'グー ✊',
    scissors: 'チョキ ✌️',
    paper: 'パー ✋'
};

// 勝利条件
const winConditions = {
    rock: 'scissors',    // グーはチョキに勝つ
    scissors: 'paper',   // チョキはパーに勝つ
    paper: 'rock'        // パーはグーに勝つ
};

// ボタンの取得
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
const resultDiv = document.getElementById('result');

// コンピューターの手をランダムに決定
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// 勝敗を判定
function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if (winConditions[player] === computer) {
        return 'win';
    }
    return 'lose';
}

// ゲームを実行
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    // 前の結果のクラスを削除
    resultDiv.classList.remove('win', 'lose', 'draw');

    // 結果に応じたメッセージとクラスを追加
    let resultMessage = '';
    if (result === 'win') {
        resultMessage = 'あなたの勝ち！';
        resultDiv.classList.add('win');
    } else if (result === 'lose') {
        resultMessage = 'あなたの負け';
        resultDiv.classList.add('lose');
    } else {
        resultMessage = '引き分け';
        resultDiv.classList.add('draw');
    }

    resultDiv.innerHTML = `
        <p>あなた: ${choiceNames[playerChoice]}</p>
        <p>コンピューター: ${choiceNames[computerChoice]}</p>
        <p><strong>${resultMessage}</strong></p>
    `;
}

// ボタンにイベントリスナーを追加
rockBtn.addEventListener('click', () => playGame('rock'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
paperBtn.addEventListener('click', () => playGame('paper'));
