import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react"
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import serviceMovie from "../../service/movieService";
import 'aos'
import AOS from "aos";
import { useCallback } from "react";
 
const MovieTap = () =>{

   const {movie_id} = useParams();

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
      return ('release date : ' + d.getDate()+ ' ' + month[(d.getMonth()+1)] + ' '+ d.getFullYear());
   }

   useEffect(()=>{
      AOS.init();
      AOS.refresh();
      getMovieById();
   }, [getMovieById]);

   return (
      <Fragment>
         <TapMovieStyle> 
            <div className="tapMovie">
               <Container>
                  <Row className="box-container">
                     <Container>
                        <Row className="box-container-row">
                           <Col lg="4" md="5" sm="12" className="box-container__img ">
                              <div className="container-img ">
                                 <Image data-aos='fade-up' data-aos-duration="800" className="container-img__image" variant="top" src={`http://localhost:4000/image/poster/${movie.image}`} />
                              </div>
                           </Col>
                           <Col lg="8" md="7" sm="12" className="box-container__content">
                              <Container fluid>
                                 <Row className="container-movie-info">
                                    <h1>{movie.name}</h1>
                                    <div className="container-movie-info__genre">
                                       <h3>Genre : </h3>
                                       <h5>{movie.genre}</h5>
                                    </div>
                                    <div className="container-movie-info__genre">
                                       <h3>Runtime : </h3>
                                       <h5>{` ${movie.runtime} Mins`}</h5>
                                    </div>
                                    <div className="container-movie-info__realeased">
                                       <h6>Released date</h6>
                                       <p>{` ${getDate(movie.released)} `}</p>
                                    </div>
                                    <div className="container-movie-info__button-detail">
                                       <button className="">
                                          Show Detaile
                                       </button>
                                    </div>
                                 </Row>
                              </Container>
                           </Col>
                        </Row>
                     </Container>
                  </Row>
               </Container>
            </div>
         </TapMovieStyle>
      </Fragment>
   )
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

   .container-img__image{
      width: 20rem;
      position: relative;
      top: -6rem;
      left: 5rem;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;   
   }

   .container-movie-info h1{
      color: #ffff;
      font-size: 5rem;
      font-weight: bold;
      position: relative;
      text-shadow: 5px 5px #967959;
      border-bottom: #C9B898 2px solid;
      top: -6rem;
   }

   .container-movie-info h1:hover{
      position: relative;
      top: -6.1rem;
   }

   .container-movie-info__genre, .container-movie-info__realeased, .container-movie-info__button-detail{
      position: relative;
      top: -5rem
   }

   .container-movie-info__genre{
      display: flex;
      align-items: center;
      margin-left: 3rem;
   }

   .container-movie-info__genre h5{
      background-color: rgb(175, 160, 132);
      border-radius: 10px;
      margin-top: 0.2rem;
      margin-left: 1rem;
      padding-left: 0.5rem;
      width: 7rem;
      color: #ffff;
   }

   .container-movie-info__realeased{
      margin-top: 1rem;
      margin-left: 3rem;
   }

   .container-movie-info__realeased h6{
      border-bottom: 3px solid #967959;
      margin-right: 20rem;
   }
   .container-movie-info__realeased p{
      color: grey;
      padding-left: 1.2rem;
   }

   .container-movie-info__button-detail{
      margin-left: 3rem;
   }
   .container-movie-info__button-detail button{
      width: 20rem;
      height: 3rem;
      border: 0;
      background-color: #C9B898;
      color: #ffff;
   }
   .container-movie-info__button-detail button:hover{
      font-weight: bold;
      background-color: #967959;
   }

   .box-container-row{
      display: flex;
      flex-wrap: wrap;
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


   }


   


`

export default MovieTap;