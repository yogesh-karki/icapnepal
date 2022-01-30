import React, {useEffect} from 'react'

import './Banner.scss'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 


const Registered = () => {

    useEffect(()=> {
        const bTl = gsap.timeline()

        bTl.fromTo('.banner-after', {
            opacity: 0,
            scale: 0,

        },{
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 1
          
        })

        .fromTo('.text h2', {
            scale: 0.7,
            opacity: 0,
        },{
            opacity: 1,
            scale: 1,
            duration: 0.5,
        })

        .fromTo('.icon', {
            scale: 0.7,
            opacity: 0,
        },{
            opacity: 1,
            scale: 1,
            duration: 0.5,
        });


    })

    useEffect(()=> {
        gsap.to('.banner-after', {
            backgroundColor: '#fff',
            duration: 0.6,
            scrollTrigger: {
                trigger: '.introText',
                start: 'top-=10% center',
                toggleActions: 'play reset restart reverse',
            }
        })

        
    })

    

    return (
        <>
            <section className="reg-banner">
                
                <div className='banner-after'></div>

                <div className="wrap">
                    <div className='text'>
                        <h2>
                            <span>You are a </span>responsible citizen!
                        </h2>
                    </div>

                    <div className="icon">
                        <img src="./images/responsible.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Registered
