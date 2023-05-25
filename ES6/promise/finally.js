const p1 = new Promise((resolve, reject) =>{
    setTimeout(reject, 5000, "first");
 });

 p1
 .then(value => console.log(value))
 .catch(e => console.log(`${e}💢`))
 .finally(()=> console.log("i'm done"));

 //보통 API 불러올때 자주사용. 
 /* 로딩할때 하나,두개, 세개 얻고 마지막으로 데이터 보여주거나
 멈추거나 무언가를 하는식으로*/