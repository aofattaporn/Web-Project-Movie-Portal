import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row  } from "react-bootstrap"
import './SignIn.css'

const SignInButton=()=>{
   const [showSign, setShowSign] = useState(false);
   const [showLog, setShowLog] = useState(false);

   const handleCloseSign = () => setShowSign(false);
   const handleShowSing = () => setShowSign(true);
   const handleCloseLog = () => setShowLog(false);
   const handleShowLog = () => setShowLog(true);

 return (
   <> 
      <Button onClick={handleShowSing}> SignUp </Button>

      <Button onClick={handleShowLog}> LogIn </Button>


{/*------------------------------------------- Modal SignUp --------------------------------------------------------------- */}

      <Modal className="modal" show={showSign} onHide={handleCloseSign} animation={true} size='lg' fullscreen='md-down' centered >
        <Modal.Header closeButton className="modalheader">
           <Container>
            <h1 className="modalheader__tile justify-content-center" >SING UP</h1>
           </Container>
        </Modal.Header>

        <Container>
           <Row>
              <Col lg='2'></Col>
              <Col lg='8'>
                  <Form className="mt-5 mb-5">
                     <Form.Group className="form__group" >
                        <Form.Label className="form__label" >User Name</Form.Label>
                        <Form.Control className="form__field" type="text"></Form.Control>
                     </Form.Group>
                     <Form.Group className="form__group" >
                        <Form.Label className="form__label" >Email</Form.Label>
                        <Form.Control className="form__field" type="text"></Form.Control>
                     </Form.Group>
                     <Form.Group className="form__group" >
                        <Form.Label className="form__label" >Password</Form.Label>
                        <Form.Control className="form__field" type="text"></Form.Control>
                     </Form.Group>
                     <Form.Group className="form__group" >
                        <Form.Label className="form__label" >Mobile</Form.Label>
                        <Form.Control className="form__field" type="text"></Form.Control>
                     </Form.Group>

                  <Container className="text-center">
                     <button className="Modal__Body__Button mt-5">Sign up</button>
                  </Container>
                  </Form>
              </Col>
              <Col lg='2'></Col>

           </Row>
        </Container>
        


        <Modal.Footer className="modal__footer">
        </Modal.Footer>
      </Modal>

{/*------------------------------------------- Modal Login--------------------------------------------------------------- */}

      <Modal className="modal" show={showLog} onHide={handleCloseLog} animation={true} size='lg' fullscreen='md-down' centered >
        <Modal.Header closeButton className="modalheader">
           <Container>
            <h1 className="modalheader__tile justify-content-center" >LOG IN</h1>
           </Container>
        </Modal.Header>

        <Container>
           <Row>
              <Col lg='2'></Col>
              <Col lg='8'>
                  <Form className="mt-5 mb-5">
                     <Form.Group className="form__group" >
                        <Form.Label className="form__label" >User Name</Form.Label>
                        <Form.Control className="form__field" type="text"></Form.Control>
                     </Form.Group>
                     <Form.Group className="form__group" >
                        <Form.Label className="form__label" >Password</Form.Label>
                        <Form.Control className="form__field" type="text"></Form.Control>
                     </Form.Group>


                  <Container className="text-center">
                     <button className="Modal__Body__Button mt-5">Log In</button>
                  </Container>
                  </Form>
              </Col>
              <Col lg='2'></Col>

           </Row>
        </Container>
        


        <Modal.Footer className="modal__footer">
        </Modal.Footer>
      </Modal>
   </>
   )
}

export default SignInButton;

