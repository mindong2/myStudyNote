//find 는 조건에 맞는 element를 출력 findIndex는 index출력

const friends = [
    `dongmin@naver.com`,
    `dong@gmail.com`,
    `min@yahoo.com`,
    `Ddongmin@korea.com`
]

const target = friends.find(a=> a.includes(`@korea.com`));

console.log(target);

//findIndex를 이용해서 Element를 수정해보자.

const practice = [
    `js`,
    `jquery`,
    `html`,
    `css`
]

const getIndex = practice.findIndex(b=>b.includes(`jquery`));
//console.log(getIndex); -> 1

practice[getIndex] = `react`;

console.log(practice); //["js", "react", "html", "css"]

//fill

const Good = [
    `yes`,
    `no`,
    `hmm`,
    `Yeah`
]

const fill = Good.fill(`*`.repeat(5),2,3)
// 2,3 의 의미 -> 2번 인덱스부터 3번 인덱스 전까지만.
// 2라고만 적으면 2번 인덱스부터 끝까지.
console.log(Good); // ["yes", "no", "*****", "Yeah"]