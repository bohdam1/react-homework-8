import css from "./form.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";


import { addContactsThunk } from "../../redux/Contact/thunk"; 
import sprite from "../sprite/sprite.svg"; 

export const FormBook = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const contact = { name, number };

    dispatch(addContactsThunk(contact));

    setName('');
    setNumber('');
    
   
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
    <h2 className={css.title}>phone book</h2>
    
    <label className={css.label}>
      <span className={css.span}>Name</span>
      <div className={css.inputWrapper}>
        <div className={css.iconContainer_person}>
          <svg className={css.icon_pers}>
            <use href={`${sprite}#icon-person-black`} />
          </svg>
        </div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={css.input}
        />
      </div>
    </label>
  
    <label className={css.label}>
      <span className={css.span}>Number</span>
      <div className={css.inputWrapper}>
        <div className={css.iconContainer}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-phone-black`} />
          </svg>
        </div>
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          className={css.input}
        />
      </div>
    </label>
  
    <button type="submit" className={css.button}>
      Submit
    </button>
  </form>
  );
};
