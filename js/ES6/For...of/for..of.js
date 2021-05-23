const friends = ["dongmin", "dong","min","mindong"];

// 1. 반복 루프를 쉽게 사용하려면 forEach를 활용 하지만 array에서만 사용.

friends.forEach((c,i,a) => console.log(c,i,a));
// c는 current 각각의 요소 , i는 index, a는 array 순서대로이다.

// 2. for.. of를 이용하기.

for(const friend of friends){
    console.log(friend);
}

/* 위의 예시의 c의 리턴값과 같지만 for of는 선언할때 const,let
 선택가능하다.  단 1가지의 파라미터만 가능.*/

// for of 는 string, nodeList 등등 여러가지 type에서 사용가능

// forEach는 중간에 멈출수없지만 for of 는 가능하다 예시 .

const user = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`];

user.forEach(c=>console.log(c));
// a~i까지 전부 출력

for(const c of user){
    if(c === "e"){
        break;
    }else{console.log(c)};
}

// a~d까지만 출력 => 만약 c가 "e"이면 함수종료 