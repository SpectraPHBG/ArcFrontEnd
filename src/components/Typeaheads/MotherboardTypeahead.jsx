import {usePcParts} from "../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../../css/pc-part-input-styles.scss'
import {MotherboardModal} from "../Modals/MotherboardModal";
import {toast} from "react-toastify";

export function MotherboardTypeahead({className = '', rig, setRig, setErrors}) {
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getMotherboards} = usePcParts();

    const [motherboards, setMotherboards]= useState([]);
    const [selectedMotherboard, setSelectedMotherboard] = useState({});
    const [showMotherboardDetails, setShowMotherboardDetails] = useState(false);

    const renderMotherboardModalTrigger = () => {
        if(selectedMotherboard[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3' onClick={(event) =>{
                    event.preventDefault();
                    setShowMotherboardDetails(true);}
                }>?</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3' onClick={(event) => event.preventDefault()}>?</Link>
            )
        }
    }

    const onMotherboardChange = (event) => {
        if(event[0]){
            setSelectedMotherboard(event);
            setRig((prevState) => {
                return {
                    ...prevState,
                    motherboard: event[0]
                }
            });
        }
        else{
            setSelectedMotherboard({});
            setRig((prevState) => {
                return {
                    ...prevState,
                    motherboard: {}
                }
            });
        }
    }

    useEffect(() => {
        let isMounted = true;
        getMotherboards().then((response) => {
            if(isMounted){
                setMotherboards(response.data.data);
            }
        })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(Object.values(error.response.data.errors).flat())
            });

        return () => {
            isMounted = false;
        }
    },[])

    useEffect(()=> {
        const errorMessage = 'CPU and Motherboard must have the same Socket';
        if(Object.keys(rig.cpu).length > 0 && Object.keys(selectedMotherboard).length > 0){
            if(rig.cpu.socket.id !== selectedMotherboard[0].socket.id){
                toast.error('Incompatible CPU and Motherboard Socket', {
                    toastId: 'cpu-mb-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }
        }
        else {
            toast.dismiss('cpu-mb-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));

        }
    },[rig.cpu])

    useEffect(()=> {
        const errorMessage = 'Motherboard does not have enough slots for the selected RAM';
        if(Object.keys(selectedMotherboard).length > 0 && rig.rams.length > 0){
            const ramModules = rig.rams.reduce((prev,current) => prev + parseInt(current.modules), 0);
            if(ramModules > parseInt(selectedMotherboard[0].memorySlots)){
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
            else {
                setErrors(prevState => {
                    toast.dismiss('ram-mb-amount-toast');
                    return prevState.filter(error => error !== errorMessage)
                });
            }
        }
        else {
            setErrors(prevState => {
                toast.dismiss('ram-mb-amount-toast');
                return prevState.filter(error => error !== errorMessage)
            });
        }

    },[rig.rams])

    useEffect(()=> {
        const errorMessage = 'Motherboard does not support this type of RAM';
        if(Object.keys(rig.rams).length > 0 && selectedMotherboard[0]){

            const isIncompatible = rig.rams.some(ram => {
                if(ram.memoryType.id !== selectedMotherboard[0].memoryType.id){
                    return true;
                }
                else {
                    return false;
                }
            })
            if(isIncompatible) {
                setErrors(prevState => {
                    if (!prevState.some(error => error === errorMessage)) {
                        toast.error('Unsupported RAM for Motherboard', {
                            toastId: 'ram-mb-compat-toast'
                        });
                        return [...prevState, errorMessage];
                    } else {
                        return prevState;
                    }
                });
            }
            else {
                setErrors(prevState => {
                    toast.dismiss('ram-mb-compat-toast');
                    return prevState.filter(error => error !== errorMessage)
                });
            }
        }
        else {
            setErrors(prevState => {
                toast.dismiss('ram-mb-compat-toast');
                return prevState.filter(error => error !== errorMessage)
            });
        }

        if(!className.includes('invalid')){
            toast.dismiss('ram-mb-toast');
        }
    },[rig.rams, rig.motherboard])


    useEffect(()=> {
        if(className.includes('invalid') === false){
            toast.dismiss('ram-mb-toast');
        }

    },[className])

    return (
        <span className='d-flex'>
            <Typeahead
                className={'w-100 ' + className}
                id="motherboard-selection"
                clearButton
                labelKey="name"
                onChange={onMotherboardChange}
                options={motherboards}
                placeholder="Choose a Motherboard..."
                selected={selectedMotherboard ? selectedMotherboard['name'] : []}
            />
            {renderMotherboardModalTrigger()}
            <MotherboardModal motherboard={selectedMotherboard[0]} show={showMotherboardDetails} setShow={setShowMotherboardDetails}/>
        </span>
    )
}
