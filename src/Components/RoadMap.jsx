import React from 'react'
import "../Style/RoadMap.css"
import BgRoadMap from "../Images/roadmapBg.png"
import RoadmapImage from "../Images/roadmapImage.png"
import planet1 from "../Images/planet-1.png"
import planet2 from "../Images/planet-2.png"
import planet3 from "../Images/planet-3.png"
import planet4 from "../Images/planet-4.png"
import planet5 from "../Images/planet-5.png"
import planet6 from "../Images/planet-6.png"



export default function RoadMap() {
       return (
              <>
                     <div className="roadMap">
                            <div className="roadMapContainer">
                                   <h2 className='roadMapHead'>
                                          LAUNCH <span>ROADMAP</span>
                                   </h2>
                                   <div className="launch-roadmap-wrapper">
                                          <div className="raodmapLeft">
                                                 <img src={RoadmapImage} className='roadmapImg' alt="roadmap-image" />
                                          </div>
                                          <div className="raodmapRight">
                                                 <div className="roadmap-row-1">
                                                        <div className="row-left">
                                                               <img src={planet1} className="row-1-img" alt="" />
                                                               <h4>10%</h4>
                                                        </div>
                                                        <p className="planetText">
                                                               A Space Cadet will be selected at random to win a custom wrapped Tesla Model 3. Cadets #0020 - #1000 will be eligible to win. First 10% is allocated for whitelist for 24 hours.
                                                        </p>
                                                 </div>
                                                 <div className="roadmap-row-2">
                                                        <div className="row-left">
                                                               <img src={planet2} className="row-1-img" alt="" />
                                                               <h4>15%</h4>
                                                        </div>
                                                        <p className="planetText">
                                                               Meme Contest will start on discord, community members will provide their best Space Cadets related meme's for a chance of winning 1ETH.

                                                        </p>
                                                 </div>
                                                 <div className="roadmap-row-3">
                                                        <div className="row-left">
                                                               <img src={planet3} className="row-1-img" alt="" />
                                                               <h4>40%</h4>
                                                        </div>
                                                        <p className="planetText">
                                                               2 Space Cadets will be picked to win a 1/1 Space Cadets NFT Cadets #1001 - #4000 will be eligible.

                                                        </p>
                                                 </div>
                                                 <div className="roadmap-row-4">
                                                        <div className="row-left">
                                                               <img src={planet4} className="row-1-img" alt="" />
                                                               <h4>60%</h4>
                                                        </div>
                                                        <p className="planetText">
                                                               • As Cadets. we are dedicated to giving back to the galaxy and beyond. For that reason, $25,000 will be given to a reputable charity picked by the community during a vote on Discord.
                                                               • First round of clues will be released for the Super Nova Riddle.</p>
                                                 </div>
                                                 <div className="roadmap-row-5">
                                                        <div className="row-left">
                                                               <img src={planet5} className="row-1-img" alt="" />
                                                               <h4>80%</h4>
                                                        </div>
                                                        <p className="planetText">
                                                               • 1 Space Cadet will be picked at random to win a 1/1 Space Cadets NFT and 2 ETH. Space Cadets #4000 - #6000 will be eligible.
                                                               • A Random Space Cadet will be airdropped to 10 lucky minters.</p>
                                                 </div>
                                                 <div className="roadmap-row-6">
                                                        <div className="row-left">
                                                               <img src={planet6} className="row-1-img" alt="" />
                                                               <h4>100%</h4>
                                                        </div>
                                                        <p className="planetText">
                                                               • 5 Space Cadets will be picked at random to win 1 ETH each. Cadets #0011 - #10000 will be eligible.
                                                               • Verified holders channels will be opened! Cadet Canteen: Verified holders chat & ISS Centurion: Whales chat
                                                               • Upon selling out the team members will all get community voted on Space Cadet tattoos!</p>
                                                 </div>
                                                 <div className="roadmap-line"></div>
                                          </div>
                                   </div>
                            </div>
                            <img src={BgRoadMap} className="BgRoadmapImg" alt="form-bg-image" />

                     </div>
              </>
       )
}
