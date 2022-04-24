import { useContext } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row  } from "react-bootstrap"
import firebaseConfig from "../../config/firebase-config";
import { AuthContext } from "../Auth";
import  axios  from "axios"
import styled from "styled-components";
// import './SignIn.css'

const SignInButton=()=>{
   const [showSign, setShowSign] = useState(false);
   const [showLog, setShowLog] = useState(false);

   const handleSignIn2 = (event) =>{
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

   const handleSignIn = (event) =>{
      event.preventDefault();
      const {email_SignUp, password_SignUp, name_SignUp} = event.target.elements;

      const email = email_SignUp.value;
      const password = password_SignUp.value;
      const name = name_SignUp.value;


      setShowSign(false);
   }

   const handleLogIn = (event) =>{
      event.preventDefault();
      const {email_Login, password_Login} = event.target.elements;

      const email = email_Login.value;
      const password = password_Login.value;

      console.log(email);
      console.log(password);

      axios.post('http://localhost:4000/users/login', 
         { 
            email: email,
            password: password
         }
      )
      .then(response => {
         if(response.data.accesstoken){
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log(localStorage.getItem("user"));
         }else{
            return response;
         }
      });

      setShowSign(false);

   }


 return (
   <ButtonSignStyle> 
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
   </ButtonSignStyle>
   )
}


const ButtonSignStyle = styled.div`

   .modalheader{
      background-color: #BDAD8E;
   }

   .modalheader__tile{
      text-align: center;
      color: rgb(255, 255, 255);
      justify-content: center;

   }

   .Modal__Body__Button{
      background-color: #BDAD8E;
      color: rgb(255, 255, 255);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border: none;
      width: 15rem;
      height: 3rem;
   }

   /* input style  */

   .form__group{
      padding: 15px 0 0;
   }

   .form__field{
      border: 0;
      border-bottom: 2px solid #17130a7e;
      outline: none;
      font-size: 1.3rem;
      padding: 7px 0;
      color: #BDAD8E;
      background: transparent;
      transition: border-color 0.2s;
   }
   .form__field::placeholder{
      color: transparent;
   }
   .form__field-shown ~ .form__label{
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
   }

   *:focus{
      outline: none;
   }

   .form__label {
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #3e3e3c;
   }

   .modal__footer{
      background-color: #BDAD8E;
      height: 50px;
   }

`;



export default SignInButton;

