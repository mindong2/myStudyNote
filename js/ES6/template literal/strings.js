const sayHi = (aName = `anon`) => "hello" + aName + "good";
console.log(sayHi());

// string에서 "" 사용을 X 

const sayHi = (aName = `anon`) => `hello ${aName} good`;
console.log(sayHi());

// 둘의 출력값은 같다.

// 응용 ( ${}안에 function 넣기 )

const add = (a, b, c ) => a + b + c;

console.log(`add is ${add(21690,8620,21690)}.`);
// 이런식으로도 가능하다. 출력값 -> add is 52000.