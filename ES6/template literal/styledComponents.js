/*

const styled = (css) => console.log(css);

styled(`border-radius:10px,
    color:blue;`);
    // string 그대로 출력. 

    styled`border-radius:10px,
    color:blue;`; 
    // 괄호 없애면 긴 Array로 출력.

*/
const styled = aElement =>{
    const el = document.createElement(aElement);
    return el;
}

const title = styled("h1")`
border-radius:10px,
color:blue;
`;

console.log(title);


// 이렇게하면 함수가 두번 호출되어서 사용X
// 함수를 return하는 방법을 사용.
const styled = aElement =>{
    const el = document.createElement(aElement);
    return args=> {
        const styles = args[0]; // style``은 array의 첫번째에 있으므로.
        el.style = styles; 
        return el;
    };
}
// aElement는 styled(`element`)의 arg, args는 styled`` 
const title = styled("h1")`
font-size:2rem;
background-color:red;
color:blue;
`;

const subTitle = styled(`span`)`
color:#fff;
background-color:#111;`


title.innerText = `Welcome`;
subTitle.innerText = `Good`;
document.body.append(title,subTitle);