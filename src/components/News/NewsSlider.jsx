import React,{useEffect} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


import 'swiper/css';
import "swiper/css/pagination"
import './news.scss'

import SwiperCore, {
    Pagination
  } from 'swiper';

  SwiperCore.use([Pagination]);



gsap.registerPlugin(ScrollTrigger); 


const NewsSlider = () => {

    useEffect(() => {
        const gTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.news_slides',
                start: 'top center',
                toggleActions: 'play reset restart reverse',
            }
        })

        gTl
        .from('.news_slides h3', {opacity: 0,scale: 1.2})
        .from('.news_slides p', {opacity: 0, y: 50, stagger: 0.3});

        const anim = gsap.timeline();

        anim.to('.gen-img', {background: "#fff"})
          
        ScrollTrigger.create({
            trigger: '.news_slides',
            start: 'top bottom',
            animation: anim,
            duration: 0.8,
            end: 'bottom center',
            toggleActions: 'play reset restart reverse',
            onLeaveBack: () => {
                gsap.to('.gen-img', {background: "#4C0027"})
                document.querySelector('header').classList.add('purple');
            },
            onEnter: () => {
                document.querySelector('header').classList.remove('purple');
            }
        })

    },[])
    const newsData = [
        {
            title: 'Round Table Discussion on Preparation for Local Election 2022',
            img: './images/round.jpg',

        },
        {
            title: 'Province Filed Visit for Research on Local Governance',
            img: './images/prov2.jpg',

        },
        {
            title: 'The voters turnout ratio measures the percentage of eligible voters that took part in an election.',
            img: './images/272520147_145472584547012_8352836754552840356_n.jpg',

        },
        {
            title: 'Employment Enterpreneurship and Innovation',
            img: './images/272300599_145168331244104_3668148888417031791_n.jpg',

        },
        {
            title: 'Round Table Discussion on Preparation for Local Election 2022',
            img: './images/round.jpg',

        },
        {
            title: 'Province Filed Visit for Research on Local Governance',
            img: './images/prov2.jpg',

        },
        {
            title: 'The voters turnout ratio measures the percentage of eligible voters that took part in an election.',
            img: './images/272520147_145472584547012_8352836754552840356_n.jpg',

        },
        {
            title: 'Employment Enterpreneurship and Innovation',
            img: './images/272300599_145168331244104_3668148888417031791_n.jpg',

        },
    ]

    return(
        <>
            <section className="news_slides">
                <div className="container">
                    <div className="news_head">
                        <h3>News & Updates</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere veritatis ratione? Doloribus repellat tempore perspiciatis tempora saepe dolor, aperiam adipisci numquam ea voluptate incidunt
                        </p>
                    </div>
                </div>

                <div className="contain">
                <Swiper
                    spaceBetween={40}
                 
                    className='news_slider'
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        }}
                    >
                        {
                            newsData.map((val,index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <div className="item">
                                            <img src={val.img} alt="" />

                                            <p>{val.title} </p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }


                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default NewsSlider