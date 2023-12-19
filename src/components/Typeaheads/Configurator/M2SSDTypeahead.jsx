import {usePcParts} from "../../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {M2SSDModal} from "../../Modals/M2SSDModal";
import {Image} from "react-bootstrap";

export function M2SSDTypeahead({setRig, setErrors, rig, id, rewrite, setRewrite}){
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getM2SSDs} = usePcParts();

    const [m2SSDs, setM2SSDs]= useState([]);

    const [selectedM2SSD, setSelectedM2SSD] = useState([]);
    const [filteredM2SSDs, setFilteredM2SSDs]= useState([]);

    const [showM2SSDDetails, setShowM2SSDDetails] = useState(false);

    const renderM2SSDModalTrigger = () => {
        if(selectedM2SSD[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3 d-flex custom-button align-items-center align-self-center text-center' onClick={(event) =>{
                    event.preventDefault();
                    setShowM2SSDDetails(true);}
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

    const renderSSDImage = () => {

        if (selectedM2SSD[0]) {
            return (
                <div className='col-1 configurator-icon bg-white me-1 p-1 border border-1 d-flex align-items-center'>
                    <Image className="w-100"
                           src={require("../../../images" + selectedM2SSD[0]["imageLink"])}
                           alt="No image found."/>
                </div>
            );
        } else {
            return (
                <div className='col-1 configurator-icon bg-white me-1 p-1 border border-1 d-flex align-items-center'>
                    <Image className="w-100" src={require("../../../images/icons/nvme-ssd-icon.png")}
                           alt="No image found."/>
                </div>
            );
        }
    }

    const onM2SSDChange = (event) => {
        if(event[0]){
            if(!selectedM2SSD[0]) {
                setSelectedM2SSD(event);
                setRig((prevState) => {
                    return {
                        ...prevState,
                        m2SSDs: [...prevState.m2SSDs, event[0]]
                    }
                });
            }
        }
        else{
            setRig((prevState) => {
                return {
                    ...prevState,
                    m2SSDs: prevState.m2SSDs.filter(ssd => ssd !== selectedM2SSD[0])
                }
            });
            setSelectedM2SSD([]);
        }
    }

    useEffect(() => {
        if(rewrite){
            if(Object.keys(rig.m2SSDs).length > 0 && Object.keys(rig.m2SSDs).length > id){
                setSelectedM2SSD([rig.m2SSDs[id]]);
            }
        }

    }, [rig, rewrite]);

    useEffect(() => {
        let isMounted = true;
        getM2SSDs().then((response) => {
            if(isMounted){
                setM2SSDs(response.data.data);
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
        setFilteredM2SSDs(m2SSDs);
    },[m2SSDs])

    return (
        <span className='d-flex'>
            {renderSSDImage()}
            <Typeahead
                className='w-100'
                id="m2-ssd-selection"
                clearButton
                labelKey="name"
                onChange={onM2SSDChange}
                renderMenuItemChildren={renderOption}
                options={filteredM2SSDs}
                placeholder="Choose a M2 SSD..."
                selected={selectedM2SSD ? selectedM2SSD : []}
            />
            {renderM2SSDModalTrigger()}
            <M2SSDModal m2SSD={selectedM2SSD[0]} show={showM2SSDDetails} setShow={setShowM2SSDDetails}/>
        </span>
    )
}
