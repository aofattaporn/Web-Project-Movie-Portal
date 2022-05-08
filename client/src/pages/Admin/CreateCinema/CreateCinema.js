import { useState } from "react";
import { Fragment } from "react"
import { Container, Col, Row, Form, FloatingLabel } from "react-bootstrap"
import serviceCinemas from "../../../service/cienemaService"
import styled from 'styled-components'
import swal from "sweetalert"


const CreateCinema = ()=>{

   // manage state 
   const [cinemaName, setCinemaName] = useState('');
   const [cinemaArea, setCinemaArea] = useState('Bangkok');

   const onSubmitCinema =(event)=>{

      event.preventDefault();

      console.log(cinemaName);
      console.log(cinemaArea);

      const newCinema = {
         "cinemaName" : cinemaName,
         "cinemaArea" : cinemaArea
      }

      serviceCinemas.createCinema(newCinema)
      .then((res) =>{ 
         console.log(res)
         if(res.status === 200){
            swal("Add Program Success!", "You clicked the button!", "success");
         }
      })
      .catch((err) => {
         console.log(err);
         swal("Add Program fail!", "You clicked the button!", "error")
      });
   
   }


   return (
      <Fragment>
         <CreateCinemaStyle>
            <Container className="createCinema-cotaine">
               <Row>
                  <Col md="2"></Col>
                  <Col md="8">
                     <h1 className="form-title"> Create Cinema</h1>

                     <Form onSubmit={onSubmitCinema}>
                        {/* -------------------------------- cinemanName ----------------------------------------  */}
                        <Form.Group>
                           <FloatingLabel controlId="floatingInput" label="Cinema Name" className="mb-3">
                              <Form.Control type="text" name="CinemaName" placeholder="Cinema Name" onChange={event => setCinemaName(event.target.value)} />
                           </FloatingLabel> 
                        </Form.Group>

                        {/* -------------------------------- cinema-Area ----------------------------------------  */}
                        <Form.Group>
                           <Form.Select name="CinemaArea" onChange={event => setCinemaArea(event.target.value)}>
                              <option value={"Bangkok"}>Bangkok</option>
                              <option value={"Central"}>Central</option>
                              <option value={"North"}>North</option>
                              <option value={"West"}>West</option>
                              <option value={"NorthEast"}>NorthEast</option>
                              <option value={"South"}>South</option>
                              <option value={"East"}>East</option>
                           </Form.Select>
                        </Form.Group>

                        {/* -------------------------------- button ----------------------------------------  */}
                        <Form.Group className="containerbutton">
                           <button className="containerbutton__button" > save </button>
                        </Form.Group>

                     </Form>
                  </Col>
                  <Col md="2"></Col>
               </Row>
            </Container>
         </CreateCinemaStyle>
      </Fragment>
   )
}

const CreateCinemaStyle = styled.div`

   .createCinema-cotaine{
      margin-top: 5rem ;
      margin-bottom: 5rem ;
   }

   .form-title{
      margin-bottom: 2rem;
      color: #BDAD8E;
   }

   .containerbutton{
      display: flex;
      justify-content: end;
      margin: 2rem;
   }

   .containerbutton__button{
      background-color: #BDAD8E;
      height: 2.5rem;
      width: 5rem;
      border-radius: 5px;
      border: none;
      color: #ffff;
   }

`;

export default CreateCinema;