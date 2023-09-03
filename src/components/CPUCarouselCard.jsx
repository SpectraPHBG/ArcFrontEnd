import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon} from "mdb-react-ui-kit";
import React from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router";

export function CPUCarouselCard ({key, cpu}) {

    const navigate = useNavigate();
    const rig = {
        pcCase: {},
        cpu: cpu,
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

    const renderClockSpeed = () => {
        if(cpu['baseClock2']){
            return (
                <div className="d-flex justify-content-between">
                    <span>P: {cpu['baseClock']} MHz, E: {cpu['baseClock2']} MHz</span>
                </div>
            );
        }
        else {
            return (
                <div className="d-flex justify-content-between">
                    <span>Clock: {cpu['baseClock']} MHz</span>
                </div>
            );
        }
    }

    return (
        <MDBCard key={key} className="text-black m-2 mx-2 click">
            <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
            <MDBCardImage
                className="hover-zoom mx-auto"
                src={require("../images" + cpu["imageLink"])}
                position="top"
                width='50px'
                alt="Cpu Image"
            />
            <MDBCardBody>
                <div className="text-center">
                    <MDBCardTitle>{cpu['name']}</MDBCardTitle>
                    <p className="text-muted mb-4">{cpu['brand']['name']}</p>
                </div>
                <div>
                    <div className="d-flex justify-content-between">
                        <span>Cores: {cpu['cores']} cores</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Threads: {cpu['threads']} threads</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Socket: {cpu['socket']['name']}</span>
                    </div>
                    {renderClockSpeed()}
                </div>
                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <Button className='rounded-0 btn-light btn-outline-success' size='sm' onClick={() => {navigate('/configurator', {state: rig})}}>Build PC</Button>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}
