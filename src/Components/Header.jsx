import React from 'react'
import "../Style/Header.css"
import SpaceCadetLogo from "../Images/SpaceCadets.svg"
import ConnectBtn from "../Images/connect-wallet-btn.svg"

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
                                          {/* <img src="" alt="" /> */}
                                          <img src={ConnectBtn} className="ConnectBtn" alt="connect-wallet-btn" onClick={connectWallet} />
                                          {/* <button className='headerBtn'>connect wallet</button> */}
                                   </ul>
                            </div>
                     </div>
              </>
       )
}
