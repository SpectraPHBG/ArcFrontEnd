import {TutorialsMenu} from "../components/TutorialsMenu";
import "../css/tutorials.scss"
import {TutorialsContent} from "../components/TutorialsContent";
import {useState} from "react";

export function Tutorials() {

    const [selectedTopic, setSelectedTopic] = useState(-1);

    return(
        <div className='row'>
            <TutorialsMenu selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
            <TutorialsContent selectedTopic={selectedTopic}/>
        </div>
    );
}
