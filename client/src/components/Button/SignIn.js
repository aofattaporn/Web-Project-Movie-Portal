import { useContext } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row  } from "react-bootstrap"
import firebaseConfig from "../../config/firebase-config";
import { AuthContext } from "../Auth";
import './SignIn.css'

const SignInButton=()=>{
   const [showSign, setShowSign] = useState(false);
   const [showLog, setShowLog] = useState(false);

   const handleSignIn = (event) =>{
      event.preventDefault();
      const {email_SignUp, password_SignUp, name_SignUp} = event.target.elements;
      console.log(email_SignUp.value);
      console.log(password_SignUp.value);
      
      try {
         firebaseConfig.auth().createUserWithEmailAndPassword(email_SignUp.value, password_SignUp.value)
         .then((userCredential) => {
            userCredential.additionalUserInfo.username = name_SignUp.value;
            console.log(userCredential.user);
         });
      } catch (error) {
         console.log(error.code);
         console.log(error.message);
      }

      setShowSign(false);
   }

   const handleLogIn = (event) =>{
      event.preventDefault();
      const {email_Login, password_Login} = event.target.elements;

      try {

         firebaseConfig.auth().signInWithEmailAndPassword(email_Login.value, password_Login.value)
         .then((userCredential)=>{

            console.log(userCredential.user.email);
            console.log(userCredential.user.uid);
            console.log(userCredential.user.getIdToken);
            console.log(firebaseConfig.auth().currentUser.getIdToken(true));

            // console.log("Login complete");
            // setShowLog(false);

         });

      }

      
      catch (error) {
         alert(error);
      }

      setShowSign(false);


   }


 return (
   <> 
      <Button onClick={()=> {setShowSign(true)}}> SignUp </Button>

      <Button onClick={()=> {setShowLog(true)}}> LogIn </Button>

{/*------------------------------------------- Modal SignUp --------------------------------------------------------------- */}

      <Modal className="modal" show={showSign} onHide={()=>{setShowSign(false)}} animation={true} size='lg' fullscreen='md-down' centered >
        <Modal.Header closeButton className="modalheader">
           <Container>
            <h1 className="modalheader__tile justify-content-center" >SING UP</h1>
           </Container>
        </Modal.Header>

        <Container>
           <Row>
              <Col lg='2'></Col>
              <Col lg='8'>
                  <Form className="mt-5 mb-5" onSubmit={handleSignIn}>
                     <Form.Group className="form__group" >
                        <Form.Label className="form__label" >UserName</Form.Label>
                        <Form.Control className="form__field" name="name_SignUp" type="text" placeholder="Enter Name"></Form.Control>
                     </Form.Group>

                     <Form.Group className="form__group" >
                        <Form.Label className="form__label" >Email</Form.Label>
                        <Form.Control className="form__field" name="email_SignUp" type="text" placeholder="Enter Email"></Form.Control>
                     </Form.Group>

                     <Form.Group className="form__group" >
                        <Form.Label className="form__label" >Password</Form.Label>
                        <Form.Control className="form__field" name="password_SignUp" type="text" placeholder="Enter Password"></Form.Control>
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

      <Modal className="modal" show={showLog} onHide={()=>{setShowLog(false)}} animation={true} size='lg' fullscreen='md-down' centered >
        <Modal.Header closeButton className="modalheader">
           <Container>
            <h1 className="modalheader__tile justify-content-center" >LOG IN</h1>
           </Container>
        </Modal.Header>

        <Container>
           <Row>
              <Col lg='2'></Col>
              <Col lg='8'>
                  <Form className="mt-5 mb-5" onSubmit={handleLogIn}>
                     <Form.Group className="form__group" >
                        <Form.Label className="form__label" >Email Name</Form.Label>
                        <Form.Control className="form__field" name="email_Login" type="email"></Form.Control>
                     </Form.Group>
                     <Form.Group className="form__group" >
                        <Form.Label className="form__label" >Password</Form.Label>
                        <Form.Control className="form__field" name="password_Login" type="text"></Form.Control>
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

