const headLine = document.querySelector('.headline');
const female = document.querySelector('.female');
const headline2 = document.querySelector('.headline2');
const subHead = document.querySelector('.subHead');
const learnMore = document.querySelector('.learnMore');
const logo = document.querySelector('.logo');
const replay = document.querySelector('.replay-btn');

const animation = () => {
  headLine.style.animation = 'headline-fromLeft 1s forwards';
  female.style.animation = 'female 1s ease-in-out forwards';

  setTimeout(() => {
    female.style.animation = 'female-vanish 1s ease-out forwards';
  }, 2000);

  setTimeout(() => {
    headline2.style.animation = 'headline2-fromLeft 1s ease-in-out forwards';
    headline2.style.display = 'block';
  }, 2500);

  setTimeout(() => {
    headLine.style.animation = 'headline-fromLeft-vanish 1s forwards';
    subHead.style.animation = 'subHead-show 1s forwards';
    subHead.style.display = 'block';
  }, 3500);

  setTimeout(() => {
    learnMore.style.animation = 'learnMore-show 1s forwards';
    learnMore.style.display = 'block';
  }, 4000);

  setTimeout(() => {
    logo.style.animation = 'logo-out 1s forwards';
    logo.style.display = 'block';
  }, 5000);

  setTimeout(() => {
    replay.style.animation = 'replay 1s forwards';
    replay.style.display = 'block';
    document.getElementById('playBtn').innerHTML =
      '<i class="fa-solid fa-play" onclick="play()"></i>';
  }, 5500);
};

const play = () => {
  document.getElementById('playBtn').innerHTML =
    '<i class="fa-solid fa-stop" onclick="stop()"></i>';
  headline2.style.display = 'none';
  subHead.style.display = 'none';
  learnMore.style.display = 'none';
  logo.style.display = 'none';
  replay.style.display = 'none';

  animation();
};

const repeat = () => {
  headline2.style.display = 'none';
  subHead.style.display = 'none';
  learnMore.style.display = 'none';
  logo.style.display = 'none';
  replay.style.display = 'none';

  play();
};

const stop = () => {
  document.getElementById('playBtn').innerHTML =
    '<i class="fa-solid fa-play" onclick="play()"></i>';
  headline2.style.display = 'none';
  subHead.style.display = 'none';
  learnMore.style.display = 'none';
  logo.style.display = 'none';
  replay.style.display = 'none';
};

window.addEventListener('load', animation);