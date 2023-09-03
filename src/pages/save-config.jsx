import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {usePcParts} from "../hooks/pc-parts";

export function SaveConfig() {
    const [textBoxValue, setTextBoxValue] = useState('');

    const {state} = useLocation();
    const navigate = useNavigate();
    const rig = state;
    const {savePC} = usePcParts();

    const onTextBoxChange = (event) => {
        setTextBoxValue(event.target.value);
    };

    const onSubmit = (event) =>{
        event.preventDefault();

        rig.name = textBoxValue;

        savePC(rig).then((response) => {
            navigate('/');
        });
    }

    return (
        <>
            <MDBContainer fluid className='configurator-body min-vh-50 align-items-center justify-content-center align-self-center'>
                <MDBRow className='d-flex justify-content-center align-items-center align-items-center justify-content-center align-self-center'>
                    <MDBCol className='my-5 col-10 col-lg-9 col-xl-7 col-xxl-6 fixed-height-card'>
                        <h1 className="text-white fw-bolder shadow-5-strong text-center mb-4 hide-caret">Save Configuration!</h1>
                        <MDBCard className="bg-light rounded-5 mx-auto mt-5 pt-3">

                            <MDBCardBody className='px-4'>
                                <Form onSubmit={onSubmit}>
                                    <Form.Group className="mb-3" controlId="filler">
                                        <h5 className='text-center'>Please give your PC a name to make it easier to find it later!</h5>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="pc.name">
                                        <Form.Label>PC Name</Form.Label>
                                        <Form.Control type="text" placeholder="Name" value={textBoxValue} onChange={onTextBoxChange} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 text-center" controlId="submit">
                                    <Button size='lg' variant='success' type='submit' className='me-2 mx-auto rounded-0'>Save</Button>
                                    </Form.Group>
                                </Form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    );
}
