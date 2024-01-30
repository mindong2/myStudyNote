// 엄격모드에서의 this

"use strict";
function myFunction() {
  return this;
}

console.log(myFunction()); // undefined

var count = 0;
function addCount() {
  this.count = 100; // 여기에서 먼저 에러 (strict모드에서 this가 undefined이더라도 전역객체를 바라보지 않습니다)
  count++;
}
addCount();
console.log(count); // ?? error
