import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";
import {AirCoolerBearingPopover} from "../Popovers/AirCoolerBearingPopover";
import {MaxCoolerPopover} from "../Popovers/MaxCoolerPopover";

export function AirCoolerModal({airCooler, show, setShow}){
    const handleClose = () => setShow(false);

    if(airCooler) {
        const mapSockets = (sockets) => {
            return sockets.map((socket, index) => <span key={index}>{socket['name']}, </span>);
        }

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{airCooler ? airCooler["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + airCooler["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {airCooler['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {airCooler['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Bearing:
                            <AirCoolerBearingPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {airCooler['bearing']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Fans:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {airCooler['fans']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Fan Mounting:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {airCooler['fanMounting']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Cooler Height:
                            <MaxCoolerPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {airCooler['maxCoolerHeight']} mm
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Power Connector:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {airCooler['powerConnector']}-Pin
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            RGB:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {airCooler['rgb'] ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Dimensions (H x W x D):
                        </div>
                        <div className='col-12 col-lg-8'>
                            {airCooler['dimensions']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Supported Sockets:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {mapSockets(airCooler['supportedSockets'])}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Features:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {airCooler['features'] ? airCooler['features'] : 'None'}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {window.open(airCooler['officialLink'])}}>Official Website</Button>
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
