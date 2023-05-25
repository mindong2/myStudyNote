// ts환경 예시

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
