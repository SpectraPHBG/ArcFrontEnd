import {Typeahead} from "react-bootstrap-typeahead";
import {useState} from "react";

export function CpuPreferenceTypeahead({setUserSelection, preferences}){
    const [selectedPreference, setSelectedPreference] = useState([]);

    const onUsageChange = (event) => {
        if(event[0]){
            setSelectedPreference(event);
            setUserSelection((prevState) => {
                return {
                    ...prevState,
                    preferredCpu: event[0].id
                }
            });
        }
        else{
            setSelectedPreference([]);
            setUserSelection((prevState) => {
                return {
                    ...prevState,
                    preferredCpu: -1
                }
            });
        }
    };

    return (
        <Typeahead
            className={'w-100 full-rounded'}
            id="cpu-pref-selection"
            clearButton
            labelKey="name"
            onChange={onUsageChange}
            options={preferences}
            placeholder="Choose a CPU Preference"
            selected={selectedPreference}
        />
    );
}
