import { Fragment } from "react"
import {Col, Container, Form, Row, FloatingLabel} from "react-bootstrap"
import axios from "axios";
import { useState } from "react";
import styled from 'styled-components';
import swal from "sweetalert"


const CreateMovie=()=>{

   // manage state 
   const [fileImg, setFileImg] = useState({});
   const [fileImgURL, setFileImgURl] = useState(null); 
   const [movieName, setMovieName] = useState('');
   const [directorName, setDirector] = useState('');
   const [genre, setGener] = useState('');
   const [released, setReleased] = useState('');
   const [runtime, setRuntime] = useState('');
   const [desc, setDesc] = useState('');

   const uploadFile= async (event)=>{

      event.preventDefault();

      const formData = new FormData();
      
      formData.append('movieName', movieName);
      formData.append('directorName', directorName);
      formData.append('genre', genre);
      formData.append('released', released);
      formData.append('runtime', runtime);
      formData.append('desc', desc);

      formData.append('image', fileImg);
      
      console.log(formData.get('image'));
      axios.post('http://localhost:4000/movies/upload', formData)
      .then( res => {
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

   const handleUploadImage =(event) =>{
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => { 
         setFileImg(file) 
         setFileImgURl(reader.result) 
      }

      reader.readAsDataURL(file)

   }


   return (
      <Fragment>
         <CreateMovieStyle> 
            
            <Container className="createMovie-cotainer">

               <Row>
                  <Col md="2"></Col>
                  <Col md="8">
                     <h1 className="form-title"> Create Moviie</h1>

                     <Form onSubmit={uploadFile} >

                     {/* ---------------------------------------- image ----------------------------------------  */}
                        <Form.Group>
                           <Form.Control className="mb-3" name="image" type="file" onChange={event => {handleUploadImage(event)}}/>
                           <div className="container-imgpreview">
                              <img type="image" className="image-preview" src={fileImgURL ? fileImgURL :   null}  alt="img"/>
                           </div>
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

                      {/* ---------------------------------------- gener ---------------------------------------------------  */}
                        <Form.Group>
                           <FloatingLabel controlId="floatingInput" label="gener " className="mb-3">
                              <Form.Control type="text" placeholder="gener" onChange={event => {setGener(event.target.value)}}/>
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
                     </Form.Group >
                     <Form.Group className="containerbutton">
                        <button className="containerbutton__button" > save </button>
                     </Form.Group>
                     </Form>

                  
                  </Col>
                  <Col md="2"></Col>
               </Row>
            </Container>
         </CreateMovieStyle>
      </Fragment>
   )
}

const CreateMovieStyle = styled.div`
   .form-title{
      color: #BDAD8E;
      margin-bottom: 2rem;
   }

   .container-imgpreview{
      display: flex;
      justify-content: center;
      /* margin: 0 auto; */
      /* width: 10px; */
   }

   .image-preview{
      width: 300px;
      margin: 3rem 0rem;
   }

   .createMovie-cotainer{
      margin-top: 5rem ;
      margin-bottom: 5rem ;
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



`

export default CreateMovie;