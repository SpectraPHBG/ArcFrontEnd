import {Typeahead} from "react-bootstrap-typeahead";
import {useState} from "react";

export function PriorityTypeahead({setUserSelection, priorities}){
    const [selectedPriority, setSelectedPriority] = useState([]);

    const onUsageChange = (event) => {
        if(event[0]){
            setSelectedPriority(event);
            setUserSelection((prevState) => {
                return {
                    ...prevState,
                    priority: event[0].id
                }
            });
        }
        else{
            setSelectedPriority([]);
            setUserSelection((prevState) => {
                return {
                    ...prevState,
                    priority: -1
                }
            });
        }
    };

    return (
        <Typeahead
            className={'w-100 full-rounded'}
            id="priority-selection"
            clearButton
            labelKey="name"
            onChange={onUsageChange}
            options={priorities}
            placeholder="Choose a Priority"
            selected={selectedPriority}
        />
    );
}
