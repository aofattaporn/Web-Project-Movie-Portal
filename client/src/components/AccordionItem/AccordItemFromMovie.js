import styled from "styled-components"
import propTypes from "prop-types";
import { Accordion, ListGroup } from "react-bootstrap"
import { useEffect } from "react";
import serviceCinemas from "../../service/cienemaService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import components from "..";
import NoMovie from "../Handle/NoMovie";
import { ListItem } from "@mui/material";


const AccordItemFromMovie = (props) => {

   const { cinemas, program, movie_id } = props;
   
   let flag = ""


   const area = ["Bangkok", "Central", "North", "West", "NorthEast", "South", "East"];


   return (

      <AccordionItemFromMovvieStyle>
         {
            
         (program.length > 0) ?  
         < Accordion               
            defaultActiveKey={['0']} alwaysOpen       
         > 

         {
            program && cinemas ?   
            program.map(item => item.cinema)
            .filter((value, index, self) => self.indexOf(value) === index) 
            .map((element, idx1) => cinemas.filter(x => element === x._id).map((y) => 
            area.filter((zone, idx) => zone === y.cinemaArea && zone != flag ).map( (z, idx2) => { 
               flag = z;
               return ( 
                  <Accordion.Item className="Accordion-item" key={idx2} eventKey={idx1}>
                     <Accordion.Header>{z}</Accordion.Header>
                     <Accordion.Body>
                        {
                           program.map(item => item.cinema)
                           .filter((value, index, self) => self.indexOf(value) === index) 
                           .map(element => cinemas.filter(x => element === x._id && x.cinemaArea === z)
                           .map((x, idx) => { 
                              return (
                                 <div key={idx}>
                                    <ListItem className="listItem--frommovie" > 
                                       <div className="listItem__list">
                                          <FontAwesomeIcon  className="icon" icon={faLocationDot}></FontAwesomeIcon>
                                          <p>{x.cinemaName} </p>
                                       </div>
                                    </ListItem> 

                                    {/* // distince by theater  */}
                                    {
                                    program.filter( filtheater => filtheater.movies === movie_id && filtheater.cinema === x._id)
                                    .map(item => item.theater.toString())
                                    .filter((value, index, self) => self.indexOf(value) === index)
                                    .map((theater, idx) => 
                                       { 
                                          return (
                                          <components.ListTheater
                                             key={idx}
                                             program={program}
                                             cinema_id={x._id}
                                             movie_id={movie_id}
                                             theater={theater.toString()}
                                          >
                                          </components.ListTheater> 
                                          )
                                       })
                                    }
                                 </div>
                                 )}))
                        }
                     </Accordion.Body>
                  </Accordion.Item>
               )}))) : <></>
            }
         </Accordion>
         : <NoMovie></NoMovie>
      }
      </AccordionItemFromMovvieStyle>
   )
}

const AccordionItemFromMovvieStyle = styled.div`
   margin-top: 5rem;
   .Accordion-item{
      margin-bottom: 2rem;
   }

   .cinema-name{
      background-color: green;
      display: flex;
      /* align-items: center; */
      padding: 1rem;
      margin-bottom: 0.5rem;
   }

      .listItem--frommovie > .listItem__list{
         display: flex;
         align-items: center;
         background-color: #F5F0E5;
         width: 100%;
         height: 3rem;
         padding: 0rem 1rem;
      }

      .listItem--frommovie .listItem__list .icon {
         margin-right: 1rem;
      }
      .listItem--frommovie .listItem__list p {
         margin: 0.2rem;
      }

`

AccordItemFromMovie.propTypes ={

   cinemas: propTypes.array,
   program: propTypes.array

}

export default AccordItemFromMovie;