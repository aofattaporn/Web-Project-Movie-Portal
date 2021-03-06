import { Fragment } from "react"
import styled from "styled-components"
import {Col, Container, Form, Row, FloatingLabel} from 'react-bootstrap'
import serviceMovies from '../../../service/movieService'
import serviceCinemas from '../../../service/cienemaService'
import serviceProgram from '../../../service/programService'
import DateTimePicker from 'react-datetime-picker'
import { useState } from "react"
import { useEffect } from "react"
import swal from "sweetalert"

const CreateProgram = ()=>{

   // manage state 
   const [date, setDate] = useState(new Date());
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
           { type: "A1" , price: 220, status: false },
           { type: "A2" , price: 220, status: false },
           { type: "A3" , price: 220, status: false },
           { type: "A4" , price: 220, status: false },
           { type: "A5" , price: 220, status: false },

           { type: "B1" , price: 120, status: false },
           { type: "B2" , price: 120, status: false },
           { type: "B3" , price: 120, status: false },
           { type: "B4" , price: 120, status: false },
           { type: "B5" , price: 120, status: false },

           { type: "C1" , price: 120, status: false },
           { type: "C2" , price: 120, status: false },
           { type: "C3" , price: 120, status: false },
           { type: "C4" , price: 120, status: false },
           { type: "C5" , price: 120, status: false },

           { type: "D1" , price: 120, status: false },
           { type: "D2" , price: 120, status: false },
           { type: "D3" , price: 120, status: false },
           { type: "D4" , price: 120, status: false },
           { type: "D5" , price: 120, status: false },

           { type: "E1" , price: 120, status: false },
           { type: "E2" , price: 120, status: false },
           { type: "E3" , price: 120, status: false },
           { type: "E4" , price: 120, status: false },
           { type: "E5" , price: 120, status: false },
        ],
          
         cinema: cinemaSelect,
         movies: movieSelect,
      }

      serviceProgram.createProgram(newCinema)
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
         <CreateProgramStyle > 
            <Container className="createProgram-cotainer">
               <Row >
                  <Col  md="2"></Col>
                  <Col  md="8">
                     <h1 className="title"> Create Programs </h1>

                     <Form onSubmit={onSubmit}>

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

                        {/* -------------------------------- date ----------------------------------------  */}

                        <DateTimePicker className="test mb-3" onChange={setDate} value={date} />

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

   .test{
      /* color: white; */
      background-color: white;
      width: 20rem;
      height: 3rem;

   }


`;

export default CreateProgram;
