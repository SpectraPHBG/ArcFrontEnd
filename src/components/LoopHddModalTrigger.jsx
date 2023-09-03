import {MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";
import {AmazonLink} from "./AmazonLink";
import {NeweggLink} from "./NeweggLink";
import React from "react";
import {useState} from "react";
import {Button} from "react-bootstrap";
import {HardDriveModal} from "./Modals/HardDriveModal";

export function LoopHddModalTrigger({hdd, id, rigRetail}){
    const [showHddDetails, setShowHddDetails] = useState(false);
    const renderHddModal = (id) => {
        if (hdd && rigRetail) {
            return <HardDriveModal hardDrive={hdd} show={showHddDetails} setShow={setShowHddDetails}/>
        }
    }

    return (
        <MDBListGroup key={id} className='bg-light w-75 mx-auto my-3'>
            <MDBListGroupItem active aria-current='true' className='px-3'>
                {renderHddModal()}
                <span className='col-8'>
                    {hdd['name']}
                </span>
                <span className='col-3'>
                    <Button
                        className='text-light text-decoration-none position-absolute end-0 top-0 pe-3 rounded-0'
                        onClick={() => {
                            setShowHddDetails(true)
                        }}>Specs</Button>
                </span>
            </MDBListGroupItem>
            <AmazonLink url={rigRetail['rams'][id]['amazon']}/>
            <NeweggLink url={rigRetail['rams'][id]['newegg']}/>
        </MDBListGroup>
    );
}
