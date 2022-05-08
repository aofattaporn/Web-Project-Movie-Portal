import {Route, Routes} from 'react-router-dom';
import React from 'react';
import page from './pages/index';
import components from './components';
import Nav from './components/Nav/Nav'
import './App.css';
import 'aos'
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

function App() {

  const [auth, setAuth] = useState(localStorage.getItem("user"));

  return (
      <div className="App">
        <AuthContext.Provider value={{auth, setAuth}}>
          <components.Nav/>
          <Routes>

            {/* ------------------ main-page -------------------------------- */}
            <Route path='/' exact element={ <page.HomePage/> }></Route>
            <Route path='/movies' element={ <page.MoviePage/>}></Route>
            <Route path='/cinemas' element={ <page.CinemasPage/>}></Route>
            <Route path='/promotions' element={ <page.PromotionsPage/>}></Route>

            {/*------------------ nested-page ------------------------------- */}
            <Route path='/cinemas/:cinema_id' element={ <page.FindByCinema/>}></Route>
            <Route path='/movies/:movie_id' element={ <page.FindByMovie/>}></Route>

            <Route path='/details/:movie_id' element={ <page.DetailsPage/>}></Route>
            <Route path='/booking/:program_id/:movie_id/:cinema_id' element={ <page.BookingPage/>}></Route>

            {/* ------------------ admin -------------------------------------- */}
            <Route path='/createMovie' element={ <page.CreateMovie/>}></Route>
            <Route path='/createCinema' element={ <page.CreateCinema/>}></Route>
            <Route path='/createProgram' element={ <page.CreateProgram/>}></Route>

          </Routes>
          
          <components.Footer/>

          
        </AuthContext.Provider>
      </div>
  );
}

export default App;
