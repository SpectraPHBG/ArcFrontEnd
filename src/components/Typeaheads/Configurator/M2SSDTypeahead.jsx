import {usePcParts} from "../../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {M2SSDModal} from "../../Modals/M2SSDModal";

export function M2SSDTypeahead({setRig, setErrors, rig, id}){
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getM2SSDs} = usePcParts();

    const [m2SSDs, setM2SSDs]= useState([]);

    const [selectedM2SSD, setSelectedM2SSD] = useState([]);
    const [filteredM2SSDs, setFilteredM2SSDs]= useState([]);

    const [showM2SSDDetails, setShowM2SSDDetails] = useState(false);

    const renderM2SSDModalTrigger = () => {
        if(selectedM2SSD[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3' onClick={(event) =>{
                    event.preventDefault();
                    setShowM2SSDDetails(true);}
                }>?</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3' onClick={(event) => event.preventDefault()}>?</Link>
            )
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
        if(Object.keys(rig.m2SSDs).length > 0 && Object.keys(rig.m2SSDs).length > id){
            setSelectedM2SSD([rig.m2SSDs[id]]);
        }
    }, [rig]);

    // useEffect(() => {
    //     if(Object.keys(rig.rams).length > 0 && Object.keys(rig.rams).length > id){
    //         setSelectedRam([rig.rams[id]]);
    //     }
    // }, [rig]);

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
            <Typeahead
                className='w-100'
                id="m2-ssd-selection"
                clearButton
                labelKey="name"
                onChange={onM2SSDChange}
                options={filteredM2SSDs}
                placeholder="Choose a M2 SSD..."
                selected={selectedM2SSD ? selectedM2SSD : []}
            />
            {renderM2SSDModalTrigger()}
            <M2SSDModal m2SSD={selectedM2SSD[0]} show={showM2SSDDetails} setShow={setShowM2SSDDetails}/>
        </span>
    )
}
