import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";
import {StorageInterfacePopover} from "../Popovers/StorageInterfacePopover";
import {StorageFormFactorPopover} from "../Popovers/StorageFormFactorPopover";
import {SsdMtbfPopover} from "../Popovers/SsdMtbfPopover";

export function SataSSDModal({sataSSD, show, setShow}) {
    const handleClose = () => setShow(false);

    if(sataSSD) {

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{sataSSD ? sataSSD["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + sataSSD["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {sataSSD['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {sataSSD['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Capacity:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {sataSSD['capacity']} GB
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Storage Interface:
                            <StorageInterfacePopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {sataSSD['storageInterface']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Form Factor:
                            <StorageFormFactorPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {sataSSD['formFactor']}"
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Read Speed:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {sataSSD['maxRead']} MBps
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Write Speed:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {sataSSD['maxWrite']} MBps
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            MTBF:
                            <SsdMtbfPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {sataSSD['mtbf']} hours
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Terabytes Written:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {sataSSD['terabyteWritten']} TB
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Features:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {sataSSD['features'] ? sataSSD['features'] : 'None'}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='w-100 text-center'>
                        <Button className='rounded-0 me-2' onClick={() => {window.open(sataSSD['officialLink'])}}>Official Website</Button>
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
