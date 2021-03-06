import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../App";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import serviceMovie from "../../service/movieService";
import serviceLike from "../../service/likeService";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'aos'
import 'react-notifications/lib/notifications.css';

import AOS from "aos";
import { useCallback } from "react";
 
const DetailsTap = () =>{

   const { auth } = useContext(AuthContext);
   const { movie_id } = useParams();

   const [movie, setMovie] = useState({});
   const [like, setLike] = useState("unlike");

   const getMovieById = useCallback((token)=>{

      if(token){
         serviceMovie.getMovieByIdCheckLike(token, movie_id)
         .then((response) => {
            setMovie(response.data.movie)
            if(response.data.islike === "true"){
               setLike("like")
            }else{
               setLike("unlike")
            }
         })
         .catch((err) => alert(err));
      }else{
         serviceMovie.getMovieById(movie_id)
         .then((response)=>{
            setMovie(response.data)
         })
         .catch((err) => alert(err));
      }

   }, [auth, movie_id])

   const getDate =(released)=>{
      const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let d = new Date(released);
      return ('release date : ' + d.getDate()+ ' ' + month[(d.getMonth()+ 1 )] + ' '+ d.getFullYear());
   }

   const likeMove = (token) =>{
      if(like === "unlike"){
         const  moviesLike = {
            "id": movie_id,
            "name" : movie.name,
            "image" : movie.image,
            "release" :movie.released
         }
         serviceLike.createLike(token, moviesLike)
         .then((response)=>{ 
            console.log(response)
            NotificationManager.success('', 'Poof! Added to Favorites!') })
         .catch((err)=>{console.log(err)})
         setLike("like")
      }
      
      else if(like === "like"){
         const  newData = {
            "movieTd": movie_id,
         }
         serviceLike.removeLike(auth, newData)
         .then((response)=>{ 
            console.log(response)
            NotificationManager.success('', 'Poof! Removed from Favorites!') })
         .catch((err)=>{console.log(err)})
         setLike("unlike")
      }
   }

   useEffect(()=>{
      AOS.init();
      AOS.refresh();
      window.scrollTo(0, 0);
      getMovieById(auth);
   }, [getMovieById]);


   return (
         <DetailsTapStyle> 
            <div className="tapMovie">

               <div className="box-container">
                  <Container fluid>
                     <Row className="movie">
                        {movie ? <h3 className="movie-name">{movie.name}</h3> : <></>}
                     </Row>
                     <Row>
                        <Col className="container-1" xl="2">
                           <div className="container-img">
                              {movie.image? <Image data-aos='fade-up' data-aos-duration="800" className="container-img__image" variant="top" src={`http://localhost:4000/image/poster/${movie.image}`} /> : <></>}
                           </div>
                        </Col>
                        <Col className="container-2 ps-5" xl="3">
                           { auth? 
                              <div>
                                 {
                                 like === "unlike" ? 
                                 <button onClick={()=>{likeMove(auth)}} >Like this movie!! <span><FavoriteIcon className="like"></FavoriteIcon></span></button>
                                 : 
                                 <button onClick={()=>{likeMove(auth)}} >Remove Like !! <span><FavoriteIcon className="unlike"></FavoriteIcon></span></button>
                                 } 

                              </div>
                           : <></>}

                           <div className="container-movie-info__genre mt-4">
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
                        <NotificationContainer/>

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

   .container-2 button{
      border: 0;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
      color: #ffff;
      background-color: #C9B898;

   }

   .like{
      color: #ffff;
   }
   .unlike {
      color: #B30000;
   }

   .container-2 button:hover{
      position: relative;
      top: -1px;
      /* color: red; */

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