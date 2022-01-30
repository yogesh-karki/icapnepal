import React, {useEffect} from 'react';
import './quiz.scss'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const Quiz = () => {
    useEffect(() => {
        let quizTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.quiz_banner',
                start: 'top center+=40%',
                toggleActions: 'play reset restart none',
            }
        });

        quizTl
            .from('.quiz_banner img', {scale: 0.8,duration: 0.8,})
            .from('.quiz_banner .text h3', {opacity: 0,scale: 1.2})
     
    },[])

    return(
        <>
            <section className='quiz_banner'>
                <div className="container">
                    <figure>
                        <img src="./images/quiz.svg" alt="" />
                    </figure>

                    <div className="text">
                        <h3>How well do you know about Nepal ?</h3>

                        <button>Play Quiz</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Quiz