import styled from "styled-components";
import propTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair, faTheaterMasks } from "@fortawesome/free-solid-svg-icons"

const BookingChairsTap = (props) =>{

   const { theater, seats } = props;

   console.log(seats)

   const zone = ['A', 'B', 'C', 'D', 'E'];

   return (
   <BookingChairsTapStyle>
      <Container>

         {/* ---------------- box-header --------------------- */}
         <Row > 
            <Col md="2"></Col>
            <Col md="8" className="booking-header">
               <div className="booking-header__theater-number">
                  <h6>theater</h6>
                  <h1>{theater}</h1>
               </div>
               <div className="booking-header__detailes">
                  <div>
                     <FontAwesomeIcon icon={faTheaterMasks}></FontAwesomeIcon>
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
                        <div className="booking-map__content__chair__zone1">
                           <h1>222222</h1>
                        </div>
                        <div className="booking-map__content__chair__zone2">
                           <h1>111111</h1>
                        </div>
                      
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
   theater: propTypes.string,
   seats: propTypes.array
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
   /* justify-content: center; */
   
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
   background-color:  #ffff;
   height: 40rem;
   margin-top: 5rem;
   padding: 2rem 5rem;

}

.booking-map__content{
   height: 100%;
   /* background-color: #BDAD8E; */
}

.booking-map__content__screen{
   width: 100%;
   height: 4rem;
   border-bottom: 50px solid #555;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
   display: flex;
   justify-content: center;
   align-items: flex-end;
}

.booking-map__content__chair{
   display: flex;
}

.booking-map__content__chair__zone1{
   background-color: #555;
   height: 100%;
}
.booking-map__content__chair__zone2{
   background-color: #555;
   height: 100%;
}

.booking-confirm{
   background-color: #ffff;
   height: 13rem;
   margin-top: 5rem
   /* margin-left: 1rem; */
}


`


export default BookingChairsTap;

