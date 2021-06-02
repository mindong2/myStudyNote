// this -> 클래스 안에서 볼수있고 클래스 자체를 가리킨다. (중요)

class User {
    constructor(name, lastName, email, password) {
        this.username = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
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

// property를 만드는것은 중요하다. 

const coolName = new User("dongmin", "Kim", "qlsnaos12@naver.com", "1234");

coolName.getProfile();
coolName.updatePassword("5678", "1234"); 
// 만약 currentPassword가 다르다면 Can't change password 출력
console.log(coolName.password); // 5678

/* User클래스를 extends 할 수 있다 
 User의 constructor 를 불러오기 때문에 Admin에서 새로운 costructor를 만들면 
 User와는 다른 독자적인 constructor이다 해결책은 Super*/
class Admin extends User {
    deleteWebsite(){
        console.log("deleting the Website...");
    }
}

const coolAdmin = new Admin("dongmin", "Kim", "qlsnaos12@naver.com", "1234")

coolAdmin.deleteWebsite();

console.log(coolAdmin.email); //qlsnaos12@naver.com (User클래스와 같은 결과)