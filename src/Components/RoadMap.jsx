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
                                                        </div>
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
