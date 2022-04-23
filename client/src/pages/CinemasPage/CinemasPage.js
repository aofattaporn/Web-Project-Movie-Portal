import './CinemasPage.css'
import { Fragment } from "react"
import { Accordion, Col, Container, Row } from "react-bootstrap";
import AccordionItemCinemas from "../../components/AccordionItem/AccordItemCinemas";
import serviceCinemas from "../../service/cienemaService";
import { useEffect } from "react";
import { useState } from "react";
import 'aos'
import AOS from "aos";

const CinemasPage=()=>{

   // set state 
   const [cinema, setCinema] = useState([]);

   const getCinemas =()=>{
      serviceCinemas.getCinemas()
      .then((res)=> {
         setCinema(res.data)
      })
   }
   
   // call service 
   useEffect(()=>{
      AOS.init();
      AOS.refresh();
      getCinemas();
   }, []);

   // create array for map data 
   const area = ["Bangkok", "Central", "North", "West", "NorthEast", "South", "East"];

   return(
      <Fragment>
         <main>
            <Container className="mt-5" >

               <h3 className="title mb-5">Cinemas</h3>


               <Row>
                  <Col md='1'></Col>
                  <Col>

                     <Accordion 
                     
                        defaultActiveKey={'0'}
                        data-aos='fade-up'
                        data-aos-duration="1000"
                     
                     >

                        {
   
                           area.map((item, index)=>{
                              var keyAC = index.toString();
                              var cinemas = cinema.filter(x => x.cinemaArea === item);
                              var id = cinema.filter(x => x.cinemaArea === item)

                              return <AccordionItemCinemas 
                                 key={index} 
                                 id={id}
                                 data={cinemas} 
                                 title={item} 
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