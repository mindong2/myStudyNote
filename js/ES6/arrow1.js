// arrow는 일반 함수를 보기 쉽게 만들어준다.//
const fun = (arg) => console.log(`hello! ${arg}!`);
/* const fun = function(){
    console.log(`hello!`);
}*/

fun(`dongmin`); 
////
const names = [`dongmin`,`nico`,`lynn`];

const hearts = names.map(function(item){
    return item + `❤`;
});

console.log(hearts);

/*map은 각각의 아이템마다 함수를 호출후 
그 element들로 새로운 array를 생성*/

////

const names = [`dongmin`,`nico`,`lynn`];

function addHeart(item){
    return item + `❤`;
}

const hearts = names.map(addHeart);

console.log(hearts);

////

const names = [`dongmin`,`nico`,`lynn`];

const hearts = names.map(item => item + `❤`);
//한줄안에 다 나오게 하면 return된다 -> implicit return. 
//그렇지 않으면 {}추가.
console.log(hearts);

//셋은 다 같은 출력값.