import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import propTypes from "prop-types";



const CardHomePage =(props)=>{

   const getDate =(released)=>{
      const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let d = new Date(released);
      return ('release date : ' + d.getDate()+ ' ' + month[(d.getMonth()+1)] + ' '+ d.getFullYear());
   }
   
   const { movie_id , title, image, released, runtime, genre } = props;

   console.log(props);

   return (
      <CardHomepageStyle> 
         <Card className="card-container">
            {/*---- header -----------------------------------*/}
            <Link to={`/movies/${movie_id}`}>
               <div className='card__header'>
                  <Card.Img className='card__ixmg' variant="top" src={`http://localhost:4000/image/poster/${image}`} />
               </div>
            </Link>

            {/*---- card-body -----------------------------------*/}
            <Card.Body className='card__text'>
               <ListGroup>
                  <ListGroupItem className='card__text__releas'><p>{getDate(released)}</p></ListGroupItem>
               </ListGroup>
            </Card.Body>
            <ListGroupItem className='card__text__title'><h5>{title}</h5></ListGroupItem>
            <div className='card__footer'>
               <div className='card__footer__runtime text-center'>
                  <p>{`${runtime} minute`}</p>
               </div>
               <div className='card__footer__gener text-center'>
                  <p>{`${genre}`}</p>
               </div>
             </div>
         </Card>
      </CardHomepageStyle>
   )
}

const CardHomepageStyle = styled.div`

.card-container{
   /* margin-top: 5rem; */
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
   height: 2rem;
   margin-bottom: 1rem;
   /* width: 18rem; */
   background-color: transparent;
   overflow-y: scroll;


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

`

CardHomePage.propTypes ={
   title: propTypes.string,
   image: propTypes.string, 
   released: propTypes.string,
   runtime: propTypes.string,
   movie_id: propTypes.string
}

export default CardHomePage;
