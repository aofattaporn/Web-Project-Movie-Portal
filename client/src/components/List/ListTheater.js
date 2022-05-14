import styled from "styled-components";
import {Col, Row} from "react-bootstrap";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const ListTheater = (props) =>{

   const { program, movie_id, cinema_id, theater } = props;

   useEffect(()=>{
   }, [])

   return (
      <ListTheaterStyle>
      <Row className="list-theater">
            <Col className="list-theater__title" md="2">
               { theater > 0 ? (<h6>{`theater : ${theater}`}</h6>) : <h1></h1>}
            </Col>
         { !cinema_id ?    
         
            <Col className="container-showtime" md="9">
               {
                  (program && movie_id && theater && !cinema_id ) ? 
                  
                  program.filter(fil => (fil.theater.toString() === theater && fil.movies === movie_id))
                  .map((item, idx) => {
                      if(new Date(item.date).getHours() < new Date().getHours()){
                        return (<button key={idx} className="showtime-button--unsecess">{ new Date(item.date).getHours() + " : " + new Date(item.date).getMinutes()}</button>)
                      }else if(new Date(item.date).getHours() === new Date().getHours()){
                         if(new Date(item.date).getMinutes() < new Date().getMinutes()){
                           return (<button key={idx} className="showtime-button--unsecess">{ new Date(item.date).getHours() + " : " + new Date(item.date).getMinutes()}</button>)
                         }else{
                           return (<Link key={idx} to={`/booking/${item._id}`}><button className="showtime-button--success">{ new Date(item.date).getHours() + " : " + new Date(item.date).getMinutes()}</button></Link> )
                         }
                      }
                      else{
                        return (<Link key={idx} to={`/booking/${item._id}`}><button className="showtime-button--success">{ new Date(item.date).getHours() + " : " + new Date(item.date).getMinutes()}</button></Link> )
                      }


                   }) 
                  : <></>
                  
               }
            </Col>

            : 

            <Col className="container-showtime" md="9">
               {
                  (program && movie_id && theater && cinema_id ) ? 
                  
                  program.filter(fil => (fil.theater.toString() === theater && fil.movies === movie_id && fil.cinema === cinema_id))
                  .map((item, idx) => {
                     if(new Date(item.date).getHours() < new Date().getHours()){
                        return (<button key={idx} className="showtime-button--unsecess">{ new Date(item.date).getHours() + " : " + new Date(item.date).getMinutes()}</button>)
                      }else if(new Date(item.date).getHours() === new Date().getHours()){
                         if(new Date(item.date).getMinutes() < new Date().getMinutes()){
                           return (<button key={idx} className="showtime-button--unsecess">{ new Date(item.date).getHours() + " : " + new Date(item.date).getMinutes()}</button>)
                         }else{
                           return (<Link key={idx} to={`/booking/${item._id}`}><button className="showtime-button--success">{ new Date(item.date).getHours() + " : " + new Date(item.date).getMinutes()}</button></Link> )
                         }
                      }
                      else{
                        return (<Link key={idx} to={`/booking/${item._id}`}><button className="showtime-button--success">{ new Date(item.date).getHours() + " : " + new Date(item.date).getMinutes()}</button></Link> )
                      }
                   }) 
                  : <></>
                  
               }
            </Col>

         }
      </Row>
      </ListTheaterStyle>  
   )
}

ListTheater.propTypes ={
   program: propTypes.array,
   movie_id:  propTypes.string,
   theater: propTypes.string
}

const ListTheaterStyle = styled.div`
   .list-theater{
      margin-bottom: 1rem;
      border-bottom: 4px solid rgba(0, 0, 0, 0.15);
      padding: 1rem;
      margin: 1rem;
   }

   .list-theater__title{
      border-right: 2px solid rgba(0, 0, 0, 0.15);
   }

   .list-theater__title h4{
      color: #C9B898;
   }

   .container-showtime{
      display: flex;
      flex-wrap: wrap;
   }

   .showtime-button--success{
      background-color: #C9B898;
      color: #fff;
      border: 0;
      border-radius: 5px;
      margin: 0rem 1rem;
   }

   .showtime-button--unsecess{
      background-color: #DEDEDE;
      color: #ffff;
      border: 0;
      border-radius: 5px;
      margin: 0rem 1rem;
   }

   .showtime-button--unsecess:hover{
      cursor: default;
   }

   .showtime-button--success:hover{
      background-color: rgb(151, 121, 89);
      font-weight: bold;
   }

`; 


export default ListTheater;