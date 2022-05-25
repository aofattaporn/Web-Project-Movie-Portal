import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Tap =()=>{
   return (
      <TapStyle> 
         <Container fluid='true' className='bgcontainer pt-5'>
            <Row>
               <Col sm='3' md='3'></Col>
               <Col sm='6' md='6' className='text-center  fw-10' > 
                  <div className='title-welcom d-flex flex-column align-items-center' >
                     <h1>WELCOME TO <span>XTRA</span></h1>
                     <div className='shadow'></div>
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
   box-shadow: rgba(215, 147, 20, 0.16) 0px 1px 4px;
   height: 20rem;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}

.title-welcom h1{
   color: #ffff;
   font-size: 3rem;
   font-weight: bold;
   
}

.title-welcom h1 span {
   font-size: 6rem;
   color: #ffff
}


.title-welcom { 
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
    
}

.shadow{
   width: 80%;
   background-color: #17130A;
   border-radius: 50%;
   height: 2rem;
}

@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
}





`

export default Tap;