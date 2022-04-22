import './Card.css';
import { Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import propTypes from "prop-types";
// import { useState } from 'react';
// import { useEffect } from 'react';


const CardMovie =(props)=>{

   const {title} = props;
   // const test_img = "../../assets/images/movies/venom/post-venom.png";
   const img = "post-venom.png";


   return (
      <Card  className='card mt-3 fade-up text-center' data-aos="fade-up" >
         <div className='card__header'>

            <Card.Img className='card__ixmg' variant="top" src={ require(`../../assets/images/movies/venom/${img}`)}  />



            <div className='overlay'></div>
         </div>
         <div className='card__text'>
            <p className='card__release'>releas date</p>
            <h5 className='card__movie'>{title}</h5>
            <FontAwesomeIcon className='card__like' icon={faHeart}></FontAwesomeIcon>
         </div>
      </Card>
   )
}

CardMovie.propTypes ={
   title: propTypes.string,
   images: propTypes.string, 
}



export default CardMovie;