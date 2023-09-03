import {MDBCol, MDBListGroupItem, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import {Button, Image} from "react-bootstrap";

export function NeweggApiInfo({url}) {

    if (url.length > 0) {
        return (
            <MDBListGroupItem className='px-3'>
                <MDBRow className='align-items-center'>
                    <MDBCol lg='4'>
                        <Image className="align-self-center" width='50px' src={require("../../src/images/newegg.png")}
                               alt="No image found."/>
                    </MDBCol>
                    <MDBCol><span>Price</span></MDBCol>
                    <MDBCol><span>In Stock</span></MDBCol>
                    <MDBCol><Button>Buy</Button> </MDBCol>
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
