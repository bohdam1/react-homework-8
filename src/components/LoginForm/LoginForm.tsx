import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { fetchLoginThunk } from "../../redux/Auth/auth.thunk";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import css from "./LoginForm.module.css";
import{AppDispatch} from "../../redux/store"
// Визначте інтерфейс для даних форми
export interface FormData {
  email: string;
  password: string;
}

const initialState: FormData = {
  email: "",
  password: ""
};

export const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const dispatch:AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

 
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await dispatch(fetchLoginThunk(formData));
      toast.success("Success!");
      navigate('/', { replace: true });
    } catch {
      toast.error("Error!");
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={css.title}>Login to the phone book website</h2>
      <label className={css.label}>
        <span className={css.span}>Email</span>
        <input
          className={css.input}
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
        />
      </label>
      <label className={css.label}>
        <span className={css.span}>Password</span>
        <input
          className={css.input}
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
      </label>
      <button className={css.button} type="submit">Login</button>
    </form>
  );
};
