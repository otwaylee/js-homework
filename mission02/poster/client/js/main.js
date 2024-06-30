/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
import data from './data.js';

const container = document.querySelector('.container')
const visual = document.querySelector('.visual img')
const nickName = document.querySelector('.nickName')
const nav = document.querySelector('.nav');
const audio = document.querySelector('#audio')

function handleClick(e) {
  e.preventDefault();

  const button = e.target.closest('button');
    if (!button) return;

    const li = button.parentElement;
    const index = li.dataset.index;
    if (!index) return;

    const selectedData = data[index - 1];
    setBgColor(document.body, selectedData.color);
    setImage(visual, selectedData);
    setNameText(nickName, selectedData);
    setAudio(audio, selectedData.name.toLowerCase());


    nav.querySelectorAll('li').forEach(function(li) {
      li.classList.remove('is-active');
    });
    li.classList.add('is-active');
  
}

// 배경 색상 변경 함수
function setBgColor(element, colors) {
  const [colorA, colorB] = colors;
  element.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

// 이미지 변경 함수
function setImage(target, data) {
  target.src = `./assets/${data.name.toLowerCase()}.jpeg`;
  target.alt = data.alt;
}

// 이름 텍스트 변경 함수
function setNameText(target, data) {
  target.textContent = data.name;
}

// 오디오 변경 및 재생 함수
function setAudio(target, name) {
  target.src = `./assets/audio/${name}.m4a`;
  target.play();
}



nav.addEventListener('click', handleClick);

