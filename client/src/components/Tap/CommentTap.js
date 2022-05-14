import styled from "styled-components"
import { Col, Container, Image, Row } from "react-bootstrap";


const CommentTap = () =>{
   return (
      <CommentTapStyle>
         <Container className="TapDesc">
            <h1>SHOW REVIEW</h1>
            <main className="description">
            </main>
         </Container>
      </CommentTapStyle>
   )
}

const CommentTapStyle = styled.div`
   .TapDesc{
      color: #ffff;
   }

   .TapDesc h1{
      margin: 10rem 0rem;
      padding-bottom: 2rem;
      border-bottom: #C9B898 solid 2px;
   }

`

export default CommentTap;


