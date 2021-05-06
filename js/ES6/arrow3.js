//여러가지 method

// 1.find

const email =[
    `dong@no.com`, 
    `min@google.com`,
    `dongmin@gmail.com`,
    `nico@nave.com`
];

const foundMail = email.find(item => true);
console.log(foundMail);

//이 경우에는 dong@no.com이 반환. 조건을 만족하는 첫번째.

const email =[
    `dong@no.com`, 
    `min@google.com`,
    `dongmin@gmail.com`,
    `nico@nave.com`
];

const foundMail = email.find(item => item.includes(`@gmail.com`));
console.log(foundMail);

//dongmin@gmail.com element가 반환. includes는 ~을 포함하는것

// 2.filter
/* filter는 제공된 함수의 !!조건!!을 만족하는
 모든 엘리먼트로 새로운 array생성. */

 const email =[
    `dong@no.com`, 
    `min@google.com`,
    `dongmin@gmail.com`,
    `dongmin2@gmail.com`,
    `nico@nave.com`
];

const noGmail = email.filter(item => !item.includes(`@gmail`));

console.log(noGmail);

/* `dong@no.com`, 
`min@google.com`,
`nico@nave.com` 을 반환. @gmail.com을 포함하지않는것들 */

// 3.forEach
//주어진 함수를 배열 요소에 대해 실행.
const email =[
    `dong@no.com`, 
    `min@google.com`,
    `dongmin@gmail.com`,
    `dongmin2@gmail.com`,
    `nico@nave.com`
];

//user이름만 얻고싶을때
email.forEach(item => console.log(item.split(`@`)[0]));

/* 각각의 user element만 반환. 
이것을 array로 만들려면 map (조건이 아니라서 filter X)*/

/* split은 어떠한 string을 기준으로 나눠서 
   하나의 array에 각각의 element로 만들어준다.
   ex) const name = `dongmin Kim`
       name.split(` `) -> [`dongmin`, `Kim`] 반환.*/

 const email =[
    `dong@no.com`, 
    `min@google.com`,
    `dongmin@gmail.com`,
    `dongmin2@gmail.com`,
    `nico@nave.com`
];

const cleaned = email.map(item => item.split(`@`)[0]);

console.log(cleaned);

//["dong", "min", "dongmin", "dongmin2", "nico"] 반환.


// object로 반환하고 싶을때 ! 

const email =[
    `dong@no.com`, 
    `min@google.com`,
    `dongmin@gmail.com`,
    `dongmin2@gmail.com`,
    `nico@nave.com`
];

const cleaned = email.map(item => ({
    username:item.split(`@`)[0],
    email:item.split(`@`)[1] 
}));

console.log(cleaned);
console.table(cleaned); //console을 table형식으로 봄.

/* 
0: {username: "dong", email: "no.com"}
1: {username: "min", email: "google.com"}
2: {username: "dongmin", email: "gmail.com"}
3: {username: "dongmin2", email: "gmail.com"}
4: {username: "nico", email: "nave.com"}

{} 브라켓 앞 뒤로 ()를 추가해주면 object로 반환.*/