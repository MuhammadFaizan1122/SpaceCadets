import React from 'react'
import "../Style/Slider.css"
import PresaleBanner from "../Images/mint-img-1.png"
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';


export default function MintSpaceCadet() {
       return (
              <>
                     <div className="mintSpaceCadet">
                            <div className="mintHeading">
                                   <h2><span>Mint Your</span> <br /> Space Cadets</h2>
                            </div>
                            <div className="mintCount">
                                   <div className="counterBnr">
                                          <img src={PresaleBanner} className="banner1" alt=" mint-on-presale" />
                                          <div className="mint-box">
                                                 <div className="mint-box-left">
                                                        <div className="quantity-box">
                                                               <button className='leftBtn'>
                                                                      <AiFillMinusCircle className='decrease' />
                                                               </button>
                                                               <span>1</span>
                                                               <button className='rightBtn'>
                                                                      <AiFillPlusCircle className='increase' />
                                                               </button>
                                                        </div>
                                                        <p>MAX YOU CAN MINT ON PRESALE IS <span>3</span></p>
                                                 </div>
                                                 <div className="mint-box-right">
                                                        <button>
                                                               <span>coming soon</span>
                                                        </button>
                                                        <p>YOU'RE ABOUT TO MINT 1 SPACE CADETS FOR <br />
                                                               <span>0.07 ETH</span> + GAS FEE</p>
                                                 </div>

                                          </div>
                                   </div>
                            </div>
                     </div>
              </>
       )
}
