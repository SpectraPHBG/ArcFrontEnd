import {MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";
import {AmazonLink} from "./AmazonLink";
import {NeweggLink} from "./NeweggLink";
import React from "react";
import {useState} from "react";
import {Button} from "react-bootstrap";
import {RamModal} from "./Modals/RamModal";

export function LoopRamModalTrigger({ram, id, rigRetail}){
    const [showRamDetails, setShowRamDetails] = useState(false);
    const renderRamModal = (id) => {
        if (ram && rigRetail) {
            return <RamModal ram={ram} show={showRamDetails} setShow={setShowRamDetails}/>
        }
    }

    return (
        <MDBListGroup key={id} className='bg-light w-75 mx-auto my-3'>
            <MDBListGroupItem active aria-current='true' className='px-3'>
                {renderRamModal()}
                <span className='col-8'>
                    {ram['name']}
                </span>
                <span className='col-3'>
                    <Button
                        className='text-light text-decoration-none position-absolute end-0 top-0 pe-3 rounded-0'
                        onClick={() => {
                            setShowRamDetails(true)
                        }}>Specs</Button>
                </span>
            </MDBListGroupItem>
            <AmazonLink url={rigRetail['rams'][id]['amazon']}/>
            <NeweggLink url={rigRetail['rams'][id]['newegg']}/>
        </MDBListGroup>
    );
}
