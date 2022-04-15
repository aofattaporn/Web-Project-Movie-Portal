import { Col, Container, Row } from "react-bootstrap";
import Card from '../components/Card/Card';

const MovieLayout =()=>{
   return (
      <Container>
         <Row className="text-center d-flex justify-content-center" >
            <Col sm='6' md='3'> <Card/> </Col>
            <Col sm='6' md='3'> <Card/> </Col>
            <Col sm='6' md='3'> <Card/> </Col>
            <Col sm='6' md='3'> <Card/> </Col>

            <Col sm='6' md='3'> <Card/> </Col>
            <Col sm='6' md='3'> <Card/> </Col>
            <Col sm='6' md='3'> <Card/> </Col>
            <Col sm='6' md='3'> <Card/> </Col>

            <Col sm='6' md='3'> <Card/> </Col>
            <Col sm='6' md='3'> <Card/> </Col>
            <Col sm='6' md='3'> <Card/> </Col>
            <Col sm='6' md='3'> <Card/> </Col>
         </Row>
      </Container>
   );
}

export default MovieLayout;