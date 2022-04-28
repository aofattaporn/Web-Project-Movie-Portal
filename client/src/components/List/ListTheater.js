import styled from "styled-components";
import {Col, Row} from "react-bootstrap";
import propTypes from "prop-types";
import serviceProgram from "../../service/programService";
import { useEffect } from "react";
import { useState } from "react";


const ListTheater = (props) =>{

   const { theater, movie_id, cinema_id, today, tommorrow } = props;

   const [program, setProgram] = useState([]);

   const getProgramByTheater=()=>{

      const dateSet = {
         theater: theater,
         movie_id: movie_id,
         cinema_id: cinema_id,
         start: today,
         end: tommorrow
      }

      serviceProgram.getProgramsShowtime(dateSet)
      .then((res) => setProgram(res.data))
      .catch((err) => console.log(err));
   }

   useEffect(()=>{
      getProgramByTheater();
   }, [])
   

   return (
      <ListTheaterStyle>
      <Row className="list-theater">
            <Col className="list-theater__title" md="2">
               <h6>{`theater : ${theater}`}</h6>
            </Col>
            <Col className="container-showtime" md="9">

               {/* // map */}
               {
                  program.map((item) => {
                     return (<button className="showtime-button">{ new Date(item.date).getHours() + " : " + new Date(item.date).getMinutes()}</button>)
                  })
               }
            </Col>
      </Row>
      </ListTheaterStyle>  
   )
}

const ListTheaterStyle = styled.div`
   .list-theater{
      margin-bottom: 1rem;
      border-bottom: 4px solid rgba(0, 0, 0, 0.15);
      padding: 1rem;
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

   .showtime-button{
      background-color: #C9B898;
      color: #fff;
      border: 0;
      border-radius: 5px;
      margin: 0rem 1rem;
   }

   .showtime-button:hover{
      background-color: rgb(151, 121, 89);
      font-weight: bold;
   }

`; 

ListTheater.propTypes ={
   theater: propTypes.number,
   movie_id: propTypes.string,
   program_id: propTypes.string,
   cinema_id: propTypes.string,
   today: propTypes.string,
   tommorrow: propTypes.string
}

export default ListTheater;