// 1. 객체에서 특정 키의 값을 안전하게 가져오는 함수 
function getValueAtObject(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)){
    return obj[key];
  }else {
    throw new Error ('해당 키가 존재하지 않습니다.');
  }
} 

//표현식- 화살표함수
const getValueAtObject = (obj, key) => {
  if (Object.prototype.hasOwnProperty.call(obj, key)){
    return obj[key];
  }else {
    throw new Error ('해당 키가 존재하지 않습니다.');
  }
}
// ?질문 -this 를 사용하지 않기 때문에 this 바인딩과 무관하므로 화살표함수로 변환이 가능한가? 


// 설명: obj 객체에서 call 메서드를 활용해 Object.prototype에 정의된 
// hasOwnProperty를 호출하여 빌려쓰므로 obj가 hasOwnProperty를 가지지 않는 경우더라도 
// 키 존재 여부를 확인할 수 있음 

const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}
// console.log(getValueAtObject(user, 'id')); // asd@naver.com
// console.log(getValueAtObject(user, 'age')); //해당 키가 존재하지 않습니다. 

/*------------------------------------------*/

// 2. 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수 
function getNumberAtArray(arr, index) {
  if(Array.isArray(arr)){
    if(index >= 0 && index < arr.length){
      return arr[index];
    }else{
      throw new Error('Error!')
    }
  } else {
    throw new Error ('Error!');
  }
}

// 표현식 - 화살표함수
const getNumberAtArray = (arr, index) => {
  if(Array.isArray(arr)){
    if(index >= 0 && index < arr.length){
      return arr[index];
    }else{
      throw new Error('Error!')
    }
  } else {
    throw new Error ('Error!');
  }
}


// 설명: 배열의 인덱스는 0부터 시작해야하고, 인수 받은 대상이 배열이 아닐 경우 에러를 생성해야하기에 
// 논리곱 연산자를 활용해 두 조건을 모두 만족시킬때만 if문 안에 해당 인덱스의 값을 반환하는 코드를 
// 실행하도록 함. 

// 다른 방식
const getNumberAtArray = (arr, index) => {
  if(!Array.isArray(arr)) throw new Error('Error');
  if(index >= arr.length || index < 0) throw new Error('Error!');
  return arr[index];
}

const numbers = [10, 20, 30, 40, 50];

// console.log(getNumberAtArray(numbers, 2)); // 30
// console.log(getNumberAtArray(numbers, 4)); // 50
// console.log(getNumberAtArray(numbers, 5)); // Error!
// console.log(getNumberAtArray(numbers, -1)); // Error!