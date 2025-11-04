// 手の選択肢を配列で管理
const choices = ['rock', 'scissors', 'paper'];

// 手の表示用オブジェクト
const handDisplay = {
    rock: 'グー ✊',
    scissors: 'チョキ ✌️',
    paper: 'パー ✋'
};

// 勝利条件をオブジェクトで管理
const winConditions = {
    rock: 'scissors',    // グーはチョキに勝つ
    scissors: 'paper',   // チョキはパーに勝つ
    paper: 'rock'        // パーはグーに勝つ
};

// 要素を取得
const resultDiv = document.querySelector('#result');
const rockButton = document.querySelector('#btn-rock');
const scissorsButton = document.querySelector('#btn-scissors');
const paperButton = document.querySelector('#btn-paper');

// 勝敗を判定する関数
function judgeWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (winConditions[player] === computer) {
        return 'win';
    } else {
        return 'lose';
    }
}

// ゲームをプレイする関数
function playGame(playerChoice) {
    // コンピューターの手をランダムに選ぶ
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    // 勝敗判定
    const result = judgeWinner(playerChoice, computerChoice);
    console.log('勝敗:', result);

    // 古いクラスを全て削除
    resultDiv.classList.remove('win', 'lose', 'draw');

    // 結果に応じてクラスを追加
    resultDiv.classList.add(result);

    // 結果を日本語で表示
    let resultText = '';
    if (result === 'win') {
        resultText = '結果: あなたの勝ち！';
    } else if (result === 'lose') {
        resultText = '結果: あなたの負け';
    } else {
        resultText = '結果: 引き分け';
    }

    resultDiv.textContent =
        `あなた: ${handDisplay[playerChoice]}\n` +
        `コンピューター: ${handDisplay[computerChoice]}\n` +
        resultText;
}

// ボタンにイベントリスナーを追加
rockButton.addEventListener('click', function() {
    playGame('rock');
});

scissorsButton.addEventListener('click', function() {
    playGame('scissors');
});

paperButton.addEventListener('click', function() {
    playGame('paper');
});
