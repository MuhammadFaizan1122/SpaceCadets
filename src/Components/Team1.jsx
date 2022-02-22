import React from 'react'
import BgTeam from "../Images/bg-team.png"
import "../Style/Teams.css"
import member1 from "../Images/team1Img.png"
import member2 from "../Images/team2Img.png"
import member3 from "../Images/team3Img.png"


export default function Team1() {
       return (
              <>
                     <div className="team1">
                            <div className="team1Container">
                                   <div className="sectionTop">
                                          <h2 className='team1Heading'>
                                                 The <span className='teamSpan'>Team</span>
                                          </h2>
                                          <p className='team1Text'>
                                                 Space Cadets was created by a devoted and passionate team of digital
                                                 <br />
                                                 pioneers. With an all-star
                                                 <span className='teamtextSpan'>
                                                        team of entrepreneurs, blockchain experts,
                                                        <br />
                                                        marketing specialists, and a "Looney" Artist
                                                 </span>
                                                 , we are committed to
                                                 <br />
                                                 delivering a cutting-edge project and making this collection a household
                                                 <br />
                                                 name in the NFT space.
                                          </p>
                                   </div>
                                   <div className="member-wrap2">
                                          <div className="member">
                                                 <img src={member1} className='memberImg' alt="member-image" />
                                                 <h4 className='Teamh4'>STARLORD</h4>
                                                 <p className='teamComember'>FOUNDER/BLOCKCHAIN EXPERT</p>
                                          </div>
                                          <div className="member">
                                                 <img src={member2} className='memberImg' alt="member-image" />
                                                 <h4 className='Teamh4'>LOONEY MASCOT</h4>
                                                 <p className='teamComember'>
                                                        LEAD DESIGNER/ARTIST
                                                 </p>
                                          </div>
                                          <div className="member">
                                                 <img src={member3} className='memberImg' alt="member-image" />
                                                 <h4 className='Teamh4'>TITAN 6</h4>
                                                 <p className='teamComember'>
                                                        MARKETING MANAGEMENT
                                                 </p>
                                          </div>
                                   </div>
                            </div>
                            <img src={BgTeam} alt="" className='BgTeam' />
                     </div>
              </>
       )
}