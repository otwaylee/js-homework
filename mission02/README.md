# MISSION 02 - elemental poster
[📌main.js 코드 보러가기](https://github.com/otwaylee/js-homework/blob/main/mission02/poster/client/js/main.js)
이벤트 위임을 활용한 포스터 페이지 만들기
----

## 과제 수행 과정
### HTML 보완
- elemental favicon 추가 
- audio 태그 추가 
- data.js를 export하고 import 해오기 위해 `type = "module"` 지정
### JS 코드 
- `document.querySelector`를 활용해 각 요소 선택 
<br>

**handleClick 함수**
- 내비게이션 매뉴의 클릭 이벤트를 처리, 이벤트 위임을 활용함
- 클릭된 버튼의 부모 요소인 li 태그에서 데이터 인덱스를 가져옴 
- 해당 인덱스 기반 데이터 선택하여 배경 색상, 이미지, 텍스트, 오디오 요소 업데이트 
<br>

**setBgColor 함수** 
- *주어진 코드 활용* -> 배경을 그라디언트 색상으로 변경
```js
function setImage(target, data) {
  target.src = `./assets/${data.name.toLowerCase()}.jpeg`;
  target.alt = data.alt;
}
```
<br>

**setNameText 함수**
- 텍스트 내용 업데이트 
```js
function setNameText(target, data) {
  target.textContent = data.name;
}
```
<br>

**setAudio 함수** 
- *구글링해서 활용* -> 오디오 소스를 업데이트하고 재생
```js
function setAudio(target, name) {
  target.src = `./assets/audio/${name}.m4a`;
  target.play();
}
```
----
## 느낀 점
- 지난 과제까지만 해도 함수를 분리해서 작성하는 것의 어려움이 있었는데, 이번 실습을 통해 조금 극복할 수 있었던 것 같다. 
- 배웠던 내용들을 응용하고자 이전 코드들을 다시 살펴보면서, 어렵게만 느껴졌던 이벤트의 작동 방식을 이해할 수 있었다. 