import {usePcParts} from "../../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../../../css/pc-part-input-styles.scss'
import {MotherboardModal} from "../../Modals/MotherboardModal";
import {toast} from "react-toastify";

export function MotherboardTypeahead({className = '', rig, setRig, setErrors}) {
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getMotherboards} = usePcParts();

    const [motherboards, setMotherboards]= useState([]);
    const [selectedMotherboard, setSelectedMotherboard] = useState([]);

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
            setSelectedMotherboard([]);
            setRig((prevState) => {
                return {
                    ...prevState,
                    motherboard: {}
                }
            });
        }
    }

    useEffect(() => {
        if(Object.keys(rig.motherboard).length > 0){
            setSelectedMotherboard([rig.motherboard]);
        }
    }, [rig]);

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
        const errorMessage = 'CPU and Motherboard must have the same Socket!';
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
        const errorMessage = 'Motherboard does not have enough slots for the selected RAM!';
        if(Object.keys(selectedMotherboard).length > 0 && rig.rams.length > 0){
            const ramModules = rig.rams.reduce((prev,current) => prev + parseInt(current.modules), 0);
            if(ramModules > parseInt(selectedMotherboard[0].memorySlots)){
                setErrors(prevState => {
                    if(!prevState.some(error => error === errorMessage)){
                        toast.error('Not enough RAM slots on Motherboard', {
                            toastId: 'ram-mb-count-toast'
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
                    toast.dismiss('ram-mb-count-toast');
                    return prevState.filter(error => error !== errorMessage)
                });
            }
        }
        else {
            setErrors(prevState => {
                toast.dismiss('ram-mb-count-toast');
                return prevState.filter(error => error !== errorMessage)
            });
        }

    },[rig.rams])

    useEffect(()=> {
        const errorMessage = 'The selected amount of RAM exceeds the max capacity of the Motherboard!';
        if(Object.keys(selectedMotherboard).length > 0 && rig.rams.length > 0){
            const ramTotal = rig.rams.reduce((prev,current) => prev + parseInt(current.capacity), 0);
            if(ramTotal > parseInt(selectedMotherboard[0].maxMemory)){
                setErrors(prevState => {
                    if(!prevState.some(error => error === errorMessage)){
                        toast.error('Motherboard max RAM amount limit exceeded', {
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

    },[rig.rams, rig.motherboard])

    useEffect(()=> {
        const errorMessage = 'There are not enough connectors on the Motherboard to power the CPU!';
        if(Object.keys(selectedMotherboard).length > 0 && Object.keys(rig.cpu).length > 0){
            let motherboardCpuConnector = selectedMotherboard[0]['ioConnectors'].split("\\ ").filter(connector => connector.includes("CPU"));
            motherboardCpuConnector = motherboardCpuConnector[0].substring(0,5);
            const cpuConnectorCount = motherboardCpuConnector[0] * motherboardCpuConnector[4];
            if((cpuConnectorCount/2)*84 < rig.cpu['tdp']){
                toast.error('Incompatible Motherboard and CPU', {
                    toastId: 'mb-cpu-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }

        }
        else {
            toast.dismiss('mb-cpu-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.motherboard, rig.cpu])

    useEffect(()=> {
        const errorMessage = 'You have selected a type of RAM not supported by the Motherboard!';
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
                selected={selectedMotherboard}
            />
            {renderMotherboardModalTrigger()}
            <MotherboardModal motherboard={selectedMotherboard[0]} show={showMotherboardDetails} setShow={setShowMotherboardDetails}/>
        </span>
    )
}
