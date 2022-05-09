import styled from "styled-components";
import propTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import EventSeatIcon from '@mui/icons-material/EventSeat';
import serviceProgram from "../../service/programService";
import CheckIcon from '@mui/icons-material/Check';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import { useEffect } from "react";

const BookingChairsTap = (props) =>{

   const { theater, program_id } = props;

   const [program, setProgram] = useState([]);
   const [seats, setSeats] = useState([]);
   const [seatsReserve, setSeatsReserve] = useState([]);



   const zones = ['A', 'B', 'C', 'D', 'E'];
   
   // get Program by id 
   const getProgramById =(program_id)=>{
         serviceProgram.getProgramById(program_id)
         .then((response)=>{
            setProgram(response.data)
            setSeats(response.data.seats)
         })
         .catch((err)=>{console.log(err)})
   }

   const checkClick=(type)=>{
      return seatsReserve.includes(type);
   }

   const removeSeatsReserve =(type)=>{
      return setSeatsReserve(seatsReserve.filter(item => item !== type));
   }
   
   const onClickSelect =(type)=>{
      return setSeatsReserve([...seatsReserve, type]);
   }

   const getSeatIcon = (index)=>{
         return seats.map((item, idx) =>{
            if((zones[index] == (item.type).substring(0, 1))){
               if(!item.available){
                  if(checkClick(item.type)){
                     return (<button onClick={()=>{removeSeatsReserve(item.type)}}><CheckIcon className="icon"></CheckIcon></button>)
                  }else{
                     return (<button onClick={()=>{onClickSelect(item.type)}}><EventSeatIcon className="icon"></EventSeatIcon></button>)
                  }
               }else{
                  return (<button><PersonIcon className="icon--avaliable"></PersonIcon></button>)
               }
            }else{
               return null
            }
         })
   }

  useEffect(()=>{
     getProgramById(program_id);
  }, [])

  useEffect(()=>{
      console.log(seatsReserve);
   }, [seatsReserve])


   return (
   <BookingChairsTapStyle>
      <Container>

         {/* ---------------- box-header --------------------- */}
         <Row > 
            <Col md="2"></Col>
            <Col md="8" className="booking-header">
               <div className="booking-header__theater-number">
                  <h6>theater</h6>
                  <h1>{program.theater}</h1>
               </div>
               <div className="booking-header__detailes">
                  <div>
                  </div>
               </div>
            </Col>
            <Col md="2"></Col>
         </Row>

         {/* ---------------- box-main --------------- */}
         <Row className="bookink-content">
            <Col md="8">
               {/* ---------------- box-main --------------- */}
               <div  className="booking-map">
                  <div className="booking-map__content">
                     <div className="booking-map__content__screen">
                        <h2>SCREEN</h2>
                     </div>
                     <div className="booking-map__content__chair">
                        
            
                        <Container fluid className="booking-map__content__chair__zone">
                           <Row>
                              <Col   className="booking-map__content__chair__zone1" xs="1">
                                 {
                                    zones.map((item) => {
                                       return <h5>{item}</h5>
                                    })
                                 }
                              </Col>
                              <Col   className="booking-map__content__chair__zone2 mt-5" xs="10">
                                 <div className="flex-row">
                                    {  getSeatIcon(4) }
                                 </div>
                                 <div className="flex-row">
                                    {  getSeatIcon(3) }
                                 </div>                                 
                                 <div className="flex-row">
                                    {  getSeatIcon(2) }

                                 </div>                                 
                                 <div className="flex-row">
                                    {  getSeatIcon(1) }
                                 </div>                                 
                                 <div className="flex-row">
                                    {  getSeatIcon(0) }
                                 </div>
                                 {
                                    seatsReserve.map((item)=> { 
                                       return <h1>{item}</h1>
                                    })
                                 }
                              </Col>
                              <Col  className="booking-map__content__chair__zone3" xs="1">
                                 {
                                    zones.map((item) => {
                                       return <h5>{item}</h5>
                                    })
                                 }
                              </Col>
                           </Row>
                        </Container>
                     </div>
                  </div>
               </div>
            </Col>
            <Col md="4">
               <div  className="booking-confirm">
               </div>
            </Col>
         </Row>


      </Container>
   </BookingChairsTapStyle>
   )
}

BookingChairsTap.propTypes = {
   theater: propTypes.number,
   program_id: propTypes.string
}


const BookingChairsTapStyle = styled.div`

.booking-header{
   margin-top: 20rem;
   background-color: #ffff;
   border-bottom: 20px #BDAD8E solid;
   height: 13rem;
   color: #ffff;
   display: flex;
   padding: 2rem 5rem;
   box-shadow: rgba(151, 121, 89, 0.25) 0px 14px 28px, rgba(151, 121, 89, 0.22) 0px 10px 10px;
   
}

.booking-header__theater-number{
   background-color: #C9B898;
   color: #707070;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 8rem;
   height: 8rem;
}


.booking-map{
   background-color:  #1E1E1E;
   height: 40rem;
   margin-top: 5rem;
   padding: 2rem 5rem;
   display: flex;
   flex-wrap: wrap;
}

.booking-map__content{
   height: 100%;
   width: 100%;
}

.booking-map__content__screen{
   width: 100%;
   height: 4rem;
   color: #C9B898;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
   box-shadow: rgba(255, 255, 255, 0.25) 0px 0px 0px, rgba(255, 255, 255, 0.22) 0px 10px 10px ;
   display: flex;
   justify-content: center;
   align-items: flex-end;
}

.booking-map__content__chair{
   display: flex;
   margin-top: 3rem;
}

.booking-map__content__chair__zone1, .booking-map__content__chair__zone3{
   /* background-color: #555; */
   margin-top: 2rem;
   height: 100%;
}
.booking-map__content__chair__zone1 h5, .booking-map__content__chair__zone3 h5{
   color: #BDAD8E;
   margin-top: 1.8rem;
}

.booking-map__content__chair__zone2{
   height: 100%;
}



.booking-map__content__chair__zone2 button {
   background-color: transparent;
   border: 0;
}

.icon{
   font-size: 2.5rem;
   color: #ffff;
}

.icon:hover{
   color: #C9B898;
}

.icon--avaliable{
   font-size: 2.5rem;
   color: #BDAD8E;
   cursor: text;
}

.flex-row{
   display: flex;
   justify-content: center;
}

.flex-row > button{
   margin: 0.3rem 1.5rem;
}


.booking-map__content__chair__zone2 button:hover{
    color: #C9B898;
}

.booking-confirm{
   background-color: #F2E6D1;
   height: 40rem;
   margin-top: 5rem
   /* margin-left: 1rem; */
}


@media only screen and (max-width: 1250px) {
  /* For mobile phones: */
  .icon{
   font-size: 1.5rem;
   color: #ffff;
   }

   .icon:hover{
      color: #C9B898;
   }

   .flex-row > button{
   margin: 0rem 0.5rem;
   }

   .icon--avaliable{
      font-size: 1.5rem;
      color: #BDAD8E;
      cursor: text;
   }
  
}

@media only screen and (max-width: 700px) {
  /* For mobile phones: */
  .icon{
   font-size: 1.2rem;
   color: #ffff;
   }
   .flex-row > button{
   margin: 0rem 1rem;
   }

   .icon--avaliable{
      font-size: 1.2rem;
      color: #BDAD8E;
      cursor: text;
   }
  
}


`


export default BookingChairsTap;

