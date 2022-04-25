import CinemasPage from './CinemasPage/CinemasPage';
import HomePage from './Homepage/Hompage';
import MoviePage from './MoviesPage/MoviesPage';
import PromotionsPage from './PromotionsPag/PromotionsPage';

// -------------- nested page --------------------------
import FindByCinema from './NestedPage/FindByCinema/FindByCinema';
import FindByMovie from './NestedPage/FiindByMovie/FindByMovie';

// -------------- for admin --------------------------
import CreateCinema from './Admin/CreateCinema/CreateCinema';
import CreateMovie from './Admin/CreateMovie/CreateMovie';
import CreateProgram from './Admin/CreateProgram/CreateProgram';



const page ={
   CinemasPage, HomePage, MoviePage, PromotionsPage,
   FindByCinema, FindByMovie,
   CreateCinema, CreateMovie, CreateProgram
}

export default page;

