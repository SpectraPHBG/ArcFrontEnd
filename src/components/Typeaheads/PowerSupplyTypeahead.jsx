import {usePcParts} from "../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {PowerSupplyModal} from "../Modals/PowerSupplyModal";
import {toast} from "react-toastify";

export function PowerSupplyTypeahead({className = '', rig, setRig, setErrors}) {
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getPsus} = usePcParts();

    const [powerSupplies, setPowerSupplies]= useState([]);

    const [selectedPowerSupply, setSelectedPowerSupply] = useState({});
    const [filteredPowerSupplies, setFilteredPowerSupplies]= useState([]);

    const [showPowerSupplyDetails, setShowPowerSupplyDetails] = useState(false);

    const renderPowerSupplyModalTrigger = () => {
        if(selectedPowerSupply[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3' onClick={(event) =>{
                    event.preventDefault();
                    setShowPowerSupplyDetails(true);}
                }>?</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3' onClick={(event) => event.preventDefault()}>?</Link>
            )
        }
    }

    const onPowerSupplyChange = (event) => {
        if(event[0]){
            setSelectedPowerSupply(event);
            setRig((prevState) => {
                return {
                    ...prevState,
                    psu: event[0]
                }
            });
        }
        else{
            setSelectedPowerSupply({});
            setRig((prevState) => {
                return {
                    ...prevState,
                    psu: {}
                }
            });
        }
    }

    useEffect(()=> {
        const errorMessage = 'Power Supply will not fit in PC Case';
        if(Object.keys(selectedPowerSupply).length > 0 && Object.keys(rig.pcCase).length > 0){
            if(selectedPowerSupply[0].maxPsuLength > rig.pcCase.maxPsuLength){
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
    },[rig.pcCase])

    useEffect(() => {
        let isMounted = true;
        getPsus().then((response) => {
            if(isMounted){
                setPowerSupplies(response.data.data);
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

    useEffect(() => {
        setFilteredPowerSupplies(powerSupplies);
    },[powerSupplies])

    return (
        <span className='d-flex'>
            <Typeahead
                className={'w-100 ' + className}
                id="psu-selection"
                clearButton
                labelKey="name"
                onChange={onPowerSupplyChange}
                options={filteredPowerSupplies}
                placeholder="Choose a Power Supply..."
                selected={selectedPowerSupply ? selectedPowerSupply['name'] : []}
            />
            {renderPowerSupplyModalTrigger()}
            <PowerSupplyModal powerSupply={selectedPowerSupply[0]} show={showPowerSupplyDetails} setShow={setShowPowerSupplyDetails}/>
        </span>
    )
}
