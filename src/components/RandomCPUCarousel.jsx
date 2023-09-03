import React from "react";
import Slider from "react-slick";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {CPUCarouselCard} from "./CPUCarouselCard";
import {usePcParts} from "../hooks/pc-parts";
import {useEffect, useState} from "react";
import {MDBContainer, MDBNavbar, MDBNavbarBrand} from "mdb-react-ui-kit";
import {Spinner} from "react-bootstrap";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdChevronRight size={50} className='custom-next'
                       style={{...style, color: 'black' }}
                       onClick={onClick}/>
    );
}

function SamplePrevArrow(props) {
    const {style, onClick } = props;
    return (
        <MdChevronLeft size={50} className='custom-prev'
                       style={{...style, color: 'black' }}
                       onClick={onClick}/>
    );
}

export function RandomCPUCarousel ({brand}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const {getRandomCpus} = usePcParts();
    const [cpus, setCpus]= useState([]);

    const mappedLatestCpus = cpus.map((item, index) => <CPUCarouselCard key={index} cpu={item}/>);

    useEffect(() => {
        let isMounted = true;

        getRandomCpus(5, brand).then((response) => {
            if(isMounted){
                setCpus(response.data.data);
            }
        })
            .catch(error => {
                // if (error.response.status !== 422) throw error
            });

        return () => {
            isMounted = false;
        }
    },[])

    if(cpus.length === 0){
        return (
        <div className='px-5 mx-auto my-5'>
            <h2>{brand} Cpus</h2>
            <div className='fixed-height-card d-flex'>
                <div className='justify-content-center mx-auto my-auto align-items-center align-self-center text-center'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <h5 className='align-self-center mb-2'>Loading...</h5>
                </div>
            </div>
        </div>
        );
    }
    else{
        return (
            <div className='px-5 mx-auto my-5'>
                <h2>{brand} Cpus</h2>
                <Slider {...settings}>
                    {mappedLatestCpus}
                </Slider>
            </div>
        )
    }
}
