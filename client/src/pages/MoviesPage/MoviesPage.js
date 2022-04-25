import { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap";
import CardMovie from "../../components/Card/Card";
import serviceMovies from "../../service/movieService";
import styled from "styled-components";
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
         <MoviePageStyle> 
               {/* get all movies now showing  */}
               <Container  fluid="sm">
                  <div className="header">
                     <h3 className="header__title">Movie show</h3>
                     <section className="header__filter">
                        <button className="header__filter__button"> A - Z </button>
                        <button className="header__filter__button"> Like </button>
                        <button className="header__filter__button"> Ddate </button>
                     </section>
                  </div>
                  <Row  className="moviescontainer"
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
                  <div className="header">
                     <h3 className="header__title">Comming Zoon</h3>
                  </div>
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
         </MoviePageStyle>
      </Fragment>
   )
}


const MoviePageStyle = styled.div`

   /* ------------------------- container-fram ------------------------- */

   .moviescontainer{
      border: 2px solid #BDAD8E;
      padding-top: 3rem;
   }

   /* ------------------------- header-button ------------------------- */
   .header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 5rem;
      margin-bottom: 2em;
      
   }

   .header__title{
      color: #BDAD8E;
   }
   
   .header__filter__button{
      margin-right: 1rem;
      border: 0;
      border-radius: 10px;
      background-color: #BDAD8E;
      color: #ffff;
      width: 5rem;
   }

   .header__filter__button:hover{
      cursor: pointer;
   }

`;

export default MoviesPage;