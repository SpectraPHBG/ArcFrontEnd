import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";

export function PcCaseModal({pcCase, show, setShow}) {
    const handleClose = () => setShow(false);

    if(pcCase) {
        const mappedFormFactors = pcCase['supportedFormFactors'].map((item, index) => <p key={index}>{item['name']}</p>);
        const mappedAirCoolingSupport = Object.keys(pcCase['airCoolingSupport']).map((key) => <p key={key}>{key}: {pcCase['airCoolingSupport'][key].join(' mm, ')} mm</p>);
        const mappedLiquidCoolingSupport = Object.keys(pcCase['liquidCoolingSupport']).map((key) => <p key={key}>{key}: {pcCase['liquidCoolingSupport'][key].join(' mm, ')} mm</p>);;

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{pcCase ? pcCase["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + pcCase["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Form Factor:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['formFactor']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            IO Ports:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['ioPorts']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Power Supply Mount:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['psuMount']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Motherboard Form Factor Support:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {mappedFormFactors}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Fans Support:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {mappedAirCoolingSupport}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Liquid Cooler Radiator Support:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {mappedLiquidCoolingSupport}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            2.5" Storage Bays:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['storage25Bays']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            3.5" Storage Bays:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['storage35Bays']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Included Fans:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['includedFans'] ? pcCase['includedFans'] + ' mm' : "None"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max PSU Length:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['maxPsuLength']} mm
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Cooler Height:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['maxCoolerHeight']} mm
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Gpu Length:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['maxGpuLength']} mm
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Dimensions (H x W x D):
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['dimensions']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Features:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {pcCase['features'] ? pcCase['features'] : "None given!"}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {window.open(pcCase['officialLink'])}}>Official Website</Button>
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
