import styled from 'styled-components';
import { Card, Container, ListGroup, ListGroupItem, Modal, Row, Col} from 'react-bootstrap';
import propTypes from "prop-types";
import { useEffect } from 'react';
import { useState } from 'react';
import 'aos'
import AOS from "aos";
import "./CardReserve.css";

const CardReserve =(props)=>{

   const { Reserve, moviefav } = props;
   const [show, setShow] = useState(false);

   const getDate =(released)=>{
      const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let d = new Date(released);
      return ( d.getDate()+ ' ' + month[(d.getMonth()+1)] + ' '+ d.getFullYear());
   }

   const getTime =(released)=>{
      let d = new Date(released);
      return ( d.getHours() + " : " + d.getMinutes());
   }
   useEffect(() => {
      AOS.init();
      AOS.refresh();

      
    }, []);


   return (
      <CardReserveStyle> 
         { Reserve ?  
         <div  className='card mt-3 fade-up ' data-aos="fade-up" >
            <div className='card__header'>
               { Reserve.moviesImage ? <Card.Img className='card__ixmg' variant="top" src={`http://localhost:4000/image/poster/${Reserve.moviesImage}`} onClick={() => setShow(true)}/> : <></> }
            </div>
           <Card.Body className='card__text'>
               <ListGroup>
                  { Reserve ? <ListGroupItem className='card__text__releas'><p>{getDate(Reserve.date)}</p></ListGroupItem> : <></>}
               </ListGroup>
            </Card.Body>
         </div>
         : <></> }

         { moviefav ?  
         <div  className='card mt-3 fade-up ' data-aos="fade-up" >
            <div className='card__header'>
               { moviefav.movies.image ? <Card.Img className='card__ixmg' variant="top" src={`http://localhost:4000/image/poster/${moviefav.movies.image}`} /> : <></> }
            </div>
           <Card.Body className='card__text'>
               <ListGroup>
               { moviefav.movies.release ? <ListGroupItem className='card__text__releas'><p>{getDate(moviefav.movies.release)}</p></ListGroupItem> : <></>}
               </ListGroup>
            </Card.Body>
         </div>

         : <></> }

         {/* ------------ Modals --------------------------------------- */}

         <Modal
               show={show}
               onHide={() => setShow(false)}
               dialogClassName="modal-2w"
               aria-labelledby="example-custom-modal-styling-title "
            >
            <Modal.Header closeButton className='ticket-header'>
               <strong id="example-custom-modal-styling-title ticket-title" >
                  [ My Ticket ] 
               </strong>
            </Modal.Header>
            <Modal.Body className='ticket__body'>
               <div className='imgae-container'>
                  {Reserve ? <img className='ticket__img' variant="top" src={`http://localhost:4000/image/poster/${Reserve.moviesImage}`} /> : <></>}
               </div>
               {
                  Reserve ? 
                  <div>
                     <div className='d-flex justify-content-between content' >
                        <div>
                           <h6>Cinemas : <span>{Reserve.cinemaName}</span></h6>
                           <h6>Movie : <span>{Reserve.moviesName}</span></h6>
                              <div className='d-flex flex-column date'  >
                                 <h6>date : <span> {getDate(Reserve.date)}</span></h6>
                                 <h6>time : <span> {getTime(Reserve.date)}</span></h6>
                              </div>
                        </div>
                        <div>
                           <h6 className='d-flex flex-column text-center theater'> theater <span><h2>{Reserve.theater}</h2></span></h6>
                        </div>
                     </div>
                     <div className='content-2 mt-3'>
                        <Container fluid>
                           <Row>
                              <Col sm="9" >
                                 <div className=' mt-5 seats-tap mt-3 p-2 d-flex'>
                                    <h6>seats : </h6>
                                    {
                                          Reserve.seats ? 
                                          Reserve.seats.map(item=>{
                                             return ( <span className='ms-2'>{item}</span>)
                                          }) : <></>
                                    }
                                 </div>
                              </Col>
                              <Col sm="3">                                 
                                 <div className='QR mt-3'>
                                    <img src={require("../../assets/images/QR.png")} alt="img3" /> 
                                 </div>
                              </Col>
                           </Row>
                        </Container>
                     </div>
                  </div>
               : <></>
               }
               
               

            </Modal.Body>
            
         </Modal>
         
         

       </CardReserveStyle>
   )
}

const CardReserveStyle = styled.div`

h1{
   color: #C9B898;
}

.card {
   width: 15rem;
   height: auto;
   margin: 0 auto;
   background-color: transparent;
   margin-bottom: 3rem;
   border: 0;

}

.card__header :hover{
   cursor: pointer;
   box-shadow: rgba(151, 121, 89, 0.25) 0px 14px 28px, rgba(151, 121, 89, 0.22) 0px 10px 10px;
}

.card__header {
   margin: 0 auto;
}

/* ----------------- show thim and gerner ------------- */

.card__text{
   border-top: #C9B898 solid 5px;
   padding: 0 10px;
   line-height: 1px;
   background-color: rgb(151, 121, 89);
   height: auto;

}

.card__text__releas{
   font-size: 0.8rem;
   font-weight: bolder;
   align-items: center;
   border: 0;
   display: flex;
   padding-top: 1.5rem;
   height: 1rem;
   font-size: 32px;
   font-size: 10px;
   background-color: rgb(151, 121, 89);
   border-bottom-right-radius: 10px ;
   border-bottom-left-radius: 10px ;

}

.card__text__title{
   border: 0;
   color: white;
   font-weight: bolder;
   height: 3rem;
   /* width: auto; */
   background-color: transparent;
   overflow-y: scroll;
   /* overflow-x: scroll; */
   /* width: 20rem; */

}

.card__text__title h3{
   font-size: 1.5rem;
}


.ticket-header{
   color: #C9B898;
   background-color: #C9B898;
}




/* ----------------- when screen lester 10000px ------------- */

@media only screen and (max-width: 1000px) {

   .card{
      width:  10rem;
      background-color: transparent;
      text-align: center;
      border-radius: 10px;
      text-align: center;
      margin: 5rem auto;
   }

   .card__text{
      border-top: #C9B898 solid 5px;
      padding: 0 10px;
      background-color: transparent;
   }

   .card__text__title h2{

      font-size: 1.5rem;
      
   
   }

   .card__text__releas, .card__text__title, .card{
      border: 0;
      background-color: transparent;
      color: #ffff;
   }


   .like{
      position: relative;
      font-size: 24px;
      left: 3.5rem;
      bottom: 19rem;
   }
   
 }

`;


CardReserve.propTypes ={
   Reserve: propTypes.object
}

export default CardReserve;