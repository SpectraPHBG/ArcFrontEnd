import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

export function MissingInputModal({show, setShow}) {
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div>
                   Please make sure to fill all the fields!
               </div>
            </Modal.Body>
            <Modal.Footer>
                <div className='w-100 text-center'>
                    <Button className='rounded-0' variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}
