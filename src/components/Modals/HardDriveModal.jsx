import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";

export function HardDriveModal({hardDrive, show, setShow}){
    const handleClose = () => setShow(false);

    if(hardDrive) {

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{hardDrive ? hardDrive["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + hardDrive["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {hardDrive['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {hardDrive['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Capacity:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {hardDrive['capacity']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Storage Interface:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {hardDrive['storageInterface']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Form Factor:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {hardDrive['formFactor']}"
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Speed:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {hardDrive['rpm']} RPM
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Cache:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {hardDrive['cache']} MB
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            features:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {hardDrive['features']}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {window.open(hardDrive['officialLink'])}}>Official Website</Button>
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
