import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectToken } from "../../redux/Auth/auth.selector";
import {selectCurrent} from "../../redux/Current/current.selector"
import { useEffect } from "react";
import { fetchcurrentThunk } from "../../redux/Current/current.thunk";
import { LogoutThunk } from "../../redux/Auth/auth.thunk"; 
import css from "./Appbar.module.css"

export const AppBar = () => {
    const token = useSelector(selectToken);
    const current = useSelector(selectCurrent);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (token) {
        
        dispatch(fetchcurrentThunk());
      }
    }, [token, dispatch]);
  
    const handleLogout = async () => {
      try {
        
        await dispatch(LogoutThunk());
        localStorage.removeItem('persist:auth');
        
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };
  
    return (
      <header className={css.header}>
        
        
        {token && 
        <div className={css.info}>
          {current ? (
            <>
              
              <p className={css.email}>{current.email}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
          <button  className={css.buttonlogout} type="button" onClick={handleLogout}>Logout</button>
        </div>}
      </header>
    );
  };