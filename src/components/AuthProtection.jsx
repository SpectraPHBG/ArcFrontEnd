import {useEffect} from "react";
import {useNavigate} from "react-router";
import {useAuth} from "../hooks/auth";

export function AuthProtection({children}){
    const {user} = useAuth({middleware: 'auth'});
    const navigate = useNavigate();

    useEffect(() => {
        if(user === undefined){
            navigate('/');
        }else{
            localStorage.setItem('loggedUser', user);
        }
    }, [])

    if (user === undefined) {
        return (
            <div>

            </div>
        );
    } else {
        return (
            children
        );
    }
}
