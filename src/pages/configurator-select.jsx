import {MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import React from "react";
import {Link} from "react-router-dom";

export function ConfiguratorSelect() {
    return (
        <>
            <MDBContainer fluid className='configurator-body'>
                <MDBRow className='d-flex justify-content-center align-items-center'>
                    <MDBCol className='my-5 col-12 col-lg-11 col-xl-10 col-xxl-9'>

                        <h1 className="text-white fw-bolder shadow-5-strong text-center mb-4 hide-caret">Select
                            Configurator</h1>

                        <MDBCard className="w-75 mx-auto rounded-3">
                            <MDBCardBody className='px-4'>
                                <MDBRow className='justify-content-center'>
                                    <div className='col-8'>
                                        <p className='text-center'>
                                            <h5> Please Select one of 2 options!</h5>
                                        </p>
                                        <p>
                                            <ul className='mt-5'>
                                                <li>
                                                    <span className='fw-bold'>Auto Configurator - </span>
                                                    <span>
                                                         The Automated Configurator is designed for those, who do not feel confident or do not have the knowledge and experience
                                                        to attempt building their own PC. This configurator lets you choose from different options regarding what you
                                                        want the pc for, what you want with it and more!
                                                    </span>
                                                </li>
                                                <li className='pt-4 pb-5'>
                                                <span className='fw-bold'>Manual Configurator - </span>
                                                    This is your standard PC Configurator where you select the parts and then submit the selected configuration for potential
                                                    stability and performance issues! It is for those who are willing to create their configuration themselves! Enjoy building
                                                    the PC of your dreams!
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </MDBRow>
                                <MDBRow className='justify-content-center'>
                                    <Link className="btn col-4 btn-success rounded-0" to="/configurator">Manual</Link>
                                    <Link className="ms-2 col-4 btn btn-dark border border-success border-2 rounded-0"
                                          to='/auto-configurator'>Auto</Link>

                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    );
}
