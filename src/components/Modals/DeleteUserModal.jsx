import Modal from "react-bootstrap/Modal";
import React, {useEffect, useState} from "react";
import {Button, Form, Card} from "react-bootstrap";

export function DeleteUserModal({onDelete, show, setShow}){
    const [current_password, setCurrent_password] = useState('')



    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Warning!</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
