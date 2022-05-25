import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import styled from "styled-components";
import propTypes from "prop-types";
import FlashMessage from 'react-flash-message'


const CardHomePage =(props)=>{

   const getDate =(released)=>{
      const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let d = new Date(released);
      return ('release date : ' + d.getDate()+ ' ' + month[(d.getMonth()+1)] + ' '+ d.getFullYear());
   }
   
   const { movie } = props;


   return (
      <CardHomepageStyle> 
         { movie ? 

         
         <Card className="card-container">
            {/*---- header -----------------------------------*/}
            <Link to={`/movies/${movie._id}`}>
               <div className='card__header'>
                  <Card.Img className='card__ixmg' variant="top" src={`http://localhost:4000/image/poster/${movie.image}`} />
               </div>
            </Link>

            {/*---- card-body -----------------------------------*/}
            <Card.Body className='card__text'>
               <ListGroup>

                  <ListGroupItem className='card__text__releas'><div> {getDate(movie.released)} </div></ListGroupItem>
               </ListGroup>
            </Card.Body>
            <ListGroupItem className='card__text__title'><h5>{movie.name}</h5></ListGroupItem>
            <div className='card__footer'>
               <div className='card__footer__runtime text-center'>
                  <p>{`${movie.runtime} minute`}</p>
               </div>
               <div className='card__footer__gener text-center'>
                  <p>{`${movie.genre}`}</p>
                  
               </div>
             </div>
         </Card>
          :  <></> }
      </CardHomepageStyle>
   )
}

const CardHomepageStyle = styled.div`

.card-container{
   border: 0;

   width: 14rem;
   height: 5rem;
   height: auto;
   margin:0 auto;
   /* margin-top: 7rem; */

   background-color: transparent;
   margin-bottom: 3rem;
}

h1{
   color: #C9B898;
}

.card__header:hover{
   cursor: pointer;
   box-shadow: rgba(151, 121, 89, 0.25) 0px 14px 28px, rgba(151, 121, 89, 0.22) 0px 10px 10px;
   /* width: 13rem; */
}
.card__header {
   margin: 0 auto;
}

.card__ixmg{
   cursor: pointer;
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
   align-items: center;
   justify-content: space-between;
   padding: 1rem;
   height: 1rem;
   font-size: 32px;
   font-size: 10px;
   background-color: rgb(151, 121, 89);
   border-bottom-right-radius: 10px ;
   border-bottom-left-radius: 10px ;

}
.card__text__releas span{
   position: relative;
   right: -2rem;
}

.like:hover{
   color: #CC0000;
   cursor: pointer;
}

.card__text__title{
   border: 0;
   color: white;
   font-weight: bolder;
   height: 2rem;
   margin-bottom: 1rem;
   /* width: 18rem; */
   background-color: transparent;
   overflow-y: scroll;


}

/* ----------------- show thim and gerner ------------- */


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

.flashMessage{
   position: fixed;
   right: 0;
   top: 0;
   background-color: #CC0000;
}

`

CardHomePage.propTypes ={
   movie: propTypes.object
}

export default CardHomePage;

