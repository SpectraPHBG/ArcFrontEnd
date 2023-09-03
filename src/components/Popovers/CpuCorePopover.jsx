import {OverlayTrigger, Popover} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export function CpuCorePopover () {

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
                <h3 className='mb-3'>CPU Core</h3>
                <p >
                    A CPU core is a component within the Central Processing Unit (CPU) that performs calculations and executes instructions.<br/>
                    Multiple cores within a CPU allow for parallel processing, enabling the CPU to handle multiple tasks simultaneously and enhance overall performance.
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
