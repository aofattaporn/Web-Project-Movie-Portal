import { Fragment } from "react"
import { Col, Container, Form, Row} from "react-bootstrap"
import axios from "axios";
import { useState } from "react";


const CreateMovie=()=>{

   const [fileImg, setFileImg] = useState(null);


   const uploadFile= async (event)=>{

      event.preventDefault();

      // console.log(fileImg)
      const formData = new FormData();
      formData.append('name', "test1")
      formData.append('image', fileImg)

      console.log(formData.get('image'));
   

      axios.post('http://localhost:4000/movies/upload', formData, {headers: ""})
   


   }


   return (
      <Fragment>
         <Container>

            <Row>
               <Col md="1"></Col>
               <Col md="10">
                  <h1> Create Moviie</h1>

                  <Form onSubmit={uploadFile} >
                        <label>Default file input example</label>
                        <Form.Control name="image" type="file" onChange={event => {setFileImg(event.target.files[0])}} />

                        <button > save </button>
                  </Form>

               
               </Col>
               <Col md="1"></Col>
            </Row>
         </Container>

      </Fragment>
   )
}


export default CreateMovie;