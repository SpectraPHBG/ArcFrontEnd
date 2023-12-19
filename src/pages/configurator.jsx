import {
    MDBCard,
    MDBCardBody, MDBCardHeader,
    MDBCol,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";
import '../css/configurator.scss';
import React, {useEffect} from "react";
import {Button, Form, Tooltip} from "react-bootstrap";
import {useState} from "react";
import {CpuTypeahead} from "../components/Typeaheads/Configurator/CpuTypeahead";
import {PcCaseTypeahead} from "../components/Typeaheads/Configurator/PcCaseTypeahead";
import {GpuTypeahead} from "../components/Typeaheads/Configurator/GpuTypeahead";
import {RamTypeahead} from "../components/Typeaheads/Configurator/RamTypeahead";
import {MotherboardTypeahead} from "../components/Typeaheads/Configurator/MotherboardTypeahead";
import {LiquidCoolerTypeahead} from "../components/Typeaheads/Configurator/LiquidCoolerTypeahead";
import {AirCoolerTypeahead} from "../components/Typeaheads/Configurator/AirCoolerTypeahead";
import {PowerSupplyTypeahead} from "../components/Typeaheads/Configurator/PowerSupplyTypeahead";
import {HardDriveTypeahead} from "../components/Typeaheads/Configurator/HardDriveTypeahead";
import {SataSSDTypeahead} from "../components/Typeaheads/Configurator/SataSSDTypeahead";
import {M2SSDTypeahead} from "../components/Typeaheads/Configurator/M2SSDTypeahead";
import ErrorsDisplay from "../components/ErrorsDisplay";
import {toast} from "react-toastify";
import {usePcParts} from "../hooks/pc-parts";
import {useLocation, useNavigate} from "react-router";
import {CaseCarouselSelect} from "../components/CaseCarouselSelect";

export function Configurator() {
    const {state} = useLocation();
    const initialRigState = {
        pcCase: {},
        cpu: {},
        gpu: {},
        rams: [],
        motherboard: {},
        liquidCooler: {},
        airCooler: {},
        psu: {},
        hdds: [],
        sataSSDs: [],
        m2SSDs: []
    }

    const navigate = useNavigate();

    const [rig, setRig] = useState(initialRigState);
    const {compatibilityCheck} = usePcParts();

    const [pcCaseValidCSS, setPcCaseValidCSS] = useState('');
    const [cpuValidCSS, setCpuValidCSS] = useState('');
    const [motherboardValidCSS, setMotherboardValidCSS] = useState('');
    const [ramValidCSS, setRamValidCSS] = useState('');
    const [gpuValidCSS, setGpuValidCSS] = useState('');
    const [psuValidCSS, setPsuValidCSS] = useState('');
    const [airCoolerValidCSS, setAirCoolerValidCSS] = useState('');
    const [liquidCoolerValidCSS, setLiquidCoolerValidCSS] = useState('');

    const [errors, setErrors] = useState([]);
    const [compatibilityErrors, setCompatibilityErrors] = useState([]);
    const [rewrite, setRewrite] = useState(true);

    const [ramComponentsCount, setRamComponentsCount] = useState(1);
    const [hddComponentsCount, setHddComponentsCount] = useState(1);
    const [sataSSDComponentsCount, setSataSSDComponentsCount] = useState(1);
    const [m2SSDComponentsCount, setM2SSDComponentsCount] = useState(1);

    useEffect(() => {
        if(state){
            setRig(state);
            setRamComponentsCount(state.rams.length);
            setHddComponentsCount(state.hdds.length > 0 ? state.hdds.length : 1);
            setSataSSDComponentsCount(state.sataSSDs.length > 0 ? state.sataSSDs.length : 1);
            setM2SSDComponentsCount(state.m2SSDs.length > 0 ? state.m2SSDs.length : 1);
        }
    },[]);

    useEffect(() => {
        if (errors.length >= 1) {
            toast.error('There are missing pc parts!', {
                toastId: 'pc-part-toast'
            });
        } else {
            toast.dismiss('pc-part-toast');
        }
    }, [errors])

    useEffect(() => {
        setErrors([]);

        if (compatibilityErrors.some(error => error.toLowerCase().includes('pc case'))) {
            setPcCaseValidCSS('invalid');
        } else {
            setPcCaseValidCSS('');
        }

        if (compatibilityErrors.some(error => error.toLowerCase().includes('cpu'))) {
            setCpuValidCSS('invalid');
        } else {
            setCpuValidCSS('');
        }

        if (compatibilityErrors.some(error => error.toLowerCase().includes('motherboard'))) {
            setMotherboardValidCSS('invalid');
        } else {
            setMotherboardValidCSS('');
        }

        if (compatibilityErrors.some(error => error.toLowerCase().includes('air cooler'))) {
            setAirCoolerValidCSS('invalid');
        } else {
            setAirCoolerValidCSS('');
        }

        if (compatibilityErrors.some(error => error.toLowerCase().includes('graphics card'))) {
            setGpuValidCSS('invalid');
        } else {
            setGpuValidCSS('');
        }

        if (compatibilityErrors.some(error => error.toLowerCase().includes('power supply'))) {
            setPsuValidCSS('invalid');
        } else {
            setPsuValidCSS('');
        }

        if (compatibilityErrors.some(error => error.toLowerCase().includes('ram'))) {
            setRamValidCSS('invalid');
        } else {
            setRamValidCSS('');
        }

        if (compatibilityErrors.some(error => error.toLowerCase().includes('liquid cooler'))) {
            setLiquidCoolerValidCSS('invalid');
        } else {
            setLiquidCoolerValidCSS('');
        }
    }, [compatibilityErrors])

    const renderRamComponents = () => {
        return Array(ramComponentsCount).fill(true).map((_, i) =>
            <div className='py-1' key={i}>
                <RamTypeahead className={ramValidCSS} id={i} rig={rig} setRig={setRig} setErrors={setCompatibilityErrors} rewrite={rewrite} setRewrite={setRewrite}/>
            </div>);
    }

    const onRemoveRamComponent = () => {
        if (ramComponentsCount > 1) {
            setRamComponentsCount(ramComponentsCount - 1);
        }
    }

    const onAddRamComponent = () => {
        setRamComponentsCount(ramComponentsCount + 1);
    }

    const renderRemoveRamButton = () => {
        if (ramComponentsCount > 1) {
            return (
                <Button className='py-1 px-3 rounded-0' size='sm' variant='danger' onClick={onRemoveRamComponent}>Remove</Button>
            );
        }
    }

    const renderHddComponents = () => {
        return Array(hddComponentsCount).fill(true).map((_, i) =>
            <div className='py-1' key={i}>
                <HardDriveTypeahead id={i} rig={rig} setRig={setRig} setErrors={setCompatibilityErrors} rewrite={rewrite} setRewrite={setRewrite}/>
            </div>);
    }

    const onRemoveHddComponent = () => {
        if (hddComponentsCount > 1) {
            setHddComponentsCount(hddComponentsCount - 1);
        }
    }

    const onAddHddComponent = () => {
        setHddComponentsCount(hddComponentsCount + 1);
    }

    const renderRemoveHddButton = () => {
        if (hddComponentsCount > 1) {
            return (
                <Button className='py-1 px-3 rounded-0' size='sm' variant='danger' onClick={onRemoveHddComponent}>Remove</Button>
            );
        }
    }

    const renderSataSSDComponents = () => {
        return Array(sataSSDComponentsCount).fill(true).map((_, i) =>
            <div className='py-1' key={i}>
                <SataSSDTypeahead rig={rig} id={i} setRig={setRig} setErrors={setCompatibilityErrors} rewrite={rewrite} setRewrite={setRewrite}/>
            </div>);
    }

    const onRemoveSataSSDComponent = () => {
        if (sataSSDComponentsCount > 1) {
            setSataSSDComponentsCount(sataSSDComponentsCount - 1);
        }
    }

    const onAddSataSSDComponent = () => {
        setSataSSDComponentsCount(sataSSDComponentsCount + 1);
    }

    const renderSataSSDButton = () => {
        if (sataSSDComponentsCount > 1) {
            return (
                <Button className='py-1 px-3 rounded-0' size='sm' variant='danger' onClick={onRemoveSataSSDComponent}>Remove</Button>
            );
        }
    }

    const renderM2SSDComponents = () => {
        return Array(m2SSDComponentsCount).fill(true).map((_, i) =>
            <div className='py-1' key={i}>
                <M2SSDTypeahead rig={rig} id={i} setRig={setRig} setErrors={setCompatibilityErrors} rewrite={rewrite} setRewrite={setRewrite}/>
            </div>);
    }

    const onRemoveM2SSDComponent = () => {
        if (m2SSDComponentsCount > 1) {
            setM2SSDComponentsCount(m2SSDComponentsCount - 1);
        }
    }

    const onAddM2SSDComponent = () => {
        setM2SSDComponentsCount(m2SSDComponentsCount + 1);
    }

    const renderM2SSDButton = () => {
        if (m2SSDComponentsCount > 1) {
            return (
                <Button className='py-1 px-3 rounded-0' size='sm' variant='danger' onClick={onRemoveM2SSDComponent}>Remove</Button>
            );
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        window.scrollTo(0, 0);
        let willSubmit = true;

        if (Object.keys(rig.pcCase).length === 0) {
            setErrors(prevState => {
                    const errorMessage = "Please select a PC Case!";
                    if (!prevState.some(error => error === errorMessage)) {
                        return [...prevState, errorMessage];
                    } else {
                        return prevState.filter(error => error === errorMessage);
                    }
                }
            );
            willSubmit = false;
        }

        if (Object.keys(rig.cpu).length === 0) {
            setErrors(prevState => {
                    const errorMessage = "Please select a CPU!";
                    if (!prevState.some(error => error === errorMessage)) {
                        return [...prevState, errorMessage];
                    } else {
                        return prevState.filter(error => error === errorMessage);
                    }
                }
            );
            willSubmit = false;
        }

        if (Object.keys(rig.gpu).length === 0) {
            setErrors(prevState => {
                    const errorMessage = "Please select a Graphics Card!";
                    if (!prevState.some(error => error === errorMessage)) {
                        return [...prevState, errorMessage];
                    } else {
                        return prevState.filter(error => error === errorMessage);
                    }
                }
            );
            willSubmit = false;
        }

        if (Object.keys(rig.motherboard).length === 0) {
            setErrors(prevState => {
                    const errorMessage = "Please select a Motherboard!";
                    if (!prevState.some(error => error === errorMessage)) {
                        return [...prevState, errorMessage];
                    } else {
                        return prevState.filter(error => error === errorMessage);
                    }
                }
            );
            willSubmit = false;
        }
        if (Object.keys(rig.liquidCooler).length === 0 && Object.keys(rig.airCooler).length === 0) {
            setErrors(prevState => {
                    const errorMessage = "Please select a CPU Cooler!";
                    if (!prevState.some(error => error === errorMessage)) {
                        return [...prevState, errorMessage];
                    } else {
                        return prevState.filter(error => error === errorMessage);
                    }
                }
            );
            willSubmit = false;
        }

        if (Object.keys(rig.psu).length === 0) {
            setErrors(prevState => {
                    const errorMessage = "Please select a Power Supply!";
                    if (!prevState.some(error => error === errorMessage)) {
                        return [...prevState, errorMessage];
                    } else {
                        return prevState.filter(error => error === errorMessage);
                    }
                }
            );
            willSubmit = false;
        }

        if (rig.rams.length <= 0) {
            setErrors(prevState => {
                    const errorMessage = "Please select at least one RAM stick!";
                    if (!prevState.some(error => error === errorMessage)) {
                        return [...prevState, errorMessage];
                    } else {
                        return prevState.filter(error => error === errorMessage);
                    }
                }
            );
            willSubmit = false;
        }

        if (rig.hdds.length <= 0 && rig.sataSSDs.length <= 0 && rig.m2SSDs.length <= 0) {
            setErrors(prevState => {
                    const errorMessage = "Please select at least one Hard Drive or SSD!";
                    if (!prevState.some(error => error === errorMessage)) {
                        return [...prevState, errorMessage];
                    } else {
                        return prevState.filter(error => error === errorMessage);
                    }
                }
            );
            willSubmit = false;
        }
        if(compatibilityErrors.length > 0){
            setErrors(prevState => {
                    const errorMessage = "You cannot submit your rig if incompatibilities have been detected!";
                    if (!prevState.some(error => error === errorMessage)) {
                        return [...prevState, errorMessage];
                    } else {
                        return prevState.filter(error => error === errorMessage);
                    }
                }
            );
            willSubmit = false;
        }

        if (!willSubmit) {
            return;
        }

        compatibilityCheck({rig})
            .then((response) => {
                const warnings = response.data.warnings;
                const rigRetail = response.data.rigRetail;
                if (warnings.length === 0) {
                    navigate('/config-success', {state: {rig, rigRetail}});
                } else {
                    navigate('/config-fail', {state: {warnings, rigRetail, rig}});
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.response.data.errors, {
                    toastId: 'error-toast'
                });
                if (error.response.status !== 422) throw error
            });
    }

    const [filterState, setFilterState] = useState(false);

    const renderFilterState = () => {
        if(filterState){
            return <span className='text-success fw-bold'>ON</span>
        }
        else{
            return <span className='text-danger fw-bold'>OFF</span>
        }
    }

    const onFilterStateClick = () => {
        setFilterState(!filterState);
    }

    return (
        <>
            <MDBContainer fluid className='configurator-body'>
                <MDBRow className='d-flex justify-content-center align-items-center'>
                    <MDBCol className='my-5 col-12 col-lg-11 col-xl-10 col-xxl-9'>

                        <h1 className="text-white fw-bolder shadow-5-strong text-center mb-4 hide-caret">Configure your PC</h1>

                        <MDBCard className="bg-opacity-25 w-75 mx-auto rounded-3">
                            <MDBCardHeader className='d-flex'>
                                <h6 className='mt-1'>Compatibility Filter: {renderFilterState()}</h6>

                                <Button className='rounded-0 btn-outline-primary end-0 position-absolute top-0 me-1 mt-1' variant='outline-primary' size='sm' onClick={onFilterStateClick}>Toggle Filter</Button>
                            </MDBCardHeader>
                            <ErrorsDisplay className="p-4" errors={errors}/>
                            <ErrorsDisplay message={'Incompatibility detected!'} className="p-4"
                                           errors={compatibilityErrors}/>
                            <Form onSubmit={onFormSubmit}>
                                <MDBCardBody className='px-4'>

                                    <MDBRow className='align-items-center justify-content-center text-center pt-4 pb-3'>

                                        <MDBCol className='col-10 text-center'>
                                            <h5>Select Case</h5>
                                        </MDBCol>

                                        <CaseCarouselSelect rig={rig} setRig={setRig}/>
                                        <MDBCol className='mt-2 px-3 px-md-5 col-12'>
                                            <PcCaseTypeahead className={pcCaseValidCSS} rig={rig} setRig={setRig}
                                                             setErrors={setCompatibilityErrors}/>
                                        </MDBCol>
                                    </MDBRow>

                                    <hr className="mx-n3"/>

                                    <MDBRow className='align-items-center justify-content-center text-center pt-4 pb-3'>

                                        <MDBCol className='col-10 text-center'>
                                            <h5>Select CPU</h5>
                                        </MDBCol>

                                        <MDBCol className='px-3 px-md-5 col-12'>
                                            <CpuTypeahead className={cpuValidCSS} rig={rig} setRig={setRig}
                                                          setErrors={setCompatibilityErrors}/>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr className="mx-n3"/>

                                    <MDBRow className='align-items-center justify-content-center text-center pt-4 pb-3'>

                                        <MDBCol className='col-10 text-center'>
                                            <h5>Select GPU</h5>
                                        </MDBCol>

                                        <MDBCol className='px-3 px-md-5 col-12'>
                                            <GpuTypeahead className={gpuValidCSS} rig={rig} setRig={setRig}
                                                          setErrors={setCompatibilityErrors}/>

                                        </MDBCol>
                                    </MDBRow>
                                    <hr className="mx-n3"/>
                                    <MDBRow className='align-items-center justify-content-center text-center pt-4 pb-3'>

                                        <MDBCol className='col-10 text-center'>
                                            <h5 className='text-center'>Select RAM</h5>
                                        </MDBCol>

                                        <MDBCol className='px-3 px-md-5 col-12'>
                                            {renderRamComponents()}
                                            <Button className='py-1 px-3 me-2 rounded-0' size='sm' variant='success'
                                                    onClick={onAddRamComponent}>Add</Button>
                                            {renderRemoveRamButton()}
                                        </MDBCol>
                                    </MDBRow>
                                    <hr className="mx-n3"/>
                                    <MDBRow className='align-items-center justify-content-center text-center pt-4 pb-3'>

                                        <MDBCol className='col-10 text-center'>
                                            <h5>Select Motherboard</h5>
                                        </MDBCol>

                                        <MDBCol className='px-3 px-md-5 col-12'>
                                            <MotherboardTypeahead className={motherboardValidCSS} rig={rig}
                                                                  setRig={setRig} setErrors={setCompatibilityErrors}/>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr className="mx-n3"/>
                                    <MDBRow className='align-items-center justify-content-center text-center pt-4 pb-3'>

                                        <MDBCol className='col-10 text-center'>
                                            <h5>Select Liquid Cooler</h5>
                                        </MDBCol>

                                        <MDBCol className='px-3 px-md-5 col-12'>
                                            <LiquidCoolerTypeahead className={liquidCoolerValidCSS} rig={rig}
                                                                   setRig={setRig} setErrors={setCompatibilityErrors}/>

                                        </MDBCol>
                                    </MDBRow>
                                    <hr className="mx-n3"/>
                                    <MDBRow className='align-items-center justify-content-center text-center pt-4 pb-3'>

                                        <MDBCol className='col-10 text-center'>
                                            <h5>Select Air Cooler</h5>
                                        </MDBCol>

                                        <MDBCol className='px-3 px-md-5 col-12'>
                                            <AirCoolerTypeahead className={airCoolerValidCSS} rig={rig} setRig={setRig}
                                                                setErrors={setCompatibilityErrors}/>

                                        </MDBCol>
                                    </MDBRow>
                                    <hr className="mx-n3"/>
                                    <MDBRow className='align-items-center justify-content-center text-center pt-4 pb-3'>

                                        <MDBCol className='col-10 text-center'>
                                            <h5>Select PSU</h5>
                                        </MDBCol>

                                        <MDBCol className='px-3 px-md-5 col-12'>
                                            <PowerSupplyTypeahead className={psuValidCSS} rig={rig} setRig={setRig}
                                                                  setErrors={setCompatibilityErrors}/>

                                        </MDBCol>
                                    </MDBRow>
                                    <hr className="mx-n3"/>
                                    <MDBRow className='align-items-center justify-content-center text-center pt-4 pb-3'>

                                        <MDBCol className='col-10 text-center'>
                                            <h5>Select HDD</h5>
                                        </MDBCol>

                                        <MDBCol className='px-3 px-md-5 col-12'>
                                            {renderHddComponents()}
                                            <Button className='py-1 px-3 me-2 rounded-0' size='sm' variant='success'
                                                    onClick={onAddHddComponent}>Add</Button>
                                            {renderRemoveHddButton()}
                                        </MDBCol>
                                    </MDBRow>
                                    <hr className="mx-n3"/>
                                    <MDBRow className='align-items-center justify-content-center text-center pt-4 pb-3'>

                                        <MDBCol className='col-10 text-center'>
                                            <h5>Select Sata SSD</h5>
                                        </MDBCol>

                                        <MDBCol className='px-3 px-md-5 col-12'>
                                            {renderSataSSDComponents()}
                                            <Button className='py-1 px-3 me-2 rounded-0' size='sm' variant='success'
                                                    onClick={onAddSataSSDComponent}>Add</Button>
                                            {renderSataSSDButton()}
                                        </MDBCol>
                                    </MDBRow>
                                    <hr className="mx-n3"/>
                                    <MDBRow className='align-items-center justify-content-center text-center pt-4 pb-3'>

                                        <MDBCol className='col-10 text-center'>
                                            <h5>Select M2 SSD</h5>
                                        </MDBCol>

                                        <MDBCol className='px-3 px-md-5 col-12'>
                                            {renderM2SSDComponents()}
                                            <Button className='py-1 px-3 me-2 rounded-0' size='sm' variant='success'
                                                    onClick={onAddM2SSDComponent}>Add</Button>
                                            {renderM2SSDButton()}
                                        </MDBCol>
                                    </MDBRow>
                                    <hr className="mx-n3"/>

                                    <div className='text-center'>
                                        <Button variant="success" type="submit" className='my-4 border rounded-0' size='lg'>Check Configuration</Button>
                                    </div>

                                </MDBCardBody>
                            </Form>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    );
}
