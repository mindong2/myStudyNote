class Counter {
    constructor({initialNum =0,counterId, plusId, minusId,resetId}){
        this.count = initialNum; // 실제 console에서의 숫자
        this.counter = document.getElementById(counterId); //counter는 span
        this.counter.innerText = initialNum;
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.resetId = document.getElementById(resetId);
        this.addEventListeners();
    }
    addEventListeners(){
        this.plusBtn.addEventListener("click", this.increase);
        this.minusBtn.addEventListener("click", this.decrease);
        this.resetId.addEventListener("click", this.reseting)
        console.log(this)
        /*EventListener에서 함수를 호출하면 this는 이벤트 target을 가리키게된다.
        따라서 increase내에서 this는 plusBtn을,
        decrease내에서 this는 minusBtn을 가리키게 된다. 그럴시에는 호출함수를 arrow로 바꾼다.*/
    }

    increase = () => {
        console.log(this) // arrow로 바꿔주면서 this는 Counter 클래스를 가리킨다.
        this.count = this.count + 1;
        this.paintNum()
    }

    decrease = () => {
        console.log(this)
        this.count = this.count -1;
        this.paintNum()
    }

    paintNum(){
        this.counter.innerText = this.count;
    }

    reseting = () => {
        console.log(this)
        this.count = 0;
        this.paintNum()
    }
    
}

const user = new Counter({
    initialNum:0,
    counterId:"count",
    plusId:"plus",
    minusId:"minus",
    resetId:"reset"
});

const user2 = new Counter({
    initialNum:777,
    counterId:"count2",
    plusId:"plus2",
    minusId:"minus2",
    resetId:"reset2"
});

//class이용시에는 이와같이 다시 사용이 가능하다.