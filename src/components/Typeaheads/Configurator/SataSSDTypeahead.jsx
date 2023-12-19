import {usePcParts} from "../../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {SataSSDModal} from "../../Modals/SataSSDModal";
import {Image} from "react-bootstrap";

export function SataSSDTypeahead({setRig, setErrors, rig, id, rewrite, setRewrite}){
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getSataSSDs} = usePcParts();

    const [sataSSDs, setSataSSDs]= useState([]);

    const [selectedSataSSD, setSelectedSataSSD] = useState([]);
    const [filteredSataSSDs, setFilteredSataSSDs]= useState([]);

    const [showSataSSDDetails, setShowSataSSDDetails] = useState(false);

    const renderSataSSDModalTrigger = () => {
        if(selectedSataSSD[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3 d-flex custom-button align-items-center align-self-center text-center' onClick={(event) =>{
                    event.preventDefault();
                    setShowSataSSDDetails(true);}
                }>Specs</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3 d-flex custom-button align-items-center custom-button align-self-center'
                      onClick={(event) => event.preventDefault()}>Specs</Link>
            )
        }
    }

    const renderOption = (option, props, index) => (
        <div key={option.id} className="text-wrap">
            {option.name}
        </div>
    );

    const renderSSDImage = () => {

        if (selectedSataSSD[0]) {
            return (
                <div className='col-1 configurator-icon bg-white me-1 p-1 border border-1 d-flex align-items-center'>
                    <Image className="w-100"
                           src={require("../../../images" + selectedSataSSD[0]["imageLink"])}
                           alt="No image found."/>
                </div>
            );
        } else {
            return (
                <div className='col-1 configurator-icon bg-white me-1 p-1 border border-1 d-flex align-items-center'>
                    <Image className="w-100" src={require("../../../images/icons/ssd-icon.png")}
                           alt="No image found."/>
                </div>
            );
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
            setSelectedSataSSD([]);
        }
    }

    useEffect(() => {
        if(rewrite){
            if(Object.keys(rig.sataSSDs).length > 0 && Object.keys(rig.sataSSDs).length > id){
                setSelectedSataSSD([rig.sataSSDs[id]]);
            }
        }

    }, [rig, rewrite]);


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
            {renderSSDImage()}
            <Typeahead
                className='w-100'
                id="sata-ssd-selection"
                clearButton
                labelKey="name"
                onChange={onSataSSDChange}
                renderMenuItemChildren={renderOption}
                options={filteredSataSSDs}
                placeholder="Choose a Sata SSD..."
                selected={selectedSataSSD}
            />
            {renderSataSSDModalTrigger()}
            <SataSSDModal sataSSD={selectedSataSSD[0]} show={showSataSSDDetails} setShow={setShowSataSSDDetails}/>
        </span>
    )
}
