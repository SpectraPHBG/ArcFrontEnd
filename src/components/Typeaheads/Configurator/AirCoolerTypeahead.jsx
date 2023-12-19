import {usePcParts} from "../../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {AirCoolerModal} from "../../Modals/AirCoolerModal";
import {toast} from "react-toastify";
import {Image} from "react-bootstrap";

export function AirCoolerTypeahead({className = '', rig, setRig, setErrors}) {
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getAirCoolers} = usePcParts();

    const [airCoolers, setAirCoolers]= useState([]);
    const [selectedAirCooler, setSelectedAirCooler] = useState([]);
    const [showAirCoolerDetails, setShowAirCoolerDetails] = useState(false);

    const renderAirCoolerModalTrigger = () => {
        if(selectedAirCooler[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3 d-flex custom-button align-items-center align-self-center text-center' onClick={(event) =>{
                    event.preventDefault();
                    setShowAirCoolerDetails(true);}
                }>Specs</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3 d-flex custom-button align-items-center custom-button align-self-center' onClick={(event) => event.preventDefault()}>Specs</Link>
            )
        }
    }

    const renderOption = (option, props, index) => (
        <div key={option.id} className="text-wrap">
            {option.name}
        </div>
    );

    const renderAirCoolerImage = () => {

        if (selectedAirCooler[0]) {
            return (
                <div className='col-1 configurator-icon bg-white me-1 p-1 border border-1 d-flex align-items-center'>
                    <Image className="w-100"
                           src={require("../../../images" + selectedAirCooler[0]["imageLink"])}
                           alt="No image found."/>
                </div>
            );
        } else {
            return (
                <div className='col-1 configurator-icon bg-white me-1 p-1 border border-1 d-flex align-items-center'>
                    <Image className="w-100" src={require("../../../images/icons/ac-icon.png")}
                           alt="No image found."/>
                </div>
            );
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
        if(Object.keys(rig.airCooler).length > 0){
            setSelectedAirCooler([rig.airCooler]);
        }
    }, [rig]);

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
            {renderAirCoolerImage()}
            <Typeahead
                className={'w-100 ' + className}
                id="air-cooler-selection"
                clearButton
                labelKey="name"
                onChange={onAirCoolerChange}
                renderMenuItemChildren={renderOption}
                options={airCoolers}
                placeholder="Choose a Air Cooler..."
                selected={selectedAirCooler}
            />
            {renderAirCoolerModalTrigger()}
            <AirCoolerModal airCooler={selectedAirCooler[0]} show={showAirCoolerDetails} setShow={setShowAirCoolerDetails}/>
        </span>
    )
}
