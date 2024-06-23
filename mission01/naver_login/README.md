# MISSION 01 - 네이버 로그인 페이지 구현
[📌main.js 코드 보러가기](https://github.com/otwaylee/js-homework/blob/main/mission01/naver_login/js/main.js)
로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.
----
## 과제 기능 
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
--------------------
## 과제 수행 과정
<img width="500" alt="image" src="https://github.com/otwaylee/js-homework/assets/126848934/6e062da6-2543-4a46-9023-dec8e5e68d9c">

- `document.querySelector`를 활용해 이메일/ 비밀번호 입력필드 및 에러메세지 요소들을 선택함 <br>
- email 과 pw 입력필드에 input 이벤트 리스너를 사용해 사용자가 필드에 값을 입력할 때마다 주어진 email/ pw 정규표현식 함수가 호출되어 유효성을 검사하고 'is-invalid'를 클래스를 추가/제거 하거나 오류 메세지를 표시하도록 함 
*(style.display는 자바스크립트에서 HTML요소의 CSS display 속성을 설정 / 가져올 때 사용하는 프로퍼티)*<br>
- 로그인 버튼을 클릭시 조건처리를 수행하기 위해 form 요소에 submit 이벤트 리스너를 활용함 
- 폼의 기본 제출 동작을 막기 위해서 `e.preventDefault()`를 활용
- 입력된 email과 pw의 유효성 검사를 진행하고 위와 동일한 에러메세지 스타일 적용 
- 입력된 정보와 user의 정보가 일치할 시, `welcome.html`로 이동 / 일치 하지 않다면 '아이디 혹은 비밀번호가 잘못되었습니다' 메세지 표시 









