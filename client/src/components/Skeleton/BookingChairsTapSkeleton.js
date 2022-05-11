import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import 'aos'
import AOS from "aos";
import Skeleton from '@mui/material/Skeleton';

 
const MovieTapSkeleton = (props) =>{

   const getDate =(released)=>{
      const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let d = new Date(released);
      return ('release date : ' + d.getDate()+ ' ' + month[(d.getMonth()+ 1 )] + ' '+ d.getFullYear());
   }

   useEffect(()=>{
      AOS.init();
      AOS.refresh();
      window.scrollTo(0, 0);
   }, []);

   return (
         <MovieTapSkeletonStyle> 
            <div className="tapMovie">
               <div className="tapMovie__content">
               <Container>
                  <Row className="box-container">
                     <Container>
                        <Skeleton variant="rectangular" width="100%rem" height="20rem" />
                     </Container>
                  </Row>
               </Container>
               </div>
            </div>
         </MovieTapSkeletonStyle>
   )
}


const MovieTapSkeletonStyle = styled.div`

   .tapMovie{
      height: 20rem;
      background: linear-gradient( to bottom , rgb(175, 160, 132) , rgba(58,52,36,1) );
   }

   .box-container{
      position: relative;
      top: 10rem;
      background-color: #ffff;
      height: 20rem;
   }




   @media only screen and (max-width: 1100px) {

      .box-container{
      background-color: #ffff;
      height: auto;
      }


      .container-img__image{
         text-align: center;
         display: flex;
         position: relative;
         justify-content: center;
         left: 0.5rem
      }

      .container-img__image{
         width: 15rem;
      }

      .container-img{
         display: flex;
         justify-content: center;
      }

      .container-movie-info__genre, .container-movie-info__realeased, .container-movie-info__button-detail{
         left: 0rem;
      }

      .container-movie-info{
         display: flex;
         justify-content: center;
         align-items: center;
         margin: 0rem auto;
      }

      .container-movie-info h1{
         color: #C9B898;
         font-size: 5rem;
         font-weight: bold;
         position: relative;
         text-shadow: 5px 5px #000;
         top: -6rem;
      }

      .container-movie-info__button-detail{
         margin-left: 0rem;
      }

   }

`

export default MovieTapSkeleton;