import React from "react";
import {Button, Carousel, OverlayTrigger, Tooltip} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../css/home.css';
import {RandomCPUCarousel} from "../components/RandomCPUCarousel";

export default function Home(){

    const tooltip = (
        <Tooltip id="tooltip">
            Coming Soon!
        </Tooltip>
    );

    return(
        <div className="home">
            <div className="top-greeter py-2 py-xl-4 ps-4">
                <div className="ps-5 pt-2 pt-xl-5 text-white row text-lg-start">
                    <h1 className="col-12"> ArcSystems PC Configurator</h1>
                    <p className="col-10 col-md-9 col-lg-5 my-4 mx-lg-0">
                        The ArcSystems PC Configurator is designed to give you a streamlined and easy way of
                        building the Configuration of your dreams regardless of prior experience or knowledge in building a PC.
                        You can try picking the parts yourself or let us pick them for you based on your preferences!
                    </p>
                </div>
                <div className="ps-5 text-white row pb-5 mx-lg-0 justify-content-lg-start">
                    <Link className="col-5 col-md-3 ms-lg-3 col-lg-3 col-xl-2 col-xxl-2 btn btn-success rounded-0" to="/config-selector">PC Configurator</Link>
                    <OverlayTrigger placement="right" overlay={tooltip} trigger={['hover', 'focus']}>
                        <span className='col-5 col-md-3 col-lg-2 col-xl-2 col-xxl-2'>
                            <Button className="ms-2 w-100 btn btn-dark border border-success border-2 disabled rounded-0">Tutorials</Button>
                        </span>
                    </OverlayTrigger>
                </div>
            </div>
            <RandomCPUCarousel brand={'Intel'}/>
            <RandomCPUCarousel brand={'AMD'}/>
        </div>
    );
}

