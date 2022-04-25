import {Route, Routes} from 'react-router-dom';

import page from './pages/index';
import Nav from './components/Nav/Nav'
import './App.css';
import 'aos'
import { AuthProvider } from './components/Auth';



function App() {

  return (
    <AuthProvider>
      <div className="App">
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
      </div>
    </AuthProvider>

  );
}

export default App;
