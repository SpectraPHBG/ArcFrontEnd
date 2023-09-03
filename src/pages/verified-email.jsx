import {Button, Card, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

export function VerifiedEmail() {

    return (
        <div>
            <div className='m-5'>
                <>
                    <Card className="w-50 mx-auto my-5">
                        <Card.Header>Verification Successful</Card.Header>
                        <Card.Body>
                            <p>Your Email has been successfully verified!</p>
                            <Link className='btn btn-success' to='/'>
                                Home Page
                            </Link>
                        </Card.Body>
                    </Card>
                </>
            </div>
        </div>

    )

}
