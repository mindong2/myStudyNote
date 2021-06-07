import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const GetYourFood = [
  {
    id:1,
    name: "kimchi",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-w05cqGMkl3VJjM8E_1v109Aj2Z4Swv-dSA&usqp=CAU",
    rating:4
  },

  {
    id:2,
    name: "bulgogi",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sNS6RhpUC7xcghntwwutmlVAc3aY_bqIiQ&usqp=CAU",
    rating:4.9
  },

  {
    id:3,
    name: "ramen",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbqaXViZ-9MaScHYHPldfEvvTRvaFLxF9kA&usqp=CAU",
    rating:2.3
  }
]

// 부모에게서 자신이 원하는 props를 받고있는지 알기위해 prop-types 설치.

function Food({name, image, rating}) { 
  /* props.fav는 object형식으로 출력되기때문에 fav로 destructuring 해준다.
  App component에서 받아온 정보들 (props)들이 args로 와서 사용 가능하다. */                      
  return(
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name}/> 
    </div>
  )
}
  // img에 alt를 안주면 에러가 난다.

  Food.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number
  };
  // father에서 type을 확인해서 원치않는 다른게 가지않도록 하는것. 

function App() {
  return (
    <div>
    <h1>It's App</h1>
    {GetYourFood.map(dish => <Food key = {dish.id} name = {dish.name} image = {dish.image} rating ={dish.rating}/>)}
    </div>
    ) // HTML 소스에 저장하지않고 실행된다 (React가 빠른이유)
      // props에는 유일한 key가 있어야한다. id를 추가.
  }

 //위와 같은것을 Component라고 부른다. component는 HTML을 반환하는 함수. 
 // 위와같이 JSX + props들로 재사용 가능하다. 
 /* 재사용 반복하는것은 Map을 적극 활용하자 
 (array에서 각각의 요소에 한번씩 실행 후 ) 새 array 생성*/ 
export default App;

/* 
 -> State 강의내용들 

 1/ 

 import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    count:0
  }

  // state를 직접 변경하게되면 밑의 render함수가 실행되지 않는다 -> setState() 사용해서 변경
  // 매순간 setState()를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출!
  add = () => {
    this.setState(current => ({count: current.count + 1})); // Object desturture
  }

  remove = () => {
    this.setState(current => ({count: current.count - 1})); 
  }
 //React에 onClick이 자동적으로 들어가있고 함수를 자동실행이 아니라 클릭했을때 실행이라서 () X
  componentDidMount(){
    console.log("component did mount");
  }

  componentDidUpdate(){
    console.log("I just updated"); //update시 출력
  }

  render(){
    console.log("rendering");
    return (
    <div>
      <h1>My number is {this.state.count}</h1>
      <button onClick = {this.add}>Add</button>
      <button onClick = {this.remove}>Remove</button>
      </div>
    )}
} 
// 위의 React.Component에는 많은 것을 지니고있다. 
// react.component에 render가 포함되어있어서 App Component도 있다 (extends)
export default App;

/*  ※ Mounting- component의 태어남
▶ constructor()
-JS에서 class를 만들 때 호출되는 것
-coponent가 mount될 때 호출됨

▶ componentDidMount()-component가 처음 render될 때 호출됨

※ Updating
▶ componentDidUpdate()-coponet가 업데이트될 때 호출됨

※ Unmounting- coponent가 죽는 것
▶ componentWillUnmount()

setState()호출=>component 호출=>render 호출
=>업데이트 완료 후 coponentDidUpdate 실행 

 2/ 


*/
