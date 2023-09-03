import {OverlayTrigger, Popover} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export function RamEccSupportPopover () {

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
                <h3 className='mb-3'>ECC Support</h3>
                <p >
                    RAM ECC (Error-Correcting Code) support is a feature typically found in specialized server-grade memory modules.
                    It provides error-checking and error-correction capabilities, enhancing data integrity and reliability.<br/>
                    Normal consumer-grade RAM typically does not have ECC support, as it is not essential for most home and office computing tasks.
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
