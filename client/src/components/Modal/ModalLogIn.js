import * as React from 'react';
import {  Modal, Button } from "react-bootstrap"
import { useState } from 'react';
import styled from 'styled-components';


const ModalLogIn = (props)=> {
   // const { status } =  props;

   const [show, setShow] = useState(true);

   const handleClose = () => setShow(false);
   // const handleShow = () => setShow(true);
 
   return (
      // <ModalProfileImageStyle>
         <ModalLogInStyle>
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
                     <h1>dfsdf</h1>
                  </Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                     <Button variant="primary" >Upload</Button>
                  </Modal.Footer>
                  </Modal>
            </ModalLogInStyle>
   );
 }


const ModalLogInStyle =  styled.div`
.image-prrofile{
   width: 5rem;
   cursor: pointer;
}

.image-preview{
   object-fit: fill;
}
`;

export default ModalLogIn;

