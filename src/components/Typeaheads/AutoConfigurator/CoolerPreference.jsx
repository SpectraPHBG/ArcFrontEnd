import {Typeahead} from "react-bootstrap-typeahead";
import {useState} from "react";

export function CoolerPreference({setUserSelection, preferences}){
    const [selectedPreference, setSelectedPreference] = useState([]);

    const onUsageChange = (event) => {
        if(event[0]){
            setSelectedPreference(event);
            setUserSelection((prevState) => {
                return {
                    ...prevState,
                    preferredCooling: event[0].id
                }
            });
        }
        else{
            setSelectedPreference([]);
            setUserSelection((prevState) => {
                return {
                    ...prevState,
                    preferredCooling: -1
                }
            });
        }
    };

    return (
        <Typeahead
            className={'w-100 full-rounded'}
            id="cooler-pref-selection"
            clearButton
            labelKey="name"
            onChange={onUsageChange}
            options={preferences}
            placeholder="Choose a Cooler Preference"
            selected={selectedPreference}
        />
    );
}
