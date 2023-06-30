import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";

export function GpuModal({gpu, show, setShow}) {
    const handleClose = () => setShow(false);

    if(gpu) {

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{gpu ? gpu["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + gpu["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Expansion Slot:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['expansionSlot']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Gpu Clock Speed:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['clockSpeeds']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            VRAM:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['vramType']['name']} {gpu['vram']}GB
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Memory Interface:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['memoryBus']}-Bit
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            3D APIs:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['3dApi']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Ports:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['ports']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Power Connector:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['powerConnector'] ? gpu['powerConnector'] : "None"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Resolution:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['maxResolution']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Cooler:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['cooler']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Thermal Design Power:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['tdp']} W
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Recommended Wattage:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['recommendedWattage']} W
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Gpu Length:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['maxGpuLength']} mm
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Dimensions (H x W x D):
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['dimensions']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            features:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['features']}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {window.open(gpu['officialLink'])}}>Official Website</Button>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}
