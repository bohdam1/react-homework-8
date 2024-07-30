
import css from "./JoinForm.module.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import {PublickApi} from "../API/API";
const initialState = {
  name: "",
  email: "",
  password: ""
};

export const JoinForm = () => {
  const [formData, setFormData] = useState(initialState);
  
  const error = () => toast.error("Error !");
  const navigate = useNavigate();

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await PublickApi.post('/users/signup', formData);
      setFormData(initialState); 
      navigate('/login', { replace: true });
      toast.success("Success !")
    } catch (err) {
      console.error("Submission error:", err);
      error();
    }
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={css.title}>Join to the phone book website</h2>
        <label className={css.label}>
          <span className={css.span}>
            Username
          </span>
          
          <input className={css.input} type="text" name="name" onChange={handleChange} value={formData.name} />
        </label>
        <label className={css.label}>
        <span className={css.span}>
            Email
          </span>
         
          <input  className={css.input} type="email" name="email" onChange={handleChange} value={formData.email} />
        </label>
        <label className={css.label}>
        <span className={css.span}>
            Password
          </span>
         
          <input className={css.input} type="password" name="password" onChange={handleChange} value={formData.password} />
        </label>
        <button className={css.button} type="submit">Register</button>
      </form>
      <ToastContainer /> {}
    </>
  );
};
