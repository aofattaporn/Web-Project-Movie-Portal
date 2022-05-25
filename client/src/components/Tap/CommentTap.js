import styled from "styled-components"
import { Container, Row, Form } from "react-bootstrap";
import { useEffect } from "react";
import serviceReview from "../../service/reviewService";
import { useState, useContext } from "react";
import { AuthContext, UserContext } from "../../App";
import { NotificationManager} from 'react-notifications';
import CarouselCard from "react-multi-carousel";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useCallback } from "react";
import swal from "sweetalert";



const CommentTap = () =>{

   const [allReview, setAllreviw] = useState([]);
   const [textArea,  setTextArea] = useState("");
   const { auth } = useContext(AuthContext);
   const { user } = useContext(UserContext);

   const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
   };

   const onChangeTextArea = (event)=>{
      event.preventDefault();
      setTextArea(event.target.value);
   }

   const deleteReview = (id) =>{
      swal({
         title: "Are you sure to delete your review?",
         icon: "warning",
         buttons: true,
         dangerMode: false,
       })
       .then((willDelete) => {
         
         if (willDelete) {
            serviceReview.deleteById(id)
            .then((response)=>{
               console.log(response)
               NotificationManager.success('', 'Poof! Remove review success!');
               getAllReview()
            })
            // getAllReview();
         } 
       });
   }

   const getAllReview = useCallback(() =>{
      serviceReview.getAllReview()
      .then((response)=>{ setAllreviw(response.data) })
      .catch((err)=>{console.log(err)})
   }, [])

   const createReview= (event) =>{
      event.preventDefault();
      const reviewData = {
        username: user,
        text: textArea
      }
      serviceReview.createReview(auth, reviewData)
      .then((response)=>{
         NotificationManager.success('', 'Poof! Create review success!');
         setAllreviw([...allReview, response.data]);
      })
      .catch((err)=>{console.log(err)})
   }

   useEffect(()=>{
      getAllReview();
   }, [getAllReview])

   return (
      <CommentTapStyle>
         <Container className="TapDesc">
            <h1>SHOW REVIEW</h1>
            <main className="description text-center">
               {/* -----------create-myrevviw---------------------------------- */}
               {
                  auth ? 
                  
                  <Container className="mb-5"  >
                     <Row>
                        <h5>Review</h5>
                     </Row>
                     
                     <div>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                           <Form.Control onChange={onChangeTextArea} name="textArea" as="textarea" rows={5} />
                           <div className="d-flex justify-content-end"> 
                              <button onClick={createReview}>SEND</button>
                           </div>
                        </Form.Group>                     
                     </div>
                  </Container> : <></>
               }

               {/* -----------show all revirew---------------------------------- */}
               {
                  allReview ? 
                  <CarouselCard responsive={responsive}>
                  {
                     allReview.map((item, index)=>{
                        return ( 
                           <div key={index} className="review-box">
                              <div className="review-box__title d-flex justify-content-center">
                                 <AccountCircleIcon className="icon"></AccountCircleIcon>
                                 <h5>{item.author.username}</h5>

                                 {
                                    user === item.author.username ? <button onClick={()=>{deleteReview(item._id)}} className="icon--close"><CloseIcon></CloseIcon> </button> : <></>
                                 }
                                 
                              </div>
                              <div className="review-box__tex d-flex justify-content-center pt-3">
                                 <p>{item.text}</p> 
                              </div>
                           </div>
                        )
                     })
                  }
               </CarouselCard>
                  
                  :
                  <></>
               }

            </main>
         </Container>
      </CommentTapStyle>
   )
}

const CommentTapStyle = styled.div`
   .TapDesc{
      color: #ffff;
   }

   .TapDesc h1{
      margin-top: 10rem;
      margin-bottom: 5rem;
      padding-bottom: 2rem;
      border-bottom: #C9B898 solid 2px;
   }

   .review-box{
      background-color: #ffff;
      height: 10rem;
      width: 18rem;
      margin: 1rem;
      box-shadow: rgba(151, 121, 89, 0.25) 0px 14px 28px, rgba(151, 121, 89, 0.22) 0px 10px 10px;
   }

   .review-box__title{
      background-color: #C9B898;
      height: 3rem;
      padding: 1rem;
   }

   .review-box__tex {
      color: #17130A;
   }

   .icon{
      position: absolute;
      left: 2rem;
   }
   .text-area{
      width: 500rem;
   }

   .icon--close{
      position: absolute;
      right: 2rem;
      background-color: transparent;
      border: 0rem;
      color: #ffff;
   }

`

export default CommentTap;


