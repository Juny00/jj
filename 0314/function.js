//함수의 기본형 
//함수의 선언
const func1 = function() {
    console.log("hello");
};
// 호출이이뤄저여함 

func1();
//호출 함수의 호출임 호출이 되어야 내부코드가 실행됨

const func2 = function(x) {
    //함수선언문의  () 안의 값(x)을 매개변수(Parameter)라고 함
    x = x * 2;
    return x;
//곱하기 2 해주는 함수라고 생각해보고
};

let = value2 = 2;
//함수호출시 함수의 () 안에 넣어주는 값을 인수(argument)라고함
value2 = func2(value2);
//value2를 2해서 곱하기 넣어달란것 벨류2는 어딘가에 만들어져있음 
console.log(value2);

let value3 = 3;
value3 = func2(value3);
console.log(value3);



//greet라는 함수선언
const greet = function(userName){
    console.log("hello" + userName);
};
//함수호출
greet("junma");

const greet2 = function (userName) {
    let returnvalue = "Hello" + userName;
    return returnvalue;
}
const greet2Return = greet2("Smith");
console.log(greet2Return);

//return형이 확장성이 더큼

//함수는 파라미터 여러개 받을수있음 곱하기 함수
const multiply = function(x, y){
    return x*y;
}
const value4 = multiply(4, 5);
console.log(value4);
console.log(multiply(4, 5));

//플러스함수
//console.log(plus(2, 8));
const plus = function(x, y) {
    return x+y;
    //값을 입력하면 리턴-돌려주기를 해야작동함
};
const value5 = plus(2, 8);
console.log(value5);
console.log(plus(2, 8));
//리턴을 쓰는 함수와 리턴을 안쓰는 함수 차이 greet는 그냥 변수없이 호출 greet줌 return함수는 value를 줌

//3개이상의 매개변수
const average = function(w, x, y, z) {
    const sum = w + x + y + z;
    return sum / 4;
    //이건 sum 에 / 분모값이들어간것 
};
const value6 = average (2, 3, 4, 5);
console.log(value6);
//위아래 두개는 각각의 방식
console.log(average(2, 4, 6, 8));

//평균구하기 함수 배열버젼
const average2 = function (x) {
    let sum = 0;
    for (let i=0; i<x.length; i++){
        sum = sum + x[i];
    }
    return sum / x.length; // 평균값을 구하기위해 총합을 배열의 길이로 나눈것
};
console.log(average2([2,3,4,5]));
//arr어레이를 써도됨 cost arr = [2, 3, 4, 5]; console.log(average2(arr));


const display=ahahahah
//기존방법
const display = function(display) {
    console.log(display)
};
//함수선언의 다른방법
//function display(Display) {
//   console.log("Display");
//}
display(display);

const greet3 = function (userName) {
    let returnvalue = "hello" + userName
    return returnvalue;
};
const userName = prompt("이름을 적어주세요 : ");
const greet3Return = greet3(userName);
console.log(greet3Return);