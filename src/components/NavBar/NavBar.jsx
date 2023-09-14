import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
// 👆 COMPONENTES DE BT

export const Texto1 = () => {
    return <h1> Texto1 </h1>
}

export const Texto2 = () => {
    return <h1> Texto2 </h1>
}


function NavBar({ texto, numero, valor, sumar, children }) {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Artitips</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Obras comtemporaneas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Obras clasicas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Obras modernas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Obras renacentistas
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <CartWidget>

            </CartWidget>



        </Navbar>
    );
}

export default NavBar;