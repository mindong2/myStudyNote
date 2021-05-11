// 이상한 이름을 renaming 해보자

const reNaming = {
    list:{
        class:`korean`,
        number:2,
        EQFAMFNF:`dongmin`
    }
};

const {
    list:{EQFAMFNF:teacher = `mindong`}
} = reNaming;

console.log(teacher);

// 이런식으로 object의 이름을 바꿔줄수 있다. 
// 바꾼후에는 EQFAMFNF는 변수로써 사용X 