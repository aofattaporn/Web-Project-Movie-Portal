import { Fragment } from "react";
import Tap from "../../components/Tap/Tap";
import SliderMovies from "../../components/Slider/SliderMovies";
import './Homepage.css'

const HomePage=()=>{
   return(
      <Fragment>
         <div className="Homepage">
            <Tap/>
            <SliderMovies/>
         </div>
      </Fragment>
   )
}

export default HomePage;