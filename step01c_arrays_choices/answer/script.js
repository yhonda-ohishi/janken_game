// 手の種類を配列で管理
const choices = ['rock', 'scissors', 'paper'];

// 手の日本語表示とアイコン
const handDisplay = {
    rock: 'グー ✊',
    scissors: 'チョキ ✌️',
    paper: 'パー ✋'
};

// 結果を表示するエリアを取得
const resultDiv = document.querySelector('#result');

// コンピューターの手をランダムに選ぶ関数
function getComputerChoice() {
    // 0, 1, 2 のランダムな数字を生成
    const randomIndex = Math.floor(Math.random() * 3);

    // 配列からその数字の要素を取り出す
    return choices[randomIndex];
}

// じゃんけんをする関数
function playRound(playerChoice) {
    // コンピューターの手を決定
    const computerChoice = getComputerChoice();

    // 結果を表示
    resultDiv.innerHTML = `
        <div>あなた: ${handDisplay[playerChoice]}</div>
        <div>コンピューター: ${handDisplay[computerChoice]}</div>
    `;
}

// グーボタン
document.querySelector('#btn-rock').addEventListener('click', function() {
    playRound('rock');
});

// チョキボタン
document.querySelector('#btn-scissors').addEventListener('click', function() {
    playRound('scissors');
});

// パーボタン
document.querySelector('#btn-paper').addEventListener('click', function() {
    playRound('paper');
});
