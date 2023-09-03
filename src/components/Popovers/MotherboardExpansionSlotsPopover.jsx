import {OverlayTrigger, Popover} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export function MotherboardExpansionSlotsPopover () {

    const [formFactorPopoverShow, setFormFactorPopoverShow] = useState(false);

    const handleMouseEnter = () => {
        setFormFactorPopoverShow(true);
    };

    const handleMouseLeave = () => {
        setFormFactorPopoverShow(false);
    };

    const formFactorTooltip = (
        <Popover className='bg-light' id= 'formFactorPopover'
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
            <Popover.Header as="h3">Tooltip</Popover.Header>
            <Popover.Body>
                <h3 className='mb-3'>Expansion Slots</h3>
                <p >
                    Motherboard expansion slots are physical slots on the motherboard that allow additional expansion cards to be inserted. <br/>
                    These slots provide connectivity and support for various types of expansion cards, such as graphics cards, sound cards, network cards, and storage controllers, expanding the capabilities and functionality of the computer system by adding specialized hardware components.
                </p>
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger
            trigger= 'hover'
            show={formFactorPopoverShow}
            onToggle={setFormFactorPopoverShow}
            overlay={formFactorTooltip}
            placement="bottom"
            delayShow={300}
            delayHide={150}
        >
            <span> <FontAwesomeIcon icon={faQuestionCircle} /></span>
        </OverlayTrigger>
    );
}
