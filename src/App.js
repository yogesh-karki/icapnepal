import {useState, useEffect, useRef} from 'react'




import Registered from './components/Banner/Registered';
import NotRegistered from './components/Banner/NotRegistered';
import Introduction from './components/Intro/Introduction';
import GeneralImage from './components/GeneralImage/GeneralImage';
import {VoterBox} from './components/illustration/banner';
import Header from './components/Header/Header';


import './Main.scss';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Pillars from './components/Pillars/Pillars';
import NewsSlider from './components/News/NewsSlider';
import Quiz from './components/Quiz/Quiz';
import Footer from './components/Footer/Footer';


gsap.registerPlugin(ScrollTrigger); 


function App() {

  const BannerSvg = (props) => {
    return(
        <svg className={props.name} >
          
          <path  d="M106.6,5.8L2.3,5.5l-0.2,68l104.3,0.2c82.2,0.2,150,66.7,149.8,150.5L256,328.5l68,0.2l0.2-104.3
          C324.5,104.3,226.7,6.1,106.6,5.8z"/>
        </svg>
    )
  }



  const [enterSite, setEnterSite] = useState(false)
  const [register, setRegister] = useState(false)
  const[notRegister, setNotRegister] = useState(false)

  const btnYes = useRef()
  const btnNo = useRef()

    useEffect(()=> {
      const bannerBtns = document.querySelectorAll('.voteBtn button')
      const bannerQsn = document.querySelector('#bannerqsn')


      bannerBtns.forEach(btn => {
        btn.addEventListener('click', ()=> {
         
          setEnterSite(true)
          document.querySelector('.questionBanner').classList.add('indexed')
          tl.play()


          if(btn.id === "yes") {
            setRegister(true)
      
          } else {
            setNotRegister(true)
          }
        })
      });

      
        let tl = gsap.timeline()
        
        tl.to('.qsn h2', {
          y: -50,
          opacity: 0,
          
        })

        .to('.voteBtn button', {
          y: -50,
          opacity: 0,
          
        }, [-1])

        .to('.vote', {
          y: -50,
          opacity: 0,
        })

        .to('.logo', {
          y: -50,
          opacity: 0,
        })

        .to(bannerQsn, {
          scale: 3,
          duration: 1,
          // onComplete:function() {
          //   document.querySelector('.questionBanner').remove();
          // }
        },"<")

  
        tl.pause()

      
     



    })





  return (
    <>
      <section className="questionBanner">
          <div className="wrap" id="bannerqsn">
              <div className="logo">
                  <img src='./logo-white.svg' alt="" />
              </div>

              <div className="qsn">
                <h2><span>Did you Register</span> to vote ? </h2>
              </div>

          </div>

          <div className="vote">        
            <VoterBox />
          </div>

          <div className="voteBtn">
            <button id="yes" ref={btnYes}>Yes, Already</button>
            <button id="no" ref={btnNo}>Not, yet</button>
          </div>

          <div className="bg-loop">
            <BannerSvg name="bottomLeft" />
            <BannerSvg name="bottomRight" />
            <BannerSvg name="topRight" />
            <BannerSvg name="topLeft" />

          </div>
      </section>

      <section className='sec-banner'>

        {
          register ? <Registered /> : ''
        }

        {
          notRegister ? <NotRegistered /> : ''
        }
      
      </section>
      
      {
        enterSite ? 
         <>
          <Header />
          <Introduction />
          <Pillars />
          <GeneralImage /> 
          <NewsSlider />
          <Quiz />
          <Footer />
        
         </>
          
        : ''
      }
    </>
  );
}

export default App;
