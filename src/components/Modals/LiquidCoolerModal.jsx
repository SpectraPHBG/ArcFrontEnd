import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";

export function LiquidCoolerModal({liquidCooler, show, setShow}){
    const handleClose = () => setShow(false);

    if(liquidCooler) {
        const mapSockets = (sockets) => {
            return sockets.map((socket, index) => <p key={index}>{socket['name']}</p>);
        }

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{liquidCooler ? liquidCooler["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + liquidCooler["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Radiator Dimensions (H x W x D):
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['radiatorSize']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Fan Size (H x W x D):
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['fanSize']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Fan Connector:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['fanConnector']}-Pin
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Fan Count:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['fanCount']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Fan Consumption:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['fanConsumption']} W
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Fan Noise:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['fanNoise']} dBA
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Pump Speed:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['pumpRpm']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Pump Consumption:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['pumpConsumption']} W
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Pump Noise:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['pumpNoise']} dBA
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Tube Length:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['tubeLength']} mm
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            RGB:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['rgb'] ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Supported Sockets:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {mapSockets(liquidCooler['supportedSockets'])}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Features:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {liquidCooler['features'] ? liquidCooler['features'] : 'None'}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {window.open(liquidCooler['officialLink'])}}>Official Website</Button>
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
