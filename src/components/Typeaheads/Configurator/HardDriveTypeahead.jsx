import {usePcParts} from "../../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {HardDriveModal} from "../../Modals/HardDriveModal";

export function HardDriveTypeahead({setRig, setErrors, id, rig}){
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getHardDrives} = usePcParts();

    const [hardDrives, setHardDrives]= useState([]);

    const [selectedHardDrive, setSelectedHardDrive] = useState([]);
    const [filteredHardDrives, setFilteredHardDrives]= useState([]);

    const [showHardDriveDetails, setShowHardDriveDetails] = useState(false);

    const renderHardDriveModalTrigger = () => {
        if(selectedHardDrive[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3' onClick={(event) =>{
                    event.preventDefault();
                    setShowHardDriveDetails(true);}
                }>?</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3' onClick={(event) => event.preventDefault()}>?</Link>
            )
        }
    }

    const onHardDriveChange = (event) => {
        if(event[0]){
            if(!selectedHardDrive[0]) {
                setSelectedHardDrive(event);
                setRig((prevState) => {
                    return {
                        ...prevState,
                        hdds: [...prevState.hdds, event[0]]
                    }
                });
            }
        }
        else{
            setRig((prevState) => {
                return {
                    ...prevState,
                    hdds: prevState.hdds.filter(hdd => hdd !== selectedHardDrive[0])
                }
            });
            setSelectedHardDrive([]);
        }
    }

    useEffect(() => {
        if(Object.keys(rig.hdds).length > 0 && Object.keys(rig.hdds).length > id){
            setSelectedHardDrive([rig.hdds[id]]);
        }
    }, [rig]);

    useEffect(() => {
        let isMounted = true;
        getHardDrives().then((response) => {
            if(isMounted){
                setHardDrives(response.data.data);
            }
        }).catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(Object.values(error.response.data.errors).flat())
            });

        return () => {
            isMounted = false;
        }
    },[])

    useEffect(() => {
        setFilteredHardDrives(hardDrives);
    },[hardDrives])

    return (
        <span className='d-flex'>
            <Typeahead
                className='w-100'
                id="hdd-selection"
                clearButton
                labelKey="name"
                onChange={onHardDriveChange}
                options={filteredHardDrives}
                placeholder="Choose a Hard Drive..."
                selected={selectedHardDrive}
            />
            {renderHardDriveModalTrigger()}
            <HardDriveModal hardDrive={selectedHardDrive[0]} show={showHardDriveDetails} setShow={setShowHardDriveDetails}/>
        </span>
    )
}
