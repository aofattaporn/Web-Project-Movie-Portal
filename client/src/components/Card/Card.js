import styled from 'styled-components';
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
      <CardStyle> 
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
      </CardStyle>
   )
}

const CardStyle = styled.div`

.card {
   width: 13rem;
   height: auto;
   margin: 0 auto;
   background-color: transparent;

}
.card__header :hover{
   cursor: pointer;
   
   box-shadow: rgba(151, 121, 89, 0.25) 0px 14px 28px, rgba(151, 121, 89, 0.22) 0px 10px 10px;
}
.card__header {
   margin: 0 auto;
}

/* ----------------- show thim and gerner ------------- */

.card__text{
   border-top: #C9B898 solid 5px;
   padding: 0 10px;
   line-height: 1px;
   background-color: rgb(151, 121, 89);
   height: auto;

}
.card__text__releas{
   font-size: 0.8rem;
   font-weight: bolder;
   align-items: center;
   border: 0;
   display: flex;
   padding-top: 1.5rem;
   height: 1rem;
   font-size: 32px;
   font-size: 10px;
   background-color: rgb(151, 121, 89);
   border-bottom-right-radius: 10px ;
   border-bottom-left-radius: 10px ;

}
.card__text__title{
   border: 0;
   color: white;
   font-weight: bolder;
   height: auto;
   width: auto;
   background-color: transparent;

}

/* ----------------- show thim and gerner ------------- */

.like{
   position: relative;
   font-size: 32px;
   color: #4d4d4d;
   left: 4.5rem;
   bottom: 23rem;
}

.like:active, .like:hover{
   color: rgb(151, 121, 89);
   cursor: pointer;
}


/* ----------------- when screen lester 10000px ------------- */

@media only screen and (max-width: 1000px) {

   .card{
      width:  10rem;
      background-color: transparent;
      text-align: center;
      border-radius: 10px;
      text-align: center;
      margin: 5rem auto;
   }

   .card__text{
      border-top: #C9B898 solid 5px;
      padding: 0 10px;
      background-color: transparent;
   }

   .card__text__title h2{

      font-size: 1.5rem;
   
   }

   .card__text__releas, .card__text__title, .card{
      border: 0;
      background-color: transparent;
      color: #ffff;
   }


   .like{
      position: relative;
      font-size: 24px;
      left: 3.5rem;
      bottom: 19rem;
   }
 }






`;


CardMovie.propTypes ={
   title: propTypes.string,
   images: propTypes.string, 
   released: propTypes.string,
   runtime: propTypes.string
}

export default CardMovie;