import { Fragment } from "react";
import Tap from "../../components/Tap/Tap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";
// import components from "../../components";
import {  Container, Row} from 'react-bootstrap';
import serviceMovies from "../../service/movieService";
import { useState } from "react";
import { useEffect } from "react";
import CarouselCard from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardHomePage from "../../components/Card/CardHomePage";
import 'aos'
import AOS from "aos";

const HomePage=()=>{

   const [movies, setMovies] = useState([]);

   const responsive = {
   superLargeDesktop: {
     // the naming can be any, depends on you.
     breakpoint: { max: 4000, min: 3000 },
     items: 5
   },
   desktop: {
     breakpoint: { max: 3000, min: 1024 },
     items: 4
   },
   tablet: {
     breakpoint: { max: 1024, min: 464 },
     items: 2
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1
   }
   };

   const getAllMovies = ()=>{
      serviceMovies.getMovies()
      .then((res) => {setMovies(res.data)}) 
      .catch((err) => {console.log(err)})
    }

    const checkDate =(released)=>{
      let d = new Date(released);
      let n = Date.now();
      let now = new Date(n);
      return d > now;
   }

   useEffect(() =>{
      AOS.init();
      AOS.refresh();
      getAllMovies();
    },[])

   return(
      <Fragment>
         <HompageStyle> 

   {/* ------------------------  carousel-header ------------------------------ */}
               <Carousel>
                  <div>
                     <img src={require("../../assets/images/ads/test.png")} alt="img3"/>
                  </div>
                  <div>
                     <img src={"https://i0.wp.com/theallapps.com/wp-content/uploads/1500x500.jpeg?w=1500&ssl=1"} alt="img3"/>
                  </div>
                  <div> 
                     <img src={"https://cdn.cinemacloud.co.uk/imageFilm/1041_1_2.jpg"} alt="img3" />
                  </div>
                  <div>
                        <img src={"https://pbs.twimg.com/media/FDUbC-WUcAECL-m?format=jpg&name=4096x4096"} alt="img3"/>
                  </div>


               </Carousel>
               <Tap/>

   {/* ------------------------  carousel-movie ------------------------------ */}
               <Container className="carousel">
                  <Row className="carousel___header">
                     <h2>Show time</h2>
                  </Row>
                  <Row className="carousel___body" data-aos='fade-up' data-aos-duration="1000">
                     <CarouselCard responsive={responsive}>
                        {
                           movies.map((item, idx) => {
                              return ( 
                                 <div key={idx}>
                                    <CardHomePage title={item.name} image={item.image} released={item.released} runtime={item.runtime}/>
                                 </div>
                              )
                              }
                           )
                        }
                     </CarouselCard>
                  </Row>
                  <Row className="carousel___header">
                     <h2>Coming Zoon</h2>
                  </Row>
                  <Row className="carousel___body" data-aos='fade-up' data-aos-duration="1000">
                     <CarouselCard responsive={responsive}>
                        {
                         movies.filter(movie => {    
                         return checkDate(movie.released) === true                            
                         }).map((item, idx) => {
                              return ( 
                                 <div key={idx}>
                                    <CardHomePage title={item.name} image={item.image} released={item.released} runtime={item.runtime}/>
                                 </div>
                              )
                              }
                           )
                        }
                     </CarouselCard>
                  </Row>
               </Container>

   {/* ------------------------  Promotion ------------------------------ */}


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

   .carousel{
      /* background-color: #ffff; */
   }


   ul.thumbs {
      display: flex;
      justify-content: center;
   }

   li.thumb{
      border: #967959 3px solid;
   }

   .thumbs-wrapper{
      border-bottom: #967959 3px solid;
   }

   .title{
      color:  #967959;
      margin-top: 5rem;
   }

   /* slider  */
   .carousel___header{
      margin-top: 5rem;
      border-bottom: 2px solid #967959;
   }

   .carousel___header h2 {
      color: #C9B898;
   }

   .carousel___body{
      margin-top: 5rem;
   }
   

   @media only screen and (max-width: 600px) {

   }
`;

export default HomePage;