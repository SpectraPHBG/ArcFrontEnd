import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";
import {RamLatencyPopover} from "../Popovers/RamLatencyPopover";
import {RamEccSupportPopover} from "../Popovers/RamEccSupportPopover";

export function RamModal({ram, show, setShow}){
    const handleClose = () => setShow(false);

    if(ram) {

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{ram ? ram["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + ram["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {ram['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {ram['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Capacity:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {ram['capacity']} GB
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Memory Type:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {ram['memoryType']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Modules:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {ram['modules']}x{ram['capacity']/ram['modules']} GB
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Speed:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {ram['speed']} MHz
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Voltage:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {ram['voltage']} V
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Latency:
                            <RamLatencyPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {ram['latency']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Heat Spreader:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {ram['heatSpreader'] ? ram['heatSpreader'] : "None"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            RGB:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {ram['rgbSupport'] ? "Yes" : "No"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            ECC Support:
                            <RamEccSupportPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {ram['eccSupport'] ? "Yes" : "No"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Features:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {ram['features']}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='w-100 text-center'>
                        <Button className='rounded-0 me-2' onClick={() => {window.open(ram['officialLink'])}}>Official Website</Button>
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
