import {usePcParts} from "../../../hooks/pc-parts";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {RamModal} from "../../Modals/RamModal";
import {toast} from "react-toastify";

export function RamTypeahead({className = '',id , rig, setRig, setErrors}){
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getRams} = usePcParts();

    const [rams, setRams]= useState([]);
    const [selectedRam, setSelectedRam] = useState([]);
    const [showRamDetails, setShowRamDetails] = useState(false);

    const renderRamModalTrigger = () => {
        if(selectedRam[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3' onClick={(event) =>{
                    event.preventDefault();
                    setShowRamDetails(true);}
                }>?</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3' onClick={(event) => event.preventDefault()}>?</Link>
            )
        }
    }

    const onRamChange = (event) => {
        if(event[0]){
            if(!selectedRam[0]) {
                setSelectedRam(event);
                setRig((prevState) => {
                    return {
                        ...prevState,
                        rams: [...prevState.rams, event[0]]
                    }
                });
            }
        }
        else{
            setRig((prevState) => {
                return {
                    ...prevState,
                    rams: prevState.rams.filter(ram => ram !== selectedRam[0])
                }
            });
            setSelectedRam([]);
        }
    }

    useEffect(() => {
        if(Object.keys(rig.rams).length > 0 && Object.keys(rig.rams).length > id){
            setSelectedRam([rig.rams[id]]);
        }
    }, [rig]);

    useEffect(() => {
        let isMounted = true;
        getRams().then((response) => {
            if(isMounted){
                setRams(response.data.data);
            }
        })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(Object.values(error.response.data.errors).flat());
            });

        return () => {
            if(selectedRam[0]){
                setRig((prevState) => {
                    return {
                        ...prevState,
                        rams: prevState.rams.filter(ram => ram !== selectedRam[0])
                    }
                });
            }
            isMounted = false;
        }
    },[])

    useEffect(()=> {
        const errorMessage = 'Motherboard does not have enough slots for the selected RAM';
        if(Object.keys(rig.motherboard).length > 0 && rig.rams.length > 0){
            const ramModules = rig.rams.reduce((prev,current) => prev + parseInt(current.modules), 0);
            if(ramModules > parseInt(rig.motherboard.memorySlots)){
                setErrors(prevState => {
                    if(!prevState.some(error => error === errorMessage)){
                        toast.error('Not enough RAM slots on Motherboard', {
                            toastId: 'ram-mb-amount-toast'
                        });
                        return [...prevState, errorMessage];
                    }
                    else{
                        return prevState;
                    }
                });
            }
        }
        else {
            setErrors(prevState => {
                toast.dismiss('ram-mb-amount-toast');
                return prevState.filter(error => error !== errorMessage)
            });
        }
    },[rig.motherboard])

       return (
        <span className='d-flex'>
            <Typeahead
                className={'w-100 ' + className}
                id="ram-selection"
                clearButton
                labelKey="name"
                onChange={onRamChange}
                options={rams}
                placeholder="Choose a RAM..."
                selected={selectedRam}
            />
            {renderRamModalTrigger()}
            <RamModal ram={selectedRam[0]} show={showRamDetails} setShow={setShowRamDetails}/>
        </span>
    )
}
