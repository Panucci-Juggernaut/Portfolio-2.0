import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaRegUser, FaRegSun } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/'>Olawale</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/'><FaHome className='me-1'/>Home</Nav.Link>
                        <Nav.Link as={Link} to='/about'>< FaRegUser className='me-1'/>About</Nav.Link>
                        <Nav.Link as={Link} to='/projects'>< FaRegSun /> Projects</Nav.Link>
                        <Nav.Link as={Link} to='/contact'><MdOutlineContactMail/> Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;