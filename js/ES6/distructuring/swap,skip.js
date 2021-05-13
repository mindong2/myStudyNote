//swapping은 *let*일때 가능 (변하는 값);

let dong ="min";
let min ="dong";

[dong, min] = [min, dong]; // swapping

console.log(dong,min)

//skipping 

const week = [`mon`,`tue`,`wed`,`thu`,`fri`];

const [a,,,,b] = week;

console.log(a,b);

/* 이런식으로 ,로 순서 skip이 가능하다. 
  array distructure에서 유용.*/