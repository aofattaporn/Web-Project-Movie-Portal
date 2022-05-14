import { useContext } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row , FloatingLabel } from "react-bootstrap"
import  axios  from "axios"
import styled from "styled-components";
import { AuthContext } from "../../App";
import swal from "sweetalert"
// import jwt from "jwt-decode";

const SignInButton=()=>{

   const {auth, setAuth} = useContext(AuthContext);

   const [showSign, setShowSign] = useState(false);
   const [showLog, setShowLog] = useState(false);
   const [user, setUser] = useState(null);

   const handleSignIn = (event) =>{
      event.preventDefault();
      const {email_SignUp, password_SignUp, name_SignUp} = event.target.elements;

      const email = email_SignUp.value;
      const password = password_SignUp.value;
      const name = name_SignUp.value;

      axios.post('http://localhost:4000/users/register', 
      { 
         username: name,
         email: email,
         password: password
      }
   )
   .then(response => {
      console.log(response.data)
      if(response.data.accesstoken){
            swal("Register Success!", "You clicked the button!", "success");
            localStorage.setItem("user", JSON.stringify(response.data));
            setAuth(localStorage.getItem("user"));
            setUser(localStorage.getItem("user"));
            console.log(localStorage.getItem("user"));
         
      }else{
         return response;
      }
   });

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
            // if(response.status == 200){
               swal("Login Success!", "You clicked the button!", "success");
               localStorage.setItem("user", JSON.stringify(response.data));
               setAuth(localStorage.getItem("user"));
               setUser(localStorage.getItem("user"));
               console.log(localStorage.getItem("user"));
            // }
         }else{
            return response;
         }
      });

      setShowSign(false);
      setShowLog(false);


   }

   // const handlelogout =  async (event) => {
   //    event.preventDefault();

   //    console.log(localStorage.getItem("user"));
   //    await localStorage.removeItem("user");
   //    await setUser(null);
   //    await setAuth(null);
   //    setShowLog(false);
   //    setShowLog(false);

   // }


 return (
   <ButtonSignStyle> 

         <Button  className="button-signIn" onClick={()=> {setShowSign(true)}}> Sign up </Button>
         <Button  className="button-logIn" onClick={()=> {setShowLog(true)}}> Login </Button>

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

                        <Form.Group>
                           <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                              <Form.Control type="text" name="email_Login" placeholder="Cinema Name"/>
                           </FloatingLabel> 
                        </Form.Group>
                        
                        <Form.Group>
                           <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                              <Form.Control type="text" name="password_Login" placeholder="Cinema Name"/>
                           </FloatingLabel> 
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


`;



export default SignInButton;

