import {MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";
import {AmazonLink} from "./AmazonLink";
import {NeweggLink} from "./NeweggLink";
import React from "react";
import {useState} from "react";
import {Button} from "react-bootstrap";
import {RamModal} from "./Modals/RamModal";
import {M2SSDModal} from "./Modals/M2SSDModal";

export function LoopM2SsdModalTrigger({m2Ssd, id, rigRetail}){
    const [showSsdDetails, setShowSsdDetails] = useState(false);
    const renderSsdModal = (id) => {
        if (m2Ssd && rigRetail) {
            return <M2SSDModal m2SSD={m2Ssd} show={showSsdDetails} setShow={setShowSsdDetails}/>
        }
    }

    return (
        <MDBListGroup key={id} className='bg-light w-75 mx-auto my-3'>
            <MDBListGroupItem active aria-current='true' className='px-3'>
                {renderSsdModal()}
                <span className='col-8'>
                    {m2Ssd['name']}
                </span>
                <span className='col-3'>
                    <Button
                        className='text-light text-decoration-none position-absolute end-0 top-0 pe-3 rounded-0'
                        onClick={() => {
                            setShowSsdDetails(true)
                        }}>Specs</Button>
                </span>
            </MDBListGroupItem>
            <AmazonLink url={rigRetail['rams'][id]['amazon']}/>
            <NeweggLink url={rigRetail['rams'][id]['newegg']}/>
        </MDBListGroup>
    );
}
