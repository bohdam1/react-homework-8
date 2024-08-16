import { AppBar } from "../AppBar/AppBar"
import { Suspense  } from "react"
import { Outlet , useLocation } from 'react-router-dom';
import css from "./loyout.module.css"
import {  useSelector } from "react-redux";
import { selectToken } from "../../redux/Auth/auth.selector";

import { JoinPage } from "../../page/join-paige";

export const Layout = () => {
  const token = useSelector(selectToken);
  const location = useLocation();

  // Перевірка чи сторінка є layout
  const isLayoutPage = location.pathname === '/'; 

  return (
    <>
      {token && <AppBar />}
      
      <main>
      
        <div className={css.container}>
          {!token && isLayoutPage && <JoinPage/>  }
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};