import {Button, Card, Form} from "react-bootstrap";
import {useAuth} from "../hooks/auth";
import {useState} from "react";

export function VerifyEmail({user}) {
    const [status, setStatus] = useState("")
    const {resendEmailVerification} = useAuth();

    const onButtonClick = () => {
        resendEmailVerification({setStatus});
    }

    const renderVerification = () => {
        if(status !== ""){
            return <p className='text-success p-3 pb-0 m-0'>Verification Sent</p>
        }
    }

    return(
        <>
            <Card className="mx-auto my-5 col-10 col-md-8 col-lg-6">
                <Card.Header>Verify Email</Card.Header>
                {renderVerification()}
                <Card.Body>
                    <Button variant="success" onClick={onButtonClick} className='rounded-0'>
                        Resend Verification
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
