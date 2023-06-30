import '../css/header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AuthButton} from "./AuthButton";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

export function Header() {

    const renderAuth = () => {
        const isLogged = localStorage.getItem('isLogged');
        if(isLogged === 'true'){
            return <AuthButton />
        }
        else {
            return (
                <div>
                    <Link className="nav-link mx-2"  to="/login">
                        <img className="mb-1 mx-1" src="/login-16.ico"
                             width="16px"
                             height="16px"
                             alt="Logo not found"/>
                        Sign up / Login
                    </Link>
                </div>
            )
        }
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className="navbar-brand" to="/">
                        <Image className="me-1 mb-1" width="25px" src="/favicon.ico"  alt="Error..."/>
                        ArcSystems
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

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
