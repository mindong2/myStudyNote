//const firends = [`min` ,`dong`, `nico`,`lynn`];

const friends = Array.of(`min`,`dong`,`nico`,`lynn`);

console.log(friends); //element들을 Array로 만들어줌.

// Array.from

let btn = document.querySelectorAll(`button`);
console.log(btn); //nodeList -> Array가 아닌 Array-like object
//그래도 Array처럼 forEach작동함.

const Cbtn = document.getElementsByClassName(`btn`);
console.log(Cbtn); // HTMLCollection ->Array-like object

//ArrayLike들을 Array로 만들어주기 위한 메소드가 Array.From
//forEach작동 X 

btn.forEach(buttons => buttons.addEventListener(`click`,()=> console.log(`i ve a clicked`)));
//Cbtn는 Array-like object ->HTMLCollection 이기 때문에 적용X 적용하려면 Array.from

const ar = Array.from(Cbtn);
ar.forEach(buttons => buttons.addEventListener(`click`,()=> console.log(`i ve a clicked`)));

//Array.From(Cbtn)으로 ar을 Array로 만들어줘서 잘 작동한다.