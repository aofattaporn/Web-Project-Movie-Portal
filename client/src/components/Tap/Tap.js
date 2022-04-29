import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Tap =()=>{
   return (
      <TapStyle> 
         <Container fluid='true' className='bgcontainer pt-5'>
            <Row>
               <Col sm='3' md='3'></Col>
               <Col sm='6' md='6' className='text-center' > 
                  <div className='container__search'>
                     <div className='container__header'>
                        <h1>BUY TICKET</h1>
                     </div>
                  </div>
               </Col>
               <Col sm='3' md='3'></Col>
            </Row>
         </Container>
      </TapStyle>
   )
}

const TapStyle = styled.div`

.bgcontainer{
   background: linear-gradient(to bottom, rgba(201,184,152,1) , rgba(58,52,36,1) );
   /* border-bottom: rgb(201, 184, 152) 2rem solid; */
   box-shadow: rgba(215, 147, 20, 0.16) 0px 1px 4px;
   height: 20rem;
}

.container__search{
   background-color: #ffff;
   box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
   height: 10rem;
}

.container__header{
   background-color: #967959;
   color: #ffff;
   margin: 0 10rem;
   position: relative;
   top: -20px;
}

`

export default Tap;