import '../css/header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AuthButton} from "./AuthButton";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

export function Header() {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid className='px-5 mx-3'>
                    <Link className="navbar-brand" to="/">
                        <Image className="me-1 mb-1" width="25px" src="/favicon.ico"  alt="Error..."/>
                        ArcSystems
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-lg-4 text-center text-lg-start">
                            <Link className='text-decoration-none nav-link my-3 m-lg-0' to='/config-selector'>Configurator</Link>
                            <Link className='text-decoration-none nav-link my-3 m-lg-0' to='/config-selector'>Tutorials</Link>
                            <Link className='text-decoration-none nav-link my-3 m-lg-0' to='/config-selector'>Blog</Link>
                            <Link className='text-decoration-none nav-link my-3 m-lg-0' to='/config-selector'>Contact</Link>
                        </Nav>

                        <Nav>
                            <AuthButton></AuthButton>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
