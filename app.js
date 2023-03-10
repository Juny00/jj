//변수 선언 3가지

//var
var value = 1;
value = 2;
value = 10;
value = 'smith';
value = 5;
value = value + 1;
var value = 1000;
console.log(value);
//var는 많이안쓰는걸 권장

//let
//let a = 1; //let a =2 //이중선언 에러
let counter = 1; //let a =2 //이중선언 에러
counter = counter + 1; //let a =2 //이중선언 에러
//a = 2;
console.log(counter);

//const 상수(항상 유지되는수) 줄임말
const url= www.naver.com; //이중선언 에러
url = 2; //상수는 값을 바꾸면 안됨
console.log(url);