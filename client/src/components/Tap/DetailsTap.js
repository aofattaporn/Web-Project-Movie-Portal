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
      <Fragment>
         <DetailsTapStyle> 
            <div className="tapMovie">
               <div className="box-container">
                  <Container fluid>
                     <Row>
                        <Col className="container-1" md="3">
                           <div className="container-img">
                              <Image data-aos='fade-up' data-aos-duration="800" className="container-img__image" variant="top" src={`http://localhost:4000/image/poster/${movie.image}`} />
                           </div>
                        </Col>
                        <Col className="container-2" md="2">
                           <h1>d</h1>
                        </Col>
                        <Col className="container-3" md="7">
                           <video className="video"  height="500" controls >
                              <source src="http://localhost:4000/video/default.mp4" type="video/mp4"/>
                           </video>
                        </Col>
                     </Row>
                  </Container>
               </div>
            </div>
         </DetailsTapStyle>
      </Fragment>
   )
}

const DetailsTapStyle = styled.div`

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
      margin: 0rem 5rem;
      top: 10rem;
      background-color: #ffff;
      height: 20rem;
   }

   /* ------------------- container-1 --------------------------------- */

   .container-1{
      background-color: #ffff;
   }

   .container-img__image{
      width: 20rem;
      position: relative;
      top: -6rem;
      left: 5rem;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;   
   }

   /* ------------------- container-2 --------------------------------- */

   .container-2{
      background-color: #ffff;
   }

   .video{
      position: relative;
      top: -6rem;
      left: 5rem;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;   
   }

   /* ------------------- container-3 --------------------------------- */

   .container-3{
      background-color: #ffff;
   }




`

export default DetailsTap;