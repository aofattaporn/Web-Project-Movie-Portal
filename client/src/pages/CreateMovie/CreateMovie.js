import { Fragment } from "react"
import { Button, Col, Container, Form, Row, FloatingLabel} from "react-bootstrap"
import axios from "axios";
import { useState } from "react";


const CreateMovie=()=>{

   const [fileImg, setFileImg] = useState(null);
   const [movieName, setMovieName] = useState('');
   const [directorName, setDirector] = useState('');
   const [released, setReleased] = useState('');
   const [runtime, setRuntime] = useState('');
   const [desc, setDesc] = useState('');



   const uploadFile= async (event)=>{

      event.preventDefault();

      const formData = new FormData();
      
      formData.append('movieName', movieName);
      formData.append('directorName', directorName);
      formData.append('released', released);
      formData.append('runtime', runtime);
      formData.append('desc', desc);

      formData.append('image', fileImg);
      
      console.log(formData.get('image'));
      axios.post('http://localhost:4000/movies/upload', formData, { headers: "" } )
      .then( res => {
         res.status(200);
      }).catch( err => {
         console.log(err);
      })
   }


   return (
      <Fragment>
         <Container>

            <Row>
               <Col md="2"></Col>
               <Col md="8">
                  <h1> Create Moviie</h1>

                  <Form onSubmit={uploadFile} >

                  {/* ---------------------------------------- image ----------------------------------------  */}
                     <Form.Group>
                        <Form.Control className="mb-3" name="image" type="file" onChange={event => {setFileImg(event.target.files[0])}}/>
                     </Form.Group>
                     
                  {/* ---------------------------------------- movie name ----------------------------------------  */}
                     <Form.Group>
                        <FloatingLabel controlId="floatingInput" label="Movie Name" className="mb-3">
                           <Form.Control type="text" name="MovieName" placeholder="Movie name" onChange={event => {setMovieName(event.target.value)}}/>
                        </FloatingLabel> 
                     </Form.Group>

                  {/* ---------------------------------------- direct name ----------------------------------------  */}
                     <Form.Group>
                        <FloatingLabel controlId="floatingInput" label="Director Name" className="mb-3">
                           <Form.Control type="text" name="directorName" placeholder="Direct Name" onChange={event => {setDirector(event.target.value)}}/>
                        </FloatingLabel> 
                     </Form.Group>

                  {/* ---------------------------------------- realease date ----------------------------------------  */}
                     <Form.Group>
                        <FloatingLabel controlId="floatingInput" label="Released Date" className="mb-3">
                           <Form.Control type="text" placeholder="realease" onChange={event => {setReleased(event.target.value)}}/>
                        </FloatingLabel> 
                     </Form.Group>             
                     
                  {/* ---------------------------------------- Runtime ----------------------------------------  */}
                  <Form.Group>
                        <FloatingLabel controlId="floatingInput" label="Runtime" className="mb-3">
                           <Form.Control type="text" placeholder="realease" onChange={event => {setRuntime(event.target.value)}}/>
                        </FloatingLabel> 
                  </Form.Group>

                  {/* ---------------------------------------- Desctiption ----------------------------------------  */}
                  <Form.Group>
                        <FloatingLabel controlId="floatingInput" label="description" className="mb-3">
                           <Form.Control as="textarea" rows={3} placeholder="description" onChange={event => {setDesc(event.target.value)}}/>
                        </FloatingLabel> 
                  </Form.Group>

                     <button > save </button>
                  </Form>

               
               </Col>
               <Col md="2"></Col>
            </Row>
         </Container>

      </Fragment>
   )
}


export default CreateMovie;