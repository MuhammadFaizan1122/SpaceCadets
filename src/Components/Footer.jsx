import React from 'react';
import FooterLogo from "../Images/SpaceCadets.svg";
import "../Style/Footer.css";
import { BsArrowRightShort } from "react-icons/bs";
import footerImg1 from "../Images/footerImg1.png";
import footerImg2 from "../Images/footerImg2.png";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";


export default function Footer() {
       return (
              <>
                     <div className="footer">
                            <div className="footerContainer">
                                   <a href="" className='logoA'>
                                          <img src={FooterLogo} className='footerLogo' alt="" />
                                   </a>
                                   <form action="">
                                          <input type="text" placeholder='Enter your email' className='formEmail' />
                                          <button className='arrowBtn' >
                                                 <BsArrowRightShort className='arrowIcon' />
                                          </button>
                                   </form>
                                   <div className="social-links">
                                          <a href=""><FaGithubSquare style={{ background: "transparent" }} /></a>
                                          <a href=""><AiOutlineTwitter style={{ background: "transparent" }} /></a>
                                   </div>
                                   <p>
                                          © 2022 <span>SPACE CADETS</span> - ALL RIGHTS RESERVED
                                   </p>
                            </div>
                            <img src={footerImg1} className="fImage1" alt="footer-image-1" />
                            <img src={footerImg2} className="fImage2" alt="footer-image-2" />
                     </div>
              </>
       )
}