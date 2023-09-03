import Modal from "react-bootstrap/Modal";
import {Button, Image} from "react-bootstrap";
import {CpuSocketPopover} from "../Popovers/CpuSocketPopover";
import {CpuCorePopover} from "../Popovers/CpuCorePopover";
import {CpuThreadPopover} from "../Popovers/CpuThreadPopover";
import {CpuTurboClockPopover} from "../Popovers/CpuTurboClockPopover";
import {CpuCachePopover} from "../Popovers/CpuCachePopover";
import {CpuTdpPopover} from "../Popovers/CpuTdpPopover";

export function CpuModal({cpu, show, setShow}){
    const handleClose = () => setShow(false);

    if(cpu) {
        const renderClock = () => {
            if (cpu['brand']['name'] === "Intel") {
                return (
                    <>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                P Core Clock Speed:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['baseClock']} GHz
                            </div>
                        </div>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                P Core Turbo Clock:
                                <CpuTurboClockPopover />
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['turboClock']} GHz
                            </div>
                        </div>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                E Core Clock Speed:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['baseClock2']} GHz
                            </div>
                        </div>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                E Core Turbo Clock:
                                <CpuTurboClockPopover />
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['turboClock2']} GHz
                            </div>
                        </div>
                    </>
                )
            }
            else {
                return (
                    <>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                Clock Speed:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['baseClock']} GHz
                            </div>
                        </div>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                Turbo Clock:
                                <CpuTurboClockPopover />
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['turboClock']} GHz
                            </div>
                        </div>

                    </>
                )
            }
        }
        const renderMemory = () => {
            if (cpu['brand']['name'] === "Intel") {
                return (
                    <>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                Cpu Memory:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['memoryType']['name']} {cpu['memorySpeed']} MHz / {cpu['memory2Type']['name']} {cpu['memory2Speed']} MHz
                            </div>
                        </div>
                    </>
                )
            }
            else {
                return (
                    <>
                        <hr/>
                        <div className='row text-center text-lg-start'>
                            <div className='col-12 col-lg-4'>
                                Cpu Memory:
                            </div>
                            <div className='col-12 col-lg-8'>
                                {cpu['memoryType']['name']} {cpu['memorySpeed']} MHz
                            </div>
                        </div>
                    </>
                )
            }
        }

        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{cpu ? cpu["name"] : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="justify-content-center d-flex">
                        <Image className="w-50 align-self-center" src={require("../../images" + cpu["imageLink"])} alt="No image found."/>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Brand:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['brand']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Series:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['series']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Name:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Socket:
                            <CpuSocketPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['socket']['name']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Cores:
                            <CpuCorePopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['cores']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Threads:
                            <CpuThreadPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['threads']}
                        </div>
                    </div>
                    {renderClock()}
                    {renderMemory()}
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Hyperthreading:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['hyperthreadingSupport'] === 1 ? "Yes" : "No"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Cpu Cache:
                            <CpuCachePopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['caches']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Thermal Design Power:
                            <CpuTdpPopover />
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['tdp']} W
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            PCIe Gen:
                        </div>
                        <div className='col-12 col-lg-8'>
                            PCI Express {cpu['pcieVersion']}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Max Temperature:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['maxTemp']}°C
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Integrated GPU:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['integratedGpu'] ? cpu['integratedGpu'] : "None"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Integrated GPU Speed:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['gpuFrequency'] ? cpu['gpuFrequency'] + " MHz" : "None"}
                        </div>
                    </div>
                    <hr/>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-4'>
                            Supported OS:
                        </div>
                        <div className='col-12 col-lg-8'>
                            {cpu['supportedOs']}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='w-100 text-center'>
                        <Button className='rounded-0 me-2' onClick={() => {window.open(cpu['officialLink'])}}>Official Website</Button>
                        <Button className='rounded-0' variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }
    else {
        return null;
    }
}
