// 結果を表示するエリアを取得
const resultDiv = document.querySelector('#result');

// グーボタンを取得してクリックイベントを設定
const rockButton = document.querySelector('#btn-rock');
rockButton.addEventListener('click', function() {
    console.log('グー が選ばれました');  // コンソールに出力
    resultDiv.textContent = 'あなたが選んだ手: グー ✊';
});

// チョキボタンを取得してクリックイベントを設定
const scissorsButton = document.querySelector('#btn-scissors');
scissorsButton.addEventListener('click', function() {
    console.log('チョキ が選ばれました');  // コンソールに出力
    resultDiv.textContent = 'あなたが選んだ手: チョキ ✌️';
});

// パーボタンを取得してクリックイベントを設定
const paperButton = document.querySelector('#btn-paper');
paperButton.addEventListener('click', function() {
    console.log('パー が選ばれました');  // コンソールに出力
    resultDiv.textContent = 'あなたが選んだ手: パー ✋';
});
