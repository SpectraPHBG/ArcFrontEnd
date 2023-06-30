import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";

export function PowerSupplyModal({powerSupply, show, setShow}) {
    const handleClose = () => setShow(false);

    if(powerSupply) {

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{powerSupply ? powerSupply["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + powerSupply["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {powerSupply['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {powerSupply['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Power:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {powerSupply['maxPower']} W
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Fans:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {powerSupply['fans']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Certificate:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {powerSupply['certificate'] ? powerSupply['certificate'] : 'None'}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Connectors:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {powerSupply['connectors']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Input Voltage:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {powerSupply['inputVoltage']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Power Supply Length:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {powerSupply['maxPsuLength']} mm
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Modular:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {powerSupply['modular'] ? powerSupply['modular'] : "None"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Dimensions (H x W x D):
                        </div>
                        <div className='col-12 col-lg-8'>
                            {powerSupply['dimensions']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            features:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {powerSupply['features']}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {window.open(powerSupply['officialLink'])}}>Official Website</Button>
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
