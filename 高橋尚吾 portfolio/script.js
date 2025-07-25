var icon = document.querySelector("#btn-dark");
icon.onclick = () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "image/sun.png";
    } else {
        icon.src = "image/moon.png";
    }
};

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
const loadingText = document.querySelector('#loading p');

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

