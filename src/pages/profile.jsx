import {MDBContainer, MDBNavbar, MDBNavbarBrand} from "mdb-react-ui-kit";
import {EditProfile} from "../components/EditProfile";
import {useAuth} from "../hooks/auth";
import {ChangePassword} from "../components/ChangePassword";
import '../css/profile.scss'
import {DeleteAccount} from "../components/DeleteAccount";
import Container from "react-bootstrap/Container";
import {VerifyEmail} from "../components/VerifyEmail";

export function Profile() {
    const {update, deleteUser} = useAuth({middleware: 'auth'});
    const {user} = useAuth();

    const renderUserNotVerified = () => {
        if(!user['email_verified_at']){
            return (
            <Container className='container-fluid bg-danger mw-100 text-center text-light fw-bold'>
                <p className='py-2'>Email is not verified! Please check your email for verification! {user['emailVerified'] ? "Verified" : "Not Verified"}</p>
            </Container>
            );
        }
        else{
            return (
                <span></span>
            )
        }
    }

    return (
        <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand className="mx-auto fs-4">Account Profile</MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
            {renderUserNotVerified()}
            <div className='m-5'>
                <VerifyEmail user={user} />
                <EditProfile user={user} update={update}/>
                <ChangePassword user={user} update={update}/>
                <DeleteAccount user={user} deleteUser={deleteUser}/>
            </div>
        </div>

    )

}
