// 手の選択肢
const choices = ['rock', 'scissors', 'paper'];

// 手の名前とアイコン
const choiceNames = {
    rock: 'グー ✊',
    scissors: 'チョキ ✌️',
    paper: 'パー ✋'
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

// ゲームを実行
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    resultDiv.innerHTML = `
        <p>あなた: ${choiceNames[playerChoice]}</p>
        <p>コンピューター: ${choiceNames[computerChoice]}</p>
    `;
}

// ボタンにイベントリスナーを追加
rockBtn.addEventListener('click', () => playGame('rock'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
paperBtn.addEventListener('click', () => playGame('paper'));
