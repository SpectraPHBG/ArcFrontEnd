import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBCardTitle,
} from "mdb-react-ui-kit";
import React from "react";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../css/home.css';

export default function Home(){

    return(
        <div className="home">
            <div className="top-greeter py-2 ps-4">
                <div className="ps-5 pt-2 pt-xl-5 text-white row">
                    <h1 className="col-12 text-start"> ArcSystems PC Configurator</h1>
                    <p className="col-5 my-4 text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                </div>
                <div className="ps-5 text-white row w-75">
                    <Link className="ms-2 col-2 btn btn-success" to="/configurator">PC Configurator</Link>
                    <Button className="ms-2 col-2 bg-transparent" variant="outline-success">Tutorials</Button>
                </div>
            </div>
            <MDBContainer fluid className="my-5 mx-5">
                <MdChevronLeft size={90} />
                <MDBRow className="flex-nowrap overflow-x-scroll scroll">
                    <MDBCard className="text-black col-3 m-2">
                        <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
                        <MDBCardImage
                            className="hover-zoom"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                            position="top"
                            alt="Apple Computer"
                        />
                        <MDBCardBody>
                            <div className="text-center">
                                <MDBCardTitle>Believing is seeing</MDBCardTitle>
                                <a href="#" className="stretched-link text-decoration-none">
                                    <p className="text-muted mb-4">Apple pro display XDR</p>
                                </a>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <span>Ryzen 1600 3.6GHz</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Nvidia Gefore GTX 1080 TI</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>2x8 GB RAM CORSAIR 4600 GHz DDR4</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                <span>Total</span>
                                <span>$7,197.00</span>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="text-black col-3 m-2">
                        <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
                        <MDBCardImage
                            className="hover-zoom"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                            position="top"
                            alt="Apple Computer"
                        />
                        <MDBCardBody>
                            <div className="text-center">
                                <MDBCardTitle>Believing is seeing</MDBCardTitle>
                                <a href="#" className="stretched-link text-decoration-none">
                                    <p className="text-muted mb-4">Apple pro display XDR</p>
                                </a>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <span>Ryzen 1600 3.6GHz</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Nvidia Gefore GTX 1080 TI</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>2x8 GB RAM CORSAIR 4600 GHz DDR4</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                <span>Total</span>
                                <span>$7,197.00</span>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="text-black col-3 m-2">
                        <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
                        <MDBCardImage
                            className="hover-zoom"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                            position="top"
                            alt="Apple Computer"
                        />
                        <MDBCardBody>
                            <div className="text-center">
                                <MDBCardTitle>Believing is seeing</MDBCardTitle>
                                <a href="#" className="stretched-link text-decoration-none">
                                    <p className="text-muted mb-4">Apple pro display XDR</p>
                                </a>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <span>Ryzen 1600 3.6GHz</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Nvidia Gefore GTX 1080 TI</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>2x8 GB RAM CORSAIR 4600 GHz DDR4</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                <span>Total</span>
                                <span>$7,197.00</span>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="text-black col-3 m-2">
                        <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
                        <MDBCardImage
                            className="hover-zoom"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                            position="top"
                            alt="Apple Computer"
                        />
                        <MDBCardBody>
                            <div className="text-center">
                                <MDBCardTitle>Believing is seeing</MDBCardTitle>
                                <a href="#" className="stretched-link text-decoration-none">
                                    <p className="text-muted mb-4">Apple pro display XDR</p>
                                </a>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <span>Ryzen 1600 3.6GHz</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Nvidia Gefore GTX 1080 TI</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>2x8 GB RAM CORSAIR 4600 GHz DDR4</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                <span>Total</span>
                                <span>$7,197.00</span>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="text-black col-3 m-2">
                        <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
                        <MDBCardImage
                            className="hover-zoom"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                            position="top"
                            alt="Apple Computer"
                        />
                        <MDBCardBody>
                            <div className="text-center">
                                <MDBCardTitle>Believing is seeing</MDBCardTitle>
                                <a href="#" className="stretched-link text-decoration-none">
                                    <p className="text-muted mb-4">Apple pro display XDR</p>
                                </a>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <span>Ryzen 1600 3.6GHz</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Nvidia Gefore GTX 1080 TI</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>2x8 GB RAM CORSAIR 4600 GHz DDR4</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                <span>Total</span>
                                <span>$7,197.00</span>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBRow>
                <MdChevronRight size={90} />
            </MDBContainer>
        </div>
    );
}

