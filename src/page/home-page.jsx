import { useSelector } from "react-redux";

import { selectToken } from "../redux/Auth/auth.selector";

import { ContactPage } from "./contact-page";

export const HomeScreen = () => {
  const token = useSelector(selectToken);
  

  return (
    <div>
      {token &&  
      <ContactPage/>
       
      }
    </div>
  );
};
