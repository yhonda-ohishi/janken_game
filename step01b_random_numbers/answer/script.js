// 結果を表示するエリアを取得
const resultDiv = document.querySelector('#result');

// ランダムボタンを取得してクリックイベントを設定
const randomButton = document.querySelector('#btn-random');

randomButton.addEventListener('click', function() {
    // ステップ1: Math.random() で 0以上1未満の小数を生成
    // ステップ2: 3を掛けて 0以上3未満の小数にする
    // ステップ3: Math.floor() で小数点以下を切り捨てて 0, 1, 2 のいずれかにする
    const randomNumber = Math.floor(Math.random() * 3);

    // 結果を表示
    resultDiv.textContent = `コンピューターが選んだ数字: ${randomNumber}`;
});
