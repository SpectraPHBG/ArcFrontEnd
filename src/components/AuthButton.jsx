import {NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useAuth} from "../hooks/auth";
import {useNavigate} from "react-router";

export function AuthButton(){
    const { user, logout } = useAuth()
    const navigate = useNavigate();
    const onLogout = () => {
        logout().then(()=>{
            navigate("/");
        })
    }

    if(user){
        return(
            <div>
                <NavDropdown
                    id="nav-dropdown"
                    title={user.username}
                    menuVariant="dark"
                >
                    <Link className="nav-link mx-2"  to="/profile">
                        <img className="me-1 mb-1" src="/user.png"
                             width="17px"
                             height="17px"
                             alt="Logo not found"/>
                        Profile
                    </Link>
                    <NavDropdown.Divider />
                    <Link className="nav-link mx-2" onClick={onLogout} to="/">
                        Log Out
                    </Link>
                </NavDropdown>
            </div>
        );
    }
    else{
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
        );
    }

}
