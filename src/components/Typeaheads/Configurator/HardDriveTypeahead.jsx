import {usePcParts} from "../../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {HardDriveModal} from "../../Modals/HardDriveModal";
import {Image} from "react-bootstrap";

export function HardDriveTypeahead({setRig, setErrors, id, rig, rewrite, setRewrite}){
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getHardDrives} = usePcParts();

    const [hardDrives, setHardDrives]= useState([]);

    const [selectedHardDrive, setSelectedHardDrive] = useState([]);
    const [filteredHardDrives, setFilteredHardDrives]= useState([]);

    const [showHardDriveDetails, setShowHardDriveDetails] = useState(false);

    const renderHardDriveModalTrigger = () => {
        if(selectedHardDrive[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3 d-flex custom-button align-items-center align-self-center text-center' onClick={(event) =>{
                    event.preventDefault();
                    setShowHardDriveDetails(true);}
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

    const renderHDDImage = () => {

        if (selectedHardDrive[0]) {
            return (
                <div className='col-1 configurator-icon bg-white me-1 p-1 border border-1 d-flex align-items-center'>
                    <Image className="w-100"
                           src={require("../../../images" + selectedHardDrive[0]["imageLink"])}
                           alt="No image found."/>
                </div>
            );
        } else {
            return (
                <div className='col-1 configurator-icon bg-white me-1 p-1 border border-1 d-flex align-items-center'>
                    <Image className="w-100" src={require("../../../images/icons/hdd-icon.png")}
                           alt="No image found."/>
                </div>
            );
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
        if(rewrite){
            if(Object.keys(rig.hdds).length > 0 && Object.keys(rig.hdds).length > id){
                setSelectedHardDrive([rig.hdds[id]]);
            }
        }

    }, [rig, rewrite]);

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
            {renderHDDImage()}
            <Typeahead
                className='w-100'
                id="hdd-selection"
                clearButton
                labelKey="name"
                onChange={onHardDriveChange}
                renderMenuItemChildren={renderOption}
                options={filteredHardDrives}
                placeholder="Choose a Hard Drive..."
                selected={selectedHardDrive}
            />
            {renderHardDriveModalTrigger()}
            <HardDriveModal hardDrive={selectedHardDrive[0]} show={showHardDriveDetails} setShow={setShowHardDriveDetails}/>
        </span>
    )
}
