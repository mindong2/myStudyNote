const amISexy = new Promise( (resolve, reject) => {
    resolve(2);
})

amISexy
    .then( number => {
        console.log(number * 2);
        return number * 2;
    })
  .then(otherNm => console.log(otherNm * 2))

  //.then -> 함수가 끝나는걸 기다렸다가 끝나고 바로 실행
  //Chaining을 할때는 그 전 함수에서 return값이 있어야한다 (중요)


// chaining 도중 error가 발생할때

const amICool = new Promise( (resolve, reject) => {
    resolve(2);
})

const timesTwo = number => number *2;

amICool
.then(timesTwo)
.then(timesTwo)
.then(timesTwo)
.then(timesTwo)
.then(timesTwo)
.then(() => {
    throw Error("something is wrong")
}) // error발생 something is wrong 
.then(lastNumber => console.log(lastNumber)) //64
.catch(error => console.log(error)); //Error: something is wrong
// catch를 적어 놓으면 프로세스 중간에 어떤 에러가 났는지 알수있다.