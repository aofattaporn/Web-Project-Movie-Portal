import './Card.css';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import propTypes from "prop-types";


const CardMovie =(props)=>{

   const {title, image, released, runtime} = props;

   console.log(runtime);
   const getDate =(released)=>{
      const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let d = new Date(released);
      return ('release date : ' + d.getDate()+' ' + month[(d.getMonth()+1)] + ' '+ d.getFullYear());
   }


   return (
         <Card  className='card mt-3 fade-up ' data-aos="fade-up" >
            <div className='card__header'>
               <Card.Img className='card__ixmg' variant="top" src={`http://localhost:4000/image/poster/${image}`}  />
            </div>
            <Card.Body className='card__text'>
               <ListGroup>
                  <ListGroupItem className='card__text__releas'><p>{getDate(released)}</p></ListGroupItem>
               </ListGroup>
            </Card.Body>
            <ListGroupItem className='card__text__title'><h3>{title}</h3></ListGroupItem>
            <FontAwesomeIcon className='like' icon={faHeart}></FontAwesomeIcon>

         </Card>
   )
}

CardMovie.propTypes ={
   title: propTypes.string,
   images: propTypes.string, 
   released: propTypes.string,
   runtime: propTypes.string
}



export default CardMovie;