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
          <Route path='/' element={ <page.HomePage/> }></Route>
          <Route path='/movies' element={ <page.MoviePage/>}></Route>
          <Route path='/cinemas' element={ <page.CinemasPage/>}></Route>
          <Route path='/promotions' element={ <page.PromotionsPage/>}></Route>
          <Route path='/createMovie' element={ <page.CreateMovie/>}></Route>

        </Routes>
      </div>
    </AuthProvider>

  );
}

export default App;
