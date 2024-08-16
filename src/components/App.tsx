
// import { LoginPage } from 'page/login-page';
import { JoinPage } from '../page/join-paige';
import { ContactPage } from '../page/contact-page';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../page/login-page';
import { Layout } from './layout/layout';
import {HomeScreen} from "../page/home-page"
import { PublickeRoute } from './AuthRauth/Publick.rauth';
import { PrivateRoute } from './AuthRauth/Private.rauth';


export const App = () => {

  return (


    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomeScreen />} />

        <Route path='' element={<PublickeRoute/>}>
          <Route path='/join' element={<JoinPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Route>

        <Route path='' element={<PrivateRoute/>}>
          <Route path='/contact' element={<ContactPage />} />

        </Route>
        
      </Route>
      
    </Routes>
  );

}
