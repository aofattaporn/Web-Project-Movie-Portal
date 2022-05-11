import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react"
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import propTypes from "prop-types"
import serviceMovie from "../../service/movieService";
import 'aos'
import AOS from "aos";
import { useCallback } from "react";
 
const MovieTap = (props) =>{

   const { movie, cinema} = props;

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
      <Fragment>
         <TapMovieStyle> 
            <div className="tapMovie">
               <div className="tapMovie__content">
               <Container>
                  <Row className="box-container">
                     <Container>
                        <Row className="box-container-row">

                           <Col lg="4" md="5" sm="12">
                              <div className="box-container__img">
                                 { movie 
                                    ? <Image data-aos='fade-up' data-aos-duration="800" className="container-img__image" variant="top" src={`http://localhost:4000/image/poster/${movie.image}`} />
                                    : <Image data-aos='fade-up' data-aos-duration="800" className="container-img__image" variant="top" src={`https://i.mydramalist.com/vK4lp_5f.jpg`} />
                                 }
                              </div>
                           </Col>
                           
                           <Col lg="8" md="7" sm="12" className="box-container__content">
                              <Container fluid>
                                 <Row className="container-movie-info">
                                    { movie ? <h1>{movie.name}</h1> : <></>}
                                    {/* <h1>{movie.name}</h1> */}
                                    {/* -------------- check cenema -------------------- */}
                                    {
                                       (!movie && !cinema) ? <></> : 
                                    <>
                                       <div className="container-movie-info__Cinema">
                                          <div className="Cinema__cinemaName">
                                             <h6>{cinema.cinemaName}</h6>
                                          </div>
                                          <div className="Cinema__cinemaArea">
                                             <h6>{cinema.cinemaArea}</h6>
                                          </div>
                                       </div>
                                    
                                       {/* <div className="container-movie-info__genre">
                                          <h6>Genre : </h6>
                                          <h5>{movie.genre}</h5>
                                       </div> */}
                                       <div className="container-movie-info__runtime">
                                          <h6>Runtime : </h6>
                                          <h5>{` ${movie.runtime} Mins`}</h5>
                                       </div>
                                       <div className="container-movie-info__realeased">
                                          <h6>Released date</h6>
                                          <p>{` ${getDate(movie.released)} `}</p>
                                       </div>
                                       <div className="container-movie-info__button-detail">
                                          <Link to={`/details/${movie._id}`}><button className=""> Show Detaile </button></Link>
                                       </div>
                                    </>
                                    }
                                 </Row>
                              </Container>
                           </Col>

                        </Row>
                     </Container>
                  </Row>
               </Container>
               </div>
            </div>
         </TapMovieStyle>
      </Fragment>
   )
}

MovieTap.propTypes = {
   cinema: propTypes.object, 
   movie: propTypes.object
}

const TapMovieStyle = styled.div`

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

   .container-movie-info__genre, .container-movie-info__realeased, .container-movie-info__button-detail
   , .container-movie-info__runtime{
      color: grey;
      position: relative;
      top: -3rem;
      margin: 0rem 2rem;
   }

   .container-movie-info__Cinema{
      display: flex;
      flex-direction: column;
      color: #ffff;
      padding: 0rem 1rem;
   }

   /* ------------ box-image ----------- */
   .container-img__image{
      display: flex;
      justify-content: center;
      margin: 0rem 3rem;
      background-color: #C9B898;
      width: 20rem;
      position: relative;
      top: -6rem;
      align-items: center;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;   
   }

   .container-movie-info h1{
      color: #ffff;
      font-size: 5rem;
      font-weight: bold;
      position: relative;
      text-shadow: 5px 5px #967959;
      top: -6rem;
      height: 6rem;
      overflow-y: scroll;
   }

   .container-movie-info h1:hover{
      position: relative;
      top: -6.1rem;
   }

   /* ------------ box-content ----------- */

   .container-movie-info > *:not(h1){
      padding: 0rem 3rem;
   }

   .Cinema__cinemaName, .Cinema__cinemaArea{
      position: relative;
      top: -5rem
   }

   .Cinema__cinemaName > h6,  .Cinema__cinemaArea > h6 {
      padding: 1rem 2rem;
   }
   .Cinema__cinemaName{
      height: 3rem;
      background-color: #967959;
      align-items: center;
   }
   .Cinema__cinemaArea{
      height: 3rem;
      background-color: #C9B898;
   }
   .container-movie-info__runtime{
      display: flex;
   }

   .container-movie-info__runtime h6, .container-movie-info__runtime h5{
      font-size: 1rem;
   }

   .container-movie-info__realeased h6{
      margin-right: 5rem;
      border-bottom: #967959 solid 2px;
   }

   .container-movie-info__button-detail button{
      border: 0rem;
      color: #ffff;
      background-color: #C9B898;
      height: 3rem;
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

export default MovieTap;