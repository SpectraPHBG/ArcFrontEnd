import {usePcParts} from "../../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {PowerSupplyModal} from "../../Modals/PowerSupplyModal";
import {toast} from "react-toastify";

export function PowerSupplyTypeahead({className = '', rig, setRig, setErrors}) {
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getPsus} = usePcParts();

    const [powerSupplies, setPowerSupplies]= useState([]);

    const [selectedPowerSupply, setSelectedPowerSupply] = useState([]);
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
            setSelectedPowerSupply([]);
            setRig((prevState) => {
                return {
                    ...prevState,
                    psu: {}
                }
            });
        }
    }

    useEffect(() => {
        if(Object.keys(rig.psu).length > 0){
            setSelectedPowerSupply([rig.psu]);
        }
    }, [rig]);

    useEffect(()=> {
        const errorMessage = 'Power Supply will not fit in PC Case!';
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

    useEffect(()=> {
        const errorMessage = 'Power Supply does not have enough connectors to power the CPU!';
        if(Object.keys(selectedPowerSupply).length > 0 && Object.keys(rig.cpu).length > 0){
            let psuCpuConnector = selectedPowerSupply[0]['connectors'].split("\\ ").filter(connector => connector.includes("CPU"));
            psuCpuConnector = psuCpuConnector[0].substring(0,5);
            const cpuConnectorCount = psuCpuConnector[0] * psuCpuConnector[4];
            if((cpuConnectorCount/2)*84 < rig.cpu['tdp']){
                toast.error('Incompatible Power Supply and CPU', {
                    toastId: 'psu-cpu-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }

        }
        else {
            toast.dismiss('psu-cpu-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.psu, rig.cpu])

    useEffect(()=> {
        const errorMessage = 'Power consumption of PC parts too high for selected Power Supply!';
        if(Object.keys(selectedPowerSupply).length > 0 &&
            Object.keys(rig.cpu).length > 0 &&
            Object.keys(rig.gpu).length > 0 &&
            (Object.keys(rig.hdds).length > 0 ||
            Object.keys(rig.sataSSDs).length > 0 ||
            Object.keys(rig.m2SSDs).length > 0)
        ){
            let totalConsumption = 50;
            totalConsumption += Number(rig.cpu['tdp']);
            totalConsumption += Number(rig.gpu['tdp']);
            totalConsumption += (rig.hdds.length + rig.sataSSDs.length + rig.m2SSDs.length)*10;
            if(totalConsumption >= selectedPowerSupply[0]['maxPower']){
                toast.error('Power Supply cannot power this PC!', {
                    toastId: 'psu-power-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }

        }
        else {
            toast.dismiss('psu-power-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.psu, rig.cpu, rig.gpu, rig.hdds, rig.sataSSDs, rig.m2SSDs])

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
                selected={selectedPowerSupply}
            />
            {renderPowerSupplyModalTrigger()}
            <PowerSupplyModal powerSupply={selectedPowerSupply[0]} show={showPowerSupplyDetails} setShow={setShowPowerSupplyDetails}/>
        </span>
    )
}
