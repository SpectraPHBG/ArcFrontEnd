import React, {useRef, useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './../css/carousel-select.scss';
import {usePcParts} from "../hooks/pc-parts";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {Spinner} from "react-bootstrap";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "green" }}
            onClick={onClick}
        />
    );
}

export function CaseCarouselSelect({rig, setRig}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionName, setSelectedOptionName] = useState(null);
    const [options, setOptions]= useState([]);
    const {getPcCases} = usePcParts();
    const sliderRef = useRef(null);

    const onSelect = (option) => {
        setSelectedOptionName(option);
    };

    const handleSelect = (index) => {
        setSelectedOption(index);
        onSelect(options[index]);
        setRig((prevState) => {
            return {
                ...prevState,
                pcCase: options[index]
            }
        });
        console.log(selectedOptionName);
    };

    const settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        swipeToSlide: true,
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

    useEffect(() => {
        if(Object.keys(rig.pcCase).length > 0){
            const index = rig.pcCase.id - 1;
            setSelectedOption(index);
            if (sliderRef.current) {
                // Use the slickSetOption method to set the initial slide index
                sliderRef.current.slickGoTo(index);
            }
        }
        else{
            setSelectedOption(null);
        }
    }, [rig]);

    useEffect(() => {
        let isMounted = true;

        getPcCases().then((response) => {
            if (isMounted) {
                setOptions(response.data.data)
            }
        }).catch(error => {
            if (error.response.status !== 422) throw error
        });

        return () => {
            isMounted = false;
        }
    },[])

    if(options.length === 0){
        return (
            <div className='justify-content-center mx-auto my-4 align-items-center align-self-center text-center'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <h5 className='align-self-center mb-2'>Loading...</h5>
            </div>
        );
    }
    else{
        return (
            <div className="carousel-select px-4">
                <Slider ref={sliderRef} {...settings}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`carousel-option ${selectedOption === index ? 'selected' : ''}`}
                            onClick={() => handleSelect(index)}
                        >
                            <img src={require("../images" + option["imageLink"])} alt= "Error" />
                            <p>{option['name']}</p>
                        </div>
                    ))}

                </Slider>
            </div>
        )
    }

}
