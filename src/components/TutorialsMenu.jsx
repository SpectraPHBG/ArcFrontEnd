import {Accordion, Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {DocumentationTopicsEnum} from "../DocumentationTopicsEnum";

export function TutorialsMenu({selectedTopic, setSelectedTopic}) {

    const onClick = (id) => {
        setSelectedTopic(id);
    }

    return(
        <Card className='col-11 col-lg-3 my-4 mx-auto ms-lg-4 me-lg-0 p-0'>
            <Card.Header className='text-center'>
                <h5 className='my-0'>Menu</h5>
            </Card.Header>
            <Card.Body>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>About us</Accordion.Header>
                        <Accordion.Body className='px-0 py-0'>
                            <div className={`my-0 py-3 ${selectedTopic === 0 ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(0)}>Test 1</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === 1 ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(1)}>Test 1</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === 2 ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(2)}>Test 1</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === 3 ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(3)}>Test 1</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === 4 ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(4)}>Test 1</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === 5 ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(5)}>Test 1</Link>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>General Information</Accordion.Header>
                        <Accordion.Body>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>PC Component Information</Accordion.Header>
                        <Accordion.Body className='px-0 py-0'>
                            <div className={`my-0 py-3 ${selectedTopic === DocumentationTopicsEnum.CPU ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(DocumentationTopicsEnum.CPU)}>CPU</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === DocumentationTopicsEnum.GPU ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(DocumentationTopicsEnum.GPU)}>GPU</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === DocumentationTopicsEnum.PCCase ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(DocumentationTopicsEnum.PCCase)}>PC Case</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === DocumentationTopicsEnum.Motherboard ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(DocumentationTopicsEnum.Motherboard)}>Motherboard</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === DocumentationTopicsEnum.RAM ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(DocumentationTopicsEnum.RAM)}>RAM</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === DocumentationTopicsEnum.PowerSupply ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(DocumentationTopicsEnum.PowerSupply)}>Power Supply</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === DocumentationTopicsEnum.LiquidCooling ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(DocumentationTopicsEnum.LiquidCooling)}>Liquid Cooling</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === DocumentationTopicsEnum.AirCooling ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(DocumentationTopicsEnum.AirCooling)}>Air Cooling</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === DocumentationTopicsEnum.HardDrive ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(DocumentationTopicsEnum.HardDrive)}>Hard Drive</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === DocumentationTopicsEnum.SATASSD ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(DocumentationTopicsEnum.SATASSD)}>SATA SSD</Link>
                            </div>
                            <hr className='w-100 py-0 my-0'/>
                            <div className={`my-0 py-3 ${selectedTopic === DocumentationTopicsEnum.M2SSD ? ' selected' : ""}`}>
                                <Link className={`text-decoration-none text-dark ms-3`} onClick={() => onClick(DocumentationTopicsEnum.M2SSD)}>M.2 SSD</Link>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Choosing Components</Accordion.Header>
                        <Accordion.Body>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>PC Building</Accordion.Header>
                        <Accordion.Body>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                            <hr className='w-100'/>
                            <Link className='text-decoration-none text-dark ms-3'>Test 1</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
    );
}
