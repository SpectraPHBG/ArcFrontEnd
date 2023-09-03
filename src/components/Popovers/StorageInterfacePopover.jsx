import {OverlayTrigger, Popover} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export function StorageInterfacePopover () {

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
                <h3 className='mb-3'>Storage Interface</h3>
                <p >
                    A storage interface is the method by which a Hard Drive/SSD connects to the computer's motherboard and transfers data.
                    Common storage interfaces include SATA (Serial ATA) and NVMe (Non-Volatile Memory Express), which dictate the speed, bandwidth, and compatibility of the drive with the system, influencing the overall performance and data transfer capabilities of the storage device.
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
