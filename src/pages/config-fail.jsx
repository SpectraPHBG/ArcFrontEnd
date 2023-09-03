import WarningsDisplay from "../components/WarningsDisplay";
import {useLocation, useNavigate} from "react-router";
import {MDBCard, MDBCardBody, MDBCardFooter, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import {Button} from "react-bootstrap";

export function ConfigFail(){
    const {state} = useLocation();
    const navigate = useNavigate();
    const rig = state.rig;
    const rigRetail = state.rigRetail;

    const mappedRams = rig['rams'].map((item, index) => <li key={index} className='py-1'>{item['name']}</li>);
    const mappedHdds = rig['hdds'].map((item, index) => <li key={index} className='py-1'>{item['name']}</li>);
    const mappedSataSsds = rig['sataSSDs'].map((item, index) => <li key={index} className='py-1'>{item['name']}</li>);
    const mappedM2Ssds = rig['m2SSDs'].map((item, index) => <li key={index} className='py-1'>{item['name']}</li>);

    const renderCooler = () => {
        if(Object.keys(rig['airCooler']).length > 0){
            return (
                <li className='py-1'>Air Cooler: {rig['airCooler']['name']}</li>
            )
        }
        else {
            return (
                <li className='py-1'>Liquid Cooler: {rig['liquidCooler']['name']}</li>
            )
        }
    }

    const renderHdds = () => {
        if(Object.keys(rig['hdds']).length > 0){
            return (
                <span>
                    Hard Drives:
                    {mappedHdds}
                </span>
            )
        }
    }

    const renderSataSSDs = () => {
        if(Object.keys(rig['sataSSDs']).length > 0){
            return (
                <span>
                    SSDs:
                    {mappedSataSsds}
                </span>
            )
        }
    }

    const renderM2SSDs = () => {
        if(Object.keys(rig['m2SSDs']).length > 0){
            return (
                <span>
                    M2 SSDs:
                    {mappedM2Ssds}
                </span>
            )
        }
    }

    return (
        <>
            <MDBContainer fluid className='configurator-body'>
                <MDBRow className='d-flex justify-content-center align-items-center'>
                    <MDBCol className='my-5 col-12 col-lg-11 col-xl-10'>
                        <h1 className="text-white fw-bolder shadow-5-strong text-center mb-4 hide-caret">Compatibility Warning!</h1>
                        <MDBCard className="bg-light rounded-5 w-75 mx-auto">

                                <MDBCardBody className='px-4'>
                                    <div className=" p-4 shadow-5-strong">
                                        <WarningsDisplay  message={'The following potential issues were found:'} warnings={state.warnings}/>
                                    </div>

                                    <div className='text-center pb-5 align-items-center justify-content-center'>
                                        <h5 className='pb-3'>Your Current PC Setup</h5>
                                        <ul style={{listStylePosition: "inside"}} className='px-0 mx-0'>
                                            <li className='py-1'>Case: {rig['pcCase']['name']}</li>
                                            <li className='py-1'>Cpu: {rig['cpu']['name']}</li>
                                            {renderCooler()}
                                            <li className='py-1'>Gpu: {rig['gpu']['name']}</li>
                                            <li className='py-1'>Motherboard: {rig['motherboard']['name']}</li>
                                            <li className='py-1'>Power Supply: {rig['psu']['name']}</li>
                                            Rams:
                                            {mappedRams}
                                            {renderHdds()}
                                            {renderSataSSDs()}
                                            {renderM2SSDs()}
                                        </ul>
                                    </div>
                                    <p className='text-danger fw-semibold text-center'>These issues will not strictly prevent your PC from booting, but might lead to performance or stability issues!</p>
                                </MDBCardBody>
                            <MDBCardFooter className='justify-content-end p-4 text-center'>
                                <p className='fw-bold'>Do you wish to proceed knowing this?</p>
                                <Button size='lg' className='me-2 rounded-0' onClick={() => {navigate('/config-success', {state: {rig, rigRetail}})}}>Proceed</Button>
                                <Button size='lg' variant="danger" className='rounded-0' onClick={() => {navigate('/configurator', {state: rig})}}>
                                    Go Back
                                </Button>
                            </MDBCardFooter>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    );
}
