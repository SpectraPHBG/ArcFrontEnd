import {Button, Card, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import ValidationErrors from "./ValidationErrors";
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
            toast.success('Successfully changed username/email');
        });
    }

    return(
        <>
        <Card className="w-50 mx-auto my-5">
            <Card.Header>Account Information</Card.Header>
            <ValidationErrors className="p-4" errors={errors} />
            <Card.Body>
                <Form className="w-50" onSubmit={submitForm}>
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
                    <Button variant="success" type="submit">
                        Save
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}
