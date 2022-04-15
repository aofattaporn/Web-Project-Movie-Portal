import { useState } from 'react';
import {Carousel, Col, Container, Row} from 'react-bootstrap';
import CardMovie from '../Card/Card';
import './SliderMovies.css'

const SliderMovies=()=>{
   const [index1, setIndex1] = useState(0);
   const [index2, setIndex2] = useState(0);

   const handleSelect1 = (selectedIndex1, e) => {
     setIndex1(selectedIndex1);
   };

   const handleSelect2 = (selectedIndex2, e) => {
      setIndex2(selectedIndex2);
    };
 
   return (

      <div className='carouselmovies'>

         <h1 className='carouselmovies__title'>Now Showing </h1>
         <Carousel className='carouselmovies__slide fade-up' indicators={false} activeIndex={index1} onSelect={handleSelect1}>
          <Carousel.Item>
             <Container className='d-flex justify-content-center' >
               <CardMovie/>
               <CardMovie/>
               <CardMovie/>
               <CardMovie/>
             </Container>
          </Carousel.Item>
          <Carousel.Item>
             <Container className='d-flex justify-content-center' >
               <CardMovie/>
               <CardMovie/>
               <CardMovie/>
               <CardMovie/>
             </Container>
          </Carousel.Item>
        </Carousel>
        <Carousel className='carouselmovies__slide fade-up' indicators={false} activeIndex={index1} onSelect={handleSelect1}>
          <Carousel.Item>
             <Container className='d-flex justify-content-center' >
               <CardMovie/>
               <CardMovie/>
               <CardMovie/>
               <CardMovie/>
             </Container>
          </Carousel.Item>
          <Carousel.Item>
             <Container className='d-flex justify-content-center' >
               <CardMovie/>
               <CardMovie/>
               <CardMovie/>
               <CardMovie/>
             </Container>
          </Carousel.Item>
        </Carousel>

        <h1 className='carouselmovies__title' >Comming Zoon</h1>
        <Carousel className='carouselmovies__slide' indicators={false} activeIndex={index2} onSelect={handleSelect2}>
          <Carousel.Item>
             <Container className='d-flex justify-content-center' >
               <CardMovie/>
               <CardMovie/>
               <CardMovie/>
               <CardMovie/>
             </Container>
          </Carousel.Item>
          <Carousel.Item>
             <Container className='d-flex justify-content-center' >
               <CardMovie/>
               <CardMovie/>
               <CardMovie/>
               <CardMovie/>
             </Container>
          </Carousel.Item>
        </Carousel>

        <div className='carouselmovies__tapbutton'></div>

      </div>
 
  

      );
    
}

export default SliderMovies;