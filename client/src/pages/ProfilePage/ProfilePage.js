
import { Row, Col, Container, Image, Form, FloatingLabel, Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext, UserContext } from "../../App";
import { useState } from "react";
import serviceUser from "../../service/userService";
import components from "../../components";
import UploadIcon from '@mui/icons-material/Upload';
import { useEffect } from "react";
import { useCallback } from "react";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import 'aos';
import AOS from "aos";
const { Fragment } = require("react")


const ProfilePage = () =>{

   const { auth, setAuth } = useContext(AuthContext);
   const { user, setUser } = useContext(UserContext);

   const [myuser, setMyUser] = useState({});
   const [fileImg, setFileImg] = useState({});
   const [fileImgURL, setFileImgURl] = useState(null); 
   const [image, setImage] = useState("");
   const [username, setUserName] = useState("");
   const [phone, setPhone] = useState("");
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const getUserByToken = useCallback((auth) => {
      console.log(auth);
      if(!auth){
         console.log(auth);
         return <Navigate to={'/'} replace></Navigate>
      }else{
         serviceUser.getUserByToken(auth)
         .then((response) => { 
            setMyUser(response.data);
            setPhone(response.data.phone);
            setImage(response.data.imageProfile)
            setUserName(response.data.username);
         })
         .catch((err) => {
            if(err.response.status === 403){
               setAuth(null);
               return <Navigate to={'/'} replace></Navigate>
            }
         })
      }
   }, [])

   const updateUser = useCallback((event, token) =>{
      event.preventDefault();
      serviceUser.updateUser(token, {username: username, phone: phone})
      .then((response) => { 

         if(response.status === 200){
            swal({
               title: "Are you sure Edite Profile?",
               // text: "Once deleted, you will not be able to recover this imaginary file!",
               icon: "warning",
               buttons: true,
               dangerMode: false,
             })
             .then((willDelete) => {
               serviceUser.updateUser(token, {username: username, phone: phone})
               .then((response)=>{
                  setUser(response.data.username)
                  localStorage.setItem("user", JSON.stringify(response.data.username));
               })
               
               if (willDelete) {
                 swal("Poof! Your imaginary file has been deleted!", {
                   icon: "success",
                 });
               } else {
                 swal("Your imaginary file is safe!");
               }
             });
         }
         setUser(response.data.username)

      })
      .catch((err) => {console.log(err)})

      // window.location.reload(false);


   }, [username, phone])

   const uploadFile= async (event, token) =>{

      event.preventDefault();
      const formData = new FormData();
      await formData.append('image', fileImg);

      await serviceUser.updateProfile(token, formData)
      .then((response)=>{
         console.log(response.data);
         setImage(response.data.image);
      })
      .catch((err)=>{
         console.log(err);
      })

      handleClose();
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
 
   // onchange function 
   const onChangePhoneNumber = (event) =>{
      event.preventDefault();
      console.log(event.target.value);
      const formattedPhoneNumber = validatePhone(event.target.value);

      setPhone(formattedPhoneNumber);
      console.log(formattedPhoneNumber);
   }

   const onChangeUserName = (event) =>{
      event.preventDefault();
      console.log(event.target.value);
      setUserName(event.target.value);
   }

   // validate user profile 
   const validatePhone = (value) =>{
      if(!value) return value;
      else return value.replace(/[^\d]/g, '');
   }



   useEffect(()=>{
      getUserByToken(auth);
      AOS.init();
      AOS.refresh();
   }, [image])
   
   return (
      <Fragment>
         <ProfilePageStyle>
            <Container fluid className="profile-header">
               <Row> 
                  <Col  xxl="1"></Col>
                  <Col xl="12" xxl="10"  className="profile-body">
                     <Container>
                        <Row>
                           <Col  xl="12" xxl="4" className="profile-body__image-box">
                              <div className="profile-body__image-box__image">
                                 {
                                    image? 
                                    <Image data-aos='fade-up' data-aos-duration="800" className="img-profile" height={"400px"} variant="top" src={`http://localhost:4000/image/poster/${image}`}  />
                                    :
                                    <Image data-aos='fade-up' data-aos-duration="800" className="img-profile" variant="top" alt="img-loading" />

                                 }
                                 <h4>Profile Image</h4>
                                 <>
                                 <Button onClick={handleShow} className="button-prrofile">  <UploadIcon></UploadIcon> </Button>
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
                                          <Button variant="primary" onClick={(event)=> { uploadFile(event, auth)}}>Upload</Button>
                                       </Modal.Footer>
                                    </Modal>
                                  
                                 </>
                              </div>
                           </Col>
                           <Col  xl="12" xxl="8" className="profile-body__content-box">
                              <h1>MY PROFILE</h1>
                              <Form.Group className="profile-body__content-box__form mt-3">
                                 <h5>Name : </h5>
                                 <Form.Control className="input" type="text" defaultValue={username} value={username}  onChange={event => onChangeUserName(event)}></Form.Control>
                              </Form.Group>
                              <Form.Group className="profile-body__content-box__form mt-3">
                                 <h5>Email : </h5>
                                 <Form.Control className="input" type="text" defaultValue={myuser.email} disabled></Form.Control>
                              </Form.Group>
                              <Form.Group className="profile-body__content-box__form mt-3">
                                 <h5>Tell : </h5> 
                                 <Form.Control className="input" type="text" pattern={"[[0-9]*"} value={phone} onChange={event => onChangePhoneNumber(event)} ></Form.Control>
                              </Form.Group>
                              <form className="d-flex justify-content-center">
                                 <button  onClick={(event)=> { updateUser(event, auth)}} className="button-save mt-3">Save</button>
                              </form>
                           </Col>
                        </Row>
                     </Container>
                  </Col>
                  <Col xxl="1"></Col>
               </Row>

            </Container>
            <div className="profile-footer"></div>

         </ProfilePageStyle>
      </Fragment>
   )
}

const ProfilePageStyle = styled.div`
   .profile-header{
      background: linear-gradient( to bottom , rgb(175, 160, 132) , rgba(58,52,32, 5) );
      height: 25rem;
   }

   .profile-body{
      position: relative;
      bottom: -20rem;
      background-color: #ffff;
      height: 25rem;
   }

   .profile-body__image-box{
      height: 20rem;
      display: flex;
      justify-content: center;
   }

   .profile-body__image-box__image{
      padding: 3rem;
      position: relative;
      top: -10rem;
      background-color: #ffff;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
      height: 500px;
      width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }


   .img-profile{
      width: 17rem;
      object-fit: cover;
   }

   .profile-body__content-box{
      padding: 2rem 5rem; 
      margin: 1rem 0rem;
      background-color: #ffff;
      display: flex;
      flex-direction: column;
      justify-content: center;
   }

   .profile-body__content-box h1{
      padding: 0rem 3rem;
      
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .profile-body__content-box__form{
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .profile-body__content-box__form .input{
      width: 80%;
   }

   .button-save{
      width: 20rem;
      height: 2rem;
      color: #ffff;
      background-color: #C9B898;
      border: 0;
   }

   .profile-footer{
      height: 30rem;
      background-color: transparent;
   }
`


export default ProfilePage;