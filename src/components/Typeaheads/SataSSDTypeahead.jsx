import {usePcParts} from "../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {SataSSDModal} from "../Modals/SataSSDModal";

export function SataSSDTypeahead({setRig, setErrors}){
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getSataSSDs} = usePcParts();

    const [sataSSDs, setSataSSDs]= useState([]);

    const [selectedSataSSD, setSelectedSataSSD] = useState({});
    const [filteredSataSSDs, setFilteredSataSSDs]= useState([]);

    const [showSataSSDDetails, setShowSataSSDDetails] = useState(false);

    const renderSataSSDModalTrigger = () => {
        if(selectedSataSSD[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3' onClick={(event) =>{
                    event.preventDefault();
                    setShowSataSSDDetails(true);}
                }>?</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3' onClick={(event) => event.preventDefault()}>?</Link>
            )
        }
    }

    const onSataSSDChange = (event) => {
        if(event[0]){
            if(!selectedSataSSD[0]) {
                setSelectedSataSSD(event);
                setRig((prevState) => {
                    return {
                        ...prevState,
                        sataSSDs: [...prevState.sataSSDs, event[0]]
                    }
                });
            }
        }
        else{
            setRig((prevState) => {
                return {
                    ...prevState,
                    sataSSDs: prevState.sataSSDs.filter(ssd => ssd !== selectedSataSSD[0])
                }
            });
            setSelectedSataSSD({});
        }
    }
    useEffect(() => {
        let isMounted = true;
        getSataSSDs().then((response) => {
            if(isMounted){
                setSataSSDs(response.data.data);
            }
        }).catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(Object.values(error.response.data.errors).flat());
            });

        return () => {
            isMounted = false;
        }
    },[])

    useEffect(() => {
        setFilteredSataSSDs(sataSSDs);
    },[sataSSDs])

    return (
        <span className='d-flex'>
            <Typeahead
                className='w-100'
                id="sata-ssd-selection"
                clearButton
                labelKey="name"
                onChange={onSataSSDChange}
                options={filteredSataSSDs}
                placeholder="Choose a Sata SSD..."
                selected={selectedSataSSD ? selectedSataSSD['name'] : []}
            />
            {renderSataSSDModalTrigger()}
            <SataSSDModal sataSSD={selectedSataSSD[0]} show={showSataSSDDetails} setShow={setShowSataSSDDetails}/>
        </span>
    )
}
