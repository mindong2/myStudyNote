import "./styles.css";
import React, { useState } from "react";

type validatorType = (value: string) => boolean;

export const useInput = (initialValue: string, validator: validatorType) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputVal = e.target.value;
    let willComponent = true;

    if (typeof validator === "function") {
      willComponent = validator(InputVal);
    }

    // '@가 아닐때' onChange
    if (willComponent) {
      setValue(InputVal);
    }
  };
  return { value, onChange };
};

// const App = () => {
//   const maxLength: validatorType = (value) => !value.includes("@");

//   const name = useInput("Mr.", maxLength);

//   return (
//     <div className="App">
//       <input type="text" placeholder="name" value={name.value} onChange={name.onChange} />
//     </div>
//   );
// };

// export default App;
