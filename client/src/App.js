import {Route, Routes} from 'react-router-dom';
import pages from './pages/index';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <pages.HomePage/> }></Route>
        <Route path='/movies' element={ <pages.MoviePage/>}></Route>
        <Route path='/cinemas' element={ <pages.PromotionsPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
