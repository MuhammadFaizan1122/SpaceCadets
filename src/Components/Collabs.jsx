import React from 'react'
import Bg6 from "../Images/bg-element-6.png"
import "../Style/collabs.css"
import member1 from "../Images/collabs-img-1.png"
import member2 from "../Images/collabs-img-2.png"
import member3 from "../Images/collabs-img-3.png"


export default function Collabs() {
       return (
              <>
                     <div className="Collabs">
                            <div className="CollabsContainer">
                                   <div className="topSection">
                                          <h2 className='CollabsSecHead'>
                                                 Collabs
                                          </h2>
                                          <p className='collabsText'>
                                                 <span>Space Cadets has collaborated with multiple projects </span>
                                                 both in and outside
                                                 <br />
                                                 of the NFT space
                                                 <span>
                                                        . With each collaboration, we create two unique traits <br />
                                                        for our collection as well as a 1/1 NFT
                                                 </span>
                                                 . These collaborations not only allow <br />
                                                 for joint exposure but also to bring communities together.
                                          </p>
                                   </div>
                                   <div className="member-wrap">
                                          <div className="member">
                                                 <img src={member1} className='memberImg' alt="member-image" />
                                                 <h4>SYSCOIN</h4>
                                          </div>
                                          <div className="member">
                                                 <img src={member2} className='memberImg' alt="member-image" />
                                                 <h4>METRIX</h4>
                                          </div>
                                          <div className="member">
                                                 <img src={member3} className='memberImg' alt="member-image" />
                                                 <h4>THE PROJECT</h4>
                                          </div>
                                   </div>
                            </div>
                            <img src={Bg6} alt="" className='bg6' />
                     </div>
              </>
       )
}