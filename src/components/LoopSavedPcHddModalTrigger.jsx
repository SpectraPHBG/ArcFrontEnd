import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {HardDriveModal} from "./Modals/HardDriveModal";

export function LoopSavedPcHddModalTrigger({hdd, id}){
    const [showHddDetails, setShowHddDetails] = useState(false);

    return (
        <>
            <div className='justify-content-around'>
                            <span>
                                HDD #{id+1}: {hdd['name']} |
                            </span>
                <HardDriveModal hardDrive={hdd} show={showHddDetails} setShow={setShowHddDetails}/>
                <Link
                    variant='link'
                    className='text-decoration-none position-relative end-0 top-0 py-0 px-1 my-0 rounded-0 border-0 text-end'
                    onClick={() => {
                        setShowHddDetails(true)
                    }}>Specs</Link>
            </div>
            <hr/>
        </>
    );
}
