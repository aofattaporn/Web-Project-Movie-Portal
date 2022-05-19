import { useContext } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row , FloatingLabel, NavDropdown } from "react-bootstrap"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import  axios  from "axios"
import styled from "styled-components";
import { AuthContext, UserContext } from "../../App";
import swal from "sweetalert";
import "./SignIn.css";
import { useEffect } from "react";

const SignInButton=()=>{

   const { auth, setAuth } = useContext(AuthContext);
   const { user, setUser } = useContext(UserContext);

   const [showSign, setShowSign] = useState(false);
   const [showLog, setShowLog] = useState(false);
   const [phone, setPhone] = useState("");

   const handleSignIn = (event) =>{

      event.preventDefault();
      const {email_SignUp, password_SignUp, name_SignUp} = event.target.elements;

      const email = email_SignUp.value;
      const password = password_SignUp.value;
      const name = name_SignUp.value;
      const phoneNumber = phone;

      if(name === ""){
         swal(`name Eempty`, "You clicked the button!", "error")
         document.getElementById("name_SignUp").style.borderColor = "red";
      }
      else if(email === ""){
         swal(`Email Eempty`, "You clicked the button!", "error")
         document.getElementById("name_SignUp").style.borderColor = "green";
         document.getElementById("emaii_SignUp").style.borderColor = "red";
         email_SignUp.isValid = true;
      }else if(password === ""){
         swal(`Password Eempty`, "You clicked the button!", "error")
         document.getElementById();
      }else{

      axios.post('http://localhost:4000/users/register', 
      { 
         username: name,
         email: email,
         password: password,
         phone: phone
      })
      .then(response => {
      if(response.data.accesstoken && response.status === 201){
            swal("Register Success!", "You clicked the button!", "success");
            localStorage.setItem("token", JSON.stringify(response.data.accesstoken));
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setAuth(localStorage.getItem("token"));
            setUser(response.data.user);
      }else if(response.status === 400){
         swal("Register fail!", "You clicked the button!", "error")
      }
      })
      .catch((err)=>{
         if(err.response.status === 400){
            if(err.response.data === "All input is valid"){
               swal(`${err.response.data}`, "You clicked the button!", "error")
            }
         }
         swal(`Register fail!${err.response.data}`, "You clicked the button!", "error")
         })
      }
   }

   const handleLogIn = (event) =>{
      event.preventDefault();
      
      const {email_Login, password_Login} = event.target.elements;
      const email = email_Login.value;
      const password = password_Login.value;

      axios.post('http://localhost:4000/users/login', 
         { 
            email: email,
            password: password
         }
      )

      .then(response => {
         console.log(response)
         if(response.status === 201){
            console.log(response.data)

               console.log(response.data);
               swal("Login Success!", "Clicked to close window!", "success");
               localStorage.setItem("token", JSON.stringify(response.data.accesstoken));
               localStorage.setItem("user", JSON.stringify(response.data.user));
               setAuth(localStorage.getItem("token"));
               setUser(localStorage.getItem("user"));
               setShowSign(false);
               setShowLog(false);
         }
      }).catch((err)=>{
         swal("The password is invalid or the user does not have a password.", "Clicked to close window", "error")
      })
   }

   const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setAuth(null);
   }

   // onChange function 
   const onChangePhone = (event) =>{
      event.preventDefault();
      const validatePhone = phone_Validate(event.target.value);
      setPhone(event.target.value);
   }
   // validate function 
   const phone_Validate = (value) =>{
      return value;
   }

   useEffect(()=>{

   }, [user])
   
 return (
   <ButtonSignStyle> 
   {
      !auth ?  
      
      (  <div className="mt-3 ms-5">
            <Button  className="button-signIn " onClick={()=> {setShowSign(true)}}> Sign up </Button>
            <Button  className="button-logIn" onClick={()=> {setShowLog(true)}}> Login </Button>
         </div> ) : 
       <div className="d-flex justify-content-start align-items-center"> 
          <NavDropdown className='Dropdown test mt-2 dropdown' variant="dark" title={user} id="basic-nav-dropdown">
               <Link to={"/profile"}><button className='button-logout'>Profile</button></Link>
               <Link to={"/favorite"}><button className='button-logout'>Favorite</button></Link>
               <button className='button-logout' onClick={handleLogout}>Log out</button>
          </NavDropdown>
          <AccountCircleIcon className="account-icon me-3"></AccountCircleIcon>
       </div>
   }


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
                        <Form.Group>
                           <FloatingLabel  controlId="floatingInput" label="UserName" className="mb-3">
                              <Form.Control isValid={false} id="name_SignUp" type="text" name="name_SignUp" placeholder="UserName"/>
                           </FloatingLabel> 
                        </Form.Group>

                        <Form.Group>
                           <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                              <Form.Control type="text" name="email_SignUp" placeholder="Email"/>
                           </FloatingLabel> 
                        </Form.Group>

                        <Form.Group>
                           <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                              <Form.Control type="text" name="password_SignUp" placeholder="Password"/>
                           </FloatingLabel> 
                        </Form.Group>

                        <Form.Group>
                           <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-3">
                              <Form.Control  onChange={onChangePhone} type="text" name="phone_SignUp" placeholder="String"/>
                           </FloatingLabel>
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
                              <Form.Control type="text" name="password_Login" placeholder="Cinema Name" />
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


   .button-logout{
      width: 100%;
      height: 2rem;
      border-radius: 0px;
      border: none;
      background-color: #BDAD8E;
      color: #ffff;    
   }
    .button-signIn, .button-logIn{
      width: 5rem;
      height: 2rem;
      border-radius: 0px;
      border: none;
      background-color: #BDAD8E;
      color: #ffff;
   }

   .button-logout:hover, .button-signIn:hover, .button-logIn:hover, .button-signIn:hover:active{
      background-color:  #967959;
      border: 0px;
   }
   

   .button-signIn{
      margin-right: 1rem;
   }

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

   .form-floating{
      color: #967959;
      background-color: #967959;
   }

   .form-control{
      color: #967959;
      background-color: #967959;
      border: #967959 2px solid;
   }

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

   .account-icon{
      color: #ffff;
   }

   .Dropdown{
      display: flex;
      text-align: center;
      justify-content: end;
      margin-right: 1rem;
      width: 10rem;
   }

   .dropdown{
      width: auto;
   }


`;



export default SignInButton;

