import '../css/footer.scss';
import {MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

export function Footer() {
    return(
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                ArcSystems
                            </h6>
                            <p>
                                The ArcSystems PC Configurator is currently in Beta! <br/>
                                Any feedback is welcome through the contact email!
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <p>
                                    For any questions, issuer or feedback
                                    you can contact us on this email!
                                </p>
                                arcpcteam@gmail.com
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <Link className='text-white ms-1'>
                    ArcSystems!
                </Link>
            </div>
        </MDBFooter>
    );
}
