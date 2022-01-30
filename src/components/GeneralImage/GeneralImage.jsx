import React, {useEffect} from 'react';
import './style.scss'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const GeneralImage = () => {
    useEffect(() => {
        const gTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.gen-img',
                start: 'top center+=20%',
                toggleActions: 'play reset restart reverse',
            }
        })

        gTl
        .from('.gen-img .text h3', {opacity: 0,scale: 1.2})
        .from('.gen-img .text p', {opacity: 0, y: 50, stagger: 0.3});

        const changeColor = () => {
            document.querySelector('header').classList.add('purple');     
            gsap.to('.pillars', {background:'#4C0027'})
            gsap.to('.gen-img', {background:'#4C0027'})
        }

        const resetAll = () => {
    
                document.querySelector('header').classList.remove('purple');
                gsap.to('.pillars',{background:'initial'});
                gsap.to('.gen-img',{background:'initial'});
        }

         
        ScrollTrigger.create({
            trigger: '.gen-img',
            start: 'top center+=20%',
            end: 'bottom center',   
            onEnter: () => {changeColor() },
            onLeaveBack: () => resetAll()
            
        })

     

        

    
    },[])


    return(
        <>
            <section className="gen-img">
                <div className="container">


                    <div className="wrap">
                        <div className="text">
                            <h3>Researched at the grassroots level about the political awareness</h3>
                            <p>
                            The team visited Mahottari district, explored all 10 municipalities, and researched at the grassroots level about the political awareness, local governance, and the overall system of the district. 
                            </p>
                        </div>

                        <div className="img">
                            <figure>
                                <img src="./images/roundtable.jpg" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default GeneralImage;