// extends한 클래스에서 constructor생성시는 super 

class User {
    constructor(option) // argument가 여기서는 coolName의 오브젝트
    {
        this.username = option.username;
        this.lastName = option.lastName;
        this.email = option.email;
        this.password = option.password;
    }
    sayHello(){
        console.log(`hello i'm ${this.username}`);
    }
    getProfile(){
        console.log(`${this.username} ${this.email} ${this.password}`)
    }
    updatePassword(newPassword, currentPassword){
        if(currentPassword === this.password){
            this.password = newPassword;
        }else{
            console.log(`Can't change password`);
        }
    }
}

const coolName = new User({
    username:"dongmin", 
    lastName:"Kim", 
    email:"qlsnaos12@naver.com",
    password:"1234"
    });

class Admin extends User {
    constructor(option){
        super(option); // 원시 클래스에서 constructor를 가져온다.
        //기본적으로 새 constructor를 만들면 오류가 나지만 super를 쓰면된다.
        this.superAdmin = option.superAdmin; 
        this.isActive = option.isActive;
        //Admin에서의 변수들을 추가.
    }
    deleteWebsite(){
        console.log("deleting the Website...");
    }
}

const admin = new Admin({
    username:"dongmin", 
    lastName:"Kim", 
    email:"qlsnaos12@naver.com",
    password:"1234",
    superAdmin:"AdminGood",
    isActive:"goodWork"
    });
//super를 이용해서 User에서도 constructor를 받아오고 Admin에서도 받아온다. 

console.log(admin.superAdmin) //AdminGood

