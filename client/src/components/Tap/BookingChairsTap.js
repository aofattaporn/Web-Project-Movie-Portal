import styled from "styled-components";
import propTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import EventSeatIcon from '@mui/icons-material/EventSeat';
import CheckIcon from '@mui/icons-material/Check';
import PersonIcon from '@mui/icons-material/Person';
import ChairIcon from '@mui/icons-material/Chair';
import serviceProgram from "../../service/programService";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

const BookingChairsTap = (props) =>{

   const { program, cinema, movie } = props;

   const [seats, setSeats] = useState([]);
   const [seatsReserve, setSeatsReserve] = useState([]);
   const [priceReserve, setPriceReserve] = useState(0);



   const zones = ['A', 'B', 'C', 'D', 'E'];
   
   // get Program by id 
   const functionsetSeats = useCallback(async ()=>{
      if(program !== undefined){
         await setSeats(program.seats)
      }else{
         await setSeats([])
      }
   }, [program])

   const checkClick=(type)=>{
      return seatsReserve.includes(type);
   }

   const onClickSelect =(type)=>{
      return setSeatsReserve([...seatsReserve, type]);
   }

   const onClickSummaryPrice =(price)=>{
      return setPriceReserve(priceReserve + price);
   }

   const removeSeatsReserve =(type)=>{
      return setSeatsReserve(seatsReserve.filter(item => item !== type));
   }

   const removePriceReserve =(price)=>{
      return setPriceReserve(priceReserve - price);
   }

   const getNumberSeat = (index)=>{
      return (<h5>{zones[index]}</h5>);
   }

   const getSeatIcon = (index)=>{
         getNumberSeat(index)
         return seats.map((item, idx) =>{
            if((zones[index] == (item.type).substring(0, 1))){
               if(!item.available){
                  if(checkClick(item.type)){
                     return (
                     <button onClick={
                        ()=>{removeSeatsReserve(item.type)
                           removePriceReserve(item.price)}}>
                           <CheckIcon className="icon icon--check"></CheckIcon></button>
                     )
                  }else{
                     if(item.price <= 120){
                        return (<button onClick={
                           ()=>{onClickSelect(item.type) 
                           onClickSummaryPrice(item.price)}}>
                              <EventSeatIcon className="icon icon--seat"></EventSeatIcon></button>)
                     }else{
                        return (<button onClick={
                           ()=>{onClickSelect(item.type) 
                           onClickSummaryPrice(item.price)}}>
                              <ChairIcon className="icon icon--seat"></ChairIcon></button>)
                     }
                  }
               }else{
                  return (<button><PersonIcon className="icon--avaliable"></PersonIcon></button>)
               }
            }else{
               return null
            }
         })
   }

   const dateFormat=(date)=>{
      const d = new Date(date);
      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ]

      return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`
   }

  useEffect(()=>{
  }, [])

  useEffect(()=>{
      functionsetSeats();
      console.log(seatsReserve);
   }, [seatsReserve, functionsetSeats])


   return (
   <BookingChairsTapStyle>
      <Container>
         {/* ---------------- box-header --------------------- */}
         <Row > 
            <Col md="2"></Col>
            <Col md="8" className="booking-header">
               <div className="booking-header__theater-number">
                  <h6>theater</h6>
                  
                  {program? <h1>{program.theater}</h1>: <></>}

               </div>
               <div className="booking-header__detailes">
                  <div className="booking-header__detailes__type1">
                     <EventSeatIcon className="Icon"></EventSeatIcon>
                     <h5>120 Bath</h5>
                  </div>
                  <div className="booking-header__detailes__type2">
                     <ChairIcon className="Icon"></ChairIcon>
                     <h5>220 Bath</h5>
                  </div>
               </div>
            </Col>
            <Col md="2"></Col>
         </Row>

         {/* ---------------- box-main --------------- */}
         <Row className="bookink-content">
            {/* ---------------- box-left -------------------------- */}
            <Col md="12" xl="8">
               {/* ---------------- box-main --------------- */}
               <div  className="booking-map">
                  <div className="booking-map__content">
                     <div className="booking-map__content__screen">
                        <h2>SCREEN</h2>
                     </div>
                     <div className="booking-map__content__chair">
                        <Container fluid className="booking-map__content__chair__zone">
                           <Row>
                              <Col   className="booking-map__content__chair__zone2 mt-5 text-center" xs="12">
                                 {
                                    zones.map((item, index) => {
                                       return (
                                          <div className="flex-row">
                                             <h4 className="zone">{zones[zones.length - (index + 1)]}</h4>
                                             {  getSeatIcon(zones.length - (index + 1)) }
                                             <h4 className="zone">{zones[zones.length - (index + 1)]}</h4>
                                          </div>
                                       )
                                    })
                                 }
                              </Col>
                           </Row>
                        </Container>
                     </div>
                  </div>
               </div>
            </Col>

            {/* ---------------- box-right -------------------------- */}
            <Col md="12" xl="4">
               <div className="booking-confirm">
                  
                  <div className="booking-confirm__movie">
                     {
                        movie && program ? 
                        <>
                           {/* <h1>{movie}</h1> */}
                           {/* <p>{dateFormat(program.date)}</p> */}
                           {/* <p>{ new Date(program.date).getHours() + " : " + new Date(program.date).getMinutes()}</p> */}
                        </>
                     :  <></>}
                  </div>

                  <div className="booking-confirm__cinema">
                     {cinema? <h5>{cinema.cinemaName}</h5> : <></>}
                     {program? <p>{`theater ${program.theater}`}</p> : <></>}
                     
                  </div>

                  <div className="booking-confirm__seats">
                     <h3>SELECT SEATS</h3>
                     <div>
                        {
                           seatsReserve.length > 0 ? 
                           seatsReserve.map(item => { return  <h4>{item} </h4> }) : 
                           <h4> - </h4>
                        }
                     </div>
                     <h3>Price</h3>
                     <div>
                        {
                           priceReserve > 0 ? 
                           <h4>{priceReserve} </h4> : 
                           <h4> 0 </h4>
                        }
                     </div>

                     <div className="booking-confirm__botton">
                     {
                        seatsReserve.length != 0 ? 
                        <button className="booking-confirm__botton--sucsess">Continue</button> : 
                        <button className="booking-confirm__botton--unsucess">Continue</button>
                     }
                     </div>
                  </div>



               </div>
            </Col>
         </Row>


      </Container>
   </BookingChairsTapStyle>
   )
}

BookingChairsTap.propTypes = {
   program: propTypes.object, 
   cinema: propTypes.object, 
   movie: propTypes.object
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

.booking-header__detailes{
   display: flex;
   margin: 0rem auto;
   justify-content: center;
   align-items: flex-end;
   color: #1E1E1E;
}

.booking-header__detailes__type1, .booking-header__detailes__type2{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}

.booking-header__detailes__type1 .Icon,  .booking-header__detailes__type2 .Icon{
   color: #1E1E1E;
   font-size: 4rem;
   margin: 1rem 4rem;
   
}


/* ---------------- booking-selecting-seats --------------------- */

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

.booking-map__content__chair__zone2{
   height: 100%;
   align-self: center;
}

.booking-map__content__chair__zone2 button {
   background-color: transparent;
   border: 0;
}
.icon{
   font-size: 2.5rem;
   color: #ffff;
}
.icon--seat:hover{
   color: #C9B898;
}
.icon--check{
   color: green;
}
.icon--avaliable{
   font-size: 2.5rem;
   color: #BDAD8E;
   cursor: default;
}
.flex-row{
   color: green;
   display: flex;
   justify-content: center;
}
.flex-row > button{
   color: green;
   margin: 0.3rem 1.5rem;
}
.zone{
   color: rgb(151, 121, 89);
   margin: 1rem 3rem;
}

.booking-map__content__chair__zone2 button:hover{
    color: #C9B898;
}

/* ---------------- booking-confirm-booking --------------------- */

.booking-confirm{
   background-color: #F2E6D1;
   height: 40rem;
   margin-top: 5rem;
   padding: 3rem;
}

.booking-confirm__cinema{
   margin-top: 2rem;
}

.booking-confirm__seats{
   background-color: #1E1E1E;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: #ffff;
   padding: 2rem;
   height: auto;
   width: 100%;
}

.booking-confirm__seats div {
   display: flex;
}
.booking-confirm__seats div h4{
   margin: 0rem 0.4rem;
   color: rgb(151, 121, 89);
}

.booking-confirm__botton {
   width: 100%;
   margin-top: 2rem;
}

.booking-confirm__botton button{
   width: 100%;
   height: 4rem;
}
.booking-confirm__botton--unsucess{
   background-color: #C9B898;
   font-weight: bold;
   color: #ffff;
   border: 0;
   cursor: default;
}

.booking-confirm__botton--sucsess{
   background-color: rgba(151, 121, 89, 100);
   font-weight: bold;
   color: #ffff;
   border: 0;
}


/* @media only screen and (max-width: 1250px) {

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
  
} */
/* 
@media only screen and (max-width: 700px) {
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
  
} */


`


export default BookingChairsTap;

