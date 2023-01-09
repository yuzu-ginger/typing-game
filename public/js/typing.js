var textLists1 = [
    ["Sun", "太陽"],
    ["Mercury", "水星"],
    ["Venus", "金星"],
    ["Earth", "地球"],
    ["Mars", "火星"],
    ["Jupiter", "木星"],
    ["Saturn", "土星"],
    ["Uranus", "天王星"],
    ["Neptune", "海王星"],
    ["Pluto", "冥王星"],
    ["planet", "惑星"],
    ["Moon", "月"],
    ["satellite", "衛星"],
    ["comet", "彗星"],
    ["asteroid", "小惑星"],
];

var textLists2 = [
    ["Aries", "おひつじ座"],
    ["Taurus", "おうし座"],
    ["Gemini", "ふたご座"],
    ["Cancer", "かに座"],
    ["Leo", "しし座"],
    ["Virgo", "おとめ座"],
    ["Libra", "てんびん座"],
    ["Scorpio", "さそり座"],
    ["Sagittarius", "いて座"],
    ["Capricorn", "やぎ座"],
    ["Aquarius", "みずがめ座"],
    ["Pisces", "うお座"],
    ["constellation", "星座"],
    ["Orion", "オリオン座"],
    ["Cassiopeia", "カシオペア座"],
    ["Big Dipper", "北斗七星"],
    ["Cygnus", "はくちょう座"]
]

var textLists3 = [
    ["galaxy", "銀河"],
    ["nebra", "星雲"],
    ["pleiades", "すばる"],
    ["andromeda galaxy", "アンドロメダ銀河"],
    ["southern ring nebula", "南のリング星雲"],
    ["crab nebula", "かに星雲"],
    ["orion nebula", "オリオン大星雲"],
    ["carina nebula", "カリーナ星雲"],
    ["horsehead nebula", "馬頭星雲"],
    ["cat's eye nebula", "キャッツアイ星雲"],
    ["butterfly nebula", "バタフライ星雲"]
]

var checkTexts = [];
// const gameId = gon.gameId;

switch (gameId) {
    case 1:
        var textLists = textLists1;
        break;
    case 2:
        var textLists = textLists2;
        break;
    case 3:
        var textLists = textLists3;
        break;
}

createText();

// タイピング用のテキスト
function createText() {
    // 文字列をランダムに取得する
    var rnd = Math.floor(Math.random() * textLists.length);
    // 前の文字列を削除してから次の文字列を表示する
    p.textContent = '';
    jp.textContent = '';
    jp.textContent = textLists[rnd][1];
    // 文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
    checkTexts = textLists[rnd][0].split('').map(function (value) {
        var span = document.createElement('span');
        span.textContent = value;
        p.appendChild(span);
        return span;
    });
}