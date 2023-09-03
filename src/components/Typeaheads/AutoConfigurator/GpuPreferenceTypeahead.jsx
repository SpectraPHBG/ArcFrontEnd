import {Typeahead} from "react-bootstrap-typeahead";
import {useState} from "react";

export function GpuPreferenceTypeahead({setUserSelection, preferences}){
    const [selectedPreference, setSelectedPreference] = useState([]);

    const onUsageChange = (event) => {
        if(event[0]){
            setSelectedPreference(event);
            setUserSelection((prevState) => {
                return {
                    ...prevState,
                    preferredGpu: event[0].id
                }
            });
        }
        else{
            setSelectedPreference([]);
            setUserSelection((prevState) => {
                return {
                    ...prevState,
                    preferredGpu: -1
                }
            });
        }
    };

    return (
        <Typeahead
            className={'w-100 full-rounded'}
            id="gpu-pref-selection"
            clearButton
            labelKey="name"
            onChange={onUsageChange}
            options={preferences}
            placeholder="Choose a GPU Preference"
            selected={selectedPreference}
        />
    );
}
