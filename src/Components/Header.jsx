import React, { useState } from 'react'
import SpaceCadetLogo from "../Images/SpaceCadets.svg"
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
                                   <img src={SpaceCadetLogo} className="siteLogo" alt="space cadet nft" />
                            </div>
                            <div className="MenuContainer">
                                   <ul>
                                          <li className='menuItems firstItem'>Story</li>
                                          <li className='menuItems'>collabs</li>
                                          <li className='menuItems'>team</li>
                                          <li className='menuItems'>roadmap</li>
                                          <RiMenu3Fill className='HambugerIcon' />
                                          <img src={ConnectBtn} className="ConnectBtn" alt="connect-wallet-btn" onClick={connectWallet} />
                                   </ul>
                            </div>
                     </div>
              </>
       )
}
// CgMenuRight