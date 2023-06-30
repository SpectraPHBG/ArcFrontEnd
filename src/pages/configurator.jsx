import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";
import '../css/configurator.scss';
import React, {useEffect} from "react";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {CpuTypeahead} from "../components/Typeaheads/CpuTypeahead";
import {PcCaseTypeahead} from "../components/Typeaheads/PcCaseTypeahead";
import {GpuTypeahead} from "../components/Typeaheads/GpuTypeahead";
import {RamTypeahead} from "../components/Typeaheads/RamTypeahead";
import {MotherboardTypeahead} from "../components/Typeaheads/MotherboardTypeahead";
import {LiquidCoolerTypeahead} from "../components/Typeaheads/LiquidCoolerTypeahead";
import {AirCoolerTypeahead} from "../components/Typeaheads/AirCoolerTypeahead";
import {PowerSupplyTypeahead} from "../components/Typeaheads/PowerSupplyTypeahead";
import {HardDriveTypeahead} from "../components/Typeaheads/HardDriveTypeahead";
import {SataSSDTypeahead} from "../components/Typeaheads/SataSSDTypeahead";
import {M2SSDTypeahead} from "../components/Typeaheads/M2SSDTypeahead";
import ValidationErrors from "../components/ValidationErrors";
import {toast} from "react-toastify";
import {usePcParts} from "../hooks/pc-parts";

export function Configurator(){
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

    const [errors, setErrors] = useState([])
    const [compatibilityErrors, setCompatibilityErrors] = useState([])

    const [ramComponentsCount, setRamComponentsCount] = useState(1);
    const [hddComponentsCount, setHddComponentsCount] = useState(1);
    const [sataSSDComponentsCount, setSataSSDComponentsCount] = useState(1);
    const [m2SSDComponentsCount, setM2SSDComponentsCount] = useState(1);

    const renderRamComponents = () => {
        return Array(ramComponentsCount).fill(true).map((_, i) =>
            <div className='py-1' key={i}>
                <RamTypeahead className={ramValidCSS} rig={rig} setRig={setRig} setErrors={setCompatibilityErrors}/>
            </div>);
    }

    const onRemoveRamComponent = () => {
        if(ramComponentsCount > 1){
            setRamComponentsCount(ramComponentsCount - 1);
        }
    }

    const onAddRamComponent = () => {
        setRamComponentsCount(ramComponentsCount + 1);
    }

    const renderRemoveRamButton = () => {
        if(ramComponentsCount > 1){
            return (
                <Button className='p-0 pe-2' variant='link' onClick={onRemoveRamComponent}>Remove</Button>
            );
        }
    }

    const renderHddComponents = () => {
        return Array(hddComponentsCount).fill(true).map((_, i) =>
            <div className='py-1' key={i}>
                <HardDriveTypeahead setRig={setRig} setErrors={setCompatibilityErrors}/>
            </div>);
    }

    const onRemoveHddComponent = () => {
        if(hddComponentsCount > 1){
            setHddComponentsCount(hddComponentsCount - 1);
        }
    }

    const onAddHddComponent = () => {
        setHddComponentsCount(hddComponentsCount + 1);
    }

    const renderRemoveHddButton = () => {
        if(hddComponentsCount > 1){
            return (
                <Button className='p-0 pe-2' variant='link' onClick={onRemoveHddComponent}>Remove</Button>
            );
        }
    }

    const renderSataSSDComponents = () => {
        return Array(sataSSDComponentsCount).fill(true).map((_, i) =>
            <div className='py-1' key={i}>
                <SataSSDTypeahead setRig={setRig} setErrors={setCompatibilityErrors}/>
            </div>);
    }

    const onRemoveSataSSDComponent = () => {
        if(sataSSDComponentsCount > 1){
            setSataSSDComponentsCount(sataSSDComponentsCount - 1);
        }
    }

    const onAddSataSSDComponent = () => {
        setSataSSDComponentsCount(sataSSDComponentsCount + 1);
    }

    const renderSataSSDButton = () => {
        if(sataSSDComponentsCount > 1){
            return (
                <Button className='p-0 pe-2' variant='link' onClick={onRemoveSataSSDComponent}>Remove</Button>
            );
        }
    }

    const renderM2SSDComponents = () => {
        return Array(m2SSDComponentsCount).fill(true).map((_, i) =>
            <div className='py-1' key={i}>
                <M2SSDTypeahead setRig={setRig} setErrors={setCompatibilityErrors}/>
            </div>);
    }

    const onRemoveM2SSDComponent = () => {
        if(m2SSDComponentsCount > 1){
            setM2SSDComponentsCount(m2SSDComponentsCount - 1);
        }
    }

    const onAddM2SSDComponent = () => {
        setM2SSDComponentsCount(m2SSDComponentsCount + 1);
    }

    const renderM2SSDButton = () => {
        if(m2SSDComponentsCount > 1){
            return (
                <Button className='p-0 pe-2' variant='link' onClick={onRemoveM2SSDComponent}>Remove</Button>
            );
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        window.scrollTo(0,0);
        let willSubmit = true;

        if(Object.keys(rig.pcCase).length === 0){
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

        if(Object.keys(rig.cpu).length === 0){
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

        if(Object.keys(rig.gpu).length === 0){
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

        if(Object.keys(rig.motherboard).length === 0){
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
        if(Object.keys(rig.liquidCooler).length === 0 && Object.keys(rig.airCooler).length === 0){
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

        if(Object.keys(rig.psu).length === 0){
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

        if(rig.rams.length <= 0){
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

        if(rig.hdds.length <= 0 && rig.sataSSDs.length <= 0 && rig.m2SSDs.length <= 0){
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

        if(!willSubmit){
            return;
        }

        // let transferRig = {
        //     pcCaseId: {},
        //     cpuId: {},
        //     gpuId: {},
        //     ramIds: [],
        //     motherboardId: {},
        //     liquidCoolerId: {},
        //     airCoolerId: {},
        //     psuId: {},
        //     hddIds: [],
        //     sataSSDIds: [],
        //     m2SSDIds: []
        // };
        // transferRig.pcCaseId = rig.pcCase.id;
        // transferRig.cpuId = rig.cpu.id;
        // transferRig.gpuId = rig.gpu.id;
        // transferRig.motherboardId = rig.motherboard.id;
        // if(Object.keys(rig.liquidCooler).length >= 0) {
        //     transferRig.liquidCoolerId = rig.liquidCooler.id;
        // }
        // else {
        //     transferRig.airCoolerId = rig.airCooler.id;
        // }
        // transferRig.psuId = rig.psu.id;
        // if(rig.rams.length >= 0) {
        //     rig.rams.forEach(ram => {
        //         transferRig.ramIds = [...transferRig.ramIds, ram.id];
        //     })
        // }
        //
        // if(rig.hdds.length >= 0) {
        //     rig.hdds.forEach(hdd => {
        //         transferRig.hddIds = [...transferRig.hddIds, hdd.id];
        //     })
        // }
        //
        // if(rig.sataSSDs.length >= 0) {
        //     rig.sataSSDs.forEach(sataSSD => {
        //         transferRig.sataSSDIds = [...transferRig.sataSSDIds, sataSSD.id];
        //     })
        // }
        //
        // if(rig.m2SSDs.length >= 0) {
        //     rig.m2SSDs.forEach(m2SSD => {
        //         transferRig.m2SSDIds = [...transferRig.m2SSDIds, m2SSD.id];
        //     })
        // }
        compatibilityCheck({rig})
            .then((response) => {
                console.log(response);
                toast.success(response.data.errors, {
                    toastId: 'success-toast'
                });
            })
            .catch(error => {
                toast.error(error.response.data.errors, {
                    toastId: 'error-toast'
                });
                if (error.response.status !== 422) throw error
            });
    }

    useEffect(() => {
        if(errors.length >= 1){
            toast.error('There are missing pc parts!', {
                toastId: 'pc-part-toast'
            });
        }
        else {
            toast.dismiss('pc-part-toast');
        }
    },[errors])

    useEffect(() => {
        setErrors([]);

        if(compatibilityErrors.some(error => error.toLowerCase().includes('pc case'))){
            setPcCaseValidCSS('invalid');
        }
        else {
            setPcCaseValidCSS('');
        }

        if(compatibilityErrors.some(error => error.toLowerCase().includes('cpu'))){
            setCpuValidCSS('invalid');
        }
        else {
            setCpuValidCSS('');
        }

        if(compatibilityErrors.some(error => error.toLowerCase().includes('motherboard'))){
            setMotherboardValidCSS('invalid');
        }
        else {
            setMotherboardValidCSS('');
        }

        if(compatibilityErrors.some(error => error.toLowerCase().includes('air cooler'))){
            setAirCoolerValidCSS('invalid');
        }
        else {
            setAirCoolerValidCSS('');
        }

        if(compatibilityErrors.some(error => error.toLowerCase().includes('graphics card'))){
            setGpuValidCSS('invalid');
        }
        else {
            setGpuValidCSS('');
        }

        if(compatibilityErrors.some(error => error.toLowerCase().includes('power supply'))){
            setPsuValidCSS('invalid');
        }
        else {
            setPsuValidCSS('');
        }

        if(compatibilityErrors.some(error => error.toLowerCase().includes('ram'))){
            setRamValidCSS('invalid');
        }
        else {
            setRamValidCSS('');
        }

        if(compatibilityErrors.some(error => error.toLowerCase().includes('liquid cooler'))){
            setLiquidCoolerValidCSS('invalid');
        }
        else {
            setLiquidCoolerValidCSS('');
        }
    },[compatibilityErrors])

    return (
        <>
        <MDBContainer fluid className='configurator-body'>
            <MDBRow className='d-flex justify-content-center align-items-center'>
                <MDBCol lg='9' className='my-5'>

                    <h1 className="text-white text-center mb-4 hide-caret">Configure your PC</h1>

                    <MDBCard className="w-75 mx-auto">
                        <ValidationErrors className="p-4" errors={errors} />
                        <ValidationErrors message={'Incompatibility detected!'} className="p-4" errors={compatibilityErrors} />
                        <Form onSubmit={onFormSubmit}>
                        <MDBCardBody className='px-4'>

                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0" >Select Case</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <PcCaseTypeahead className={pcCaseValidCSS} rig={rig}  setRig={setRig} setErrors={setCompatibilityErrors}/>

                                </MDBCol>
                            </MDBRow>

                            <hr className="mx-n3" />

                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0" >Select CPU</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <CpuTypeahead className={cpuValidCSS} rig={rig} setRig={setRig} setErrors={setCompatibilityErrors}/>
                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />

                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0" >Select GPU</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <GpuTypeahead className={gpuValidCSS} rig={rig} setRig={setRig} setErrors={setCompatibilityErrors}/>

                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />
                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0" >Select RAM</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    {renderRamComponents()}
                                    <Button className='p-0 pe-2' variant='link' onClick={onAddRamComponent}>Add</Button>
                                    {renderRemoveRamButton()}
                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />
                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0" >Select Motherboard</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MotherboardTypeahead className={motherboardValidCSS} rig={rig} setRig={setRig} setErrors={setCompatibilityErrors}/>
                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />
                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0" >Select Liquid Cooler</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <LiquidCoolerTypeahead className={liquidCoolerValidCSS} rig={rig} setRig={setRig} setErrors={setCompatibilityErrors}/>

                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />
                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0" >Select Air Cooler</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <AirCoolerTypeahead className={airCoolerValidCSS} rig={rig} setRig={setRig} setErrors={setCompatibilityErrors}/>

                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />
                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0" >Select PSU</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <PowerSupplyTypeahead className={psuValidCSS} rig={rig} setRig={setRig} setErrors={setCompatibilityErrors}/>

                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />
                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0" >Select HDD</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    {renderHddComponents()}
                                    <Button className='p-0 pe-2' variant='link' onClick={onAddHddComponent}>Add</Button>
                                    {renderRemoveHddButton()}
                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />
                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0" >Select Sata SSD</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    {renderSataSSDComponents()}
                                    <Button className='p-0 pe-2' variant='link' onClick={onAddSataSSDComponent}>Add</Button>
                                    {renderSataSSDButton()}
                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />
                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0" >Select M2 SSD</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    {renderM2SSDComponents()}
                                    <Button className='p-0 pe-2' variant='link' onClick={onAddM2SSDComponent}>Add</Button>
                                    {renderM2SSDButton()}
                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />

                            <Button variant="success" type="submit" className='my-4' size='lg'>send application</Button>

                        </MDBCardBody>
                        </Form>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
        </>
    );
}
