import { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap";
import CardMovie from "../../components/Card/Card";
import serviceMovies from "../../service/movieService";
import '../MoviesPage/MoviesPage.css'
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import 'aos'
import AOS from "aos";


const MoviesPage=()=>{

   const [movies, setMovies] = useState([]);

   useEffect(() => {
      AOS.init();
      AOS.refresh();

      getMovies();
    }, []);


   const getMovies =()=>{
      serviceMovies.getMovies()
      .then((response) => { 
         setMovies(response.data)
      });
   }

   const checkDate =(released)=>{
      let d = new Date(released);
      let n = Date.now();
      let now = new Date(n);
      return d > now;
   }

      
   return(
      <Fragment>

         {/* get all movies now showing  */}
         <Container  fluid="sm">
            <h3 className="title">Movie show</h3>
            <Row  className="moviescontainer "
               data-aos='fade-up'
               data-aos-duration="1000"
               >
                  {
                     movies.filter(movie => {
                        return checkDate(movie.released) === true
                     }).map((item, index) => {      
                        return <Col  key={index} xs='6' sm='6' md='3'><CardMovie title={item.name} image={item.image} released={item.released} /></Col>
                     })
                  }
            </Row>
         </Container>

         {/* get all movies comming zoon  */}
         <Container >
            <h3 className="title">Comming Zoon</h3>
            <Row 
             data-aos='fade-up'
             data-aos-duration="1000"
             className="moviescontainer">
                  {
                     movies.filter(movie => {
                        return checkDate(movie.released) !== true
                     }).map((item, index) => {      
                        return <Col key={index} xs='6' sm='6' md='3'>
                           <CardMovie title={item.name} image={item.image} runtime={item.runtime} />
                           </Col>
                     })
                  }
            </Row>
         </Container>

      </Fragment>
   )
}

export default MoviesPage;