import React from 'react'
import aboutBnr from "../Images/about-img.png"
import "../Style/about.css"

export default function About() {
       return (
              <>
                     <div className="about">
                            <div className="container">
                                   <div className="about-left">
                                          <img src={aboutBnr} alt="about-banner" />
                                   </div>
                                   <div className="about-right">
                                          <h2><span>WELCOME TO</span> SPACE CADETS</h2>
                                          <p>Space Cadets is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function on the Ethereum blockchain. These space-fairing NFTs will initially be available for mint via our website and trade on Opensea. With more than 350 hand drawn traits, each unique NFT is the key to unlock an incredible community, astronomical utility, and cosmic events.</p>
                                   </div>
                            </div>
                     </div>
              </>
       )
}
