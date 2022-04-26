import { Fragment } from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"

const BoxShowTime =(props)=>{

   const {movie_id} = props;

   return (
      <Fragment>
         <BoxShowTimeStlye>
            <Container>
               <h1>{movie_id}</h1>
            </Container>
         </BoxShowTimeStlye>
      </Fragment>
   )
}

const BoxShowTimeStlye = styled.div`

`

export default BoxShowTime;