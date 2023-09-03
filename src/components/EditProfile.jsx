import {Button, Card, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import ErrorsDisplay from "./ErrorsDisplay";
import {toast} from "react-toastify";

export function EditProfile({user, update}) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(()=> {
        setEmail(user.email);
        setUsername(user.username);
    },[user])

    const submitForm = async event => {
        event.preventDefault()
        const id = user.id;
        update({id,setErrors, email,username}).then(() => {

        });
    }

    return(
        <>
        <Card className="mx-auto my-5 col-10 col-md-8 col-lg-6">
            <Card.Header>Account Information</Card.Header>
            <ErrorsDisplay className="p-4" errors={errors} />
            <Card.Body>
                <Form className="col-10 col-sm-8 col-xl-6" onSubmit={submitForm}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            id='email'
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            id='username'
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </Form.Group>
                    <Button variant="success" type="submit" className='rounded-0'>
                        Save
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}
