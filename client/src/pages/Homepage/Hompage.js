import { Fragment } from "react";
import Tap from "../../components/Tap/Tap";
import SliderMovies from "../../components/Slider/SliderMovies";
import styled from "styled-components";

const HomePage=()=>{
   return(
      <Fragment>
         <HompageStyle> 
            <div className="Homepage">
               <Tap/>
               <SliderMovies/>
            </div>
         </HompageStyle>
      </Fragment>
   )
}

const HompageStyle = styled.div`
   .moviescontainer{
      border: #BDAD8E solid 2px;
      margin-bottom: 10rem;
      padding: 3rem 0;
   }

   .title{
      color:  #967959;
      margin-top: 5rem;
   }

   @media only screen and (max-width: 600px) {

   }
`;

export default HomePage;