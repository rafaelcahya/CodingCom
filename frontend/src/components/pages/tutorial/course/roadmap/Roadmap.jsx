import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';
import "../../../../../../node_modules/swiper/swiper.min.css"

import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import RoadmapComp from './RoadmapComp'

import frontend from "../../../../../asset/photo/Roadmap/frontend.png"
import backend from "../../../../../asset/photo/Roadmap/backend.png"
import devops from "../../../../../asset/photo/Roadmap/devops.png"
import react from "../../../../../asset/photo/Roadmap/react.png"

SwiperCore.use([Navigation]);
export class Roadmap extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/> 
                <Swiper
                slidesPerView={1}
                loop= "true"
                navigation= {{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                style={{zIndex: "-10"}}
                    >
                    <div className="swiper-button-prev swiper-button-prev-container p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left "><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </div>
                    <SwiperSlide>
                        <RoadmapComp
                            header="Frontend Development Roadmap"
                            image={frontend}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RoadmapComp
                            header="Backend Development Roadmap"
                            image={backend}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RoadmapComp
                            header="DevOps Roadmap"
                            image={devops}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RoadmapComp
                            header="Javascript Library React Roadmap"
                            image={react}
                        />
                    </SwiperSlide>
                    <div className="swiper-button-next swiper-button-next-container p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right "><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                </Swiper>
            </>
        )
    }
}

export default Roadmap
