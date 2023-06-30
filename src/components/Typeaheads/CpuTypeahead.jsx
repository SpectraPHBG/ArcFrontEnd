import {useEffect, useState} from "react";
import {usePcParts} from "../../hooks/pc-parts";
import {CpuModal} from "../Modals/CpuModal";
import React from "react";
import {Link} from "react-router-dom";
import '../../css/pc-part-input-styles.scss'
import {toast} from "react-toastify";

export function CpuTypeahead({className = '', rig, setRig, setErrors}){
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getCpus} = usePcParts();

    const [cpus, setCpus]= useState([]);
    const [selectedCpu, setSelectedCpu] = useState({});
    const [showCpuDetails, setShowCpuDetails] = useState(false);

    const renderCpuModalTrigger = () => {
        if(selectedCpu[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3' onClick={(event) =>{
                    event.preventDefault();
                    setShowCpuDetails(true);}
                }>?</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3' onClick={(event) => event.preventDefault()}>?</Link>
            )
        }
    }

    const onCpuChange = (event) => {
        if(event[0]){
            if(!selectedCpu[0]){
                setSelectedCpu(event);
                setRig((prevState) => {
                    return {
                        ...prevState,
                        cpu: event[0]
                    }
                });
            }
        }
        else{
            setSelectedCpu({});
            setRig((prevState) => {
                return {
                    ...prevState,
                    cpu: {}
                }
            });
        }
    }

    useEffect(() => {
        let isMounted = true;

        getCpus(setErrors, setCpus).then((response) => {
            if(isMounted){
                setCpus(response.data.data)
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
        if(Object.keys(rig.motherboard).length > 0 && Object.keys(selectedCpu).length > 0){
            if(rig.motherboard.socket.id !== selectedCpu[0].socket.id){
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
    },[rig.motherboard])


    useEffect(()=> {
        const errorMessage = 'CPU and RAM must have the same DDR Type!';
        if(Object.keys(selectedCpu).length > 0 && rig.rams.length > 0){
            const isIncompatible = rig.rams.some(ram => {
                if(ram.memoryType.id !== selectedCpu[0].memoryType.id){
                    return true;
                }
                else {
                    return false;
                }
            })
            if(isIncompatible) {
                setErrors(prevState => {
                    if (!prevState.some(error => error === errorMessage)) {
                        toast.error('Incompatible CPU and RAM', {
                            toastId: 'ram-cpu-compat-toast'
                        });
                        return [...prevState, errorMessage];
                    } else {
                        return prevState;
                    }
                });
            }
            else {
                setErrors(prevState => {
                    toast.dismiss('ram-cpu-compat-toast');
                    return prevState.filter(error => error !== errorMessage)
                });
            }
        }
        else {
            setErrors(prevState => {
                toast.dismiss('ram-cpu-compat-toast');
                return prevState.filter(error => error !== errorMessage)
            });
        }

    },[rig.rams, rig.cpu])

    useEffect(()=> {
        const errorMessage = 'Air Cooler does not support the socket of this CPU';
        if(Object.keys(rig.airCooler).length > 0 && Object.keys(selectedCpu).length > 0){
            const isSupported = rig.airCooler.supportedSockets.filter((socket) => socket['name'] === selectedCpu[0]['socket']['name']);
            if(isSupported.length === 0){
                toast.error('Incompatible CPU and Air Cooler', {
                    toastId: 'cpu-ac-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }

        }
        else {
            toast.dismiss('cpu-ac-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.airCooler])

    useEffect(()=> {
        const errorMessage = 'Water Cooler does not support the socket of this CPU';
        if(Object.keys(rig.liquidCooler).length > 0 && Object.keys(selectedCpu).length > 0){
            const isSupported = rig.liquidCooler.supportedSockets.filter((socket) => socket['name'] === selectedCpu[0]['socket']['name']);
            if(isSupported.length === 0){
                toast.error('Incompatible CPU and Water Cooler', {
                    toastId: 'cpu-lc-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }

        }
        else {
            toast.dismiss('cpu-lc-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.liquidCooler])

    return (
        <span className='d-flex'>
            <Typeahead
                className={'w-100 ' + className}
                id="Cpu-selection"
                emptyLabel='Loading CPU Models ...'
                clearButton
                labelKey="name"
                onChange={onCpuChange}
                options={cpus}
                placeholder="Choose a CPU..."
                selected={selectedCpu ? selectedCpu['name'] : []}
            />
            {renderCpuModalTrigger()}
            <CpuModal cpu={selectedCpu[0]} show={showCpuDetails} setShow={setShowCpuDetails}/>
        </span>
    )
}
