fetch("https://yts.mx/api/v2/list_movies.json")
//영화목록API 
.then(response => {
    console.log(response);
    return response.json();
})
// API에서 받은것을 text로 return 
.then(json => console.log(json))
.catch(e => console.log(`💢${e}`));

// 영화 API의 json을 연것과 같은값을 return한다. 

/* 다른사람이 만든 Promise를 사용하면 된다. */