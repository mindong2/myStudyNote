const p1 = new Promise(resolve =>{
   setTimeout(resolve, 5000, "first");
});

const p2 = new Promise(resolve => {
    setTimeout(resolve, 2000, "second");
});

const p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "third");
});

const all = Promise.all([p1,p2,p3]);

all.then(value => console.log(value));
// 5초뒤에 ["first", "second", "third"] 출력 

//Promise.all이 다른 promise들이 끝나길 기다렸다가 순서대로 한번에 진행.


//reject가 있는경우 
const e1 = new Promise(resolve => {
    setTimeout(resolve, 5000, "first2");
});

const e2 = new Promise((resolve,reject) => {
    setTimeout(reject, 2000, "error💢");
});

const e3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "third2");
});

const all2 = Promise.all([e1,e2,e3]);

all2
.then(values => console.log(values))
.catch(e => console.log(e)); //error💢 만 출력 (2초 뒤)

// Promise.race
const r1 = new Promise(resolve => {
    setTimeout(resolve, 5000, "first");
});

const r2 = new Promise(resolve => {
    setTimeout(resolve, 2000, "second");
});

const r3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "third");
});

const race = Promise.race([r1,r2,r3])
race.then(v => console.log(v));
// all과 비슷하지만 race는 가장 먼저 실행되는 함수를 실행한다. 여기서는 r2
// second 출력.
