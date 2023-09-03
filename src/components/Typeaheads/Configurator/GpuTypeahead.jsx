import {usePcParts} from "../../../hooks/pc-parts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Typeahead} from "react-bootstrap-typeahead";
import {GpuModal} from "../../Modals/GpuModal";
import {toast} from "react-toastify";

export function GpuTypeahead({className = '', rig, setRig,setErrors}){
    const Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
    const {getGpus} = usePcParts();

    const [gpus, setGpus]= useState([]);
    const [selectedGpu, setSelectedGpu] = useState([]);

    const [showGpuDetails, setShowGpuDetails] = useState(false);

    const renderGpuModalTrigger = () => {
        if(selectedGpu[0]){
            return (
                <Link className='btn btn-primary rounded-0 rounded-end px-3' onClick={(event) =>{
                    event.preventDefault();
                    setShowGpuDetails(true);}
                }>?</Link>
            )
        }
        else {
            return (
                <Link className='btn btn-primary disabled rounded-0 rounded-end px-3' onClick={(event) => event.preventDefault()}>?</Link>
            )
        }
    }

    const onGpuChange = (event) => {
        if(event[0]){
            setSelectedGpu(event);
            setRig((prevState) => {
                return {
                    ...prevState,
                    gpu: event[0]
                }
            });
        }
        else{
            setSelectedGpu([]);
            setRig((prevState) => {
                return {
                    ...prevState,
                    gpu: {}
                }
            });
        }
    }

    useEffect(() => {
        if(Object.keys(rig.gpu).length > 0){
            setSelectedGpu([rig.gpu]);
        }
    }, [rig]);

    useEffect(()=> {
        const errorMessage = 'Graphics Card will not fit in PC Case!';
        if(Object.keys(selectedGpu).length > 0 && Object.keys(rig.pcCase).length > 0){
            if(selectedGpu[0].maxGpuLength > rig.pcCase.maxGpuLength){
                toast.error('Incompatible GPU and Case', {
                    toastId: 'gpu-case-toast'
                });
                setErrors(prevState => [...prevState, errorMessage]);
            }

        }
        else {
            toast.dismiss('gpu-case-toast');
            setErrors(prevState => prevState.filter(error => error !== errorMessage));
        }
    },[rig.pcCase])

    useEffect(() => {
        let isMounted = true;
        getGpus().then((response) => {
            if(isMounted) {
                setGpus(response.data.data)
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

    return (
        <span className='d-flex'>
            <Typeahead
                className={'w-100 ' + className}
                id="gpu-selection"
                clearButton
                labelKey="name"
                onChange={onGpuChange}
                options={gpus}
                placeholder="Choose a GPU..."
                selected={selectedGpu}
            />
            {renderGpuModalTrigger()}
            <GpuModal gpu={selectedGpu[0]} show={showGpuDetails} setShow={setShowGpuDetails}/>
        </span>
    )
}
