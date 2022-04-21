import propTypes from "prop-types";

const { Accordion, ListGroup } = require("react-bootstrap")

const AccordionItemCinemas =(props)=>{

   // manage props 
   const {data ,title, keyAC } = props;

   return (
      <> 
         <Accordion.Item eventKey={keyAC}>
            <Accordion.Header> {title} </Accordion.Header>
            <Accordion.Body>
               {
                  data.map((Item, index) => {
                     return  ( <ListGroup key={index}> <ListGroup.Item > {Item.cinemaName} </ListGroup.Item> <br/></ListGroup> ) ; 
                  })
               }          
            </Accordion.Body>
         </Accordion.Item> 

      </>
   )
}

AccordionItemCinemas.propTypes ={
   data: propTypes.array,
   title: propTypes.string, 
   keyAC: propTypes.string
}


export default AccordionItemCinemas;