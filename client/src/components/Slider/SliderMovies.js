import { useState } from 'react';
// import {Carousel, Col, Container, Row} from 'react-bootstrap';
// import CardMovie from '../Card/Card';
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
        <p>Hello </p>

      </div>
 
  

      );
    
}

export default SliderMovies;