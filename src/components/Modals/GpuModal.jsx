import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";
import {MaxGpuPopover} from "../Popovers/MaxGpuPopover";
import {GpuExpansionSlotPopover} from "../Popovers/GpuExpansionSlotPopover";
import {GpuVramPopover} from "../Popovers/GpuVramPopover";
import {GpuMemoryInterfacePopover} from "../Popovers/GpuMemoryInterfacePopover";
import {GpuTdpPopover} from "../Popovers/GpuTdpPopover";
import {GpuRecommendedWattagePopover} from "../Popovers/GpuRecommendedWattagePopover";

export function GpuModal({gpu, show, setShow}) {
    const handleClose = () => setShow(false);

    const getGpuConnectors = () => {
      if(!gpu['powerConnector']){
          return "None";
      }
      else if(gpu['powerConnector'].includes(" + ")){
          const differentConnectors = gpu['powerConnector'].split(" + ");
          return differentConnectors[0] + " pin + " + differentConnectors[1] + ' pin';
      }
      else {
          return gpu['powerConnector'] + " pin";
      }
    };

    if(gpu) {

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{gpu ? gpu["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + gpu["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Expansion Slot:
                            <GpuExpansionSlotPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['expansionSlot']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Core Clock:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['coreClock'] ? gpu['coreClock'] + " MHz" : "Missing"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Game Clock:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['gameClock'] ? gpu['gameClock'] + " MHz" : "Missing"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Boost Clock:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['boostClock'] ? gpu['boostClock'] + " MHz" : "Missing"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            VRAM:
                            <GpuVramPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['vramType']['name']} {gpu['vram']}GB
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Memory Interface:
                            <GpuMemoryInterfacePopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['memoryBus']}-Bit
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Memory Clock:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['memoryClock'] ? gpu['memoryClock'] + " Gbps" : "Missing"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            3D APIs:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['3dApi']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Ports:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['ports']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Power Connector:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {getGpuConnectors()}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Resolution:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['maxResolution']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Cooler:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['cooler']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Thermal Design Power:
                            <GpuTdpPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['tdp']} W
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Recommended Wattage:
                            <GpuRecommendedWattagePopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['recommendedWattage']} W
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Gpu Length:
                            <MaxGpuPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['maxGpuLength']} mm
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Dimensions (H x W x D):
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['dimensions']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Features:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {gpu['features']}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='w-100 text-center'>
                        <Button className='rounded-0 me-2' onClick={() => {window.open(gpu['officialLink'])}}>Official Website</Button>
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
