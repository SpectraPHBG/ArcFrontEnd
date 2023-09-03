import {MDBCol, MDBListGroupItem, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import {Button, Image} from "react-bootstrap";

export function NeweggLink({url}) {

    if (url.length > 0) {
        return (
            <MDBListGroupItem className='px-3'>
                <MDBRow className='align-items-center text-center'>
                    <MDBCol className='col-12 col-lg-1'>
                        <Image className="align-self-center mx-auto" width='50px' src={require("../../src/images/newegg.png")}
                               alt="No image found."/>
                    </MDBCol>
                    <MDBCol><Link to={url} target="_blank">Click here to view offers on Newegg!</Link> </MDBCol>
                </MDBRow>
            </MDBListGroupItem>
        );
    } else {
        return (
            <span>

            </span>
        );
    }
}
