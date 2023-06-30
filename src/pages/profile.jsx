import {MDBContainer, MDBNavbar, MDBNavbarBrand} from "mdb-react-ui-kit";
import {EditProfile} from "../components/EditProfile";
import {useAuth} from "../hooks/auth";
import {ChangePassword} from "../components/ChangePassword";
import '../css/profile.scss'
import {DeleteAccount} from "../components/DeleteAccount";
import {useEffect} from "react";

export function Profile() {
    const {user, update, deleteUser} = useAuth({middleware: 'auth'});

    useEffect(()=> {
        localStorage.setItem('loggedUser',user);
    },[])

    return (
        <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand className="mx-auto fs-4">Account Profile</MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
            <div className='m-5'>
                <EditProfile user={user} update={update}/>
                <ChangePassword user={user} update={update} />
                <DeleteAccount user={user} deleteUser={deleteUser}/>
            </div>
        </div>

    )
}
