import React from 'react'
import "../Style/Comunity.css"
import Jupyter from "../Images/jupyter.png"

export default function Comunity() {
       return (
              <>
                     <div className="comunity">
                            <div className="comunityContainer">
                                   <div className="comunity-box">
                                          <div className="comunity-box-container">
                                                 <h2 className='comunityHeading'>
                                                        Join the
                                                        <span> comunity</span>
                                                 </h2>
                                                 <p className='comunityText'>
                                                        Join our forever growing and engaging community and join
                                                        us Space Cadets on our extremely rewarding interplanetary
                                                        expedition through time and space.
                                                 </p>
                                                 <div className="div-wrapper">
                                                        <a href="https://discord.com/" target="_blank" style={{ background: "transparent" }}>
                                                               <button className='divBtn'>
                                                                      <span>join discord</span>
                                                               </button>
                                                        </a>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            {/* <img src={Jupyter} className="jupyter" alt="jupyters-bg-image" /> */}
                     </div>
              </>
       )
}
