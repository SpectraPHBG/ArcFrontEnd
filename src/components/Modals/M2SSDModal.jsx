import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";
import {StorageInterfacePopover} from "../Popovers/StorageInterfacePopover";
import {StorageFormFactorPopover} from "../Popovers/StorageFormFactorPopover";
import {SsdMtbfPopover} from "../Popovers/SsdMtbfPopover";

export function M2SSDModal({m2SSD, show, setShow}){
    const handleClose = () => setShow(false);

    if(m2SSD) {

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{m2SSD ? m2SSD["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + m2SSD["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {m2SSD['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {m2SSD['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Capacity:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {m2SSD['capacity']} GB
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Storage Interface:
                            <StorageInterfacePopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {m2SSD['storageInterface']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Form Factor:
                            <StorageFormFactorPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {m2SSD['formFactor']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Read Speed:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {m2SSD['maxRead']} MBps
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Write Speed:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {m2SSD['maxWrite']} MBps
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            MTBF:
                            <SsdMtbfPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {m2SSD['mtbf'] !== 0 ? m2SSD['mtbf'] + " hours" : "Unknown"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Terabytes Written:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {m2SSD['terabyteWritten']} TB
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Features:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {m2SSD['features'] ? m2SSD['features'] : 'None'}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='w-100 text-center'>
                        <Button className='rounded-0 me-2' onClick={() => {window.open(m2SSD['officialLink'])}}>Official Website</Button>
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
