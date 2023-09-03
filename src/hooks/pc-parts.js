// import {useNavigate} from "react-router";
// import {useParams} from "react-router-dom";
import axios from "../lib/axios";

export function usePcParts() {
    // let navigate = useNavigate();
    // let params = useParams();

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const getCpus = async () => {
        await csrf()
        return axios.get('/api/cpus');

    }
    const getGpus = async () => {
        await csrf()
        return axios.get('/api/gpus');
    }
    const getPcCases = async () => {
        await csrf()
        return axios.get('/api/cases');
    }
    const getRams = async () => {
        await csrf()
        return axios.get('/api/rams');
    }
    const getMotherboards = async () => {
        await csrf()
        return axios.get('/api/motherboards');
    }
    const getLiquidCoolers = async () => {
        await csrf()
        return axios.get('/api/liquidCoolers');
    }
    const getAirCoolers = async () => {
        await csrf()
        return axios.get('/api/airCoolers')

    }
    const getPsus = async () => {
        await csrf()
        return axios.get('/api/powerSupplies');
    }
    const getHardDrives = async () => {
        await csrf()
        return axios.get('/api/hdds');
    }
    const getSataSSDs = async () => {
        await csrf()
        return axios.get('/api/ssds');
    }
    const getM2SSDs = async () => {
        await csrf()
        return axios.get('/api/m2Ssds');
    }

    const compatibilityCheck = async ({...props}) => {
        await csrf()
        return axios.post('/api/compatibilityCheck', props);
    }

    const buildPC = async ({...props}) => {
        await csrf()
        return axios.post('/api/buildPc', props);
    }

    const savePC = async ({...props}) => {
        await csrf()
        return axios.post('/api/savePc', props);
    }

    const getRandomCpus = async (count, brand) => {
        await csrf()
        return axios.get('/api/cpus/random/'+brand+'/'+count);
    }

    const getUserPcs = async () => {
        await csrf()
        return axios.get('/api/getUserPcs');
    }

    const deleteSavedPc = async (id) => {
        await csrf()
        return axios.delete('/api/deletePc/'+id);
    }

    const getCpu = async (setErrors, setCpu,id) => {
        await csrf()
        setErrors([])
        axios
            .get('/api/cpus/'.id)
            .then((response) => {
                setCpu(response.data.data)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    return {
        getCpus,
        getRandomCpus: getRandomCpus,
        getGpus,
        getPcCases,
        getRams,
        getMotherboards,
        getLiquidCoolers,
        getAirCoolers,
        getPsus,
        getHardDrives,
        getSataSSDs,
        getM2SSDs,
        getUserPcs,
        compatibilityCheck,
        deleteSavedPc,
        buildPC,
        savePC,
        getCpu
    }
}
