import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
            <Container className='navBAR'>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav >
                        <Nav.Link href="#deets" className='me-3'
                        >HOME</Nav.Link>
                        <Nav.Link href="#deets" className='me-3'>WORK</Nav.Link>
                        <Nav.Link href="#deets" className='me-3'>ABOUT US </Nav.Link>
                        <Nav.Link href="#deets">CONTACT US </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;