import { Container, Row } from "react-bootstrap";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faNotEqual } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NoMovie = () =>{
   return (
      <NoMovieStyle> 
         <Container>
            <Row>
               {/* <h1>dfdsfs</h1> */}
               <FontAwesomeIcon className="icon" icon={faNotEqual} />
               <h1 className="text-center title"> [ NO MOVIES SHOWTIME ]</h1>
            </Row>
         </Container>
      </NoMovieStyle>
   )
}

const NoMovieStyle = styled.div`
   .icon{
      font-size: 15rem;
      margin: 5rem auto;
   }
   .title{
      position: relative;
      top: -4rem;
   }
`

export default NoMovie;