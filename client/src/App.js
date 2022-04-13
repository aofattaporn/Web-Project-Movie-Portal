import {Route, Routes} from 'react-router-dom';
import page from './pages/index';
import Nav from './components/Nav'



function App() {

  return (
    <div className="App">
      <Nav/>
      
      <Routes>
        <Route path='/' element={ <page.HomePage/> }></Route>
        <Route path='/movies' element={ <page.MoviePage/>}></Route>
        <Route path='/cinemas' element={ <page.CinemasPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
