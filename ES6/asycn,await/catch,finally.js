/* try{} catch(){} -> 무언가를 하고 오류가 나면 catch.
 then과 catch의 반복을 피함. */

const getMoviesAsync = async() => {
    try{const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json); //json,finally 출력
    /*throw Error = `i'm hyn` 일때 catch, finally출력*/
    }catch(e){
        console.log(`💥${e}💥`); //try에서 오류가 나면 catch에서 출력.
    }finally{
        console.log(`finally is done ❤`);
    } //finally도 손쉽게 사용가능하다. 
};

getMoviesAsync();