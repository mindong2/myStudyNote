//this를 사용할때는 arrow 사용 X 
const button = document.querySelector(`button`);

button.addEventListener(`click`,function(){
    console.log(this);
    console.log(`I have been clicked`);
})

//여기서의 this는 button

button.addEventListener(`click`, () => {
    console.log(this);
    console.log(`I have been clicked`);
});

//여기서의 this는 window를 가리킴.


/*
const handleClick = () => {
    console.log(this);
};

button.addEventListener(`click`,handleClick);
 -> window가 출력됨.
*/

const min = {
    name:`dongmin`,
    age:26,
    addYear:() =>{
        this.age++;
    }
};

console.log(min);
min.addYear();
min.addYear();
console.log(min);
// -> age는 26그대로 >> arrow function 에서는 this가 window를 가리키기 때문.

const min = {
    name:`dongmin`,
    age:26,
    addYear(){
        this.age++;
    }
};

console.log(min);
min.addYear();
min.addYear();
console.log(min);
// ->age는 26 , 28로 증가. 일반함수에서의 this는 min.age

 