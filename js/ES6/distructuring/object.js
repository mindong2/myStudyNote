const settings = {

    notifications:{
        follow:true,
        alerts:true,
        unfollow:false
    },

    color:{
        theme:`dark`
    }
};

const {
    notifications:{follow},
    color
} = settings;

console.log(follow); //true
console.log(color); // color object 출력 

const practice = {

    rest:{
        a:`c`,
        //b:`e`,
        f:`d`
    }
}

const {rest:{b = `z`}} = practice; 
//b가 존재하지 않을시 default value는 `z`

console.log(b);

/* rest가 존재하지 않으면 
const {rest:{b = `z`} = {}} = practice; 와같은 형식으로 사용*/