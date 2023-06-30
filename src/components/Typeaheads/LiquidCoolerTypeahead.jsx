import {usePcParts} from "../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {LiquidCoolerModal} from "../Modals/LiquidCoolerModal";
import {toast} from "react-toastify";

export function LiquidCoolerTypeahead({className = {}, rig, setRig, setErrors}){
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getLiquidCoolers} = usePcParts();

    const [liquidCoolers, setLiquidCoolers]= useState([]);
    const [selectedLiquidCooler, setSelectedLiquidCooler] = useState({});
    const [showLiquidCoolerDetails, setShowLiquidCoolerDetails] = useState(false);

    const renderLiquidCoolerModalTrigger = () => {
        if(selectedLiquidCooler[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3' onClick={(event) =>{
                    event.preventDefault();
                    setShowLiquidCoolerDetails(true);}
                }>?</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3' onClick={(event) => event.preventDefault()}>?</Link>
            )
        }
    }

    const onLiquidCoolerChange = (event) => {
        if(event[0]){
            setSelectedLiquidCooler(event);
            setRig((prevState) => {
                return {
                    ...prevState,
                    liquidCooler: event[0]
                }
            });
        }
        else{
            setSelectedLiquidCooler({});
            setRig((prevState) => {
                return {
                    ...prevState,
                    liquidCooler: {}
                }
            });
        }
    }

    useEffect(() => {
        let isMounted = true;
        getLiquidCoolers().then((response) => {
            if(isMounted){
                setLiquidCoolers(response.data.data);
            }
            }).catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(Object.values(error.response.data.errors).flat())
            });

        return ()=>{
            isMounted = false;
        }
    },[])

    useEffect(()=> {
        const errorMessage = 'Water Cooler does not support the socket of this CPU';
        if(Object.keys(rig.cpu).length > 0 && Object.keys(selectedLiquidCooler).length > 0){
            const isSupported = selectedLiquidCooler[0].supportedSockets.filter((socket) => socket['name'] === rig.cpu['socket']['name']);
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
    },[rig.cpu])

    useEffect(()=> {
        const errorMessage = 'Liquid Cooler will not fit in PC Case';
        if(Object.keys(selectedLiquidCooler).length > 0 && Object.keys(rig.pcCase).length > 0){
            let willFit = false;
            const liquidCoolerWidth = selectedLiquidCooler[0].radiatorSize.split('x')[0];
            Object.values(rig.pcCase.liquidCoolingSupport).forEach(coolerMounting => {
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
    },[rig.pcCase])

    useEffect(()=> {
        const errorMessage = 'You cannot have both an Air Cooler and a Liquid Cooler';
        if(Object.keys(rig.liquidCooler).length !== 0 && Object.keys(rig.airCooler).length){
            toast.error('Both Air Cooler and Liquid Cooler selected!', {
                toastId: 'lc-ac-toast'
            });
            setErrors(prevState => [...prevState, errorMessage]);
        }
        else {
            toast.dismiss('lc-ac-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.airCooler])

    return (
        <span className='d-flex'>
            <Typeahead
                className={'w-100 ' + className}
                id="liquid-cooler-selection"
                clearButton
                labelKey="name"
                onChange={onLiquidCoolerChange}
                options={liquidCoolers}
                placeholder="Choose a Liquid Cooler..."
                selected={selectedLiquidCooler ? selectedLiquidCooler['name'] : []}
            />
            {renderLiquidCoolerModalTrigger()}
            <LiquidCoolerModal liquidCooler={selectedLiquidCooler[0]} show={showLiquidCoolerDetails} setShow={setShowLiquidCoolerDetails}/>
        </span>
    )
}
