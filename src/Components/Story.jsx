import React from 'react'
import Bg5 from "../Images/bgimage.png"
import "../Style/Story.css"
import storyImg1 from "../Images/story-img-1.png"
import storyImg2 from "../Images/story-img-2.png"
import storyImg3 from "../Images/story-img-3.png"


export default function Story() {
       return (
              <>
                     <div className="story">
                            <div className="container">
                                   <h2 className='storySecHead'>
                                          SPACE CADETS <span className='storySpan'>STORY</span>
                                   </h2><br />
                                   <div className="story-img">
                                          <img src={storyImg1} className="storyImgs" alt="storyImg1" />
                                          <img src={storyImg2} className="storyImgs" alt="storyImg2" />
                                          <img src={storyImg3} className="storyImgs" alt="storyImg3" />
                                   </div>
                            </div>
                            <img src={Bg5} alt="" className='bg5' />
                     </div>
              </>
       )
}
// bg-element-6