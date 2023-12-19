import {usePcParts} from "../../../hooks/pc-parts";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {RamModal} from "../../Modals/RamModal";
import {toast} from "react-toastify";
import {Image} from "react-bootstrap";

export function RamTypeahead({className = '', id, rig, setRig, setErrors, rewrite, setRewrite}) {
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getRams} = usePcParts();

    const [rams, setRams] = useState([]);
    const [selectedRam, setSelectedRam] = useState([]);
    const [showRamDetails, setShowRamDetails] = useState(false);

    const renderRamModalTrigger = () => {
        if (selectedRam[0]) {
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3 d-flex custom-button align-items-center align-self-center text-center'
                      onClick={(event) => {
                          event.preventDefault();
                          setShowRamDetails(true);
                      }
                      }>Specs</Link>
            )
        } else {
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

    const renderRamImage = () => {

        if (selectedRam[0]) {
            return (
                <div className='col-1 configurator-icon bg-white me-1 p-1 border border-1 d-flex align-items-center'>
                    <Image className="w-100"
                           src={require("../../../images" + selectedRam[0]["imageLink"])}
                           alt="No image found."/>
                </div>
            );
        } else {
            return (
                <div className='col-1 configurator-icon bg-white me-1 p-1 border border-1 d-flex align-items-center'>
                    <Image className="w-100" src={require("../../../images/icons/ram-icon.png")}
                           alt="No image found."/>
                </div>
            );
        }
    }

    const onRamChange = (event) => {
        if (event[0]) {
            if (!selectedRam[0]) {
                setSelectedRam(event);
                setRig((prevState) => {
                    setRewrite(false);
                    return {
                        ...prevState,
                        rams: [...prevState.rams, event[0]]
                    }
                });
            }
        } else {
            setRig((prevState) => {
                return {
                    ...prevState,
                    rams: prevState.rams.filter(ram => ram !== selectedRam[0])
                }
            });
            setSelectedRam([]);
        }
    }


    useEffect(() => {
        if(rewrite){
            if (Object.keys(rig.rams).length > 0 && Object.keys(rig.rams).length > id) {
                setSelectedRam([rig.rams[id]]);
            }
        }

    }, [rig, rewrite]);

    useEffect(() => {
        let isMounted = true;
        getRams().then((response) => {
            if (isMounted) {
                setRams(response.data.data);
            }
        })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(Object.values(error.response.data.errors).flat());
            });

        return () => {
            if (selectedRam[0]) {
                setRig((prevState) => {
                    return {
                        ...prevState,
                        rams: prevState.rams.filter(ram => ram !== selectedRam[0])
                    }
                });
            }
            isMounted = false;
        }
    }, [])

    useEffect(() => {
        const errorMessage = 'Motherboard does not have enough slots for the selected RAM';
        if (Object.keys(rig.motherboard).length > 0 && rig.rams.length > 0) {
            const ramModules = rig.rams.reduce((prev, current) => prev + parseInt(current.modules), 0);
            if (ramModules > parseInt(rig.motherboard.memorySlots)) {
                setErrors(prevState => {
                    if (!prevState.some(error => error === errorMessage)) {
                        toast.error('Not enough RAM slots on Motherboard', {
                            toastId: 'ram-mb-amount-toast'
                        });
                        return [...prevState, errorMessage];
                    } else {
                        return prevState;
                    }
                });
            }
        } else {
            setErrors(prevState => {
                toast.dismiss('ram-mb-amount-toast');
                return prevState.filter(error => error !== errorMessage)
            });
        }
    }, [rig.motherboard])

    return (
        <span className='d-flex'>
            {renderRamImage()}
            <Typeahead
                className={'w-100 text-wrap flex-wrap d-flex align-self-center ' + className}
                id="ram-selection"
                clearButton
                labelKey="name"
                onChange={onRamChange}
                renderMenuItemChildren={renderOption}
                options={rams}
                placeholder="Choose a RAM..."
                selected={selectedRam}
            />
            {renderRamModalTrigger()}
            <RamModal ram={selectedRam[0]} show={showRamDetails} setShow={setShowRamDetails}/>
        </span>
    )
}
