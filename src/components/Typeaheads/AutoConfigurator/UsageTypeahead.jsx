import {Typeahead} from "react-bootstrap-typeahead";
import {useState} from "react";

export function UsageTypeahead({setUserSelection, usages}){
    const [selectedUsage, setSelectedUsage] = useState([]);

    const onUsageChange = (event) => {
        if(event[0]){
            setSelectedUsage(event);
            setUserSelection((prevState) => {
                return {
                    ...prevState,
                    usage: event[0].id
                }
            });
        }
        else{
            setSelectedUsage([]);
            setUserSelection((prevState) => {
                return {
                    ...prevState,
                    usage: -1
                }
            });
        }
    };

    return (
        <Typeahead
            className={'w-100 full-rounded'}
            id="usage-selection"
            clearButton
            labelKey="name"
            onChange={onUsageChange}
            options={usages}
            placeholder="Choose a Usage"
            selected={selectedUsage}
        />
    );
}
