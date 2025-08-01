var icon = document.querySelector("#btn-dark");
var horse = document.querySelector("#horse")
icon.onclick = () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "image/sun.png";
        horse.src = "image/horsed.png";
    } else {
        icon.src = "image/moon.png";
        horse.src = "image/horsel.png";
    }
};


var horse = document.querySelector("#horse");
console.log(document.querySelectorAll('#horse'));

const btn2 = document.querySelector('.btn-menu');
const nav  = document.querySelector('.main-nav');

btn2.addEventListener('click', () => {
    nav.classList.toggle('open-menu');

    if (btn2.innerHTML === 'Menu') {
        btn2.innerHTML = 'Close';
    } else {
        btn2.innerHTML = 'Menu';
    }
});

const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaWhite = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading-logo');

window.addEventListener('load', () => {
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );

    loadingAreaWhite.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    );

    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8
            },
            {
                opacity: 0,
                offset: 1
            },
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});

//監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ['blur(.4rem)' ,'blur(0)'],
                    translate: ['0 4rem', 0],
                },
                {
                    duration: 2000,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
           obs.unobserve(entry.target);
        }
    });
};

//監視設定
const fadeObserver = new IntersectionObserver(animateFade);

//　.fadeinを監視するよう指示
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElements) => {
    fadeObserver.observe(fadeElements);
});

new LuminousGallery(document.querySelectorAll(".grid-gallery1"));

new LuminousGallery(document.querySelectorAll(".grid-gallery2"));

AOS.init();

var id = ['a','b','c','d']; //指定するidを全て配列で渡す
var tx = [];
var txCount = [];
var txSp = 70; // テキストの表示速度
var dly = 0; // 次の文章までの待ち時間
var count = 0;

window.onload = function(){
  kamikakushi();
  countSet();
  itimozi()
}

function countSet(){ // 文字数カウントの初期設定
  for(n=0;n<id.length;n++){
    txCount[n] = 0;
  }
}


function kamikakushi(){ // 要素を取得して非表示（opacity:0;）にする
  for(i=0;i<id.length;i++){
    id[i] = document.getElementById(id[i]);
    tx[i] = id[i].firstChild.nodeValue; // 初期の文字列
    id[i].innerHTML = '';
  }
}

function itimozi(){ //　一文字ずつ表示
    id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
  if(tx[count].length != txCount[count]){ // Count が初期の文字列の文字数と同じになるまでループ
    setTimeout("itimozi()",txSp); // 次の文字へ進む
  }else{
  id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
    count++; // 次の段落に進む為のカウントアップ
    if(count != id.length){ // id数が最後なら終了
    setTimeout("itimozi()",dly); // 次の段落へ進む
    }
  }
}



