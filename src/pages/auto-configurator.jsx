import {MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import React, {useState} from "react";
import {UsageTypeahead} from "../components/Typeaheads/AutoConfigurator/UsageTypeahead";
import {PriorityTypeahead} from "../components/Typeaheads/AutoConfigurator/PriorityTypeahead";
import {CpuPreferenceTypeahead} from "../components/Typeaheads/AutoConfigurator/CpuPreferenceTypeahead";
import {GpuPreferenceTypeahead} from "../components/Typeaheads/AutoConfigurator/GpuPreferenceTypeahead";
import {CoolerPreference} from "../components/Typeaheads/AutoConfigurator/CoolerPreference";
import {Button, Form} from "react-bootstrap";
import {usePcParts} from "../hooks/pc-parts";
import {MissingInputModal} from "../components/Modals/MissingInputModal";
import {useNavigate} from "react-router";

export function AutoConfigurator() {
    const userSelectionInitialState = {
        usage: -1,
        priority: -1,
        preferredCpu: -1,
        preferredGpu: -1,
        preferredCooling: -1
    }
    const [userSelection, setUserSelection] = useState(userSelectionInitialState);
    const {buildPC} = usePcParts();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const usages = [
        {id: 0, name: "Light Gaming"},
        {id: 1, name: "Serious Gaming"},
        {id: 2, name: "Streaming + Light Gaming"},
        {id: 3, name: "Streaming + Serious Gaming"},
        {id: 4, name: "Next Gen Gaming"},
        {id: 5, name: "Video/Image Editing"}
    ]

    const priorities = [
        {id: 0, name: "Budget"},
        {id: 1, name: "Power & Upgradeability"}
    ]

    const cpuPreferences = [
        {id: 0, name: "None"},
        {id: 1, name: "AMD CPU"},
        {id: 2, name: "Intel CPU"}
    ]

    const gpuPreferences = [
        {id: 0, name: "None"},
        {id: 1, name: "AMD GPU"},
        {id: 2, name: "Nvidia GPU"}
    ]

    const coolerPreferences = [
        {id: 0, name: "Air Cooling"},
        {id: 1, name: "Liquid Cooling"}
    ]

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(
            userSelection.usage === -1 ||
            userSelection.priority === -1 ||
            userSelection.preferredCpu === -1 ||
            userSelection.preferredGpu === -1 ||
            userSelection.preferredCooling === -1
        ){
            setShowModal(true);
        } else {
            buildPC(userSelection).then((response) => {
                const rig = response.data.rig;
                const rigRetail = response.data.rigRetail;
                navigate('/config-success', {state: {rig, rigRetail}});
            });
        }
    };

    const renderUsageInfo = (param) => {

        switch(param) {
            case 0:
                return (
                    <div className='mt-3 mb-0'>
                        <h6>Light Gaming PC</h6>
                        <p className='mb-0'>This usage provides a low end to mid tier machine perfect for playing older games, indie games etc.
                            that do not require a very powerful computer.</p>
                    </div>
                );
            case 1:
                return (
                    <div className='mt-3 mb-0'>
                        <h6>Serious Gaming PC</h6>
                        <p className='mb-0'>This usage provides a mid tier or budget high end PC designed for playing newer more demanding games
                            without experiencing FPS drops while also not making a huge dent on your pocket.</p>
                    </div>
                );
            case 2:
                return (
                    <div className='mt-3 mb-0'>
                        <h6>Light Gaming and Streaming PC</h6>
                        <p className='mb-0'>This usage is made for both playing and streaming light, non demanding games. Due to the nature of streaming this setting
                        provides a computer with a more powerful CPU than its non streaming variant.</p>
                    </div>
                );
            case 3:
                return (
                    <div className='mt-3 mb-0'>
                        <h6>Serious Gaming and Streaming PC</h6>
                        <p className='mb-0'>This usage aims to provide a mid tier or budget high end PC that can handle both streaming and playing more demanding
                        and newer games!</p>
                    </div>
                );
            case 4:
                return (
                    <div className='mt-3 mb-0'>
                        <h6>Next Gen PC</h6>
                        <p className='mb-0'>This usage gives you a pc with the newest, latest parts capable of running most recent and most demanding games
                            without fps drops! It is also capable of streaming with relative ease.</p>
                    </div>
                );
            case 5:
                return (
                    <div className='mt-3 mb-0'>
                        <h6>Editing PC</h6>
                        <p className='mb-0'>This type of PC is designed for editing images in Photoshop or similar,
                            drawing in Clip Studio for example or
                            video editing in apps like Vegas Pro, Adobe Premiere Pro etc.</p>
                    </div>
                );
            default:
                return (
                    <span></span>
                );
        }

    }

    const renderSpecsInfo = (usage, priority) => {

        switch(usage) {
            case 0:
                if(priority === 0){
                    return (
                        <ul className='mt-3'>
                            <li>CPU: 6 cores</li>
                            <li>GPU: 6 GB VRAM</li>
                            <li>Motherboard: AMD B550 / Intel B760 DDR4</li>
                            <li>RAM: 16 GB</li>
                            <li>1 TB SATA SSD</li>
                        </ul>
                    );
                }
                else if(priority === 1){
                    return (
                        <ul className='mt-3'>
                            <li>CPU: 8 cores</li>
                            <li>GPU: 8 GB VRAM</li>
                            <li>Motherboard: AMD B550 / Intel B760 DDR4</li>
                            <li>RAM: 16 GB</li>
                            <li>1 TB SATA SSD</li>
                        </ul>
                    );
                }
                else{
                    break;
                }
            case 1:
                if(priority === 0){
                    return (
                        <ul className='mt-3'>
                            <li>CPU: 12 cores</li>
                            <li>GPU: 10 GB VRAM</li>
                            <li>Motherboard: AMD X570 / Intel Z690 DDR4</li>
                            <li>RAM: 32 GB</li>
                            <li>1 TB SATA SSD + 500GB NVME SSD</li>
                        </ul>
                    );
                }
                else if(priority === 1){
                    return (
                        <ul className='mt-3'>
                            <li>CPU: 12 cores</li>
                            <li>GPU: 12 GB VRAM</li>
                            <li>Motherboard: AMD X570 / Intel Z690 DDR4</li>
                            <li>RAM: 32 GB</li>
                            <li>1 TB SATA SSD + 1TB NVME SSD</li>
                        </ul>
                    );
                }
                else{
                    break;
                }
            case 2:
                if(priority === 0){
                    return (
                        <ul className='mt-3'>
                            <li>CPU: 8 cores</li>
                            <li>GPU: 6 GB VRAM</li>
                            <li>Motherboard: AMD B550 / Intel B760 DDR4</li>
                            <li>RAM: 16 GB</li>
                            <li>2 TB SATA SSD</li>
                        </ul>
                    );
                }
                else if(priority === 1){
                    return (
                        <ul className='mt-3'>
                            <li>CPU: 8 cores</li>
                            <li>GPU: 8 GB VRAM</li>
                            <li>Motherboard: AMD B550 / Intel B760 DDR4</li>
                            <li>RAM: 16 GB</li>
                            <li>2 TB SATA SSD</li>
                        </ul>
                    );
                }
                else{
                    break;
                }
            case 3:
                if(priority === 0){
                    return (
                        <ul className='mt-3'>
                            <li>CPU: 12 cores</li>
                            <li>GPU: 12 GB VRAM</li>
                            <li>Motherboard: AMD X570 / Intel Z690 DDR4</li>
                            <li>RAM: 32 GB</li>
                            <li>2 TB SATA SSD + 500GB NVME SSD</li>
                        </ul>
                    );
                }
                else if(priority === 1){
                    return (
                        <ul className='mt-3'>
                            <li>CPU: 16 cores</li>
                            <li>GPU: 12 GB VRAM</li>
                            <li>Motherboard: AMD X570 / Intel Z690 DDR4</li>
                            <li>RAM: 32 GB</li>
                            <li>2 TB SATA SSD + 1TB NVME SSD</li>
                        </ul>
                    );
                }
                else{
                    break;
                }
            case 4:
                if(priority === 0){
                    return (
                        <ul className='mt-3'>
                            <li>CPU: 16 cores</li>
                            <li>GPU: 16 GB VRAM</li>
                            <li>Motherboard: AMD X670 / Intel Z790  DDR5</li>
                            <li>RAM: 32 GB</li>
                            <li>2 TB SATA SSD + 500GB NVME SSD</li>
                        </ul>
                    );
                }
                else if(priority === 1){
                    return (
                        <ul className='mt-3'>
                            <li>CPU: 16 cores</li>
                            <li>GPU: 20 GB VRAM</li>
                            <li>Motherboard: AMD X670 / Intel Z790  DDR5</li>
                            <li>RAM: 64 GB</li>
                            <li>2 TB SATA SSD + 1TB NVME SSD</li>
                        </ul>
                    );
                }
                else{
                    break;
                }
            case 5:
                if(priority === 0){
                    return (
                        <ul className='mt-3'>
                            <li>CPU: 8 cores</li>
                            <li>GPU: 8 GB VRAM</li>
                            <li>Motherboard: AMD B550 / Intel B760 DDR4</li>
                            <li>RAM: 16 GB</li>
                            <li>2 TB SATA SSD + 500GB NVME SSD</li>
                        </ul>
                    );
                }
                else if(priority === 1){
                    return (
                        <ul className='mt-3'>
                            <li>CPU: 12 cores</li>
                            <li>GPU: 10 GB VRAM</li>
                            <li>Motherboard: AMD X570 / Intel Z690 DDR4</li>
                            <li>RAM: 32 GB</li>
                            <li>2 TB SATA SSD + 500GB NVME SSD</li>
                        </ul>
                    );
                }
                else{
                    break;
                }
            default:
                return (
                    <span></span>
                );
        }

    }

    return (
        <>
            <MDBContainer fluid className='configurator-body'>
                <MDBRow className='d-flex justify-content-center align-items-center'>
                    <MDBCol className='my-5 col-12 col-lg-11 col-xl-10 col-xxl-9'>

                        <h1 className="text-white fw-bolder shadow-5-strong text-center mb-4 hide-caret">Auto
                            Configurator</h1>

                        <MDBCard className="w-75 mx-auto rounded-3">
                            <Form onSubmit={onFormSubmit}>
                                <MDBCardBody className='px-4'>
                                    <MDBRow className='justify-content-center'>
                                        <div className='col-8'>
                                            <h6>Usage:</h6>
                                            <UsageTypeahead setUserSelection={setUserSelection} usages={usages}/>
                                            {renderUsageInfo(userSelection.usage)}
                                            <br/>
                                            <h6>Build Priority:</h6>
                                            <PriorityTypeahead setUserSelection={setUserSelection}
                                                               priorities={priorities}/>
                                            {renderSpecsInfo(userSelection.usage, userSelection.priority)}
                                            <br/>
                                            <h6>CPU Preference:</h6>
                                            <CpuPreferenceTypeahead setUserSelection={setUserSelection}
                                                                    preferences={cpuPreferences}/>
                                            <br/>
                                            <h6>GPU Preference:</h6>
                                            <GpuPreferenceTypeahead setUserSelection={setUserSelection}
                                                                    preferences={gpuPreferences}/>
                                            <br/>
                                            <h6>Cooling Preference:</h6>
                                            <CoolerPreference setUserSelection={setUserSelection}
                                                              preferences={coolerPreferences}/>
                                            <br/>
                                        </div>
                                    </MDBRow>
                                    <div className='text-center'>
                                        <Button variant="success" type="submit" className='my-4 border rounded-0' size='lg'>Build Configuration</Button>
                                    </div>
                                </MDBCardBody>
                            </Form>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
            <MissingInputModal show={showModal} setShow={setShowModal}/>
        </>
    );
}
