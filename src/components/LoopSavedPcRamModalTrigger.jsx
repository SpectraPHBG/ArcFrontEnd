import React from "react";
import {useState} from "react";
import {RamModal} from "./Modals/RamModal";
import {Link} from "react-router-dom";

export function LoopSavedPcRamModalTrigger({ram, id}){
    const [showRamDetails, setShowRamDetails] = useState(false);

    return (
        <>
            <div className='justify-content-around'>
                            <span>
                                Ram #{id+1}: {ram['name']} |
                            </span>
                <RamModal ram={ram} show={showRamDetails} setShow={setShowRamDetails}/>
                <Link
                    variant='link'
                    className='text-decoration-none position-relative end-0 top-0 py-0 px-1 my-0 rounded-0 border-0 text-end'
                    onClick={() => {
                        setShowRamDetails(true)
                    }}>Specs</Link>
            </div>
            <hr/>
        </>
    );
}
