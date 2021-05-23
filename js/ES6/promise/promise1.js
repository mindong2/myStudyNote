const hello = fetch("http://google.com");

console.log("something");
console.log(hello);

/* JS는 위에서 아래로 실행하지만 fetch를하고 불러오는동안 
something을 출력하고 fetch가 끝나고 나서야 
hello의 에러가 나옴 이는 JS의 비동기성. fetch와 동시에 
console.log("something")이 실행. [순차적X , 동시에O]*/


// creating Promise -> 실행할 수 있는 function을 넣어야 한다.
// 데이터는 resolve (실행) 하거나 reject(오류) 해야한다. 

const amISexy = new Promise((resolve, reject)=> {
    setTimeout(() =>{
        resolve("yes you are!");
    },3000);
})
//3초뒤 함수 실행, setTimeout(resolve, 3000, "yes you are"); 과 같다.
console.log(amISexy);


setInterval(()=>{console.log(amISexy)},1000);

//setInterval(console.log, 1000, amISexy); 와 같다. 