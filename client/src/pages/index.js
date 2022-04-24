import CinemasPage from './CinemasPage/CinemasPage';
import HomePage from './Homepage/Hompage';
import MoviePage from './MoviesPage/MoviesPage';
import PromotionsPage from './PromotionsPag/PromotionsPage';

// -------------- nested page --------------------------
import FindByCinema from './NestedPage/FindByCinema/FindByCinema';
import FindByMovie from './NestedPage/FiindByMovie/FindByMovie';

// -------------- for admin --------------------------
import CreateMovie from './CreateMovie/CreateMovie';

const page ={
   CinemasPage, HomePage, MoviePage, PromotionsPage,
   FindByCinema, FindByMovie,
   CreateMovie
}

export default page;

