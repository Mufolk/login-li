import { useState } from "react";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //Setted up the userForm to be able to be used on differnt pages with callBack
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
