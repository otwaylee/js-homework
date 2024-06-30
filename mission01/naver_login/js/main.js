const form = document.querySelector('.login-form');
const emailInput = document.querySelector('#userEmail');
const pwInput = document.querySelector('#userPassword');

const emailError = document.querySelector('#userEmailError');
const pwError = document.querySelector('#userPasswordError');

const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};
/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

emailInput.addEventListener('input', () => {
  if (emailReg(emailInput.value)) {
    emailInput.classList.remove('is-invalid');
    emailError.style.display = 'none';
  } else {
    emailInput.classList.add('is-invalid');
    emailError.style.display = 'block';
  }
});

pwInput.addEventListener('input', () => {
  if (pwReg(pwInput.value)) {
    pwInput.classList.remove('is-invalid');
    pwError.style.display = 'none';
  } else {
    pwInput.classList.add('is-invalid');
    pwError.style.display = 'block';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailValid = emailReg(emailInput.value);
  const pwValid = pwReg(pwInput.value);

  if (!emailValid) {
    emailInput.classList.add('is-invalid');
    emailError.style.display = 'block';
  } else {
    emailInput.classList.remove('is-valid');
    emailError.style.display = 'none';
  }

  if (!pwValid) {
    pwInput.classList.add('is-invalid');
    pwError.style.display = 'block'
  } else {
    pwInput.classList.remove('is-invalid');
    pwError.style.display = 'none'
  }

  if (emailValid && pwValid) {
    if (emailInput.value === user.id && pwInput.value === user.pw) {
      window.location.href = 'welcome.html';
    } else {
      alert('아이디 혹은 비밀번호가 잘못되었습니다.');
    }
  }
});




// 답안 예시 
// const $emailInput = document.querySelector('#userEmail');
// const $passwordInput = document.querySelector('#userPassword');
// const $loginBtn = document.querySelector('.btn-login');

// let emailCheckPass = false;
// let pwCheckPass = false;

// function handleEmailCheck() {
//   const value = this.value;

//   if (emailReg(value)) {
//     this.classList.remove('is--invalid');
//     emailCheckPass = true;
//   } else {
//     this.classList.add('is--invalid');
//     emailCheckPass = false;
//   }
// }

// function handlePasswordCheck() {
//   const value = this.value;

//   if (pwReg(value)) {
//     this.classList.remove('is--invalid');
//     pwCheckPass = true;
//   } else {
//     this.classList.add('is--invalid');
//     pwCheckPass = false;
//   }
// }

// function handleLogin(e) {
//   e.preventDefault();

//   if (emailCheckPass && pwCheckPass) {
//     try {
//       const id = $emailInput.value;
//       const pw = $passwordInput.value;

//       const getUserId = user.id;
//       const getUserPw = user.pw;

//       if (id === getUserId && pw === getUserPw) {
//         location.href = 'welcome.html';
//       }

//     } catch {

//     }
//   }
// }

// $emailInput.addEventListener('input', handleEmailCheck);
// $passwordInput.addEventListener('input', handlePasswordCheck);
// $loginBtn.addEventListener('click', handleLogin);