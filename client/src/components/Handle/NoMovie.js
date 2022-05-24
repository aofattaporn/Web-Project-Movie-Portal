import { Container, Row } from "react-bootstrap";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faNotEqual } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NoMovie = (props) =>{
   const { title } = props;
   return (
      <NoMovieStyle> 
         <Container>
            <Row>
               <FontAwesomeIcon className="icon" icon={faNotEqual} />
               { title ? 
                <h1 className="text-center title"> [ {title} ]</h1>:
                <h1 className="text-center title"> [ NO MOVIES SHOWTIME ]</h1>
               }
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