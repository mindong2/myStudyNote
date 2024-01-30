// 비동기 함수에서의 this
class Counter {
  constructor() {
    this.count = 0;
  }

  start() {
    console.log(this); //  Counter

    setInterval(function () {
      console.log("첫번째 setInterval");
      console.log(this); // Window
      console.log(this.count++); // NaN
    }, 10000);

    // arrow function은 this 바인딩과정 생략 -> 상위스코프의 this
    setInterval(() => {
      console.log("두번째 setInterval");
      console.log(this); // Counter
      console.log(this.count++); // 1
    }, 10000);
  }
}

const counter = new Counter();
counter.start();
