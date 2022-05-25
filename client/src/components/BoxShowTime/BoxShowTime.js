import { Fragment } from "react"
import { Col, Container , Row} from "react-bootstrap"
import styled from "styled-components"
import propTypes from "prop-types";
import serviceMovies from "../../service/movieService";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import components from "../index";
import 'aos'
import AOS from "aos";
import { Link } from "react-router-dom";

const BoxShowTime =(props)=>{

   const { movie_id, program } = props;
   
   const [movie, setMovie] = useState({});

   const getMovie = useCallback(()=>{
      serviceMovies.getMovieById(movie_id)
      .then(res => {
         setMovie(res.data);
      })
      .catch(err => {
         console.log(err);
      })
   }, [movie_id]);

   useEffect(()=>{
      AOS.init();
      AOS.refresh();
      getMovie();
   },[getMovie]);

   return (
      <Fragment>
         <BoxShowTimeStlye>
               <Container fluid="md" className="showtime"  >
                  <Container >
                     <Row className="showtime__box">
                        <Col className="showtime__container" sm="3">
                           <div className="showtime__container">
                              { movie.image ? 
                                 <img className='showtime__container__img'                         
                                 // data-aos='fade-up'
                                 // data-aos-duration="500"      
                                 variant="top" 
                                 src={`http://localhost:4000/image/poster/${movie.image}`} 
                                 alt="showtim img" /> :
                                 // <img className='showtime__container__img' variant="top" src={`https://i.mydramalist.com/vK4lp_5f.jpg`} alt="showtim img" />
                                 <></>
                              }
                               <Link to={`/details/${movie._id}`}><button className="button-detail mt-3"> Show Detaile </button></Link>
                           </div>
                        </Col>
                        <Col className="title" sm="9">
                           <Container>
                              <Row className="title__movie mb-4">
                                 {movie.name ? <h1>{movie.name}</h1> : <></>}
                              </Row>
                              <Row>

                                 {
                                    (program) ? 
                                    program.filter(x => x.movies === movie_id)
                                    .map(item => item.theater.toString())
                                    .filter((value, index, self) => self.indexOf(value) === index)
                                    .map((theater, idx) => 
                                       { 
                                          return (
                                          <components.ListTheater
                                             key={idx}
                                             program={program}
                                             movie_id={movie_id}
                                             theater={theater.toString()}
                                          >
                                          </components.ListTheater> 
                                          )
                                       })
                                    :
                                    <h1>Jello world</h1>
                                 }
                              </Row>
                           </Container>
                        </Col>
                     </Row>
                  </Container>
               </Container> 
            

         </BoxShowTimeStlye>
      </Fragment>
   )
}

const BoxShowTimeStlye = styled.div`

   .showtime{
      border-top: 30px solid #C9B898;
      background-color : #ffff;
      height: auto;
      margin-top: 5rem;
      /* margin-bottom: rem; */
      padding-bottom: 5rem;
      width: 75%;
   }

   .showtime h1{
      color: black;
   }

   .showtime__box{
      margin-top: 1rem;
   }

   .showtime__container{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

   }

   .showtime__container__img{
      margin-top: 1rem;
      height: 23rem;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;   }

   .img{
      background-color: #B9B898;
   }

   .title{
      padding: 1rem;
      color: rgba(0, 0, 0, 0.24);

   }

   .title__movie{
      box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 1px;
   }

   .button-detail{
      background-color: #C9B898;
      color: #ffff;
      border: 0;
   }

@media only screen and (max-width: 1200px) {
   .showtime__container__img{
      height: 15rem;
   }
}

`


BoxShowTime.propTypes ={
   movie_id: propTypes.string,
   program: propTypes.array
}



export default BoxShowTime;