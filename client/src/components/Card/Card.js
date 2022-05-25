import styled from 'styled-components';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import propTypes from "prop-types";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const CardMovie =(props)=>{

   const {title, image, released, runtime, genre, movie_id} = props;

   const getDate =(released)=>{
      const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let d = new Date(released);
      return ('release date : ' + d.getDate()+ ' ' + month[(d.getMonth()+1)] + ' '+ d.getFullYear());
   }

   useEffect(()=>{
      getDate();
   }, [title, image, released, runtime, genre])


   return (
      <CardStyle> 

         <div  className='card mt-3 fade-up ' data-aos="fade-up" >

            {/*----- header --------------------------- */}
            <div className='card__header'>
               <Link to={`/movies/${movie_id}`}><Card.Img className='card__ixmg' variant="top" src={`http://localhost:4000/image/poster/${image}`} /></Link>
            </div>

            {/*-- card-body ----------------------------*/}
            <Card.Body className='card__text'>
               <ListGroup>
                  <ListGroupItem className='card__text__releas'><p>{getDate(released)}</p></ListGroupItem>
               </ListGroup>
            </Card.Body>

            {/*-- footer ---------------------- */}
            <ListGroupItem className='card__text__title'><h3>{title}</h3></ListGroupItem>
            <div className='card__footer'>
               <div className='card__footer__runtime text-center'>
                  <p>{`${runtime} minute`}</p>
               </div>
               <div className='card__footer__gener text-center'>
                  <p>{`${genre}`}</p>
               </div>
             </div>
         </div>
       </CardStyle>
   )
}

const CardStyle = styled.div`

h1{
   color: #C9B898;
}

.card {
   width: 15rem;
   height: auto;
   margin: 0 auto;
   background-color: transparent;
   margin-bottom: 3rem;
   border: 0;


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
   height: 3rem;
   background-color: transparent;
   overflow-y: scroll;

}
.card__text__title h3{
   font-size: 1.5rem;
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

.card__footer{
   padding: 0rem 1rem;
   display: flex;
   justify-content: space-around;
   
}

.card__footer__runtime, .card__footer__gener{
   background-color:#707070;
   width: 5.5rem;
   padding: 0.5rem;
   height: 2rem;
   border-radius: 20px;
   color: #C9B898;
      
}

.card__footer__runtime p, .card__footer__gener p {
   font-size: 12px;
   font-weight: bold;
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

   .card__text__releas{
      font-size: 0.5rem;
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
   runtime: propTypes.string,
   movie_id: propTypes.string.isRequired
}

export default CardMovie;