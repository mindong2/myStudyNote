// JS에 promise가 끝난 이후의 명령어를 전달하려면 then사용

const amISexy = new Promise((resolve, reject)=> {
    setTimeout(() =>{
        resolve("yes you are!");
    },3000);
})

amISexy.then(value => console.log(value));
// 3초뒤에 yes you are!

const amICool = new Promise((resolve, reject)=> {
    setTimeout(() =>{
        reject("you are ugly");
    },3000);
})
//Uncaught (in promise) you are ugly 라는 오류가 생김.

// 오류를 잡기위해서 catch를 사용. 

amICool
    .then(result => console.log(result))
    // 정상적으로 resolve가 됐을때
    .catch(error => console.log(error));
    // reject가 되었을때 , 두개는 각각 다른 상황에서 사용된다. 순차X 

// amICool의 reject, catch로 인해 위의 오류가 you are ugly로 출력된다. 