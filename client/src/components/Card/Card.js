import './Card.css';
import { Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const CardMovie =(props)=>{


   
   const {title, releas, images} = props;

   const image = require('../../assets/images/4k poster/projerct/poster/thumb_2914.jpeg');

   return (
      <Card  className='card mt-3 fade-up text-center' data-aos="fade-up" >
         <div className='card__header'>
            <Card.Img className='card__img' variant="top" src={image}/>
            <div className='overlay'></div>
         </div>
         <div className='card__text'>
            <p className='card__release'>releas date</p>
            <h5 className='card__movie'>Movie Name</h5>
            <FontAwesomeIcon className='card__like' icon={faHeart}></FontAwesomeIcon>
         </div>
      </Card>
   )
}



export default CardMovie;