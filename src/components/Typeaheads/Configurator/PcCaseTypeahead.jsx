import {usePcParts} from "../../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {PcCaseModal} from "../../Modals/PcCaseModal";
import {toast} from "react-toastify";
import React from "react";

export function PcCaseTypeahead({className = '', rig, setRig, setErrors}) {
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getPcCases} = usePcParts();

    const [pcCases, setPcCases]= useState([]);
    const [selectedPcCase, setSelectedPcCase] = useState([]);

    const [showPcCaseDetails, setShowPcCaseDetails] = useState(false);

    const renderPcCaseModalTrigger = () => {
        if(selectedPcCase[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3 py-1' onClick={(event) =>{
                    event.preventDefault();
                    setShowPcCaseDetails(true);}
                }>?</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3' onClick={(event) => event.preventDefault()}>?</Link>
            )
        }
    }

    const onPcCaseChange = (event) => {
        if(event[0]){
            setSelectedPcCase(event);
            setRig((prevState) => {
                return {
                    ...prevState,
                    pcCase: event[0]
                }
            });
        }
        else{
            setSelectedPcCase([]);
            setRig((prevState) => {
                return {
                    ...prevState,
                    pcCase: {}
                }
            });
        }
    }

    useEffect(() => {
        if(Object.keys(rig.pcCase).length > 0){
            setSelectedPcCase([rig.pcCase]);
        }
    }, [rig]);

    useEffect(()=> {
        const errorMessage = 'Graphics Card will not fit in PC Case!';
        if(Object.keys(rig.gpu).length > 0 && Object.keys(selectedPcCase).length > 0){
            if(rig.gpu.maxGpuLength > selectedPcCase[0].maxGpuLength){
                toast.error('Incompatible GPU and Case', {
                    toastId: 'gpu-case-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }

        }
        else {
            toast.dismiss('gpu-case-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.gpu])

    useEffect(()=> {
        const errorMessage = 'Motherboard will not fit in PC Case!';
        if(Object.keys(rig.motherboard).length > 0 && Object.keys(selectedPcCase).length > 0){
            const supportedFormFactors = selectedPcCase[0]['supportedFormFactors'];
            if(!supportedFormFactors.some(factor => factor.id === rig.motherboard['formFactor']['id'])){
                toast.error('Incompatible Motherboard and Case', {
                    toastId: 'mb-case-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }
        }
        else {
            toast.dismiss('mb-case-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.motherboard, rig.pcCase])

    useEffect(()=> {
        const errorMessage = 'Liquid Cooler will not fit in PC Case!';
        if(Object.keys(rig.liquidCooler).length > 0 && Object.keys(selectedPcCase).length > 0){
            let willFit = false;
            const liquidCoolerWidth = rig.liquidCooler.radiatorSize.split('x')[0];
            Object.values(selectedPcCase[0].liquidCoolingSupport).forEach(coolerMounting => {
                coolerMounting.forEach(mountingFanSize => {
                    if(liquidCoolerWidth <= mountingFanSize){
                        willFit = true;
                    }
                });
            });
            if(!willFit){
                toast.error('Incompatible Liquid Cooler and Case', {
                    toastId: 'lc-case-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }

        }
        else {
            toast.dismiss('lc-case-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.liquidCooler])

    useEffect(()=> {
        const errorMessage = 'Power Supply will not fit in PC Case!';
        if(Object.keys(rig.psu).length > 0 && Object.keys(selectedPcCase).length > 0){
            if(rig.psu.maxPsuLength > selectedPcCase[0].maxPsuLength){
                toast.error('Incompatible Power Supply and Case', {
                    toastId: 'psu-case-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }

        }
        else {
            toast.dismiss('psu-case-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.psu])

    useEffect(()=> {
        const errorMessage = 'Air Cooler will not fit in PC Case!';
        if(Object.keys(rig.airCooler).length > 0 && Object.keys(selectedPcCase).length > 0){
            if(rig.airCooler.maxCoolerHeight > selectedPcCase[0].maxCoolerHeight){
                toast.error('Incompatible Air Cooler and Case', {
                    toastId: 'ac-case-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }

        }
        else {
            toast.dismiss('ac-case-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.airCooler])

    useEffect(() => {
        let isMounted = true;

        getPcCases().then((response) => {
            if (isMounted) {
                setPcCases(response.data.data)
            }
        }).catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(Object.values(error.response.data.errors).flat())
            });

        return () => {
            isMounted = false;
        }
    },[])


    return (
        <span className='d-flex'>
            <Typeahead
                className={'w-100 ' + className}
                id="case-selection"
                clearButton
                labelKey="name"
                onChange={onPcCaseChange}
                options={pcCases}
                placeholder="Choose a Case..."
                selected={selectedPcCase}
            />
            {renderPcCaseModalTrigger()}
            <PcCaseModal pcCase={selectedPcCase[0]} show={showPcCaseDetails} setShow={setShowPcCaseDetails}/>
        </span>
    )
}
