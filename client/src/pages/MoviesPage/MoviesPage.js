import { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap";
import CardMovie from "../../components/Card/Card";
import '../MoviesPage/MoviesPage.css'
import 'aos'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const MoviesPage=()=>{

   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

   return(
      <Fragment>

         {/* get all movies now showing  */}
         <Container>
            <h3 className="title">Movie show</h3>
            <Row  className="moviescontainer"
               data-aos='fade-up'
               data-aos-duration="3000"
               >
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>               
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
            </Row>
         </Container>

         {/* get all movies comming zoon  */}
         <Container>
            <h3 className="title">Comming Zoon</h3>
            <Row 
             data-aos='fade-up'
             data-aos-duration="3000"
            
            className="moviescontainer">
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
               <Col xs='6' sm='6' md='3'><CardMovie/></Col>
            </Row>
         </Container>

      </Fragment>
   )
}

export default MoviesPage;