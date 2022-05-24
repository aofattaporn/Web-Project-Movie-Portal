
import styled from "styled-components";
import serviceLike from "../../service/likeService";
import { useState } from "react";
import { useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import components from "../../components";
const { Fragment } = require("react")


const FavoritePage = () =>{

   const [moviefav, setMovieFave] = useState();

   const getMovieFave = () =>{
      serviceLike.getMovieFav()
      .then((response)=> { 
         console.log(response.data.likes)
         setMovieFave(response.data.likes)
      })
      .catch((err)=>{console.log(err)})
   }

   useEffect(()=>{
      getMovieFave();
   }, [])
   
   return (
      <Fragment>
         <FavoritePageStyle>
         { moviefav ?  
            <>
               <Container >
                  <div className="header">
                     <h3 className="header__title">Favorite Movie</h3>
                  </div>
                  <Row 
                  data-aos='fade-up'
                  data-aos-duration="1000"
                  className="moviescontainer">
                     {
                        moviefav.map(((moviefav, index) => {
                           return (
                              <Col key={index} xs='6' sm='6' md='3'>
                                 {
                                    moviefav ? 
                                 <components.CardReserve 
                                    moviefav  =   {moviefav}
                                 ></components.CardReserve> : <></>
                                 }
                              </Col>         
                              )
                        }))
                     }
                  </Row>
               </Container> </>: <></>
            } 
         </FavoritePageStyle>
      </Fragment>
   )
}

const FavoritePageStyle = styled.div`
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

   .ticket-title{
   color: #C9B898;
   background-color: #C9B898;
   }
   
`


export default FavoritePage;