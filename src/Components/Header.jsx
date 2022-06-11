import React, { useState } from 'react'
import SpaceCadetLogo from "../Images/Logo.png"
import ConnectBtn from "../Images/connect-wallet-btn.svg"
import { RiMenu3Fill } from 'react-icons/ri';
import "../Style/Header.css"

export default function Header() {
       const connectWallet = () => {
              alert("Minting Coming Soon!")
       }


       return (
              <>
                     <div className='HeaderContainer' >
                            <div className="logoContainer">
                                   <a href="/" style={{ background: "transparent" }}>
                                          <img src={SpaceCadetLogo} className="siteLogo" alt="space cadet nft" />
                                   </a>
                                   <h3 className='LogoText'>CLAY FRIENDS</h3>
                            </div>
                            <div className="MenuContainer">
                                   <ul>
                                          {/* <li className='menuItems firstItem'>Story</li>npm start */}
                                          {/* <li className='menuItems'>collabs</li>npm start */}
                                          {/* <li className='menuItems'>team</li>npm start */}
                                          {/* <li className='menuItems'>roadmap</li>npm start */}
                                          <RiMenu3Fill className='HambugerIcon' />
                                          <img src={ConnectBtn} className="ConnectBtn" alt="connect-wallet-btn" onClick={connectWallet} />
                                   </ul>
                            </div>
                     </div>
              </>
       )
}
// CgMenuRight