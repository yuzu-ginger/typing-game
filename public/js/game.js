var p = document.getElementById('text');
var jp = document.getElementById('text-jp');
// タイピングする文字列をここで用意しておく

const gameId = gon.gameId;

// タイマーと正解数
const timer = document.getElementById('timer');
let TIME = 30;    // ゲーム時間
const seikai = document.getElementById('seikai');

const form = document.getElementById('form');
const formScore = document.getElementById('rank')
const highScore = gon.highScore;

let START = 4;

function start() {
    const startTimer = setInterval(function () {
        timer.textContent = --START;
        if (START <= 0) {
            timer.textContent = TIME + ' seconds left';
            // ゲームスタート
            game();
            clearInterval(startTimer);
        }
    }, 1000);
}

window.document.onkeydown = function (event) {
    if (event.key === 'Enter') {
        start();
    }
}


function game() {
    const scoreLabel = document.getElementById("score");
    const missLabel = document.getElementById("miss");

    let score = 0;
    let miss = 0;

    let state = true;

    // タイマー
    const countdown = setInterval(function () {
        timer.textContent = --TIME + ' seconds left';
        if (TIME <= 0) {
            timer.textContent = 'Time up!'
            finish();
        }
    }, 1000);


    // キーボードからの入力は「e.key」に格納されている
    window.addEventListener('keydown', e => {
        if (e.key === checkTexts[0].textContent) {
            if (!state) return;
            console.log("score");
            checkTexts[0].className = 'add-blue';

            score++;
            scoreLabel.textContent = score;
            // 0番目の配列要素を削除して、次の1文字を比較対象にする
            checkTexts.shift();
        } else {
            if (!state) return;
            var bool = event.shiftKey;
            if (bool == true) {

            } else if (bool == false) {
                miss++;
                missLabel.textContent = miss;
                checkTexts[0].className = 'miss-red';
            }
        }
        // 配列要素が空っぽになったら次の問題を出す
        if (!checkTexts.length) createText();
    });


    function finish() {
        clearInterval(countdown);

        // フォームを作成(ランキング登録用)
        if (score > highScore) {
            var btn = document.createElement('input');
            btn.setAttribute("id", "btn");
            form.appendChild(btn);
            btn.type = 'submit';
            btn.value = 'Register for Ranking!!';
            formScore.value = score;
        }
        
        seikai.textContent = 'Your score is ' + score + '!';
        var link = document.getElementById('again');
        var again = document.createElement('a');
        link.appendChild(again);
        again.href = `/game/${gameId}`;
        again.textContent = 'Click here to try again!';
        state = false;
    }   
}
