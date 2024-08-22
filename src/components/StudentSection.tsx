import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import slider1 from '../assets/stu1.jpg';
import slider2 from '../assets/testimony-2.jpg';
import slider3 from '../assets/testimony-3.jpg';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import BackTop from "./BackTop";

const slides = [
    {
        img: slider1,
        captionMedium: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit earum perspiciatis eaque molestiae aspernatur ea itaque reiciendis accusamus assumenda odio excepturi minima quisquam atque magni dolorem harum, doloremque quidem.",
        animationDuration: "12000ms",
        studentName:'Ankita',
        subject:"Physics"
    },
    {
        img: slider2,
        captionMedium: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit earum perspiciatis eaque molestiae aspernatur ea itaque reiciendis accusamus assumenda odio excepturi minima quisquam atque magni dolorem harum, doloremque quidem.",
        animationDuration: "12000ms",
         studentName:'Ankita',
         subject:'Commerce'
    },
    {
        img: slider3,
        captionMedium: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit earum perspiciatis eaque molestiae aspernatur ea itaque reiciendis accusamus assumenda odio excepturi minima quisquam atque magni dolorem harum, doloremque quidem.",
        animationDuration: "12000ms",
         studentName:'Ankita',
         subject:'Mathematics'
    }
];

const StudentSection = () => {
    return (
        <section className='section_two mb-5' style={{ background: "white" }}>
            <div className="container">
                <h1 className='text-center pt-5 pb-5'>What Student Says?</h1>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: false }}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper:any) => console.log('Slide index changed to: ', swiper.activeIndex)}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="row">
                                <div className="col-md-6">
                                    <img
                                        src={slide.img}
                                        alt="img"
                                        className="kenburns kenburns-top img-fluid"
                                        style={{ animationDuration: slide.animationDuration }}
                                    />
                                </div>
                                <div className="col-md-6 d-flex flex-column mt-4">
                                    <div className="mb-3">
                                        <FaStar color="#0060FF"/><FaStar color="#0060FF" /><FaStar color="#0060FF"/><FaStar color="#0060FF"/><CiStar color="#0060FF"/>
                                    </div>
                                    <p className="captionMedium mb-5">{slide.captionMedium}</p>
                                    <h5 className="mt-5">{slide.studentName}</h5>
                                    <p style={{color:'#17161cb3'}}>Student, {slide.subject}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <BackTop/>
        </section>
    );
};

export default StudentSection;
