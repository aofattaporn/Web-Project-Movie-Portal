import CinemasPage from './CinemasPage/CinemasPage';
import HomePage from './Homepage/Hompage';
import MoviePage from './MoviesPage/MoviesPage';
import PromotionsPage from './PromotionsPag/PromotionsPage';

// -------------- nested page --------------------------
import FindByCinema from './NestedPage/FindByCinema/FindByCinema';
import FindByMovie from './NestedPage/FiindByMovie/FindByMovie';

import DetailsPage from './NestedPage/Details/DetailsPage';
import BookingPage from './BookingPage/BookingPage';
import PayMentPage from './PaymentPage/PayMentPage';

// -------------- for admin --------------------------
import CreateCinema from './Admin/CreateCinema/CreateCinema';
import CreateMovie from './Admin/CreateMovie/CreateMovie';
import CreateProgram from './Admin/CreateProgram/CreateProgram';

// -------------- User --------------------------
import ProfilePage from './ProfilePage/ProfilePage';
import FavoritePage from './FavoritePage/FavoritePage';

import Protected from './Protected/Protected';


const page ={
   CinemasPage, HomePage, MoviePage, PromotionsPage,
   FindByCinema, FindByMovie, DetailsPage, 
   CreateCinema, CreateMovie, CreateProgram, BookingPage, PayMentPage, 
   ProfilePage, FavoritePage, Protected
}

export default page;

