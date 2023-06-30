import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";

export function CpuModal({cpu, show, setShow}){
    const handleClose = () => setShow(false);

    if(cpu) {
        const renderClock = () => {
            if (cpu['brand']['name'] === "Intel") {
                return (
                    <>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                P Core Clock Speed:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['baseClock']} GHz
                            </div>
                        </div>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                P Core Turbo Clock:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['turboClock']} GHz
                            </div>
                        </div>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                E Core Clock Speed:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['baseClock2']} GHz
                            </div>
                        </div>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                E Core Turbo Clock:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['turboClock2']} GHz
                            </div>
                        </div>
                    </>
                )
            }
            else {
                return (
                    <>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                Clock Speed:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['baseClock']} GHz
                            </div>
                        </div>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                Turbo Clock:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['turboClock']} GHz
                            </div>
                        </div>

                    </>
                )
            }
        }
        const renderMemory = () => {
            if (cpu['brand']['name'] === "Intel") {
                return (
                    <>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                P Core Memory Type:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['memoryType']['name']} {cpu['memorySpeed']}
                            </div>
                        </div>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                P Core Max Memory Speed:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['memorySpeed']} MHz
                            </div>
                        </div>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                E Core Memory Type:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['memory2Type']['name']}
                            </div>
                        </div>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                E Core Max Memory Speed:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['memory2Speed']} MHz
                            </div>
                        </div>
                    </>
                )
            }
            else {
                return (
                    <>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                Memory Type:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['memoryType']['name']}
                            </div>
                        </div>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                Max Memory Speed:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['memorySpeed']} MHz
                            </div>
                        </div>
                    </>
                )
            }
        }

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{cpu ? cpu["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + cpu["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Socket:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['socket']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Cores:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['cores']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Threads:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['threads']}
                        </div>
                    </div>
                    {renderClock()}
                    {renderMemory()}
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Hyperthreading:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['hyperthreadingSupport'] === 1 ? "Yes" : "No"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Cpu Cache:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['caches']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Thermal Design Power:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['tdp']} W
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Temperature:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['maxTemp']}°C
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Integrated GPU:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['integratedGpu'] ? cpu['integratedGpu'] : "None"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Integrated GPU Speed:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['gpuFrequency'] ? cpu['gpuFrequency'] + " MHz" : "None"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Supported OS:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['supportedOs']}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {window.open(cpu['officialLink'])}}>Official Website</Button>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
    else {
        return null;
    }
}
