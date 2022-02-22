import React from 'react'
import "../Style/Comunity.css"
import BgFormImg from "../Images/BgFormImg.png"

export default function Comunity() {
       return (
              <>
                     <div className="comunity">
                            <div className="comunityContainer">
                                   <div className="comunity-box">
                                          <div className="comunity-box-container">
                                                 <h2 className='comunityHeading'>
                                                        Join the
                                                        <span>comunity</span>
                                                 </h2>
                                          </div>
                                   </div>
                            </div>
                            <img src={BgFormImg} className="BgFormImg" alt="form-bg-image" />
                     </div>
              </>
       )
}
