import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignInButton from '../Button/SignIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Nav.css';
 
const Navigation=()=>{

   return (

      <Navbar className='nav ps-5'  expand="lg">
         <Container fluid>
            <Navbar.Brand className='fw-5 pt-2 nav__band'><h1>XTra</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

      {/*------------------------------------------- Collaps --------------------------------------------------------------- */}

               <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll >
                     <Link className='pt-2 me-4 ms-3 nav__link' to={'/'}> HOME </Link>
                     <Link className='pt-2 me-4 nav__link' to={'/movies'}> MOVIES </Link>
                     <Link className='pt-2 me-4 nav__link' to={'/cinemas'}> CINEMAS </Link>
                     <Link className='pt-2 me-4 nav__link' to={'/promotions'}> PROMOTIONS </Link>
                  </Nav>
                  <Nav>
                     <Form className="d-flex">
                        <FormControl
                           type="search"
                           placeholder="Search"
                           className="me-2 nav__input"
                           aria-label="Search"
                        />
                        <Button className="me-2 fa fa-search nav__search">
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>

                        </Button>
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