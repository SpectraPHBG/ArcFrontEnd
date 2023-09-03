import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";
import {StorageInterfacePopover} from "../Popovers/StorageInterfacePopover";
import {StorageFormFactorPopover} from "../Popovers/StorageFormFactorPopover";
import {HddCachePopover} from "../Popovers/HddCachePopover";

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
                            <StorageInterfacePopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {hardDrive['storageInterface']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Form Factor:
                            <StorageFormFactorPopover />
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
                            <HddCachePopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {hardDrive['cache']} MB
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Features:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {hardDrive['features']}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='w-100 text-center'>
                        <Button className='rounded-0 me-2' onClick={() => {window.open(hardDrive['officialLink'])}}>Official Website</Button>
                        <Button className='rounded-0' variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
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
