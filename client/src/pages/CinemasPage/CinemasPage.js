import { Fragment } from "react"
import { Accordion, Col, Container, Row } from "react-bootstrap";
import AccordionItemCinemas from "../../components/AccordionItem/AccordItemCinemas";
import './CinemasPage.css'
import serviceCinemas from "../../service/cienemaService";
import { useEffect } from "react";
import { useState } from "react";


const CinemasPage=()=>{

   // set state 
   const [cinema, setCinema] = useState([]);
   
   // call service 
   useEffect(()=>{
      serviceCinemas.getCinemas()
      .then((res)=> {
         setCinema(res.data) 
      })

   }, []);
   
   // create array for map data 
   const area = ["Bangkok", "Central", "North", "West", "NorthEast", "South", "East"];


   return(
      <Fragment>
         <main>
            <Container >
               <Row>
                  <Col md='1'></Col>
                  <Col>

                     <Accordion defaultActiveKey={'0'}>

                        {
   
                           
                           area.map((item, index)=>{
                              var keyAC = index.toString();
                              var cinemas = cinema.filter(x => x.cinemaArea === item);


                              return <AccordionItemCinemas 
                              data={cinemas} 
                              title={item} 
                              key={index} 
                              keyAC={keyAC}
                              
                              />      
                           })

                           


                        }




                     </Accordion>



                  </Col>
                  <Col md='1'></Col>
               </Row>




    
            </Container>

         </main>
      </Fragment>
   )
}

export default CinemasPage;