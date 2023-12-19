import {Card} from "react-bootstrap";
import {DocumentationTopicsEnum} from "../DocumentationTopicsEnum";
import {CPUInfo} from "./DocumentationContent/PCComponentInfo/CPUInfo";

export function TutorialsContent({selectedTopic}) {

    const renderContent = () => {
        if (selectedTopic === DocumentationTopicsEnum.CPU) {
            return <CPUInfo/>
        } else {
            return (
                <span>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </span>
            );
        }
    }

    return (
        <Card className='col-11 col-lg-8 my-4 mx-lg-4 mx-auto mx-xxl-5 p-0 bg-white'>
            {renderContent()}
        </Card>
    );
}
