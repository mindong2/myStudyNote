/*
const fnc = () =>{
    console.log();
}

fnc("adad","213",12 ,2412,1232,"domg")
이와같은식이면 파라미터가 끝없이 늘어나기 때문에 불편하다.

이럴때 rest를 사용하면 나머지들도 한 문장으로 파라미터추가
없이 출력가능하다

*/

const fnc = (...dongmin) =>{
    console.log(dongmin);
}

fnc("adad","213",12 ,2412,1232,"domg");

//파라미터앞에 ...을 붙히면 다른 추가없이 다 출력 (array를 만듬)

const myFriends = (myfirst, ...potato) =>{
    console.log(`my best friends is ${myfirst}`);
    //my friends is dongmin
    console.log(potato); 
    //["good", "and", 1, "sas", 414]
};

myFriends(`dongmin`,`good`,`and`,1,`sas`,414);