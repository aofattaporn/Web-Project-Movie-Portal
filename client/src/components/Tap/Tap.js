import { Col, Container, Row } from 'react-bootstrap';
import './Tap.css'

const Tap =()=>{
   return (
         <Container fluid='true' className='bgcontainer pt-5'>
            <Row>
               <Col md='3'></Col>
               <Col md='6' className='text-center' > 
                  <div className='container__search'>
                     <div className='container__header'>
                        <h1>Hello world</h1>
                     </div>
                  </div>
               </Col>
               <Col md='3'></Col>
            </Row>
         </Container>
   )
}

export default Tap;