import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Tap =()=>{
   return (
      <TapStyle> 
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
      </TapStyle>
   )
}

const TapStyle = styled.div`

.bgcontainer{
   background-color: #17130A;
   border-bottom: rgb(201, 184, 152) 2rem solid;
   box-shadow: rgba(215, 147, 20, 0.16) 0px 1px 4px;
   height: 20rem;
}

.container__search{
   /* background-color: #ffff; */
   height: 200px;
}

.container__header{
   background-color: #C9B898;
   margin: 0 10rem;
   position: relative;
   top: -20px;
}

`

export default Tap;