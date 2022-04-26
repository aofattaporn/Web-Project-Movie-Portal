import { Fragment } from "react"
import styled from "styled-components"
import {Col, Container, Form, Row, FloatingLabel} from 'react-bootstrap'
import serviceMovies from '../../../service/movieService'
import serviceCinemas from '../../../service/cienemaService'
import serviceProgram from '../../../service/programService'
import { useState } from "react"
import { useEffect } from "react"

const CreateProgram = ()=>{

   // manage state 
   const [date, setDate] =useState('');
   const [theater, setThearter] =useState(1);
   const [movieSelect, setMovieSelect] =useState('');
   const [cinemaSelect, setCinemasSelect] =useState('');
   const [movies, setMovies] =useState([]);
   const [cinemas, setCinemas] =useState([]);


   const getCinemas = ()=>{
      serviceCinemas.getCinemas()
      .then( res => {
         console.log(res.data);
         setCinemas(res.data);
      })
      .catch(err => {
         alert(err);
      })
   }

   const getMovies = ()=>{
      serviceMovies.getMovies()
      .then( res => {
         console.log(res.data);
         setMovies(res.data);
      })
      .catch(err => {
         alert(err);
      })
   }

   useEffect(()=>{
      getCinemas();
      getMovies();
   }, []);

   const onSubmit = (event)=>{

      event.preventDefault();

      const newCinema = {
         date : date, 
         theater: theater,
         seats: [
           { type: "A1" , price: 120 },
           { type: "A2" , price: 120 },
           { type: "A3" , price: 120 },
           { type: "A4" , price: 120 },
           { type: "A5" , price: 120 },
        ],
          
         cinema: cinemaSelect,
         movies: movieSelect,
      }

      serviceProgram.createProgram(newCinema)
      .then(res => console.log(res))
      .catch(err => alert(err));

   }

   return (
      <Fragment>
         <CreateProgramStyle > 
            <Container className="createProgram-cotainer">
               <Row >
                  <Col  md="2"></Col>
                  <Col  md="8">
                     <h1 className="title"> Create Programs </h1>

                     <Form onSubmit={onSubmit}>
                        {/* -------------------------------- date ----------------------------------------  */}
                        <Form.Group>
                           <FloatingLabel controlId="floatingInput" label="Date time" className="mb-3">
                              <Form.Control type="text" name="DateTime" placeholder="Date Time" onChange={event => setDate(event.target.value)}/>
                           </FloatingLabel> 
                        </Form.Group>

                        {/* -------------------------------- theater-number ----------------------------------------  */}
                        <Form.Group>
                           <FloatingLabel controlId="floatingInput" label="Theater Name" className="mb-3">
                              <Form.Control type="text" name="TheaterName" placeholder="Theater Name" onChange={event => setThearter(event.target.value)} />
                           </FloatingLabel> 
                        </Form.Group>

                        {/* -------------------------------- select-cinemas ----------------------------------------  */}
                        <Form.Select aria-label="Default select example1" className="mb-3" name="selectCinema" onChange={event => setCinemasSelect(event.target.value)}>
                           {
                              cinemas.map((cinema)=> {
                                 return (
                                 <option key={cinema._id} value={cinema._id}> {cinema.cinemaName} </option>)
                              })
                           }
                        </Form.Select>

                        {/* -------------------------------- select-movies ----------------------------------------  */}
                        <Form.Select aria-label="Default select example2" className="mb-3" name="selectMovie" onChange={event => setMovieSelect(event.target.value)}>
                           {
                              movies.map((movie, idx)=> {
                                 return (
                                 <option key={idx} value={movie._id}> 
                                    {movie.name}
                                 </option>)
                              })
                           }
                        </Form.Select>

                        {/* -------------------------------- button ----------------------------------------  */}
                         <Form.Group className="containerbutton" >
                           <button className="containerbutton__button" > save </button>
                        </Form.Group>

                     </Form>
                  </Col>
                  <Col  md="2"></Col>
               </Row>
            </Container>
         </CreateProgramStyle>
      </Fragment>
   )
}

const CreateProgramStyle = styled.div`

   .createProgram-cotainer{
      margin-top: 5rem ;
      margin-bottom: 5rem ;
   }

   .title{
      color: #BDAD8E;
   }

   .cinemaArea{
      margin-right: 4rem;
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

export default CreateProgram;
