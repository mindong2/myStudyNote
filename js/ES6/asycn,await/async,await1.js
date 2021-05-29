/* async 함수안에 await이 있을 수 있고 await은 promise가 끝나길 기다림.*/
// resolve되던 reject되던 상관없이 기다렸다가 실행 , 코드의 간결화 


const getMoviesAsync = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json);
}

getMoviesAsync();