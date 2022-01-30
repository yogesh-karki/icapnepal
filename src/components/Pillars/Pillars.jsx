import React,{useEffect} from 'react';
import './styles.scss'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Logo from '../Logo/Logo';

gsap.registerPlugin(ScrollTrigger); 

const Pillars = () => {
  const data = [
    {
      background: '#2d7e86',
      title: 'Electoral Support Program',
      subtitle: 'Helps build the capacity of our electoral institutions',
      text: 'Strengthening our electoral institutions is crucial to advancing the country’s long-term political stability'
    },
    {
      background: '#108853',
      title: 'Political Party Support Program',
      subtitle: 'Works to design a Training of Trainers program',
      text: 'By doing this, iCAP methodology aims to make the training program sustainable in the long run.'
    },
    {
      background: '#501d30',
      title: 'Citizen Support Program',
      subtitle: 'Bring potential youths together for change',
      text: 'Raise their voice as well as take an affirmative action for all their concerns regarding civic rights'
    },
    {
      background: '#f0603a',
      title: 'Parliamentarians Support Program',
      subtitle: 'Capacity-building engagements, trips and workshops',
      text: 'Capacity-building engagements,  trips and workshops for members of federal parliament'
    }
  ]



  const CardButton = () => {
    return(
      <div className='cardBtn'>
          Read More
      </div>
    )
  }

  useEffect(()=> {
    let cards = document.querySelectorAll('.pcard');

    gsap.fromTo('.pcard', {
      scale: 1.05,
      opacity: 0,    
    },{
      scale: 1,
      opacity: 1,
      duration: 0.4,
      stagger: 0.2,
      ease: 'none',
      scrollTrigger: {
        trigger: '.pillars',
        start: 'top center+=20%',
        toggleActions: 'play reset restart none',
      }
    })

    cards.forEach((card) => {
      let offset = card.getBoundingClientRect();

      let cardTl = gsap.timeline({
        delay: 1.5,
        scrollTrigger: {
          trigger: '.pillars',
          start: 'top center+=20%',
          toggleActions: 'play reset restart none',
        }
      })

      let title = card.querySelector('h4')
      let paragraph = card.querySelector('p')

      cardTl.fromTo(title, { opacity: 0,scaleX: 1.2 },{ scaleX: 1,opacity: 1,})

      .fromTo(paragraph, { y: 20,opacity: 0 },{ opacity: 1, y: 0,duration: 0.8 })

      card.addEventListener('mouseenter', ()=> {
        let btn = card.querySelector('.cardBtn')
       
        gsap.to(btn,{
          duration:0,
          opacity: 1,
          ease: 'none',
          scale:1,
        })

        document.addEventListener('mousemove',(e)=> {


          let relativeX = (e.pageX - offset.left) - btn.clientWidth / 2
          let relativeY = ( e.pageY - offset.top) - btn.clientHeight / 2

          btn.style.transform = `translate3d(${relativeX}px, ${relativeY}px, 0)`

        })
      })

      card.addEventListener('mouseleave', (e)=> {
        let btn = card.querySelector('.cardBtn')
          gsap.to(btn, {
          scale: 0,
          opacity: 0,
          duration: 0,
          ease: "none"
           })
       
      })
    })
  },[])



  return <>
      <section className="pillars">
          <div className="container">
          

            <div className="wrap">
                {
                  data.map((val, index)=> {
                    return(
                      <div className="pcard" key={index} style={{ backgroundColor: `${val.background}` }}>
                        <div className="logo">
                          <Logo />
                        </div>

                        <div className="main-text">
                          <h4>{val.title}</h4>
                          <p>{val.subtitle}</p>
                        </div>

                        <div className="foot">
                          <span>0{index+1}</span>
                          <p>{val.text}</p>
                        </div>
                        <CardButton />
                      </div>
                    )
                  })
                }

            </div>
        </div>
      </section>

  </>;
};

export default Pillars;
