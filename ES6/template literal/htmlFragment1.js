const wrapper = document.querySelector(`.wrapper`);

const addWelcome = () =>{
const div = document.createElement(`div`);
const h1 = document.createElement(`h1`);


h1.innerText = `hello`;
div.append(h1);
wrapper.append(div);

};
setTimeout(addWelcome, 2000);

// 점점 적어야 할게 많아지기때문에 쉽게 작성하기위해

const addWelcome = () =>{
    const div = `
        <div class="hello">
        <h1 class="title">hello</h1>
        </div>
        `
    
    wrapper.innerHTML = div;
    
    };
    setTimeout(addWelcome, 2000);

    // 두개는 같은값을 출력 