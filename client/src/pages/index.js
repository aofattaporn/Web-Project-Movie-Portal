import CinemasPage from './CinemasPage/CinemasPage';
import HomePage from './Homepage/Hompage';
import MoviePage from './MoviesPage/MoviesPage';

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
import ViewUser from './Admin/ViewUser/ViewUser';


// -------------- User --------------------------
import ProfilePage from './ProfilePage/ProfilePage';
import FavoritePage from './FavoritePage/FavoritePage';
import HistoryPage from './HistoryPage/HistoryPage';

import AdminPage from './Admin/AdminPage';
import Protected from './Protected/Protected';
import ProtectedForAdmin from './Protected/ProtectedForAdmin';

const page ={
   CinemasPage, HomePage, MoviePage,
   FindByCinema, FindByMovie, DetailsPage, PayMentPage, ViewUser,
   CreateCinema, CreateMovie, CreateProgram, BookingPage, AdminPage,
   ProfilePage, FavoritePage, Protected, HistoryPage, ProtectedForAdmin
}

export default page;

