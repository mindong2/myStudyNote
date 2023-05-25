const user = {
    name:"dongmin",
    age: 26,
    password:1234
};

// 출력값에서 password를 뺀 user를 출력하고 싶을때.

const killPassword = ({password,...rest}) => rest ;
// Object distructure 후 rest 이용 하고 rest만 return.


const cleanPassword = killPassword(user);
console.log(cleanPassword);

/* {name: "dongmin", age: 26}
age: 26
name: "dongmin" */


// setDefault
const setCountry = ({country = "KR", ...rest}) => ({country, ...rest});

console.log(setCountry(user));

// {country: "KR", name: "dongmin", age: 26, password: 1234}


// renaming , ({})는 object를 return하기위함 
const rename = ({name:dongmin, ...rest}) =>({dongmin,...rest}); 

console.log(rename(user));