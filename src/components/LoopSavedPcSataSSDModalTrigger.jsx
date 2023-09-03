import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {SataSSDModal} from "./Modals/SataSSDModal";

export function LoopSavedPcSataSSDModalTrigger({ssd, id}){
    const [showSsdDetails, setShowSsdDetails] = useState(false);

    return (
        <>
            <div className='justify-content-around'>
                            <span>
                                Sata SSD #{id+1}: {ssd['name']} |
                            </span>
                <SataSSDModal sataSSD={ssd} show={showSsdDetails} setShow={setShowSsdDetails}/>
                <Link
                    variant='link'
                    className='text-decoration-none position-relative end-0 top-0 py-0 px-1 my-0 rounded-0 border-0 text-end'
                    onClick={() => {
                        setShowSsdDetails(true)
                    }}>Specs</Link>
            </div>
            <hr/>
        </>
    );
}
