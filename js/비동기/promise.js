// 성공시

const p2 = new Promise((resolve, reject) => {
  resolve("resolve 완료");
});

p2.then((data) => {
  console.log(data);
})
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("finally");
  });

//   실패시

const p3 = new Promise((resolve, reject) => {
  reject("오류");
});

p3.then((data) => {
  console.log(data);
})
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("finally");
  });
