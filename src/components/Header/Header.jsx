import React, {useEffect} from 'react';
import './header.scss'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MainLogo from '../Logo/MainLogo';

gsap.registerPlugin(ScrollTrigger); 

const Header = () => {
  useEffect(() => {
  

      gsap.fromTo('.logo img', {
        opacity: 0,
        yPercent: -100,
      }, {
        opacity: 1,
        yPercent: 0,
        delay: 2,
        
      })

      gsap.fromTo('.navs li', {
        opacity: 0,
        yPercent: -100,
      }, {
        opacity: 1,
        stagger: 0.1,
        yPercent: 0,
        delay: 2,
        
      })

      const isSticky = (e) => {
        const header = document.querySelector('header')
        const scrollTop = window.scrollY;
        scrollTop >= 50 ? header.classList.add('sticky') : header.classList.remove('sticky')
      }

      window.addEventListener('scroll', isSticky)
 
      
  })  

return <>
    <header>
      <div className="container">
        <div className="wrap">
          <div className="logo">
            <MainLogo />

          </div>

          <div className="navs">
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Our Four Pillars</a></li>
              <li><a href="">Programs</a> </li>
              <li><a href="">Events</a></li>
              <li> <a href="">News & Publication</a></li>
              <li><a href="">Downloads</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </>;
};

export default Header;
