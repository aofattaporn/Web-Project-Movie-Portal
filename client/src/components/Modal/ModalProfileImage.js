import * as React from 'react';
import { Form, Modal, Button } from "react-bootstrap"
import { useState } from 'react';
import styled from 'styled-components';
import UploadIcon from '@mui/icons-material/Upload';
import serviceUser from '../../service/userService';


const ModalProfileImage=()=> {
   const [show, setShow] = useState(false);
   // const [image, seetImage] = useState("");
   const [fileImg, setFileImg] = useState({});
   const [fileImgURL, setFileImgURl] = useState(null); 

   const handleUploadImage =(event) =>{
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => { 
         setFileImg(file) 
         setFileImgURl(reader.result) 
      }
      reader.readAsDataURL(file)
   }

   const uploadFile= async (event)=>{

      event.preventDefault();

      const formData = new FormData();
      
      formData.append('image', fileImg);
      
      console.log(formData.get('image'));

      serviceUser.updateProfile()
      .then()

   }
 
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
   return (
      // <ModalProfileImageStyle>
      <>
         <Button onClick={handleShow} className="button-prrofile">  <UploadIcon></UploadIcon> </Button>
         <>
                  <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                  centered
                  >
                  <Modal.Header closeButton>
                     <Modal.Title>Upload</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     <Form.Group>
                           <Form.Control className="mb-3" name="image" type="file" onChange={event => {handleUploadImage(event)}}/>
                           <div className="container-imgpreview d-flex justify-content-center">
                              <img type="image" className="image-preview" src={fileImgURL ? fileImgURL : null} width="400px" height={"300px"} alt="img"/>
                           </div>
                     </Form.Group>.
                  </Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                     <Button variant="primary" onClick={uploadFile}>Upload</Button>
                  </Modal.Footer>
                  </Modal>
               </>
      </>
   );
 }

const ModalProfileImageStyle =  styled.div`
.image-prrofile{
   width: 5rem;
   cursor: pointer;
}

.image-preview{
   object-fit: fill;
}
`;

export default ModalProfileImage;

