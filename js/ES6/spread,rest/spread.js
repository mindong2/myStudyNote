// Array에서의 spread 변수앞에 ... 을 붙히자.

const arr1 = [`a`,`b`,`c`];
const arr2 = [`d`,`e`,`f`];

const newArr = [...arr1,...arr2,`g`];
console.log(newArr);
console.log(...arr1);
//["a", "b", "c", "d", "e", "f", "g"]; 
//a b c

// Object 에서의 spread
const obj1 = {
    name:`dongmin`,
    age:`26`
}

const obj2 = {
    cute:true,
    handsome:true
}

const newObj = {...obj1,...obj2};

console.log(newObj);
/*
{name: "dongmin", age: "26", cute: true, handsome: true}
*/

//spread의 조건식 ()

const lastName = prompt(`What's your lastName?`);

const user = {
    name:`dongmin`,
    age:`26`,
    ...(lastName !== "" && {lastName})
    //lastName이 공백이 아니고 넣은값으로.
    //&& 뒤 lastName은 lastName:lastName 의 short
    // spread로 전개하려면 object여야 하므로 {lastName}
};

console.log(user);