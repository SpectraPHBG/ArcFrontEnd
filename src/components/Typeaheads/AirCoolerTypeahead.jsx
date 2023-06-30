import {usePcParts} from "../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {AirCoolerModal} from "../Modals/AirCoolerModal";
import {toast} from "react-toastify";

export function AirCoolerTypeahead({className = '', rig, setRig, setErrors}) {
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getAirCoolers} = usePcParts();

    const [airCoolers, setAirCoolers]= useState([]);
    const [selectedAirCooler, setSelectedAirCooler] = useState({});
    const [showAirCoolerDetails, setShowAirCoolerDetails] = useState(false);

    const renderAirCoolerModalTrigger = () => {
        if(selectedAirCooler[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3' onClick={(event) =>{
                    event.preventDefault();
                    setShowAirCoolerDetails(true);}
                }>?</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3' onClick={(event) => event.preventDefault()}>?</Link>
            )
        }
    }

    const onAirCoolerChange = (event) => {
        if(event[0]){
            setSelectedAirCooler(event);
            setRig((prevState) => {
                return {
                    ...prevState,
                    airCooler: event[0]
                }
            });
        }
        else{
            setSelectedAirCooler({});
            setRig((prevState) => {
                return {
                    ...prevState,
                    airCooler: {}
                }
            });
        }
    }

    useEffect(() => {
        let isMounted = true;

        getAirCoolers().then((response) => {
            if(isMounted){
                setAirCoolers(response.data.data)
            }
        }).catch(error => {
            if (error.response.status !== 422) throw error
            setErrors(Object.values(error.response.data.errors).flat())
        });


        return () => {
            isMounted = false;
        }

    },[])

    useEffect(()=> {
        const errorMessage = 'Air Cooler will not fit in PC Case';
        if(Object.keys(selectedAirCooler).length > 0 && Object.keys(rig.pcCase).length > 0){
            if(selectedAirCooler[0].maxCoolerHeight > rig.pcCase.maxCoolerHeight){
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

    useEffect(()=> {
        const errorMessage = 'Air Cooler does not support the socket of this CPU';
        if(Object.keys(rig.cpu).length > 0 && Object.keys(selectedAirCooler).length > 0){
            const isSupported = selectedAirCooler[0].supportedSockets.filter((socket) => socket['name'] === rig.cpu['socket']['name']);
            if(isSupported.length === 0){
                toast.error('Incompatible CPU and Air Cooler', {
                    toastId: 'cpu-ac-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }

        }
        else {
            toast.dismiss('cpu-lc-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.airCooler])

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
    },[rig.liquidCooler])

    return (
        <span className='d-flex'>
            <Typeahead
                className={'w-100 ' + className}
                id="air-cooler-selection"
                clearButton
                labelKey="name"
                onChange={onAirCoolerChange}
                options={airCoolers}
                placeholder="Choose a Air Cooler..."
                selected={selectedAirCooler ? selectedAirCooler['name'] : []}
            />
            {renderAirCoolerModalTrigger()}
            <AirCoolerModal airCooler={selectedAirCooler[0]} show={showAirCoolerDetails} setShow={setShowAirCoolerDetails}/>
        </span>
    )
}
