import { Fragment } from "react";
import CarauselMovies from '../../components/Carousel/CarouselMovies';
import Tap from "../../components/Tap/Tap";
import MovieLayout from "../../Layout/MovieLayout";
import SliderMovies from "../../components/Slider/SliderMovies";
import './Homepage.css'

const HomePage=()=>{
   return(
      <Fragment className='HomePage'>
         <CarauselMovies/>
         <Tap/>
         <SliderMovies/>

      </Fragment>
   )
}

export default HomePage;