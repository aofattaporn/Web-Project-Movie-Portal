import propTypes from "prop-types";
// import { useEffect } from "react";
// import serviceCinemas  from "../../service/cienemaService";

const { Accordion } = require("react-bootstrap")

const AccordionItemCinemas =(props)=>{

   // manage props 
   const {title, keyAC } = props;

   // usecontext    

   return (
      <> 
         <Accordion.Item eventKey={keyAC}>
            <Accordion.Header> {title} </Accordion.Header>
            <Accordion.Body>
               <p>fetch data</p>
               </Accordion.Body>
         </Accordion.Item> 

      </>
   )
}

AccordionItemCinemas.propTypes ={
   title: propTypes.string, 
   keyAC: propTypes.string
}


export default AccordionItemCinemas;