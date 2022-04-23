import propTypes from "prop-types";
const { Link } =  require('react-router-dom')
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
                     return  ( 
                      <ListGroup key={index}> 
                        <Link to={`/cinemas/${Item._id}`}>
                           <ListGroup.Item className="listItem" > 
                              {Item.cinemaName} 
                           </ListGroup.Item> 
                        </Link>
                        <br/>
                      </ListGroup> ) ; 
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