import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";
import {MotherboardFormFactorPopover} from "../Popovers/MotherboardFormFactorPopover";
import {MotherboardSocketPopover} from "../Popovers/MotherboardSocketPopover";
import {MotherboardChipsetPopover} from "../Popovers/MotherboardChipsetPopover";
import {MotherboardDualChannelPopover} from "../Popovers/MotherboardDualChannelPopover";
import {MotherboardECCPopover} from "../Popovers/MotherboardECCPopover";
import {MotherboardBufferPopover} from "../Popovers/MotherboardBufferPopover";
import {MotherboardExpansionSlotsPopover} from "../Popovers/MotherboardExpansionSlotsPopover";

export function MotherboardModal({motherboard, show, setShow}){
    const handleClose = () => setShow(false);

    if(motherboard) {
        const mappedConnectors = motherboard['ioConnectors'].split('\\ ').map((item, index) => <p key={index}>{item}</p>);

        const mapExpansionSlots = (expansionSlots) => {
            return expansionSlots.map((expansionSlot, index) => <p key={index}>{expansionSlot['amount']} x {expansionSlot['name']}</p>);
        }
        const mapStorageInterfaces = (storageInterfaces) => {
            return storageInterfaces.map((storageInterface, index) => <span key={index}>{storageInterface['name']} <br/></span>)
        }
        const mapStorageInterfaceSlots = (storageInterfaceSlots) => {
            return storageInterfaceSlots.map((interfaceSlot, index) => {
                    if(interfaceSlot['m2FormFactors']){
                        return(
                            <div key={index}>
                                <p className='fw-bold'>{
                                    interfaceSlot['name']}:
                                </p>
                                <p> Supported Interfaces: <br/> {mapStorageInterfaces(interfaceSlot['interfaceSupport'])}</p>
                                <p>Form Factors: {interfaceSlot['m2FormFactors']}</p>
                            </div>
                        );
                    }
                    else {
                        return(
                            <div key={index}>
                                <p>
                                    <span  className='fw-bold'>{interfaceSlot['name']}:</span> {interfaceSlot['amount']} x {mapStorageInterfaces(interfaceSlot['interfaceSupport'])}
                                </p>
                            </div>
                        );
                    }
                }

            );
        }

        const mapSupportedFrequencies = (supportedFrequencies) => {
            return supportedFrequencies.map((item, index) =>
                <div key={index}>
                    {item['name']
                        ? <p className='fw-bold'>{item['name']}</p>
                        : ""}
                    <p>{item['frequencies']} MHz</p>
                </div>
            );
        }

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{motherboard ? motherboard["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + motherboard["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Form Factor:
                            <MotherboardFormFactorPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['formFactor']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Socket:
                            <MotherboardSocketPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['socket']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Chipset:
                            <MotherboardChipsetPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['chipset']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Memory Type:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['memoryType']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Supported Memory Speeds:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {mapSupportedFrequencies(motherboard['memoriesSupport'])}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Memory:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['maxMemory']} GB
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Memory Slots:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['memorySlots']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Dual Channel Support:
                            <MotherboardDualChannelPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['dualChSupport'] ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            ECC Support:
                            <MotherboardECCPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['eccSupport'] ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Buffer Support:
                            <MotherboardBufferPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['bufferSupport'] ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Onboard Video:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['onboardVideo'] ? motherboard['onboardVideo'] : "None"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Onboard Audio:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['onboardAudio'] ? motherboard['onboardAudio'] : "None"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Onboard LAN:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['onboardLan'] ? motherboard['onboardLan'] : "None"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            IO Ports:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['ioPorts']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            IO Connectors:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {mappedConnectors}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            USB Ports:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['usbPorts']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Motherboard LED Lighting:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['led'] ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Expansion Slots:
                            <MotherboardExpansionSlotsPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {mapExpansionSlots(motherboard['expansionSlots'])}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Storage Interfaces:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {mapStorageInterfaceSlots(motherboard['storageInterfaces'])}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Features:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {motherboard['features']}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='w-100 text-center'>
                        <Button className='rounded-0 me-2' onClick={() => {window.open(motherboard['officialLink'])}}>Official Website</Button>
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
