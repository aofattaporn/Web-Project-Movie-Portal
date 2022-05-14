import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react"
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import serviceMovie from "../../service/movieService";
import 'aos'
import AOS from "aos";
import { useCallback } from "react";
 
const DetailsTap = () =>{

   const { movie_id } = useParams();

   // manage state in component 
   const [movie, setMovie] = useState({});

   const getMovieById = useCallback(()=>{
      serviceMovie.getMovieById(movie_id)
      .then((res) => {setMovie(res.data)})
      .catch((err) => alert(err));
   }, [movie_id])

   const getDate =(released)=>{
      const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let d = new Date(released);
      return ('release date : ' + d.getDate()+ ' ' + month[(d.getMonth()+ 1 )] + ' '+ d.getFullYear());
   }

   useEffect(()=>{
      AOS.init();
      AOS.refresh();
      window.scrollTo(0, 0);
      getMovieById();
   }, [getMovieById]);


   return (
         <DetailsTapStyle> 
            <div className="tapMovie">
               <div className="box-container">
                  <Container fluid>
                     <Row className="movie">
                        <h3 className="movie-name">{movie.name}</h3>
                     </Row>
                     <Row>
                        <Col className="container-1" xl="2">
                           <div className="container-img">
                              <Image data-aos='fade-up' data-aos-duration="800" className="container-img__image" variant="top" src={`http://localhost:4000/image/poster/${movie.image}`} />
                           </div>
                        </Col>
                        <Col className="container-2" xl="3">
                           <div className="container-movie-info__genre">
                              <h6>Genre : </h6>
                              <h5>{movie.genre}</h5>
                           </div> 
                           <div className="infomation">
                              <div className="container-movie-info__runtime">
                                 <h6>Runtime : </h6>
                                 <h5>{` ${movie.runtime} Mins`}</h5>
                              </div>

                              <div className="container-movie-info__director">
                                 <h6>Runtime : </h6>
                                 <h5>{` ${movie.director} Mins`}</h5>
                              </div>
                              
                              <div className="container-movie-info__realeased">
                                 <h6>Released date</h6>
                                 <p>{` ${getDate(movie.released)} `}</p>
                               </div>
                           </div>
                        </Col>
                        <Col className="container-3 text-center" lg="12" xl="7">
                           <video className="video"  controls >
                              <source src="http://localhost:4000/video/default.mp4" type="video/mp4"/>
                           </video>
                        </Col>
                     </Row>
                  </Container>
               </div>
            </div>
            <div >
               <Container className="TapDesc">
                  <h1>SYNOPSIS</h1>
                  <main className="description">
                     <p>{movie.desc}</p>
                  </main>
               </Container>
            </div>
         </DetailsTapStyle>
   )
}

const DetailsTapStyle = styled.header`

   .tapMovie{
      height: 40rem;
      background: linear-gradient( to bottom , rgb(175, 160, 132) , rgba(58,52,36,1) );
   }

   .box-container-row{
      display: flex;
      flex-wrap: wrap;
   }

   .box-container{
      position: relative;
      margin: 1rem 5rem;
      top: 10rem;
      padding-top: 3rem;
      background-color: #ffff;
      height: 20rem;
   }

   /* ------------------- container-1 --------------------------------- */

   .container-1, .container-2, .container-3{
      position: relative;
      top: -8rem;
   }
   

   .movie-name{
      position: relative;
      font-weight: bold;
      font-size:  3rem;
      margin-left: 3rem;
      color: #ffff;
      top: -8rem;
   }

   .container-img {
      display: flex;
      justify-content: center;
   }

   .container-img__image{
      width: 15rem;
      background-color: #17130A;
      position: relative;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;   
   }

   /* ------------------- container-2 --------------------------------- */

   .container-2{
      padding: 4rem 1rem;
   }

   .container-movie-info__runtime, .container-movie-info__genre, .container-movie-info__director{
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
   }

   .container-movie-info__runtime h5, .container-movie-info__genre h5, .container-movie-info__director h5{
      margin: 0rem 1rem;
      color: rgb(151, 121, 89);
   }

   .container-movie-info__realeased h6{
      border-bottom: #C9B898 solid 2px;
   }

   .infomation{
      width: 100%;
      height: 15rem;
   }

   .video{
      width: 100%;
      position: relative;
      top: -6rem;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;   
   }

   /* ------------------- container-3 --------------------------------- */

   .container-3{
      /* background-color: #ffff; */
   }

   .TapDesc{
      color: #ffff;
   }

   .TapDesc h1{
      margin: 5rem 0rem;
      padding-bottom: 2rem;
      border-bottom: #C9B898 solid 2px;
   }

   .description{
      padding: 2rem 5rem;
      color: #ffff;
   }

   @media only screen and (max-width: 1400px) {
      .TapDesc h1{
         margin-top: 5rem;   
      }
   }

   @media only screen and (max-width: 1200px) {
      .video{
         width: 100%;
         top: 0rem;
      }

      .box-container{
         background-color: transparent;
      }
      .container-1{
         margin-bottom: 1rem;
      }
      .container-2{
         background-color: #ffff;
         height: 18rem;
         margin-bottom: 2rem;
         box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }

      .tapMovie{
         height: auto;
      }

      .movie{
         display: flex;
         width: 100vw;
         justify-content: center;
      }

      .movie{
         text-align: center;
         position: relative;
         left: -5rem;
      }

      .TapDesc h1{
         position: relative;
         margin-top: 70rem;   
      }

   }


  
`

export default DetailsTap;