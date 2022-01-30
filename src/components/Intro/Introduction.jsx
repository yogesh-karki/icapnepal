import React, { useEffect } from 'react'
import Logo from '../Logo/Logo'
import './Intro.scss'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const Introduction = () => {
    useEffect(()=> {
        const svg = document.querySelector('.bg svg')
 

        let rotate = gsap.timeline({
            scrollTrigger: {
                trigger: 'html',
                scrub: true,
                start: 'top top',
                end: 'bottom bottom'
            }
        }).to(svg, {
            rotation: 180* 2,
            duration: 3,
            ease: "none"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".title",
                start: "top center+=20%",
                toggleActions: 'play reset restart reverse',
            }
        });

  

        tl.fromTo('.title h3', {
            opacity: 0,
            scaleX: 1.2
        },{
            opacity: 1,
            scaleX: 1
        });


    })

    useEffect(()=> {
        gsap.to('.introText', {
            backgroundColor: '#fff',
            duration: 0.6,
            scrollTrigger: {
                trigger: '.introText',
                start: 'top-=10% center',
                toggleActions: 'play reset restart reverse',
                onEnter: () => {
                    document.querySelector('header').classList.add('white')
                },
                onLeaveBack: () => {
                    document.querySelector('header').classList.remove('white')
                },

             
            }
        })

        gsap.from('.desc h6', {
            opacity: 0,
            y: 50,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.desc',
                start: "top center+=20%",
                toggleActions: 'play reset restart reverse',
            }
        })


       
       
    },[])

    

    return (
       <section className='introText'>
           <div className="container">
                <div className="wrap">
                    <div className="title">
                        <h3>Dedicated to advancing the essence of democracy through Education, Awareness & Advocacy</h3>
                    </div>

                    <div className="desc">
                        <h6>A not-for-profit, non-partisan organization dedicated to advancing the essence of democracy through education, awareness, and advocacy at multiple levels. iCAP is an initiative to bridge the gap between citizens and government in a federal Nepal that demands active people’s participation and systemic efficiency for its success.</h6>

                        <h6>In alignment with strengthening federalism in Nepal, we work to enable active citizens' engagement and enhance the capacity of stakeholders in the political sphere. iCAP believes in the power of people and policy and hence moves its way towards reformation through a bottom-up approach.</h6>
                    </div>
                </div>
           </div>

           <div className="bg">
            <Logo />
           </div>
       </section>
    )
}

export default Introduction
