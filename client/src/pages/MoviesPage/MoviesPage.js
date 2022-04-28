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
import { useCallback } from "react";


const MoviesPage=()=>{

   const [movies, setMovies] = useState([]);
   const [sort, setSort] = useState('');


   const getMovies =()=>{
      serviceMovies.getMovies()
      .then((response) => { 
         setMovies(response.data)
      });
   }

   const sortByCharacterASC = async () => {
      
      if(sort !== "by ASC" ){
         let temp = movies.sort((a,b)=> (a.name > b.name ? -1 : 1))
         await setMovies([]);
         await setMovies(temp);
         await setSort("by ASC");

      }
   };

   const sortByCharacterDSC = async () => {
      if(sort !== "by DSC" ){
         let temp = movies.sort((a,b)=> (a.name > b.name ? 1 : -1))
         await setMovies([]);
         await setMovies(temp);
         await setSort("by DSC");

      }
   };

   const sortByDateReleas = async () => {
      if(sort !== "by Date" ){
         let temp = movies.sort((a,b)=> (a.released > b.released ? 1 : -1))
         await setMovies([]);
         await setMovies(temp);
         await setSort("by Date");

      }
   }
   

   // when on initial 
   useEffect(() => {
      AOS.init();
      AOS.refresh();
      getMovies();
      
    }, []);

   // when on Click 
   useEffect(()=>{     
      AOS.init();
 
      // AOS.refresh();

    }, [sortByCharacterASC, sortByCharacterDSC])

 // when on Click 
   // useEffect(()=>{
   //    sortByCharacterDSC();
   //  }, [])



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
                        <button className="header__filter__button ASC" onClick={sortByCharacterASC} > A - Z </button>
                        <button className="header__filter__button" onClick={sortByCharacterDSC}> Z - A </button>
                        <button className="header__filter__button" onClick={sortByDateReleas}> Released </button>
                     </section>
                  </div>
                  <Row  className="moviescontainer"
                     data-aos='fade-up'
                     data-aos-duration="2000"
                     >
                        {
                           movies.filter(movie => {
                              
                              return checkDate(movie.released) !== true
                              
                           }).map((item, index) => {      
                              console.log(item);

                              return <Col  key={index} xs='6' sm='6' md='3'><CardMovie title={item.name} image={item.image} released={item.released} runtime={item.runtime} /></Col>
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
                              return checkDate(movie.released) === true
                           }).map((item, index) => {      
                              return <Col key={index} xs='6' sm='6' md='3'>
                                 <CardMovie title={item.name} image={item.image} runtime={item.runtime} genre={item.genre}/>
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
      background-color: rgb(151, 121, 89);
   }

   .ASC:active{
      background-color: rgb(151, 121, 89);

   }

`;

export default MoviesPage;