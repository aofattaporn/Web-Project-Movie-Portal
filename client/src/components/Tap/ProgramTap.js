import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const ProgramTap = () =>{
   return (
      <ProgramTapStyle>
         <div className="program-container">
            <Container fluid>
               <Row>
                  <Col></Col>
                  <Col><h1>dsfsd</h1></Col>
                  <Col></Col>
               </Row>
            </Container>
         </div>
      </ProgramTapStyle>
   )
}

const ProgramTapStyle = styled.div`

   .program-container{
      background-color: #ffff;
      margin: 5rem;
   }

`

export default ProgramTap;