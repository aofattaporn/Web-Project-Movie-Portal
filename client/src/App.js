import {Route, Routes} from 'react-router-dom';
import React from 'react';
import page from './pages/index';
import components from './components';
import './App.css';
import 'aos'
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();
export const UserContext = createContext();
export const IsAdminContext = createContext();

function App() {

  const [auth, setAuth] = useState(localStorage.getItem("token"));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"));
  const [user, setUser] = useState(localStorage.getItem("user"));

  return (
      <div className="App">
        <AuthContext.Provider        value={{auth, setAuth}} >
        <UserContext.Provider        value={{user, setUser}} > 
        <IsAdminContext.Provider     value={{isAdmin, setIsAdmin}}>
          <components.Nav/>
          <Routes>

            {/* ------------------ main-page -------------------------------- */}
            <Route path='/'  element={ <page.HomePage/> }></Route>
            <Route path='/movies' element={ <page.MoviePage/>}></Route>
            <Route path='/cinemas' element={ <page.CinemasPage/>}></Route>
            <Route path='/promotions' element={ <page.PromotionsPage/>}></Route>

            {/*------------------ nested-page ------------------------------- */}
            <Route path='/cinemas/:cinema_id' element={ <page.FindByCinema/>}></Route>
            <Route path='/movies/:movie_id' element={ <page.FindByMovie/>}></Route>

            <Route path='/details/:movie_id' element={ <page.DetailsPage/>}></Route>
            <Route path='/booking/:program_id' element={ <page.BookingPage/>}></Route>
            <Route path='/booking/:program_id/payment' element={ <page.PayMentPage/>}></Route>

            {/* ------------------ admin -------------------------------------- */}
            <Route path='/admin'            element={<page.AdminPage></page.AdminPage>}>
              <Route path='createMovie' element={ <page.CreateMovie/>} > </Route>
              <Route path='createCinema'  element={ <page.CreateCinema/> }></Route>
              <Route path='createProgram'  element={ <page.CreateProgram/>}></Route>
              <Route path='users'  element={ <page.ViewUser/>}></Route>
            </Route>

            {/* ------------------ user -------------------------------------- */}
            <Route path='/profile' element={<page.Protected isLoggedIn={auth}><page.ProfilePage></page.ProfilePage></page.Protected>}></Route>
            <Route path='favorite' element={<page.Protected isLoggedIn={auth}><page.FavoritePage></page.FavoritePage></page.Protected>}></Route>
            <Route path='/history' element={<page.Protected isLoggedIn={auth}><page.HistoryPage></page.HistoryPage></page.Protected>}></Route>

          </Routes>
          
          <components.Footer/>
        </IsAdminContext.Provider>
        </UserContext.Provider>
        </AuthContext.Provider>
      </div>
  );
}

export default App;
