// class는 청사진 (blueprint)이다. 죽은 클래스

class User {
    constructor() {
        this.username = `dongmin`;
    }
    sayHello(){
        console.log(`hello i'm dongmin`);
    }
}

const dongmin = new User();
/*
console.log(dongmin.username);
setTimeout(dongmin.sayHello, 3000); -> dongmin , 3초뒤 sayHello() 실행. 
blueprint인 class를 새로운 변수를 선언해주면 사용가능 *몇개든 가능*
*/

const mindong = new User();

console.log(dongmin.username);
console.log(mindong.username); 
// 위 두개는 같은값을 출력한다. 

// object에서도 똑같이 적용가능하다. 사용법 기억하기

const baseObject = {
    name:`dongmin2`,
    sayGood: function(){
        console.log(`i'm Ddongmin`);
    }
}

const me = baseObject;
const myObject = baseObject

console.log(me.name); // dongmin2
console.log(myObject.sayGood()); // i'm Ddongmin

// 좀 더 구조적인 형태를 알아보자

class myUser {
    constructor(name) {
        this.myName = name;
    }
    sayHello(){
        console.log(`hello i'm ${this.myName}`);
    }
}

const fullName = new myUser(`Kim dongmin2`);

console.log(fullName.sayHello()); 
// hello i'm Kim dongmin2 -> argument와 this를이용해서 간단히 만들 수 있다.