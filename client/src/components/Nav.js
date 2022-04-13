import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignInButton from './Button/SignIn';
 
const Navigation=()=>{



   return (

      <Navbar bg="light" expand="lg">
         <Container fluid>
            <Navbar.Brand className='fw-5 pt-2' href="#">XTra</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

      {/*------------------------------------------- Collaps --------------------------------------------------------------- */}

               <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll >
                     <Link className='pt-2 me-4' to={'/'}> Home</Link>
                     <Link className='pt-2 me-4' to={'/movies'}> Movies</Link>
                     <Link className='pt-2 me-4' to={'/cinemas'}> Cinemas</Link>
                     <Link className='pt-2 me-4' to={'/promotions'}> Promostions </Link>
                  </Nav>
                  <Nav>
                     <Form className="d-flex">
                        <FormControl
                           type="search"
                           placeholder="Search"
                           className="me-2"
                           aria-label="Search"
                        />
                        <Button className="me-2" variant="outline-success">Search</Button>
                     </Form>
                     <div>
                        <SignInButton/>
                     </div>

                  </Nav>
               </Navbar.Collapse>
         </Container>
      </Navbar>

   )
}

export default Navigation;