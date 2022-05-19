import { Container, Row, Col, Form, FloatingLabel} from "react-bootstrap";
import propTypes from "prop-types";
import styled from "styled-components";
import serviceReserve from "../../service/reserveService";
import { AuthContext } from "../../App";
import components from "..";
import { useContext } from "react";
// import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const BuyTap = (props) =>{

   let navigate = useNavigate();
   const { auth, setAuth } = useContext(AuthContext);
   const {seatsReserve, priceReserve, program, cinema, movie} = props;
   
   const createReserve = () =>{

      let newReserve = {
         program_id: program._id,
        date : program.date,
        theater: program.theater,
        cinemaName: cinema.cinemaName,
        moviesName: movie.name,
        moviesImage: movie.image,
        boughtTime: new Date().toISOString(),
        seats: seatsReserve,
        totalPrice: priceReserve
      }

      console.log(newReserve);
      

      // check auth
      if(auth){
         serviceReserve.createReserve(newReserve, auth)
         .then((response)=>{ console.log("s") })
         .catch((err)=> { console.log(err) })
         return  navigate('/')
      }else{
         return  navigate('/')
      }
         

   }


   return (
      <BuyTapStyle>
         <Container>
            <Row>
               <Col as="div" className="buy-container">

                  <div className="buy-container__title pt-3">
                     <h1>BUY</h1>
                  </div>

                  <div className="buy-container__time-out  p-3 ">
                     <div className="box-timeout text-center">
                        <div className="box-timeout__header">
                           <h4>Time-Out</h4>
                        </div>
                        { 
                           <components.Timer></components.Timer>
                        }
              
                     </div>
                  </div>

                  <main className="buy-container__main" >

                     <div className="buy-container__main__summary">
                        <h2>Summary</h2>
                        <div>
                           <p>​Quantity</p>
                           <p>{ `${seatsReserve.length} seats` }</p>
                        </div>
                        <div>
                           <p>Select Seats</p>
                           <div>
                              {
                                 seatsReserve.map(item => {
                                    return <p className="select--seats"> {item}</p> 
                                 })
                              }
                           </div>
                        </div>
                        <div>
                           <p>Total price</p>
                           <p>{`${priceReserve} BTH`}</p>
                        </div>
                     </div>

                     <div className="buy-container__main__confirm">
                        <h2>Confirm Infomation</h2>

                        <Form.Group size="sm">
                           <FloatingLabel controlId="floatingInput" label="Email Address" className="mb-3">
                              <Form.Control size="sm" type="text" name="CinemaName" placeholder="Email Address" />
                           </FloatingLabel> 
                        </Form.Group>

                        <Form.Group size="sm">
                           <FloatingLabel controlId="floatingInput" label="Mobile number" className="mb-3">
                              <Form.Control size="sm" type="text" name="CinemaName" placeholder="Email Address" />
                           </FloatingLabel> 
                        </Form.Group>
                        
                     </div>

                     <div className="buy-container__main__select-payment">
                        <h2>Select to payment</h2>
                        <div className="item">
                           <div className="buy-container__main__select-payment__icon">
                              <h1>SCB</h1>
                           </div>
                        </div>
                     </div>

                     <div className="buy-container__main__button">
                        <button onClick={createReserve}>{`PAY ( ${priceReserve} ) BTH`}</button>
                     </div>

                     
                  </main>
               </Col>
            </Row>
         </Container>
      </BuyTapStyle>
   )
}

BuyTap.propTypes = {
   seatsReserve: propTypes.array, 
   priceReserve: propTypes.number
}


const BuyTapStyle = styled.div`

   .buy-container{
      margin-top: 20rem;
      height: auto;
      padding: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #ffff;
   }

   .buy-container__title{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color:  #CEBB95;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      width: 30rem;
      height: 5rem;
      color: #ffff;
      position: relative;
      top: -5rem;
   }

   .buy-container__time-out{
      width: 100%;
      height: 10rem;
      display: flex;
      justify-content: flex-end;
   }

   .box-timeout{
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      width: 20rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }

   .box-timeout__header{
      background-color: #CEBB95;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      padding: 0.5rem;
      width: 10rem;
      height: 3rem;
      color: #ffff;
      position: relative;
      top: -1rem;
   }

   .buy-container__main{
      height: auto;
      width: 100%;
      padding: 0rem 8rem;
      margin-bottom: 5rem; 
   }

   .buy-container__main__summary, .buy-container__main__confirm{
      padding-bottom: 2rem;
      border-bottom: 1px solid #707070;
   }

   .buy-container__main__confirm, .buy-container__main__select-payment{
      margin-top: 3rem;
   }

   .buy-container__main__summary h2, .buy-container__main__confirm h2, .buy-container__main__select-payment h2{
      color: #CDB170;
      font-weight: bold;
      margin-bottom: 1.5rem;
   }

   .buy-container__main__summary p{
      font-size: 1.1rem;
   }

   .buy-container__main__summary div{
      display: flex;
      justify-content: space-between;
   }

   .select--seats{
      font-weight: bold;
      font-size: 1.2rem;
      margin-left: 1rem;
   }

   .item{
      padding: 0rem 5rem;
   }
   .buy-container__main__select-payment__icon{
      width: 10rem;
      height: 10rem;
      background-color: #707070;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .buy-container__main__button{
      display: flex;
      justify-content: center;
      margin-top: 5rem;
   }

   .buy-container__main__button button{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      font-size: 2rem;
      color: #ffff;
      width: 35rem;
      height: 5rem;
      background-color: #C9B898;
      border: 0;
   
   }

   .buy-container__main__button button:hover{
      position: relative;
      top: -0.2rem;
   
   }

`

export default BuyTap;

