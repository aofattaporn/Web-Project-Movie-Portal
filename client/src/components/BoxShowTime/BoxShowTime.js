import { Fragment } from "react"
import { Col, Container , Row} from "react-bootstrap"
import styled from "styled-components"
import propTypes from "prop-types";
import serviceMovies from "../../service/movieService";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import serviceProgram from "../../service/programService";
import ListTheater from "../List/ListTheater";
import 'aos'
import AOS from "aos";

const BoxShowTime =(props)=>{

   const { movie_id, cinema_id, today, tommorrow } = props;
   
   const [movie, setMovie] = useState({});
   const [theater, setTheater] = useState([]);

   const getMovie = useCallback(()=>{
      serviceMovies.getMovieById(movie_id)
      .then(res => {
         setMovie(res.data);
      })
      .catch(err => {
         console.log(err);
      })

      const dateSet = {
         cinema_id: cinema_id,
         movie_id: movie_id,
         start: today,
         end: tommorrow
     }

      serviceProgram.getThearter(dateSet)
      .then(res => {
         setTheater(res.data);
         console.log(res.data);
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

            
               <Container fluid="md" className="showtime"                         
                        data-aos='fade-up'
                        data-aos-duration="1000"  >
                  <Container >
                     <Row className="showtime__box">
                        <Col className="showtime__container" sm="3">
                           <div className="showtime__container">
                              <img className='showtime__container__img' variant="top" src={`http://localhost:4000/image/poster/${movie.image}`} alt="showtim img" />
                           </div>
                        </Col>
                        <Col className="title" sm="9">
                           <Container>
                              <Row className="title__movie mb-4">
                                 <h1>{movie.name}</h1>
                              </Row>
                                 {
                                    theater.map((item, idx) => {
                                       return (
                                          <Row key={idx}>
                                             <ListTheater 
                                            
                                                theater={item}
                                                movie_id={movie_id}
                                                cinema_id={cinema_id}
                                                today={today} 
                                                tommorrow={tommorrow}                                                                              
                                             />
                                          </Row>
                                       );
                                    })
                                 }
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

@media only screen and (max-width: 1200px) {
   .showtime__container__img{
      height: 15rem;
   }
}

`


BoxShowTime.propTypes ={
   movie_id: propTypes.string,
   program_id: propTypes.string,
   cinema_id: propTypes.string,
   today: propTypes.string,
   tommorrow: propTypes.string
}



export default BoxShowTime;