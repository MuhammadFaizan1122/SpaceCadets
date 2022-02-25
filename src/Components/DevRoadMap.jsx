import React from 'react'
import "../Style/devRoadmap.css"
import galaxyImg from "../Images/galaxyLines.png"
import DevRoadmapImage from "../Images/developmentRoadmap.png"



export default function DevRoadMap() {
       return (
              <>
                     <div className='DevRoadmap'>
                            <div className="devContainer">
                                   <h2 className='devHeading'>
                                          development <span>roadmap</span>
                                   </h2>
                                   <div className="devWrapper">
                                          <div className="devLeft">
                                                 <div className="devItem">
                                                        <h4 className='devCoHeading'>daily income</h4>
                                                        <p className="devCoText">The 2% reflection will use the initial gas fee from the buyer/seller to distribute that 2% evenly among all Space Cadets holders, This will see holders see their ETH increase each time a Cadet is sold.
                                                        </p>
                                                 </div>
                                                 <div className="devSecItem">
                                                        <h4 className='devSecCoHeading'>THE SUPERNOVA CONCERT</h4>
                                                        <p className="devSecCoText">We are working on a metaverse concert with our team member, R3LL. R3LL who has played at Cochella and other major festivals will be collaborating with other major DJs around the world for a metaverse party for the ages.
                                                        </p>
                                                 </div>
                                                 <div className="devItem">
                                                        <h4 className='devCoHeading'>HUGE COLLABS</h4>
                                                        <p className="devCoText">We will set up partnerships with other projects, artists and key opinion leaders. You will get the chance to be part of the creative process behind these future collaborations.


                                                        </p>
                                                 </div>
                                                 <div className="devSecItem">
                                                        <h4 className='devSecCoHeading'>COSMIC CRAWLS</h4>
                                                        <p className="devSecCoText">The most active members of our community will be invited to private parties held in world famous cities. Los Angeles, Miami, London, Amsterdam, and Dubai are all being planned.

                                                        </p>
                                                 </div>
                                                 <div className="devItem">
                                                        <h4 className='devCoHeading'>BREEDING</h4>
                                                        <p className="devCoText">In our upcoming collection, Space Aliens, Space Cadets will be able to breed with the Space Aliens, creating an ultra rare Space Baby.


                                                        </p>
                                                 </div>
                                                 <div className="devSecItem">
                                                        <h4 className='devSecCoHeading'>GLOBAL BILLBOARD</h4>
                                                        <p className="devSecCoText">We will be launching a massive Billboard campaign is every continent (Minus Antarctica of course, we heard penguins don't boy NFT's)


                                                        </p>
                                                 </div>
                                                 <div className="devItem">
                                                        <h4 className='devCoHeading'>TRAIT UTILITY</h4>
                                                        <p className="devCoText">We have selected traits that will give incredible utility and unmatched prizes to select NFTs in our collection for our holders. We have over 50 traits out of 350 that are connected to prizes like Cruises, Rolexes, Super car rentals, Helicopter ride, and much more!


                                                        </p>
                                                 </div>
                                                 <div className="devSecItem">
                                                        <h4 className='devSecCoHeading'>galactic store</h4>
                                                        <p className="devSecCoText">We are launching our own merchandise storefront called The Galactic Grocery Store! Cone to the Local Space Post and fuel up with all the supplies you will need for interplanetary travel!</p>
                                                 </div>
                                          </div>
                                          <div className="devRight">
                                                 <img src={DevRoadmapImage} alt="development-roadmap-space-cadets" />
                                          </div>
                                   </div>
                            </div>
                            <img src={galaxyImg} className="galaxyImage" alt="galaxy-image-space-cadets" />
                     </div>
              </>
       )
}
