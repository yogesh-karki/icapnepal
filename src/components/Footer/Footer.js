import React from 'react';
import Logo from '../Logo/Logo';
import './footer.scss'

const Footer = () => {
    return(
        <>
            <footer>
                <div className="container">
                    <div className="wrap">
                        <div className="footer_logo">
                           
                                <Logo />
                              
                        </div>

                        <div className="address">
                            <p>House No. 260, Lamingtan / Sheetal Marg, Baluwatar</p>
                            <p>P.O. Box: 11772, Kathmandu, Nepal</p>
                            <p>+977-1-4420784 / 01-4440085</p>

                            <a href="">info@icapnepal.org</a>
                        </div>
                    </div>

                    <div className="rights">
                        <p>© 2021 iCAP Nepal. All Rights Reserved. Powered by Hue Shine</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer