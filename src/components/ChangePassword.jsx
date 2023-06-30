import {Button, Card, Form} from "react-bootstrap";
import ValidationErrors from "./ValidationErrors";
import {useState} from "react";
import {toast} from "react-toastify";

export function ChangePassword({user, update}) {
    const [current_password, setCurrent_password] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = async event => {
        event.preventDefault()
        const id = user.id;
        update({id,setErrors, current_password,password, password_confirmation}).then(()=>{
            toast.success('Successfully changed password');
            setPassword('');
            setCurrent_password('');
            setPassword_confirmation('');
        });
    }

    return (
        <>
        <Card className="w-50 mx-auto my-5">
            <Card.Header>Change Password</Card.Header>
            <ValidationErrors className="p-4" errors={errors} />
            <Card.Body>
                <Form className="w-50" onSubmit={submitForm}>
                    <Form.Group className="mb-3">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control
                            id='current_password'
                            type="password"
                            value={current_password}
                            onChange={event => setCurrent_password(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                            id='password'
                            type="Password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            id='password_confirmation'
                            type="Password"
                            value={password_confirmation}
                            onChange={event => setPassword_confirmation(event.target.value)}
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
