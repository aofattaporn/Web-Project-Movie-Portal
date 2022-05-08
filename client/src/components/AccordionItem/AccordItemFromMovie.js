import styled from "styled-components"
import propTypes from "prop-types";
import { Accordion } from "react-bootstrap"
import { useEffect } from "react";
import serviceCinemas from "../../service/cienemaService";
import { useState } from "react";


const AccordItemFromMovie = (props) => {

   const { cinemas } = props;

   // console.log(cinemas);


   const area = ["Bangkok", "Central", "North", "West", "NorthEast", "South", "East"];


   return (
      <AccordionItemFromMovvieStyle>

         {
            area.map((zone, index) => {
               return (
                  <Accordion.Item className="Accordion-item" key={index} eventKey={index}>
                     <Accordion.Header>{zone}</Accordion.Header>
                     <Accordion.Body>
                     </Accordion.Body>
                  </Accordion.Item>
               )
            })
         }
      </AccordionItemFromMovvieStyle>
   )
}

const AccordionItemFromMovvieStyle = styled.div`
   margin-top: 5rem;
   .Accordion-item{
      margin-bottom: 2rem;
   }
`

AccordItemFromMovie.propTypes ={

   cinemas: propTypes.array,

}

export default AccordItemFromMovie;