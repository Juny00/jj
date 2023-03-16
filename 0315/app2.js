//const colors  //["red, blue, green, yellow, brown, grey, black"]; //대쉬해제해야함 
for (let i=0; i<colors.length; i++) {
    console.log(colors[i]);
} //배열 7ㄱ

const colorSlice = colors.slice(3,6); //배열을 잘라 3-6 까지 담김
console.log(colorSlice); //yellow brown grey

const x = colors.splice(3,1,pink); //(3번째 자리, 하나, pink 추가)
console.log(colors); //["red", "blue", "green", "pink", "brown", "grey", "black"]

const colorSplice = color.splice(0,1); //0번째 1하나
console.log(colorSplice); //["red"]