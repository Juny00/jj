const x = 1
// x = 2 //error남
let y = 2

//여러종류의 변수선언
const num = 1; //숫자를 받음
const str = "Smith" //문자를 받음
const bool = ture; //불린(참또는 거짓)
const 숫자배열 = [1, 2, 3, 4]; //배열
const 문자배열 = [a, b, c, d];
const 함수 = function () {};
const 객체 = {user : "Smith", age : 28};
const html요소1 = document.querySelector("#demo");
const html요소2 = document.querySelector(".style");
const html요소3 = document.querySelector("div");

// const num = 1;
// const str = "Jacob";
// const bool = false;
// const 숫자배열 = [1,2,2,3,4];
// const letter = [a, b, c, f];
// const func = function () {};
// const 객체 = 

let num2 = num * 10; //num2 = 10
let str2 = str + "바보"; //str2 ="Smith바보"
let bool2 = !bool; // bool2 = false  뭘 붙이는 순간 거짓이되고 참이됨
let 숫자배열2 = 숫자배열.slice(3); // 숫자배열2 = 4 slice 는 리턴이있음 push 리턴이있나?
let 문자배열2 = 문자배열.splice(1,2); // 문자배열 = ["a"] 문자배열2 = ["b, c"]
//let 객체2 = 객제.age
html요소1.innerHTML = "DEMO";
html요소2.innerHTML = "STYLE";
html요소3.innerHTML = "Text";


const num함수 = function () {
    return num * 10;
};
let num3 = num함수(num); //num3 = 10

const str함수 = function (str) {
    return str + "바보";
};
let str3 = str함수(str); // str3 = "Smith바보"

const bool함수 = function (bool) {
    return !bool;
};
let bool3 = bool함수(bool); //bool3 = false

const 숫자배열함수 = function (숫자배열, i) {
    return 숫자배열.slice(i); // 파라미터를 늘려서 i 값을 주면 두개의 파라미터가 필요
};
let 숫자배열3 = 숫자배열함수(숫자배열, 3); //숫자배열3=[4]

const 문자배열함수 = function (문자배열, x, y) {
    return 문자배열.splice(x, y);
};
let 문자배열3 = 문자배열함수(문자배열, 1, 2); //문자배열 = ["a"] 문자배열3 = ["b,c"]

const divList = document.querySelectorAll("div");
const text배열 = ["text, DEMO, STYLE"];

const html함수 = function () {
    for(let i=0; i<divList.length; i++){
        divList[i].innerHTML =text배열[i]; //innerHTML 까먹지말기


        // if (i === 0) {
        //     divList[i].innerHTML = "Text";
        // }
        // else if (i === 1) {
        //     divList[i]innerHTML = "DEMO";
        // }
        // if (i === 2) {
        //     divList[i]innerHTML = "Style";
        // }
        //else if 사용

        // divList[0] = "Text"
        // divList[1] = "DEMO"
        // divList[2] = "STYLE"
    }
};
html함수(divList, text배열); // if else 가아닌 수정되었기때문에 이렇게 바꿔줌 
//html함수(divList);
