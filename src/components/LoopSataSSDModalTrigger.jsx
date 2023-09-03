import {MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";
import {AmazonLink} from "./AmazonLink";
import {NeweggLink} from "./NeweggLink";
import React from "react";
import {useState} from "react";
import {Button} from "react-bootstrap";
import {SataSSDModal} from "./Modals/SataSSDModal";

export function LoopSataSSDModalTrigger({sataSsd, id, rigRetail}){
    const [showSsdDetails, setShowSsdDetails] = useState(false);
    const renderSataSsdModal = (id) => {
        if (sataSsd && rigRetail) {
            return <SataSSDModal sataSSD={sataSsd} show={showSsdDetails} setShow={setShowSsdDetails}/>
        }
    }

    return (
        <MDBListGroup key={id} className='bg-light w-75 mx-auto my-3'>
            <MDBListGroupItem active aria-current='true' className='px-3'>
                {renderSataSsdModal()}
                <span className='col-8'>
                    {sataSsd['name']}
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
