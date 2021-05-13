//함수에서 arguments를 이용한 object distucturing

function saveSettings({notification,color:{theme = "red"}}) {
    console.log(notification, theme);
    //{name: "dongmin", age: 20, sex: "male"} "blue"
  }
  
  saveSettings({
    notification: {
    name:"dongmin",
    age:20,
    sex:"male"
  },
    color: {
      theme:"blue"
      // 만약 rgb만 작성되었다면 => (rgb:rgb) Value shorthands 
    }
  });
  
  