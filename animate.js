const headline1 = document.querySelector('.headline1');
const female1 = document.querySelector('.female-img');
const headline2 = document.querySelector('.headline2');
const subHeadline = document.querySelector('.subHeadline');
const learnMore_btn = document.querySelector('.learnMore-btn');
const logo = document.querySelector('.logo-container');
const replay = document.querySelector('.replay-btn');




const animation = ()=>{

    headline1.style = 'animation: moveRight 1s forward;';
    female1.style = 'animation: femaleImg 1s move in & out forward;';

    setTimeout(()=>{
        female1.style = 'animation: femaleImg-remove 1s in & out forward;';
    },2000);

    setTimeout(()=>{
        headline2.style = 'animation: moveRight .5s in & out forward; display:block';
    },2500);

    setTimeout(()=>{
        headline1.style = 'animation: moveRight-remove .5s forward;';
        subHeadline.style = 'animation: subHeadline-pop 1s forward; display block;';
    },3000);

    setTimeout(()=>{
        learnMore_btn.style = 'animation: learnMore 1s forward; display block;';
    },4000);

    setTimeout(()=>{
        logo.style = 'animation: logo-pop .5s forward; display block;';
    },5000);

    setTimeout(()=>{
        replay.style = 'animation: replay 1s forward; display block;';
        document.getElementById('replayBtn').innerHTML = '<i class="fa-solid fa-play" onclick="play()"></i>';
    },5500);
}

const play=()=>{
    document.getElementById('replayBtn').innerHTML = '<i class="fa-solid fa-stop" onclick="stop()"></i>';
    headline2.style = 'display:none;';
    subHeadline.style = 'display:none;';
    learnMore_btn.style = 'display:none;';
    logo.style = 'display:none;';
    replay.style = 'display:none;';

    animation();
};

const repeat=()=>{
    headline2.style = 'display:none;';
    subHeadline.style = 'display:none;';
    learnMore_btn.style = 'display:none;';
    logo.style = 'display:none;';
    replay.style = 'display:none;';

    play();
}

const stop=()=>{
    document.getElementById('replayBtn').innerHTML = '<i class="fa-solid fa-play" onclick="play()"></i>';

    headline2.style = 'display:none;';
    subHeadLine.style = 'display:none;';
    learMore_btn.style = 'display:none;';
    logo.style = 'display:none;';
    replay.style = 'display:none;';
}
