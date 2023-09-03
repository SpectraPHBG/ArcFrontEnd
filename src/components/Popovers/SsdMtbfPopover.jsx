import {OverlayTrigger, Popover} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export function SsdMtbfPopover () {

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
                <h3 className='mb-3'>MTBF</h3>
                <p >
                    MTBF (mean time between failures) is a measure of the expected lifespan of a component or system before it fails.<br/>
                    In the context of SSDs, MTBF is used to estimate the average amount of time that a driver can operate before experiencing a failure.
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
