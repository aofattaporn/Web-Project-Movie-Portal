import styled from 'styled-components';
import { Fragment, useEffect, useState } from "react"
import { Accordion, Col, Container, Row } from "react-bootstrap";
import AccordionItemCinemas from "../../components/AccordionItem/AccordItemCinemas";
import serviceCinemas from "../../service/cienemaService";
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
         <CinemasPageStyle>
            <Container className="mt-5" >
               <h3 className="title mb-5">Cinemas</h3>
               <Row className='cinemacintainer'>
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
         </CinemasPageStyle>
      </Fragment>
   )
}

const CinemasPageStyle = styled.main`

   .cinemacintainer{
      border-top: 5px solid rgb(151, 121, 89);
      padding-top: 2rem;
   }

   .title{
      color: #BDAD8E;
      margin-top: 5rem;

   }

   .test{
      color: #BDAD8E;
      width: 100%;
      height: 100%;
   }

   .accordion-header button{
      background-color: #BDAD8E;
      color: white;
   }
   .accordion-button:focus{
      border-color: #BDAD8E;
   }
   .accordion-button:not(.collapsed){
      color: white;
      background-color: #BDAD8E;
      border: 0;
   }
   .listItem:hover{
      background-color: rgba(41, 42, 42, 0.224);
      color: rgb(151, 121, 89);
      cursor: pointer;
   }


`;

export default CinemasPage;