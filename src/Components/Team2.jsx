import React from 'react'
import BgTeam from "../Images/bgTeam2.png"
import "../Style/Teams.css"
import member1 from "../Images/team1.png"
import member2 from "../Images/team2.png"
import member3 from "../Images/team3.png"
import member4 from "../Images/team4.png"


export default function Team2() {
       return (
              <>
                     <div className="team2">
                            <div className="team2Container">
                                   <div className="sectionTop2">
                                          <h2 className='team2Heading'>
                                                 The <span className='teamSpan'>Team</span>
                                          </h2>
                                          <p className='team2Text'>
                                                 We have a
                                                 <span> team of committed and experienced moderators </span> from all
                                                 <br />
                                                 around the world that keep our
                                                 <span>discords fun, engaging, and informative. </span>
                                          </p>
                                   </div>
                                   <div className="member-wrapTeam">
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
                                          <div className="member">
                                                 <img src={member4} className='memberImg' alt="member-image" />
                                                 <h4 className='Teamh4'>TITAN 6</h4>
                                                 <p className='teamComember'>
                                                        MARKETING MANAGEMENT
                                                 </p>
                                          </div>
                                   </div>
                            </div>
                            <img src={BgTeam} alt="" className='BgTeam2' />
                     </div>
              </>
       )
}