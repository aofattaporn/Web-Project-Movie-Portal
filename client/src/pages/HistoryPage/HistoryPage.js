
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../../App";
import  components  from "../../components/index";
import { Col, Container, Row } from "react-bootstrap";
import serviceReserve from "../../service/reserveService";
import { useState, useEffect } from "react";
const { Fragment } = require("react");


const HistoryPage = () =>{

   const { auth } = useContext(AuthContext);
   const [allReserve, setAllReserve] = useState([]);

   const getMyProgram = (auth)=>{
      console.log(auth);
      serviceReserve.getMyReserve(auth)
      .then((response)=>{ setAllReserve(response.data) })
      .catch((err)=> { console.log(err) } )
   }

   useEffect(()=>{
      if( auth !== undefined ){
         getMyProgram(auth);
      }
      
   },[])

   return (
      <Fragment>
         <HistoryPageStyle>
         { allReserve ?  
            <>

               {/* get all movies comming zoon  */}
               <Container >
                  <div className="header">
                     <h3 className="header__title">History Movie</h3>
                  </div>
                  <Row 
                  data-aos='fade-up'
                  data-aos-duration="1000"
                  className="moviescontainer">
                     {
                        allReserve.map(((Reserve, index) => {
                           return (
                              <Col key={index} xs='6' sm='6' md='3'>
                                 <components.CardReserve released={Reserve.date}  image={Reserve.moviesImage}></components.CardReserve>
                              </Col>         
                              )
                        }))
                     }

                  </Row>
               </Container> </>: <></>
            } 
         </HistoryPageStyle>
      </Fragment>
   )
}

const HistoryPageStyle = styled.div`


   /* ------------------------- container-fram ------------------------- */

   .moviescontainer{
      border: 2px solid #BDAD8E;
      padding-top: 3rem;
   }

   /* ------------------------- header-button ------------------------- */
   .header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 5rem;
      margin-bottom: 2em;
      
   }

   .header__title{
      color: #BDAD8E;
   }
   

`


export default HistoryPage;