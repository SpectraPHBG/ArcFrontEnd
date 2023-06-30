import {Button, Card, Form} from "react-bootstrap";
import ValidationErrors from "./ValidationErrors";
import {useState} from "react";
import React from "react";
import {useNavigate} from "react-router";

export function DeleteAccount({user, deleteUser}) {
    const [current_password, setCurrent_password] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const submitForm = async event => {
        event.preventDefault()
        const id = user.id;
        deleteUser({id, setErrors, current_password}).then(() => {
            navigate('/');
        });
    }

    return(
        <>
            <Card className="w-50 mx-auto my-5">
                <Card.Header>Delete Account</Card.Header>
                <ValidationErrors className="p-4" errors={errors} />
                <Card.Body>
                    <p className="my-2 text-muted">
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </p>
                    <Form className="w-50" onSubmit={submitForm}>
                        <Form.Group className="my-3">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control
                                id='current_password'
                                type="password"
                                onChange={event => setCurrent_password(event.target.value)}
                            />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Delete Account
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
