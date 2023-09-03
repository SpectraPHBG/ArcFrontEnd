import {MDBContainer, MDBNavbar, MDBNavbarBrand} from "mdb-react-ui-kit";
import {useAuth} from "../hooks/auth";
import Container from "react-bootstrap/Container";
import {useEffect} from "react";
import {useState} from "react";
import {usePcParts} from "../hooks/pc-parts";
import {Accordion, Button, Spinner} from "react-bootstrap";
import {CpuModal} from "../components/Modals/CpuModal";
import React from "react";
import {Link} from "react-router-dom";
import {GpuModal} from "../components/Modals/GpuModal";
import {PcCaseModal} from "../components/Modals/PcCaseModal";
import {MotherboardModal} from "../components/Modals/MotherboardModal";
import {AirCoolerModal} from "../components/Modals/AirCoolerModal";
import {LiquidCoolerModal} from "../components/Modals/LiquidCoolerModal";
import {PowerSupplyModal} from "../components/Modals/PowerSupplyModal";
import {LoopSavedPcRamModalTrigger} from "../components/LoopSavedPcRamModalTrigger";
import {LoopSavedPcHddModalTrigger} from "../components/LoopSavedPcHddModalTrigger";
import {LoopSavedPcSataSSDModalTrigger} from "../components/LoopSavedPcSataSSDModalTrigger";
import {LoopSavedPcM2SSDModalTrigger} from "../components/LoopSavedPcM2SSDModalTrigger";
import {useNavigate} from "react-router";

export function SavedConfigs() {
    const {user} = useAuth();
    const navigate = useNavigate();
    const {getUserPcs, deleteSavedPc} = usePcParts();
    const [savedPcs, setSavedPcs] = useState([]);

    const [showCpuDetails, setShowCpuDetails] = useState(false);
    const [showGpuDetails, setShowGpuDetails] = useState(false);
    const [showPcCaseDetails, setShowPcCaseDetails] = useState(false);
    const [showMotherboardDetails, setShowMotherboardDetails] = useState(false);
    const [showAirCoolerDetails, setShowAirCoolerDetails] = useState(false);
    const [showLiquidCoolerDetails, setShowLiquidCoolerDetails] = useState(false);
    const [showPsuDetails, setShowPsuDetails] = useState(false);


    useEffect(() => {
        getUserPcs().then((response) => {
            setSavedPcs(response.data.data);
            console.log(savedPcs);
        })
    }, [])

    const renderCooler = (pc) => {
        if(pc['airCooler']){
            return (
                <>
                    <div className='justify-content-around'>
                            <span>
                                Air Cooler: {pc['airCooler']['name']} |
                            </span>
                        <AirCoolerModal airCooler={pc['airCooler']} show={showAirCoolerDetails} setShow={setShowAirCoolerDetails}/>
                        <Link
                            variant='link'
                            className='text-decoration-none position-relative end-0 top-0 py-0 px-1 my-0 rounded-0 border-0 text-end'
                            onClick={() => {
                                setShowAirCoolerDetails(true)
                            }}>Specs</Link>
                    </div>
                    <hr/>
                </>
            );
        }
        else {
            return (
                <>
                    <div className='justify-content-around'>
                            <span>
                                Liquid Cooler: {pc['liquidCooler']['name']} |
                            </span>
                        <LiquidCoolerModal liquidCooler={pc['liquidCooler']} show={showLiquidCoolerDetails} setShow={setShowLiquidCoolerDetails}/>
                        <Link
                            variant='link'
                            className='text-decoration-none position-relative end-0 top-0 py-0 px-1 my-0 rounded-0 border-0 text-end'
                            onClick={() => {
                                setShowLiquidCoolerDetails(true)
                            }}>Specs</Link>
                    </div>
                    <hr/>
                </>
            );
        }
    }

    const getMappedRams = (rams) => {
        return rams.map((ram, index) =>
            <LoopSavedPcRamModalTrigger ram={ram} id={index}/>
        )
    }

    const getMappedHdds = (hdds) => {
        return hdds.map((hdd, index) =>
            <LoopSavedPcHddModalTrigger hdd={hdd} id={index}/>
        )
    }

    const getMappedSataSsds = (ssds) => {
        return ssds.map((ssd, index) =>
            <LoopSavedPcSataSSDModalTrigger ssd={ssd} id={index}/>
        )
    }

    const getMappedM2Ssds = (ssds) => {
        return ssds.map((ssd, index) =>
            <LoopSavedPcM2SSDModalTrigger ssd={ssd} id={index}/>
        )
    }

    const gedMappedUserPcs = (userPcs) => {
        return userPcs.map((pc, index) =>
            <Accordion key={index} className='py-2 col-12 col-md-8 mx-auto'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{pc['name']}</Accordion.Header>
                    <Accordion.Body>
                        <div className='justify-content-around'>
                            <span>
                                Cpu: {pc['cpu']['name']} |
                            </span>
                            <CpuModal cpu={pc['cpu']} show={showCpuDetails} setShow={setShowCpuDetails}/>
                            <Link
                                variant='link'
                                className='text-decoration-none position-relative end-0 top-0 py-0 px-1 my-0 rounded-0 border-0 text-end'
                                onClick={() => {
                                    setShowCpuDetails(true)
                                }}>Specs</Link>
                        </div>
                        <hr/>

                        {renderCooler(pc)}

                        <div className='justify-content-around'>
                            <span>
                                Gpu: {pc['gpu']['name']} |
                            </span>
                            <GpuModal gpu={pc['gpu']} show={showGpuDetails} setShow={setShowGpuDetails}/>
                            <Link
                                variant='link'
                                className='text-decoration-none position-relative end-0 top-0 py-0 px-1 my-0 rounded-0 border-0 text-end'
                                onClick={() => {
                                    setShowGpuDetails(true)
                                }}>Specs</Link>
                        </div>
                        <hr/>

                        <div className='justify-content-around'>
                            <span>
                                Case: {pc['pcCase']['name']} |
                            </span>
                            <PcCaseModal pcCase={pc['pcCase']} show={showPcCaseDetails} setShow={setShowPcCaseDetails}/>
                            <Link
                                variant='link'
                                className='text-decoration-none position-relative end-0 top-0 py-0 px-1 my-0 rounded-0 border-0 text-end'
                                onClick={() => {
                                    setShowPcCaseDetails(true)
                                }}>Specs</Link>
                        </div>
                        <hr/>

                        <div className='justify-content-around'>
                            <span>
                                Motherboard: {pc['motherboard']['name']} |
                            </span>
                            <MotherboardModal motherboard={pc['motherboard']} show={showMotherboardDetails} setShow={setShowMotherboardDetails}/>
                            <Link
                                variant='link'
                                className='text-decoration-none position-relative end-0 top-0 py-0 px-1 my-0 rounded-0 border-0 text-end'
                                onClick={() => {
                                    setShowMotherboardDetails(true)
                                }}>Specs</Link>
                        </div>
                        <hr/>

                        <div className='justify-content-around'>
                            <span>
                                Power Supply: {pc['psu']['name']} |
                            </span>
                            <PowerSupplyModal powerSupply={pc['psu']} show={showPsuDetails} setShow={setShowPsuDetails}/>
                            <Link
                                variant='link'
                                className='text-decoration-none position-relative end-0 top-0 py-0 px-1 my-0 rounded-0 border-0 text-end'
                                onClick={() => {
                                    setShowPsuDetails(true)
                                }}>Specs</Link>
                        </div>
                        <hr/>

                        {getMappedRams(pc['rams'])}
                        {getMappedHdds(pc['hdds'])}
                        {getMappedSataSsds(pc['sataSSDs'])}
                        {getMappedM2Ssds(pc['m2SSDs'])}

                        <Button size='lg' variant='danger' className='me-2 mx-auto rounded-0' onClick={() => {
                            deleteSavedPc(pc['id']).then(()=> {
                                setSavedPcs(prevState => prevState.filter(thisPc => thisPc['id'] !== pc['id']))
                            });
                        }}>Delete</Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        );
    }

    const renderUserNotVerified = () => {
        if(!user['email_verified_at']){
            return (
                <Container className='container-fluid bg-danger mw-100 text-center text-light fw-bold'>
                    <p className='py-2'>Email is not verified! Please check your email for verification! {user['emailVerified'] ? "Verified" : "Not Verified"}</p>
                </Container>
            );
        }
        else{
            return (
                <span></span>
            )
        }
    }

    if(savedPcs.length === 0){
        return (
            <div className='fixed-height-card'>
                <MDBNavbar light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand className="mx-auto fs-4">Saved User Configs</MDBNavbarBrand>
                    </MDBContainer>
                </MDBNavbar>
                <div className='fixed-height-card d-flex'>
                    <div className='justify-content-center mx-auto my-auto align-items-center align-self-center text-center'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        <h5 className='align-self-center mb-2'>Loading...</h5>
                    </div>
                </div>
            </div>

        );
    }
    else{
        return (
            <div className='fixed-height-card'>
                <MDBNavbar light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand className="mx-auto fs-4">Saved User Configs</MDBNavbarBrand>
                    </MDBContainer>
                </MDBNavbar>
                {renderUserNotVerified()}
                <div className='m-5'>
                    {gedMappedUserPcs(savedPcs)}
                </div>
            </div>
        )
    }


}
