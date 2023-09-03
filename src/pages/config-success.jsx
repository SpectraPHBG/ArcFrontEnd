import {useLocation, useNavigate} from "react-router";
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCol,
    MDBContainer,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow
} from "mdb-react-ui-kit";
import {Button} from "react-bootstrap";
import {AmazonLink} from "../components/AmazonLink";
import {NeweggLink} from "../components/NeweggLink";
import React, {useState} from "react";
import {CpuModal} from "../components/Modals/CpuModal";
import {PcCaseModal} from "../components/Modals/PcCaseModal";
import {GpuModal} from "../components/Modals/GpuModal";
import {AirCoolerModal} from "../components/Modals/AirCoolerModal";
import {LiquidCoolerModal} from "../components/Modals/LiquidCoolerModal";
import {MotherboardModal} from "../components/Modals/MotherboardModal";
import {PowerSupplyModal} from "../components/Modals/PowerSupplyModal";
import {RamModal} from "../components/Modals/RamModal";
import {LoopRamModalTrigger} from "../components/LoopRamModalTrigger";
import {LoopSataSSDModalTrigger} from "../components/LoopSataSSDModalTrigger";
import {LoopHddModalTrigger} from "../components/LoopHddModalTrigger";
import {LoopM2SsdModalTrigger} from "../components/LoopM2SsdModalTrigger";
import {useAuth} from "../hooks/auth";

export function ConfigSuccess() {
    const {state} = useLocation();
    const navigate = useNavigate();
    const rig = state.rig;
    const rigRetail = state.rigRetail;
    const {user} = useAuth();

    const [showRamDetails, setShowRamDetails] = useState(new Array(rig['rams'].length).fill(false));
    const renderRamModal = (id) => {
        if (rig && rigRetail) {
            return <RamModal ram={rig['rams'][id]} show={showRamDetails[id]} setShow={setShowRamDetails}/>
        }
    }
    const mappedRams = rig['rams'].map((item, index) =>
        <LoopRamModalTrigger ram={item} id={index} rigRetail={rigRetail}/>
    );

    const mappedHdds = rig['hdds'].map((item, index) =>
        <LoopHddModalTrigger hdd={item} id={index} rigRetail={rigRetail} />
    );
    const mappedSataSsds = rig['sataSSDs'].map((item, index) =>
        <LoopSataSSDModalTrigger sataSsd={item} id={index} rigRetail={rigRetail} />
    );
    const mappedM2Ssds = rig['m2SSDs'].map((item, index) =>
        <LoopM2SsdModalTrigger m2Ssd={item} id={index} rigRetail={rigRetail} />
    );

    const renderCooler = () => {
        if (Object.keys(rig['airCooler']).length > 0) {
            return (
                <span>
                    <h3 className='text-center'>Air Cooler</h3>
                <MDBListGroup className='bg-light w-75 mx-auto my-3'>
                    <MDBListGroupItem active aria-current='true' className='px-3'>
                        {renderAirCoolerModal()}
                        <span className='col-8'>
                                            {rig['airCooler']['name']}
                                        </span>
                                        <span className='col-3'>
                                            <Button
                                                className='text-light text-decoration-none position-absolute end-0 top-0 pe-3 rounded-0'
                                                onClick={() => {
                                                    setShowAirCoolerDetails(true)
                                                }}>Specs</Button>
                                        </span>
                    </MDBListGroupItem>
                    <AmazonLink url={rigRetail['airCooler']['amazon']}/>
                    <NeweggLink url={rigRetail['airCooler']['newegg']}/>
                </MDBListGroup>
                </span>
            )
        } else {
            return (
                <span>
                    <h3 className='text-center'>Liquid Cooler</h3>
                <MDBListGroup className='bg-light w-75 mx-auto my-3'>
                    <MDBListGroupItem active aria-current='true' className='px-3'>
                        {renderLiquidCoolerModal()}
                        <span className='col-8'>
                                            {rig['liquidCooler']['name']}
                                        </span>
                                        <span className='col-3'>
                                            <Button
                                                className='text-light text-decoration-none position-absolute end-0 top-0 pe-3 rounded-0'
                                                onClick={() => {
                                                    setShowLiquidCoolerDetails(true)
                                                }}>Specs</Button>
                                        </span>
                    </MDBListGroupItem>
                    <AmazonLink url={rigRetail['liquidCooler']['amazon']}/>
                    <NeweggLink url={rigRetail['liquidCooler']['newegg']}/>
                </MDBListGroup>
                </span>
            )
        }
    }

    const renderHdds = () => {
        if (Object.keys(rig['hdds']).length > 0) {
            return (
                <span>
                    <h3 className='text-center'>Hard Drive</h3>
                    {mappedHdds}
                </span>
            )
        }
    }

    const renderSataSSDs = () => {
        if (Object.keys(rig['sataSSDs']).length > 0) {
            return (
                <span>
                    <h3 className='text-center'>SATA SSD</h3>
                    {mappedSataSsds}
                </span>
            )
        }
    }

    const renderM2SSDs = () => {
        if (Object.keys(rig['m2SSDs']).length > 0) {
            return (
                <span>
                    <h3 className='text-center'>M2 SSD</h3>
                    {mappedM2Ssds}
                </span>
            )
        }
    }

    const [showCpuDetails, setShowCpuDetails] = useState(false);
    const renderCpuModal = () => {
        if (rig && rigRetail) {
            return <CpuModal cpu={rig['cpu']} show={showCpuDetails} setShow={setShowCpuDetails}/>
        }
    }

    const [showPcCaseDetails, setShowPcCaseDetails] = useState(false);
    const renderPcCaseModal = () => {
        if (rig && rigRetail) {
            return <PcCaseModal pcCase={rig['pcCase']} show={showPcCaseDetails} setShow={setShowPcCaseDetails}/>
        }
    }

    const [showGpuDetails, setShowGpuDetails] = useState(false);
    const renderGpuModal = () => {
        if (rig && rigRetail) {
            return <GpuModal gpu={rig['gpu']} show={showGpuDetails} setShow={setShowGpuDetails}/>
        }
    }

    const [showAirCoolerDetails, setShowAirCoolerDetails] = useState(false);
    const renderAirCoolerModal = () => {
        if (rig && rigRetail) {
            return <AirCoolerModal airCooler={rig['airCooler']} show={showAirCoolerDetails} setShow={setShowAirCoolerDetails}/>
        }
    }

    const [showLiquidCoolerDetails, setShowLiquidCoolerDetails] = useState(false);
    const renderLiquidCoolerModal = () => {
        if (rig && rigRetail) {
            return <LiquidCoolerModal liquidCooler={rig['liquidCooler']} show={showLiquidCoolerDetails} setShow={setShowLiquidCoolerDetails}/>
        }
    }

    const [showMotherboardDetails, setShowMotherboardDetails] = useState(false);
    const renderMotherboardModal = () => {
        if (rig && rigRetail) {
            return <MotherboardModal motherboard={rig['motherboard']} show={showMotherboardDetails} setShow={setShowMotherboardDetails}/>
        }
    }

    const [showPowerSupplyDetails, setShowPowerSupplyDetails] = useState(false);
    const renderPowerSupplyModal = () => {
        if (rig && rigRetail) {
            return <PowerSupplyModal powerSupply={rig['psu']} show={showPowerSupplyDetails} setShow={setShowPowerSupplyDetails}/>
        }
    }

    const renderSaveConfigButton = () => {
        if(user){
            return (
                <Button size='lg' variant='primary' className='me-2 rounded-0' onClick={onSaveConfigClick}>Save Config</Button>
            );
        }
    }

    const onSaveConfigClick = () => {
        rig.userId = user.id;

        navigate('/save-config', {state: rig});
    }

    return (
        <>
            <MDBContainer fluid className='configurator-body'>
                <MDBRow className='d-flex justify-content-center align-items-center'>
                    <MDBCol className='my-5 col-10 col-lg-9 col-xl-7 col-xxl-6'>
                        <h1 className="text-white fw-bolder shadow-5-strong text-center mb-4 hide-caret">Configuration
                            Complete!</h1>
                        <MDBCard className="bg-light rounded-5 mx-auto">

                            <MDBCardBody className='px-4'>
                                <h3 className='text-center'>Case</h3>
                                <MDBListGroup className='bg-light w-75 mx-auto my-3'>
                                    <MDBListGroupItem active aria-current='true' className='px-3'>
                                        {renderPcCaseModal()}
                                        <span className='col-8'>
                                            {rig['pcCase']['name']}
                                        </span>
                                        <span className='col-3'>
                                            <Button
                                                className='text-light text-decoration-none position-absolute end-0 top-0 pe-3 rounded-0'
                                                onClick={() => {
                                                    setShowPcCaseDetails(true)
                                                }}>Specs</Button>
                                        </span>
                                    </MDBListGroupItem>
                                    <AmazonLink url={rigRetail['pcCase']['amazon']}/>
                                    <NeweggLink url={rigRetail['pcCase']['newegg']}/>
                                </MDBListGroup>

                                <h3 className='text-center'>CPU</h3>
                                <MDBListGroup className='bg-light w-75 mx-auto my-3'>
                                    <MDBListGroupItem active aria-current='true' className='px-3'>
                                        {renderCpuModal()}
                                        <span className='col-8'>
                                            {rig['cpu']['name']}
                                        </span>
                                        <span className='col-3'>
                                            <Button
                                                className='text-light text-decoration-none position-absolute end-0 top-0 pe-3 rounded-0'
                                                onClick={() => {
                                                    setShowCpuDetails(true)
                                                }}>Specs</Button>
                                        </span>
                                    </MDBListGroupItem>
                                    <AmazonLink url={rigRetail['cpu']['amazon']}/>
                                    <NeweggLink url={rigRetail['cpu']['newegg']}/>
                                </MDBListGroup>

                                <h3 className='text-center'>GPU</h3>
                                <MDBListGroup className='bg-light w-75 mx-auto my-3'>
                                    <MDBListGroupItem active aria-current='true' className='px-3'>
                                        {renderGpuModal()}
                                        <span className='col-8'>
                                            {rig['gpu']['name']}
                                        </span>
                                        <span className='col-3'>
                                            <Button
                                                className='text-light text-decoration-none position-absolute end-0 top-0 pe-3 rounded-0'
                                                onClick={() => {
                                                    setShowGpuDetails(true)
                                                }}>Specs</Button>
                                        </span>
                                    </MDBListGroupItem>
                                    <AmazonLink url={rigRetail['gpu']['amazon']}/>
                                    <NeweggLink url={rigRetail['gpu']['newegg']}/>
                                </MDBListGroup>

                                {renderCooler()}

                                <h3 className='text-center'>Motherboard</h3>
                                <MDBListGroup className='bg-light w-75 mx-auto my-3'>
                                    <MDBListGroupItem active aria-current='true' className='px-3'>
                                        {renderMotherboardModal()}
                                        <span className='col-8'>
                                            {rig['motherboard']['name']}
                                        </span>
                                        <span className='col-3'>
                                            <Button
                                                className='text-light text-decoration-none position-absolute end-0 top-0 pe-3 rounded-0'
                                                onClick={() => {
                                                    setShowMotherboardDetails(true)
                                                }}>Specs</Button>
                                        </span>
                                    </MDBListGroupItem>
                                    <AmazonLink url={rigRetail['motherboard']['amazon']}/>
                                    <NeweggLink url={rigRetail['motherboard']['newegg']}/>
                                </MDBListGroup>

                                <h3 className='text-center'>Power Supply</h3>
                                <MDBListGroup className='bg-light w-75 mx-auto my-3'>
                                    <MDBListGroupItem active aria-current='true' className='px-3'>
                                        {renderPowerSupplyModal()}
                                        <span className='col-8'>
                                            {rig['psu']['name']}
                                        </span>
                                        <span className='col-3'>
                                            <Button
                                                className='text-light text-decoration-none position-absolute end-0 top-0 pe-3 rounded-0'
                                                onClick={() => {
                                                    setShowPowerSupplyDetails(true)
                                                }}>Specs</Button>
                                        </span>
                                    </MDBListGroupItem>
                                    <AmazonLink url={rigRetail['psu']['amazon']}/>
                                    <NeweggLink url={rigRetail['psu']['newegg']}/>
                                </MDBListGroup>

                                <h3 className='text-center'>RAM</h3>
                                {mappedRams}

                                {renderHdds()}
                                {renderSataSSDs()}
                                {renderM2SSDs()}
                            </MDBCardBody>
                            <MDBCardFooter className='text-center p-4'>
                                <Button size='lg' variant='success' className='me-2 mx-auto rounded-0' onClick={() => {
                                    navigate('/')
                                }}>Complete</Button>
                                {renderSaveConfigButton()}
                            </MDBCardFooter>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    );
}
