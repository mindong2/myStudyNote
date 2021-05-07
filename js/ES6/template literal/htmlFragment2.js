const wrapper = document.querySelector(`.wrapper`);

const friends =["me","dongmin","dal","lynn"];

const list = `
    <h1>People</h1>
    <ul>
    ${friends.map(friend => `<li>${friend}</li>`)}
    </ul>`;

    wrapper.innerHTML= list;

    // map은 array로 출력하기 때문에 이를 제거하기 위해서 join

 const friends =["me","dongmin","dal","lynn"];

 const list = `
    <h1>People</h1>
    <ul>
    ${friends.map(friend => `<li>${friend}</li>`).join("")}
    </ul>`;

    wrapper.innerHTML= list;

    //이렇게하면 리스트간의 ,가 사라진다.