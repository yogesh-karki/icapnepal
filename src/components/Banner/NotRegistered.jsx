import React, {useEffect} from 'react'

import './Banner.scss'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const NotRegistered = () => {
    useEffect(()=> {
        gsap.fromTo('.banner-after', {
            opacity: 0,
            scale: 0,

        },{
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 1
          
        })

    
    })
    

    return (
        <>
            <section className="reg-banner">
                
                <div className='banner-after'></div>
                <div className='text'> 
                    Please Register to vote soon
                    Heres a video tutorial on how to register to vote

                    <br /> <br />

                    !!! Video !!!
                </div>
            </section>
            
           
        </>
    )


}

export default NotRegistered
