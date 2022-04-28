import {Route, Routes} from 'react-router-dom';
import React from 'react';
import page from './pages/index';
import Nav from './components/Nav/Nav'
import './App.css';
import 'aos'
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

function App() {

  const [auth, setAuth] = useState(null);

  return (
      <div className="App">
        <AuthContext.Provider value={{auth, setAuth}}>
          <Nav/>
          <Routes>

            {/* ------------------ main-page -------------------------------- */}
            <Route path='/' element={ <page.HomePage/> }></Route>
            <Route path='/movies' element={ <page.MoviePage/>}></Route>
            <Route path='/cinemas' element={ <page.CinemasPage/>}></Route>
            <Route path='/promotions' element={ <page.PromotionsPage/>}></Route>

            {/*------------------ nested-page ------------------------------- */}
            <Route path='/cinemas/:cinema_id' element={ <page.FindByCinema/>}></Route>
            <Route path='/movies/:movie_id' element={ <page.FindByMovie/>}></Route>

            {/* ------------------ admin -------------------------------------- */}
            <Route path='/createMovie' element={ <page.CreateMovie/>}></Route>
            <Route path='/createCinema' element={ <page.CreateCinema/>}></Route>
            <Route path='/createProgram' element={ <page.CreateProgram/>}></Route>

          </Routes>

          
        </AuthContext.Provider>
      </div>
  );
}

export default App;
