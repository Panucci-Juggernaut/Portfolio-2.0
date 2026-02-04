import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaRegUser, FaRegSun } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import logo from '../assets/logo.jpg';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img
                        src={logo}
                        alt='logo'
                        width='40'
                        height='40'
                        className='d-inline-block align-top rounded-circle'
                    />
                </Navbar.Brand>
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