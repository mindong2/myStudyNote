// array의 distructuring
const days = [`mon`,`tue`,`wed`];

const [a,b,c,d = `thu`] = days;

console.log(a,b,c); 

// const a = days[0] / b ,c => 1,2 

console.log(d); 

// 마찬가지로 default값 정의가능.